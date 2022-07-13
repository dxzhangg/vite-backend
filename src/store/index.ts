import {createStore } from 'vuex'
import auth from './modules/auth'
import actions from './actions'
import getters from './getters'

export default createStore({
    actions,
    modules: {
        auth,
    },
    getters,
    strict: true,
    plugins: [],
})