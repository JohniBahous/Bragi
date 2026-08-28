import { useState } from "react";
import { useQueries } from "@tanstack/react-query";
import "../../../style/admin-panel/dashboard-update.css";
import ArtistFormField from "./ArtistFormField.jsx";
import Comparison from "./Comparison.jsx";
import DashboardButton from "./DashboardButton.jsx";
import SongFormField from "./SongFormField.jsx";
import Modal from "./Modal.jsx";

import {
  allArtistsQueryOptions,
  artistByIdQueryOptions,
} from "../../../queries/artists/queries.js";
import {
  allSongsQueryOptions,
  songByIdQueryOptions,
} from "../../../queries/songs/queries.js";

const DashboardUpdate = () => {
  const STEPS = {
    IDLE: "idle",
    DISABLED: "disabled",
    SONG: "song",
    ARTIST: "artist",
    SUBMIT: "submit",
  };

  const [step, setStep] = useState(STEPS.IDLE);
  const [selectedId, setSelectedId] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [alteredArtistData, setAlteredArtistData] = useState([]);
  const [alteredSongData, setAlteredSongData] = useState([]);

  const [allArtistsQuery, allSongsQuery, artistQuery, songQuery] = useQueries({
    queries: [
      allArtistsQueryOptions(),
      allSongsQueryOptions(),
      artistByIdQueryOptions(selectedId[0]),
      songByIdQueryOptions(selectedId[1]),
    ],
  });
  const originalPayload = { artistQuery, songQuery };
  const alteredPayload = { alteredArtistData, alteredSongData };
  return (
    <div className="dashboard-update">
      <div className="dashboard-update-select-container">
        <div className="dashboard-update-select-item">
          <label>Pick an artist/song to update</label>
        </div>
        <div className="dashboard-update-select-item">
          <select
            className="dashboard-update-select"
            name="updateSelect"
            id="updateSelect"
            defaultValue=""
            disabled={step === "disabled"}
            onChange={(e) => setSelectedId(JSON.parse(e.target.value))}
          >
            <option value="" disabled hidden>
              ❖ X :: ARTIST »» SONG
            </option>
            {allArtistsQuery.data?.map((artist, index) => {
              const i = index + 1;
              const song = allSongsQuery.data?.find(
                (a) => a.artistUuid === artist.uuid,
              );
              return (
                <option
                  key={artist.uuid}
                  value={JSON.stringify([artist?.uuid, song?.uuid])}
                >
                  ❖ {i} :: {artist.stageName} »» {song?.title}
                </option>
              );
            })}
          </select>
        </div>

        <DashboardButton
          type="button"
          value="Pick"
          variant="utility"
          onClick={() => setStep(STEPS.DISABLED)}
        />
      </div>
      {step === "disabled" ? (
        <div>
          <DashboardButton
            type="button"
            value="Song"
            variant="toggle"
            onClick={() => setStep(STEPS.SONG)}
            isToggled={step === "song"}
          />
          <DashboardButton
            type="button"
            value="Artist"
            variant="toggle"
            onClick={() => setStep(STEPS.ARTIST)}
            isToggled={step === "artist"}
          />
        </div>
      ) : (
        ""
      )}

      <div>
        {step === "artist" ? (
          <ArtistFormField
            data={artistQuery.data}
            setter={setAlteredArtistData}
          />
        ) : step === "song" ? (
          <SongFormField data={songQuery.data} setter={setAlteredSongData} />
        ) : (
          ""
        )}
      </div>
      {console.log({ alteredPayload })}
      {alteredPayload ? (
        <div className="dashboard-update-save-button">
          <DashboardButton
            type="submit"
            value="Save"
            variant="utility"
            onClick={() => {
              setShowModal(true);
            }}
          />
        </div>
      ) : (
        ""
      )}
      {showModal && (
        <Modal
          closeModal={setShowModal}
          state={showModal}
          variant="admin"
          modalComp={
            <Comparison
              source="update"
              modalStateSetter={setShowModal}
              selectedId={selectedId}
              oldData={originalPayload}
              newData={alteredPayload}
            />
          }
        />
      )}
    </div>
  );
};

export default DashboardUpdate;
