import "../../../style/main-view/pillars.css";
import {
  Wave1,
  Wave2,
  Wave3,
  Wave4,
  Wave5,
  Wave6,
} from "../../../assets/media/icons";
const PillarsPreview = () => {
  return (
    <div>
      <div className="pillars-content">
        <div className="pillars-container">
          <img
            className="pillars-icon pillars-icon-pad-v"
            src={Wave1}
            alt="Preview element in the shape of an audio waveform"
            fetchpriority="high"
          />
        </div>
        <div className="pillars-container">
          <img
            className="pillars-icon pillars-icon-pad-v"
            src={Wave2}
            alt="Preview element in the shape of an audio waveform"
            fetchpriority="high"
          />
        </div>
        <div className="pillars-container">
          <img
            className="pillars-icon pillars-icon-pad-h"
            src={Wave3}
            alt="Preview element in the shape of an audio waveform"
            fetchpriority="high"
          />
        </div>
        <div className="pillars-container">
          <img
            className="pillars-icon pillars-icon-pad-h"
            src={Wave4}
            alt="Preview element in the shape of an audio waveform"
            fetchpriority="high"
          />
        </div>
        <div className="pillars-container">
          <img
            className="pillars-icon pillars-icon-pad-v"
            src={Wave5}
            alt="Preview element in the shape of an audio waveform"
            fetchpriority="high"
          />
        </div>
        <div className="pillars-container">
          <img
            className="pillars-icon pillars-icon-pad-h"
            src={Wave6}
            alt="Preview element in the shape of an audio waveform"
            fetchpriority="high"
          />
        </div>
      </div>
      <div className="pillars-labels">
        <div className="label"></div>
        <div className="label"></div>
        <div className="label"></div>
        <div className="label"></div>
        <div className="label"></div>
        <div className="label"></div>
      </div>
    </div>
  );
};

export default PillarsPreview;
