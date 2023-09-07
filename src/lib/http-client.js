import axios from 'axios';

const url = import.meta.env.VITE_AUTH_API_URL || 'https://pokemon-api-third-party-production.up.railway.app/';

const client = axios.create({
	baseURL: url,
});

export default client;
