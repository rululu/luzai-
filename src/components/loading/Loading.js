import LoadingVue from "./Loading.vue"
var loading={
    install:function (vue){
        vue.component("loading-vue", LoadingVue)
    }
}
export default loading;