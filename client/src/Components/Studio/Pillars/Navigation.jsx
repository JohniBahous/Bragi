import "../../../style/main-view/navigation.css";
import { HarpIcon, ThreeDots } from "../../../assets/media/icons/index.js";
import useScrollRender from "../../../hooks/useScrollRender.js";
import useAudioStore from "../../../stores/useAudioStore.js";

const Navigation = () => {
  const { titleReveal, setTitleReveal, sectionReveal, setSectionReveal } =
    useAudioStore();

  useScrollRender(() => {
    setTitleReveal(true);
  }, "villain");

  useScrollRender(() => {
    setSectionReveal(true);
  }, "strings");

  return (
    <div className="navigation">
      <div className="navigation-title">
        <img src={HarpIcon} alt="Website logo in the shape of a small harp" />
      </div>
      <ul className="navigation-ul">
        <li className="navigation-element">
          <a href="#pillars">〚Transmission〛</a>
        </li>

        {sectionReveal ? (
          <li className="navigation-element">
            <a href="#strings">〚Strings〛</a>
          </li>
        ) : (
          <li className="navigation-element-alt">
            <img
              className="navigation-placeholder"
              src={ThreeDots}
              alt="Placeholder element the covers navigation elements"
            ></img>
          </li>
        )}

        {titleReveal ? (
          <li className="navigation-element">
            <a href="#villain">〚Context〛</a>
          </li>
        ) : (
          <li className="navigation-element-alt">
            <img
              className="navigation-placeholder"
              src={ThreeDots}
              alt="Placeholder element the covers navigation elements"
            ></img>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
