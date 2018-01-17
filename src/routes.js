import VueRouter from "vue-router"
import Vue from "vue"
import Top from "./components/Top.vue"
import My from "./components/My.vue"
import List from "./components/List.vue"
Vue.use(VueRouter);
var routes=[
    { path: "/list", component: List },
    { path: "/top", component: Top},
    {path:"/my",component:My},
    {path:'*',redirect:"/list"}
]
var router = new VueRouter({
    routes: routes
})

export default router;