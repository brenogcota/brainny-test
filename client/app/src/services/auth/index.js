import http from '../../shared/http';

export const signup = async ({ name, email, password, account_id }) =>  (await http.post('/user', { name, email, password, account_id })).data;

export const signin = async ({ email, password }) => (await http.post('/auth', { email, password })).data;

export const resetPassword = async ({ email }) => (await http.post('/auth/reset-password', { email })).data;

export const updatePassword = async (token, data) =>  (await http.put(`/auth/reset-password?token=${token}`, data)).data;