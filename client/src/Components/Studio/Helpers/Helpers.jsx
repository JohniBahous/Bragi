import { useState, useEffect } from "react";
import VolumeSlider from "./VolumeSlider.jsx";
import Button from "../Button.jsx";
import "../../../style/main-view/helpers.css";
import useAudioStore from "../../../stores/useAudioStore.js";
import { useHowlerControls } from "../../../hooks/useHowlerControls.js";
import {
  PlayIcon,
  PauseIcon,
  VolumeHighIcon,
  VolumeMediumIcon,
  VolumeMinIcon,
  VolumeOffIcon,
  UpArrowFullIcon,
} from "../../../assets/media/icons/index.js";

const Helpers = ({ volume, handleVolumeChange }) => {
  const { isPlaying, playbackMode } = useAudioStore();
  const { pause, resume } = useHowlerControls();

  const [showVolume, setShowVolume] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (showVolume && !isHovered) {
      const timer = setTimeout(() => setShowVolume(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [showVolume, isHovered]);

  return (
    <div className="helpers-container">
      {playbackMode ? (
        <div>
          <div className="helpers-element helpers-slider-parent">
            <Button
              outline
              variant="helper"
              size="small"
              color="pink"
              alt="Volume Button, icon in the shape of a speaker that changes depending on the browser volume"
              icon={
                volume >= 0.8
                  ? VolumeHighIcon
                  : volume >= 0.5
                    ? VolumeMediumIcon
                    : volume >= 0.2
                      ? VolumeMinIcon
                      : VolumeOffIcon
              }
              onClick={() => {
                setShowVolume(!showVolume);
              }}
            />
            {showVolume && (
              <div
                className="helpers-slider"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <VolumeSlider
                  styled
                  color="pink"
                  volume={volume}
                  handleVolumeChange={handleVolumeChange}
                />
              </div>
            )}
          </div>

          <div className="helpers-element">
            <Button
              outline
              variant="helper"
              size="small"
              color="green"
              alt="Play and Pause Button"
              icon={isPlaying ? PauseIcon : PlayIcon}
              onClick={() => {
                if (isPlaying) pause();
                else resume();
              }}
            />
          </div>
        </div>
      ) : null}
      <div className="helpers-element">
        <Button
          outline
          variant="helper"
          size="small"
          color="blue"
          alt="Arrow with stem pointing upwards"
          icon={UpArrowFullIcon}
          onClick={scrollToTop}
        />
      </div>
    </div>
  );
};

export default Helpers;
