import Vue from "../../node_modules/vue/dist/vue.esm";
//import Vue from "vue";
import VueRouter from "vue-router";

//Pages
import MainPage from "../components/main-page/MainPage";
import Page1 from "../components/page1/Page1";
import Page2 from "../components/page2/Page2";
import Subpage1 from "../components/subpage1/Subpage1";
import Subpage2 from "../components/subpage2/Subpage2";
import SubpageRoot from "../components/subpage-root/SubpageRoot";
const NotFound = { template: "<p>Страница не найдена</p>" };

import Vuex from "vuex";
Vue.use(Vuex);

import { store } from "../vuex/store";
/*
import { store } from "../vuex/store";
//Before enter hook to run some functions first
const beforeEnterRouteFns = (to, from, next) => {
    function proceed() {
        if (store.getters.getSettingsLoaded) {
            //Settings loaded
            if (!checkAuth()) {
                next("/auth");
            }
            //Auth is ok
            next();
        }
    }
    //Check settings loaded
    if (!store.getters.getSettingsLoaded) {
        store.watch(state => {
            if (state.settingsLoaded) proceed();
        });
    } else {
        proceed();
    }
};
*/
export default new VueRouter({
    mode: "history",
    base: "/",
    routes: [
        {
            path: "/",
            name: "MainPageRoot",
            redirect: { name: "MainPage" }
        },
        {
            path: "/main",
            name: "MainPage",
            component: MainPage
        },
        {
            path: "/page1",
            name: "Page1",
            component: Page1
        },
        {
            path: "/page2",
            component: Page2,
            //beforeEnter: beforeEnterRouteFns,
            children: [
                {
                    path: "",
                    components: { contentmain: SubpageRoot }
                },
                {
                    path: "subpage1/:id",
                    name: "Subpage1",
                    components: { contentmain: Subpage1 }
                },
                {
                    path: "subpage2/:id/:subid",
                    name: "Subpage2",
                    components: { contentmain: Subpage2 }
                }
            ]
        },
        {
            path: "*",
            name: "NotFound",
            component: NotFound
        }
    ]
});
