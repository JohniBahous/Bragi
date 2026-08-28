import { lazy } from "react";
import "../../../style/main-view/pillars.css";
import useAudioStore from "../../../stores/useAudioStore.js";

const PillarsPlayer = lazy(() => import("./PillarsPlayer.jsx"));
const PillarsPreview = lazy(() => import("./PillarsPreview.jsx"));

const Pillars = ({ volume, handleVolumeChange }) => {
  const { playbackMode } = useAudioStore();

  return (
    <div className="pillars" id="pillars">
      {playbackMode ? (
        <PillarsPlayer
          volume={volume}
          handleVolumeChange={handleVolumeChange}
        />
      ) : (
        <PillarsPreview />
      )}
    </div>
  );
};

export default Pillars;
