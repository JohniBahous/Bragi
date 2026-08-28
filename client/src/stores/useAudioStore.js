import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'




const useAudioStore = create(
  persist(
    (set) => ({
      
      volume: 0.7,
      audioDuration: 0,
      audioTime: 0,
      setVolume: (value) => set({ volume: value }),
      setAudioDuration: (value) => set({ audioDuration: value }),
      setAudioTime: (value) => set({ audioTime: value }),


      isPlaying: false,
      playRequest: null,
      currentTrack: null,
      playbackMode: false,
      requestPause: false,
      requestResume: false,
      setIsPlaying: (value) => set({ isPlaying: value }),
      setPlayRequest: (payload) => set({ playRequest: payload }),
      setCurrentTrack: (payload) => set({ currentTrack: payload }),
      clearPlayRequest: () => set({ playRequest: null }),
      setPlaybackMode: (value) => set({ playbackMode: value }),
      setRequestPause: () => set({ requestPause: true }),
      setRequestResume: () => set({ requestResume: true }),
      clearRequests: () => set({ requestPause: false, requestResume: false }),


      loggedinAdmin: "",
      loggedinAdminUuid: "",
      setLoggedinAdmin: (value) => set({ loggedinAdmin: value }),
      setLoggedinAdminUuid: (value) => set({ loggedinAdminUuid: value }),


      isInteractionLocked: false,
      setIsInteractionLocked: (value) => set({ isInteractionLocked: value }),
      titleReveal: false,
      setTitleReveal: (value) => set({ titleReveal: value }),
      sectionReveal: false,
      setSectionReveal: (value) => set({ sectionReveal: value }),
}),
{
    name: 'volume-storage',
    partialize: (state) => ({  
      volume: state.volume,
      currentTrack: state.currentTrack,
      playbackMode: state.playbackMode,
      loggedinAdmin: state.loggedinAdmin,
      loggedinAdminUuid: state.loggedinAdminUuid,
      titleReveal: state.titleReveal,
      sectionReveal: state.sectionReveal,
    }),
    storage: createJSONStorage(() => sessionStorage)
}

))

export default useAudioStore;