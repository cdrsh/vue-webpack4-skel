import * as consts from "../constants";
import Vue from "vue";
import * as conf from "../../config";
//http Client
import VueResource from "vue-resource";
import { resolve } from "path";
Vue.use(VueResource);

export default {
    //load Settings
    loadSettings({ commit }, params) {
        if (this.getters.getSettingsLoaded) return;

        //commit(consts.GET_SETTINGS_INDICATOR, true);
        Vue.http.get(conf.GET_SETTINGS, { params: params })
        .then(
            response => {
                //commit(consts.GET_SETTINGS_INDICATOR, false);
                commit(consts.GET_SETTINGS_SUCCESS, response.body);
                resolve();
            },
            err => {
                throw err;
            }
        )
        .catch(error => {
            //commit(consts.GET_SETTINGS_INDICATOR, false);
            commit(consts.GET_SETTINGS_FAIL, error);
            reject();
        });
    }
};
