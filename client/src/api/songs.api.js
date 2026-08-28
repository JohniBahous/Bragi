import { request } from "./apiClient.js";

export const getAllSongs = () => request('/songs');
export const getSongById = (uuid) => request(`/songs/${uuid}`);
export const getAudioURLById = (type, uuid) => request(`/songs/${type}/${uuid}`);
export const incrementPlays = (uuid, type) => request(`/songs/${uuid}/${type}/plays`, { method: 'PUT' });
export const updateSongData = (uuid, body) => request(`/songs/${uuid}/update`, { method: 'PUT', body: JSON.stringify(body) });