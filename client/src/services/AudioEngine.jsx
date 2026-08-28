import { useEffect, useRef } from "react";
import { Howl } from "howler";
import { useQueryClient } from "@tanstack/react-query";
import { audioByIdQueryOptions } from "../queries/songs/queries.js";
import useAudioStore from "../stores/useAudioStore.js";

const AudioEngine = () => {
  const queryClient = useQueryClient();
  const howlRef = useRef(null);
  const rafRef = useRef(null);

  const {
    volume,
    playRequest,
    clearPlayRequest,
    setCurrentTrack,
    setIsPlaying,
    setAudioDuration,
    setAudioTime,
    requestPause,
    requestResume,
    clearRequests,
  } = useAudioStore();

  const stopCurrent = () => {
    if (howlRef.current) {
      cancelAnimationFrame(rafRef.current);
      howlRef.current.stop();
      howlRef.current.unload();
      howlRef.current = null;
    }
  };

  useEffect(() => {
    if (!playRequest) return;

    const { songId, artistId, type } = playRequest;

    const fetchAndPlay = async () => {
      const data = await queryClient.fetchQuery(
        audioByIdQueryOptions(type === "snippet" ? "snippet" : "song", songId),
      );

      stopCurrent();

      const howl = new Howl({
        src: [data.url],
        html5: type !== "snippet",
        volume,
        onload: () => setAudioDuration(howl.duration()),
        onplay: () => {
          setIsPlaying(true);
          const updateTime = () => {
            if (!howlRef.current) return;

            setAudioTime(howlRef.current.seek() || 0);
            rafRef.current = requestAnimationFrame(updateTime);
          };

          rafRef.current = requestAnimationFrame(updateTime);
        },
        onpause: () => setIsPlaying(false),
        onend: () => setIsPlaying(false),
      });

      howlRef.current = howl;
      if (type !== "snippet") {
        setCurrentTrack({ songId, artistId, type });
      }

      howl.play();
      clearPlayRequest();
    };

    fetchAndPlay();
  }, [
    clearPlayRequest,
    playRequest,
    queryClient,
    setAudioDuration,
    setAudioTime,
    setCurrentTrack,
    setIsPlaying,
    volume,
  ]);

  useEffect(() => {
    if (howlRef.current) {
      howlRef.current.volume(volume);
    }
  }, [volume]);

  useEffect(() => {
    if (requestPause && howlRef.current) {
      howlRef.current.pause();
      clearRequests();
    }
  }, [clearRequests, requestPause]);

  useEffect(() => {
    if (requestResume && howlRef.current) {
      howlRef.current.play();
      clearRequests();
    }
  }, [clearRequests, requestResume]);

  return null;
};

export default AudioEngine;
