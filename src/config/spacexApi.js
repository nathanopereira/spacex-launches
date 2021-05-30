import axios from "axios";

const spacexApi = axios.create({
  baseURL: process.env.SPACEX_URL
})

export default spacexApi
