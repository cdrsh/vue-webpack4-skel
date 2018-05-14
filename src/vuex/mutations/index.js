import * as consts from "../constants";
import Vue from 'vue';

export default {

    //Settings load success
    [consts.GET_SETTINGS_SUCCESS](state, settings) {
        //state.settings = {...settings};
        //state.settingsLoaded = true;
        Vue.set(state,'settings',settings)
        Vue.set(state,'settingsLoaded',true)
    },

    //Settings load error
    [consts.GET_SETTINGS_FAIL](state, error) {
        console.log(error);
    },

    //Settings set loading flag
    [consts.GET_SETTINGS_INDICATOR](state, isLoading) {
        state.settingsLoadingFlag=isLoading;
    }
};
