//import Vue from "vue";
import Vue from "../../../node_modules/vue/dist/vue.esm";
import Vuex from "vuex";

Vue.use(Vuex);

//Main store
import actionsObj from "../actions";
import gettersObj from "../getters";
import mutationsObj from "../mutations";
import stateObj from "../state";


//Store modules
import usersModule from "../modules/users";
import langsModule from "../modules/langs";

export const store = new Vuex.Store({
    state: stateObj,
    getters: gettersObj,
    mutations: mutationsObj,
    actions: actionsObj,
    modules: {
        users: usersModule,
        langs: langsModule
    },
    strict:true
});
