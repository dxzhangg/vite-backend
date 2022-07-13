import Axios from 'axios'
import config from './config'

Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Axios.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

Axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error)
    }
)

export default {
    get(url:string) {
        return Axios.get(url, config)
    },
    post(url:string, data?:any) {
        return Axios.post(url, data, config)
    },
    put(url:string, data?:any) {
        return Axios.put(url, data, config)
    },
    patch(url:string, data?:any) {
        return Axios.patch(url, data, config)
    },
    delete(url:string) {
        return Axios.delete(url, config)
    }
}