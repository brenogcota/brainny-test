import http from '../../shared/http';

export const getUser = async (id) =>  (await http.get(`/user/${id}`)).data;

export const assignUser = async (data) =>  (await http.put(`/assign`, data)).data;

export const updateAvatar = async (id, data) =>  (await http.put(`/user/avatar/${id}`, data)).data;