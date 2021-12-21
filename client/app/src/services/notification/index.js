import http from '../../shared/http';

export const getNotifications = async () => (await http.get(`/notification`)).data;