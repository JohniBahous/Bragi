import { useState } from "react";
import { useQuery, useQueries } from "@tanstack/react-query";
import "../../../style/main-view/pillars.css";
import Button from "../Button.jsx";
import PillarsSlider from "./PillarsSlider.jsx";
import PillarsPlayback from "./PillarsPlayback.jsx";
import { useHowlerControls } from "../../../hooks/useHowlerControls.js";
import useAudioStore from "../../../stores/useAudioStore.js";
import {
  PlayIcon,
  PauseIcon,
  VolumeHighIcon,
  VolumeMediumIcon,
  VolumeMinIcon,
  VolumeOffIcon,
  LoadingIcon,
} from "../../../assets/media/icons/index.js";
import {
  artistByIdQueryOptions,
  getPortraitURLByIdQueryOptions,
} from "../../../queries/artists/queries.js";
import { songByIdQueryOptions } from "../../../queries/songs/queries.js";

const PillarsPlayer = ({ volume, handleVolumeChange }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const { isPlaying, currentTrack, audioDuration, audioTime } = useAudioStore();
  const { pause, resume } = useHowlerControls();

  const songId = currentTrack?.songId;
  const artistId = currentTrack?.artistId;

  const [artistData, songData] = useQueries({
    queries: [
      {
        ...artistByIdQueryOptions(artistId),
        enabled: !!artistId,
      },
      {
        ...songByIdQueryOptions(songId),
        enabled: !!songId,
      },
    ],
  });

  const { data: portraitData = [] } = useQuery({
    ...getPortraitURLByIdQueryOptions("portrait", artistId),
    enabled: !!artistId,
  });

  if (!currentTrack || !artistData.data || !songData.data) {
    return null;
  }

  return (
    <div className="pillars-base">
      <div className="pillars-content">
        <div className="pillars-container pillars-artist-name">
          ﹁{artistData.data.stageName}﹂
        </div>

        <div className="pillars-container pillars-artist-portrait">
          <img
            loading="lazy"
            src={imgLoaded ? portraitData.url : LoadingIcon}
            alt={`Portrait of the artist(s) ${artistData.data.stageName}`}
            onLoad={() => setImgLoaded(true)}
          />
        </div>
        <div className="pillars-container pillars-song-name">
          ﹁{songData.data.title}﹂
        </div>
        <div className="pillars-container pillars-play-button">
          <Button
            invisible
            size="big"
            color="black"
            alt="Play and Pause Button"
            icon={isPlaying ? PauseIcon : PlayIcon}
            onClick={() => {
              if (isPlaying) pause();
              else resume();
            }}
          />
        </div>
        <div className="pillars-container pillars-volume-slider">
          <div>
            <div className="pillars-volume-slider-front">
              <PillarsSlider
                color="green"
                volume={volume}
                handleVolumeChange={handleVolumeChange}
              />
            </div>
          </div>
        </div>
        <div className="pillars-container pillars-artist-bio">
          {artistData.data.bioFull}
        </div>
      </div>
      <div className="pillars-labels">
        <div className="label label-start">| 01 ] Name </div>
        <div className="label">| 02 ] Portrait</div>
        <div className="label">| 03 ] Title</div>
        <div className="label">| 04 ] Music</div>
        <div className="label">
          <img
            className="label-icon"
            src={
              volume >= 0.6
                ? VolumeHighIcon
                : volume >= 0.2
                  ? VolumeMediumIcon
                  : volume >= 0.1
                    ? VolumeMinIcon
                    : VolumeOffIcon
            }
            alt="Volume icon in the shape of a speaker that changes depending on the level of audio volume"
          />
        </div>
        <div className="label">| 06 ] Bio</div>
      </div>
      <PillarsPlayback
        songData={songData.data}
        audioTime={audioTime}
        audioDuration={audioDuration}
        isPlaying={isPlaying}
      />
    </div>
  );
};

export default PillarsPlayer;
