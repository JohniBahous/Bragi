import "../global.css";
import "../style/misc/viewport-warning.css";
import useAudioControls from "../hooks/useAudioControls.js";
import useScrollRender from "../hooks/useScrollRender.js";
import useAudioStore from "../stores/useAudioStore.js";
import { Navigation, Pillars } from "../components/Studio/Pillars/index.js";
import { SnippetRow } from "../components/Studio/Snippets/index.js";
import { Footer, Villain } from "../components/Studio/Villain/index.js";
import { Helpers } from "../components/Studio/Helpers/index.js";
import Poster from "../Components/Studio/Snippets/Poster.jsx";

function Studio() {
  const { isPlaying, playbackMode } = useAudioStore();
  const { volume, handleVolumeChange } = useAudioControls();

  useScrollRender(() => {
    document.title = "THE BRAGI INITIATIVE";
  }, "villain");

  return (
    <div>
      <div className="app-content">
        <Navigation />
        <Pillars volume={volume} handleVolumeChange={handleVolumeChange} />
        {!playbackMode ? <SnippetRow /> : null}
        <Poster />
        <Helpers
          isPlaying={isPlaying}
          volume={volume}
          handleVolumeChange={handleVolumeChange}
        />
        <Villain />
        <Footer />
      </div>

      <div class="mobile-overlay">
        <h2>Best viewed on desktop</h2>
        <span>Please switch to a larger viewport for the best experience</span>
        <span>Mobile viewport compatabile version in the works</span>
        <span>SOON™</span>
      </div>
    </div>
  );
}

export default Studio;
