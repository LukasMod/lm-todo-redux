import axios from 'axios'

const Api = axios.create({
  baseURL: 'https://0bd3-5-172-233-232.eu.ngrok.io/',
  timeout: 1000,
  headers: {accept: 'application/json'},
})

export default Api
