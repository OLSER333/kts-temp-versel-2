import axios from 'axios'

import { baseURL } from "./endpoints";
import { SetupInterceptors } from "./config";


const api = axios.create({
  baseURL: baseURL
})

SetupInterceptors(api)

export default api