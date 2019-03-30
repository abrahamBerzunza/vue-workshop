import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://api.tvmaze.com',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default {
  getShows () {
    return apiClient.get('/shows')
  }
}