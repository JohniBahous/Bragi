import PosterColumnsElementBottom from "./PosterColumnsElementBottom.jsx";
import { useQueries, useMutation } from "@tanstack/react-query";

import { useHowlerControls } from "../../../hooks/useHowlerControls.js";
import useAudioStore from "../../../stores/useAudioStore.js";

import {
  artistByIdQueryOptions,
  getPortraitURLByIdQueryOptions,
} from "../../../queries/artists/queries.js";

import { songByIdQueryOptions } from "../../../queries/songs/queries.js";
import { incrementPlaysMutation } from "../../../queries/songs/mutations.js";

import MetadataTagBPM from "./MetadataTagBPM";
import MetadataTagGenre from "./MetadataTagGenre";
import MetadataTagRelease from "./MetadataTagRelease";

const PosterColumnsElement = ({ dataKey, artistUuid, songUuid }) => {
  const { pause } = useHowlerControls();

  const { setPlayRequest, setPlaybackMode, setIsInteractionLocked } =
    useAudioStore();

  const [artistData, songData, portraitData] = useQueries({
    queries: [
      artistByIdQueryOptions(artistUuid),
      songByIdQueryOptions(songUuid),
      getPortraitURLByIdQueryOptions("portrait", artistUuid),
    ],
  });

  const incrementPlays = useMutation(incrementPlaysMutation());

  const flyerDirection = dataKey < 5 ? "right" : "left";

  const handleHoverEnterAudio = () => {
    setPlayRequest({
      songId: songUuid,
      artistId: artistUuid,
      type: "snippet",
    });

    incrementPlays.mutate({
      uuid: songUuid,
      type: "snippet",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  const handlePlayClick = () => {
    setIsInteractionLocked(true);
    incrementPlays.mutate({
      uuid: songUuid,
      type: "full",
    });

    setPlaybackMode(true);
    scrollToTop();
    setPlayRequest({
      songId: songUuid,
      artistId: artistUuid,
      type: "song",
    });
    setTimeout(() => {
      setIsInteractionLocked(false);
    }, 700);
  };

  if (!artistData.data || !songData.data || !portraitData.data) {
    return null;
  }

  return (
    <div
      className="poster-columns-element-base"
      onMouseEnter={handleHoverEnterAudio}
      onMouseLeave={pause}
    >
      {/* COLUMN */}
      <div className="poster-columns-element-content">
        <div className="poster-columns-element-top">{songData.data.genre}</div>

        <div className="poster-columns-element-title-name-container">
          <span className="poster-columns-element-song-title">
            {songData.data.title}
          </span>

          <span className="poster-columns-element-artist-name">
            {artistData.data.stageName}
          </span>
        </div>
        <button
          type="button"
          className="poster-columns-element-bottom"
          onClick={handlePlayClick}
          aria-label={`Play ${songData.data.title} by ${artistData.data.stageName}`}
        >
          <PosterColumnsElementBottom />
        </button>
      </div>
      <div
        className={`
          poster-columns-element-flyer
          poster-columns-element-flyer-${flyerDirection}
        `}
      >
        <img
          className="poster-columns-element-flyer-portrait"
          src={portraitData.data.url}
          alt={`Portrait of ${artistData.data.stageName}`}
        />
        <div className="poster-columns-element-flyer-name">
          {artistData.data.fullName}
        </div>
        <div className="poster-columns-element-flyer-bio">
          {artistData.data.bioFull}
        </div>
        <div className="poster-columns-element-flyer-metadata">
          <MetadataTagGenre label={songData.data.genre} />
          <MetadataTagBPM label={songData.data.bpm} />
          <MetadataTagRelease label={songData.data.yor} />
        </div>
      </div>
    </div>
  );
};

export default PosterColumnsElement;
