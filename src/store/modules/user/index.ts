import {Module} from "vuex";
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

export default <Module<any, any>> {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
    modules: {

    }
}