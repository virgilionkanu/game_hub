import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'db675966c16f46f98b97941b97e0c5d8',
  },
});
