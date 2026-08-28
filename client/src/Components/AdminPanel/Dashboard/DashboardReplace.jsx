import { useState, useEffect } from "react";
import { useQueries } from "@tanstack/react-query";
import ArtistFormField from "./ArtistFormField.jsx";
import Comparison from "./Comparison.jsx";
import DashboardButton from "./DashboardButton.jsx";
import SongFormField from "./SongFormField.jsx";
import Modal from "./Modal.jsx";
import "../../../style/admin-panel/dashboard-update.css";
import {
  allArtistsQueryOptions,
  artistByIdQueryOptions,
} from "../../../queries/artists/queries.js";
import {
  allSongsQueryOptions,
  songByIdQueryOptions,
} from "../../../queries/songs/queries.js";

const DashboardReplace = () => {
  const [selectedId, setSelectedId] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSongOpen, setIsSongOpen] = useState(false);
  const [isArtistOpen, setIsArtistOpen] = useState(false);
  const [alteredArtistData, setAlteredArtistData] = useState(null);
  const [alteredSongData, setAlteredSongData] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

  useEffect(() => {
    if (alteredSongData) {
      setIsSongOpen(false);
      setIsArtistOpen(true);
    }
  }, [alteredSongData]);

  useEffect(() => {
    if (alteredArtistData) {
      setIsArtistOpen(false);
      setShowModal(true);
    }
  }, [alteredArtistData]);

  return (
    <div>
      <div className="dashboard-update-select-container">
        <div className="dashboard-update-select-item">
          <label>Pick an artist + song to replace</label>
        </div>
        <div className="dashboard-update-select-item">
          <select
            className="dashboard-update-select"
            name="updateSelect"
            id="updateSelect"
            defaultValue=""
            disabled={isDisabled}
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
                  value={JSON.stringify([artist.uuid, song?.uuid])}
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
          onClick={() => {
            setIsDisabled(true);
            setIsSongOpen(true);
          }}
        />
      </div>
      <div>
        {isSongOpen && <SongFormField setter={setAlteredSongData} />}
        {isArtistOpen && <ArtistFormField setter={setAlteredArtistData} />}
        {showModal && (
          <Modal
            closeModal={setShowModal}
            state={showModal}
            variant="admin"
            modalComp={
              <Comparison
                source="replace"
                modalStateSetter={setShowModal}
                selectedId={selectedId}
                oldData={originalPayload}
                newData={alteredPayload}
              />
            }
          />
        )}
      </div>
    </div>
  );
};

export default DashboardReplace;
