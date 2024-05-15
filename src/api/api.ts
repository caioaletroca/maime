import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.themoviedb.org/',
  params: {
    api_key: import.meta.env.VITE_MOVIE_DB_API_KEY
  },
  headers: {
    'Content-Type': 'application/json'
  }
})
