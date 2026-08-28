import "../../../style/main-view/snippet-row.css";
import { PlayIcon } from "../../../assets/media/icons/index.js";
import Button from "../Button.jsx";
import Waveform from "./Waveform.jsx";

const SnippetRowElement = ({ position, onPlay, uuid, active }) => {
  return (
    <div
      className={[
        `snippet-row-element`,
        position % 2 == 0
          ? `snippet-row-element-background-black`
          : `snippet-row-element-background-amber`,
      ].join(" ")}
    >
      {active ? (
        <Waveform background={position % 2 == 0 ? "amber" : "black"} />
      ) : (
        <Button
          id={position}
          className="button"
          invisible
          size="small"
          color={position % 2 == 0 ? "amber" : "black"}
          alt="Play and Pause Button"
          icon={PlayIcon}
          onClick={() => onPlay(uuid)}
        />
      )}
    </div>
  );
};

export default SnippetRowElement;
