import { request } from "./apiClient.js";

export const getAllUUIDs = () => request('/uuids');