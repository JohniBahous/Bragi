import { useMutation } from "@tanstack/react-query";
import "../../../style/admin-panel/comparison.css";
import DashboardButton from "./DashboardButton";
import { uploadFileToS3 } from "../../../utils/s3Upload.js";
import useAudioStore from "../../../stores/useAudioStore.js";
import {
  updateArtistMutation,
  replaceArtistAndSongMutation,
} from "../../../queries/artists/mutations.js";
import { updateSongDataMutation } from "../../../queries/songs/mutations.js";
import { adminAuditMutation } from "../../../queries/admins/mutations.js";

const Comparison = ({
  source,
  modalStateSetter,
  selectedId,
  oldData,
  newData,
}) => {
  const { loggedinAdmin, loggedinAdminUuid } = useAudioStore();

  const updateSongData = useMutation(updateSongDataMutation());
  const updateArtist = useMutation(updateArtistMutation());
  const replaceArtistAndSong = useMutation(replaceArtistAndSongMutation());
  const adminAudit = useMutation(adminAuditMutation());

  const diffObjects = (oldData, newData) => {
    const artistChanges = {};
    const songChanges = {};
    Object.keys({
      ...newData.alteredSongData.songData,
      ...newData.alteredArtistData.artistData,
    }).forEach((key) => {
      if (
        oldData.song?.[key] !== undefined &&
        oldData.song[key] !== newData.alteredSongData.songData[key]
      ) {
        songChanges[key] = {
          oldData: oldData.song[key],
          newData: newData.alteredSongData.songData[key],
        };
      }

      if (
        oldData.artist?.[key] !== undefined &&
        oldData.artist[key] !== newData.alteredArtistData.artistData[key]
      ) {
        artistChanges[key] = {
          oldData: oldData.artist[key],
          newData: newData.alteredArtistData.artistData[key],
        };
      }
    });

    return { artistChanges, songChanges };
  };

  const combinedData = diffObjects(oldData, newData);
  const handleConfirm = async () => {
    if (source == "update") {
      updateSongData.mutate({
        uuid: selectedId[1],
        body: newData.alteredSongData.songData,
      });
      updateArtist.mutate({
        uuid: selectedId[0],
        body: newData.alteredArtistData.artistData,
      });
      newData.songFile
        ? await uploadFileToS3(newData.alteredSongData.songFile, "song")
        : null;
      newData.snippetFile
        ? await uploadFileToS3(newData.alteredSongData.snippetFile, "snippet")
        : null;
      newData.portraitFile
        ? await uploadFileToS3(
            newData.alteredArtistData.portraitFile,
            "portrait",
          )
        : null;
      modalStateSetter(false);
      adminAudit.mutate({
        uuid: loggedinAdminUuid,
        name: loggedinAdmin,
        action: "Updated data",
      });
    } else if (source == "replace") {
      const payload = {
        songData: newData.alteredSongData.songData,
        artistData: newData.alteredArtistData.artistData,
        filesData: {
          full: newData.alteredSongData.songFile.name,
          snippet: newData.alteredSongData.snippetFile.name,
          portrait: newData.alteredArtistData.portraitFile.name,
        },
      };
      replaceArtistAndSong.mutate({ uuid: selectedId[0], body: payload });
      adminAudit.mutate({
        uuid: loggedinAdminUuid,
        name: loggedinAdmin,
        action: "Replaced data",
      });
    }
  };

  return (
    <div className="comparison-parent">
      <div className="comparison-container">
        <span className="comparison-content-title">
          THE FOLLOWING VALUES HAVE BEEN ALTERED:{" "}
        </span>
        <hr className="comparison-content-divider"></hr>
        <label>Song values:</label>

        {Object.keys(combinedData.songChanges).map((element) => (
          <div className="comparison-content" key={element}>
            ❖ {element} :: {combinedData.songChanges[element].oldData} »»{" "}
            {combinedData.songChanges[element].newData}
          </div>
        ))}
        <hr className="comparison-content-divider"></hr>
        <label>Artist values:</label>
        {Object.keys(combinedData.artistChanges).map((element) => (
          <div className="comparison-content" key={element}>
            ❖ {element} :: {combinedData.artistChanges[element].oldData} »»{" "}
            {combinedData.artistChanges[element].newData}
          </div>
        ))}
      </div>
      <div>
        <DashboardButton
          type="submit"
          value="Confirm"
          variant="utility"
          onClick={() => handleConfirm()}
        />
      </div>
    </div>
  );
};

export default Comparison;
