import Request from '../../../request'
import {Module} from "vuex";

const tokenStorageKey = 'token'
const getTokenFromStorage = ():string => {
    return localStorage.getItem(tokenStorageKey) || ''
}
const setTokenFromStorage = (val:string) => {
    return localStorage.setItem(tokenStorageKey, val)
}
const removeTokenFromStorage = () => {
    return localStorage.removeItem(tokenStorageKey)
}

const state = () => ({
    token: getTokenFromStorage(),
    isLogin: false
})

const getters = {

}

const actions = {
    logout(contxt:any){
        contxt.commit('clearToken')
        removeTokenFromStorage()
    },
    login(context:any, params:any) {
        // Request.post('/login').then((res) => {
        //     context.commit('setToken', res.data.data.token)
        //     return true
        // }).catch((res) => {
        //     alert('账号或密码错误')
        //     return false
        // })
        if (params.username == 'admin' && params.password == 'password') {
            context.commit('setToken', 'asdfsdf')
            return true
        } else {
            alert('账号或密码错误')
            return false
        }
    },
}

const mutations = {
    setToken(state:any, token:string){
        state.token = token
        setTokenFromStorage(token)
    },
    clearToken(state:any) {
        state.token = ''
    },
    isLogin(state:any){
        state.isLogin = state.token !== ''
    },
}

export default <Module<any, any>> {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
    modules: {

    }
}