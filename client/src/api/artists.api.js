import { request } from "./apiClient.js";

export const getAllArtists = () => request('/artists');
export const getArtistById = (uuid) => request(`/artists/${uuid}`);
export const getPortraitURLById = (type, uuid) => request(`/artists/${type}/${uuid}`);
export const getSongByArtistId = (uuid) => request(`/artists/${uuid}/song`);
export const updateArtistData = (uuid, body) => request(`/artists/${uuid}/update`, { method: 'PUT', body: JSON.stringify(body) });
export const replaceArtistAndSong = (uuid, body) => request(`/${uuid}/replace`,{ method: 'PUT', body: JSON.stringify(body) });
