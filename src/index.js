//Vue with template compiler
//import Vue from "../node_modules/vue/dist/vue.esm";
import Vue from "../node_modules/vue/dist/vue.esm";

//Vuex
import Vuex from "vuex";
Vue.use(Vuex);

//App
import App from "./App.vue";

//http Client
import VueResource from "vue-resource";
Vue.use(VueResource);

//Lodash
import VueLodash from "vue-lodash";
Vue.use(VueLodash);

//i18n
import VueI18n from "vue-i18n";
Vue.use(VueI18n);
import messages from "./langs";
const i18n = new VueI18n({
    locale: "en",
    messages
});

//Form validator
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);

//Popup notifications
import VueNotifications from "vue-notifications";
import VueToasted from "vue-toasted";
function toast({ title, message, type, timeout, cb }) {
    if (type === VueNotifications.types.warn) type = "show";
    return Vue.toasted[type](message, { duration: 3000 });
}
Vue.use(VueToasted);
Vue.use(VueNotifications, {
    success: toast,
    error: toast,
    info: toast,
    warn: toast
});

//Create store
import { store } from "./vuex/store";

//VueRouter
import VueRouter from "vue-router";
Vue.use(VueRouter);
import router from "./router";

//Bootstrap4
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

//Momentjs
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
Vue.use(VueMoment,{moment});

//Production
Vue.config.productionTip = false;



//Create app
new Vue({
    el: "#app",
    store,
    router,
    template: "<App/>",
    i18n,
    components: { App }
});
