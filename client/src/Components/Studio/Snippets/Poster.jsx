import "../../../style/main-view/poster.css";
import PosterColumns from "./PosterColumns";
const Poster = () => {
  return (
    <div className="poster-parent" id="strings">
      <div className="poster-columns-container">
        <PosterColumns />
      </div>
      <div className="poster-decorations-middle">
        <span className="poster-text">
          ⎯⎯ST⎯⎯⎯⎯⎯⎯RIN⎯⎯⎯⎯⎯⎯⎯GS⎯⎯⎯
          <br />
          ⎯⎯⎯⎯OF⎯⎯⎯⎯⎯A⎯⎯⎯⎯⎯⎯⎯HARP⎯⎯
          <br />
        </span>
      </div>
      <div className="poster-decorations-right"></div>
    </div>
  );
};

export default Poster;
