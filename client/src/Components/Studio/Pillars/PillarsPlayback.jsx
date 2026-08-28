import { formatTime } from "../../../utils/formatTime.js";
import { PlaybackArrow } from "../../../assets/media/icons/index.js";
import PillarsPlaybackElement from "./PillarsPlaybackElement.jsx";

const PillarsPlayback = ({ audioTime, audioDuration, songData, isPlaying }) => {
  return (
    <div>
      <div className="pillars-playback-container">
        <div className="pillars-playback">
          <PillarsPlaybackElement
            audioDuration={formatTime(audioDuration)}
            audioTime={formatTime(audioTime)}
            songData={songData}
          />
        </div>
      </div>
      <div className="pillars-playback-transmission-container">
        <img
          className="pillars-playback-transmission-arrow reverse"
          src={PlaybackArrow}
          alt=""
        />
        <div className="pillars-playback-transmission-label">
          <span>Transmission &nbsp;</span>
          {isPlaying ? (
            <span className="label-active">Active</span>
          ) : (
            <span>Inactive</span>
          )}
        </div>
        <img
          className="pillars-playback-transmission-arrow"
          src={PlaybackArrow}
          alt=""
        />
      </div>
    </div>
  );
};

export default PillarsPlayback;
