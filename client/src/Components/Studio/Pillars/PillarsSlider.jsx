import PillarsSliderBase from "./PillarsSliderBase";
import "../../../style/main-view/pillars-slider.css";

const PillarsSlider = ({ volume, handleVolumeChange }) => {
  return (
    <div className="pillars-slider-container">
      <PillarsSliderBase volume={volume} />

      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={handleVolumeChange}
        className="pillars-slider-input"
      />
    </div>
  );
};

export default PillarsSlider;
