import http from '../../shared/http';

export const getNotifications = async (id) => (await http.get(`/notification/${id}`)).data;