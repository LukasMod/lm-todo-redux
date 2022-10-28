import axios from 'axios'

const Api = axios.create({
  baseURL: 'https://kind-cat-73.loca.lt',
  timeout: 1000,
  headers: {accept: 'application/json'},
})

export default Api
