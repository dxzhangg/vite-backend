import {createStore } from 'vuex'
import modules from './modules'
import actions from './actions'
import getters from './getters'

export default createStore({
    state: () => {
        return {
            hello: 'world'
        }
    },
    actions,
    modules,
    getters,
    strict: true,
    plugins: [],
})