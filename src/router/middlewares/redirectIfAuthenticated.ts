import store from '../../store'
export default (to:any, from:any) => {
    store.commit('auth/isLogin')
    if (store.getters.getIsLogin) {
        return {name: 'home'}
    }
    return true
}