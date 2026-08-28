import useAudioStore from "../stores/useAudioStore.js";

export const useHowlerControls = () => {

  const { setRequestPause, setRequestResume } = useAudioStore();

  return {
    pause: setRequestPause,
    resume: setRequestResume,
    
};
};