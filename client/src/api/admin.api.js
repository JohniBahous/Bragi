import { request } from "./apiClient.js";

export const getAllAdmins = () => request('/admin/all');
export const getAdminById = (uuid) => request(`/admin/${uuid}`);
export const adminLogin = (uuid, password) => request(`/admin/${uuid}/login`,{ method: 'POST', credentials: "include",  body: JSON.stringify({password}) })
export const adminLogout = () => request('/admin/logout', { method: "POST", credentials: "include" });
export const adminAudit = (uuid, name, action) => request(`/admin/audit`,{ method: 'POST', body: JSON.stringify({uuid, name, action}) })
// export const adminAuth = () => request('/admin/me', {credentials:"include"})