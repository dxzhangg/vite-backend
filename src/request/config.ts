import {AxiosRequestConfig} from 'axios'

export default <AxiosRequestConfig>{
    baseURL: import.meta.env.VITE_API_BASE_URL,
}