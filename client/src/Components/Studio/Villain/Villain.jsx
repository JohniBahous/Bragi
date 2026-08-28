import "../../../style/main-view/villain.css";
import VillainDeco from "./VillainDeco";
const VillainV2 = () => {
  const lineCount = 9;
  return (
    <div class="villain-parent" id="villain">
      <div class="villain-top-title">
        <div className="villain-top-title-left">THE BR</div>
        <div className="villain-top-title-right">AGI INITIATIVE</div>
      </div>
      <div class="villain-right-title">
        <div className="villain-right-title-text">INIT</div>
      </div>
      <div class="villain-paragraph">
        <div>
          <span class="villain-paragraph-text">
            <span class="villain-paragraph-invert">
              Art and artists over algorithms.
            </span>{" "}
            With that one simple idea,
            <strong> Bragi </strong>
            began to take shape. This isn't some noble fight against an
            industry, or against the way media is consumed in current days. It's
            simply showcase that puts{" "}
            <span class="villain-paragraph-invert">
              the music and the artists
            </span>{" "}
            behind it first.
          </span>
          <span class="villain-paragraph-text">
            <span class="villain-paragraph-invert">Every song and artist</span>{" "}
            are presented with intention. Something more curated, something more
            personal.{" "}
            <span class="villain-paragraph-closer">
              Listening and not consuming. Art and not noise.
            </span>
          </span>
        </div>
      </div>
      <div class="villain-middle-deco">
        <VillainDeco />
      </div>
      <div class="villain-bottom-deco"></div>
      <div class="villain-bottom-lines">
        {Array.from({ length: lineCount }).map((_, i) => (
          <hr
            key={i}
            style={{
              border: "none",
              height: `${2 + i}px`,
              backgroundColor: "#1A1A1A",
            }}
          />
        ))}
      </div>
      <div className="villain-bottom-eot">
        BRAGI --- END OF TRANSMISSION --- BRAGI
      </div>
    </div>
  );
};

export default VillainV2;
