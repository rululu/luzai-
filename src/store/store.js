import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import mutations from "./mutations.js"
import actions from "./actions.js"
import state from "./state.js"

const store= new Vuex.Store({
    state,
    mutations,
    actions
})
export default store