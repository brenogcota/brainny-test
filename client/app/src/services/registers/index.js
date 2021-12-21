import http from '../../shared/http';

export const getRegisters = async (limit, page) =>  (await http.get(`/register?limit=${limit}&page=${page}`)).data;

export const getUserRegisters = async (id, limit, page) =>  (await http.get(`/register/${id}?limit=${limit}&page=${page}`)).data;

export const createRegister = async (data) =>  (await http.post('/register', data)).data;
