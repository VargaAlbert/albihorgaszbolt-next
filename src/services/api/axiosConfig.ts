import axios, { AxiosInstance } from 'axios';

export const BASE_URL: string = 'http://localhost:5000';
export const LOGIN_URL = '/auth';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});