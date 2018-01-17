<template>
  <div id="app" class="box">
  	<header-vue></header-vue>
  	<section>
  		<router-view></router-view>
  	</section>
  	<footer>
  		<router-link to="/list">歌单</router-link>
  		<router-link to="/top">排行</router-link>
  		<router-link to="/my">我的</router-link>
  	</footer>
  </div>
</template>

<script>
import HeaderVue from "./components/Header.vue"
export default {
	components:{
    "header-vue":HeaderVue
  }
}
</script>

<style lang="scss">

</style>
