import Vue from 'vue'
import App from './App.vue'
import axios from "axios"
import Router from "./routes.js"
import store from "./store/store.js"
import LoadingVue from "./components/loading/Loading.js"
Vue.use(LoadingVue);
Vue.prototype.$http = axios;
require("./assets/css/style.scss");
new Vue({
	router:Router,
	store,
  el: '#app',
  render: h => h(App)
})
