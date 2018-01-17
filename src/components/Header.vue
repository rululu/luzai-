<template>
    <header>
    	{{title}}
    </header>
</template>
<script>
	import {mapState} from "vuex";
	export default{
        computed:mapState([
            "title"
        ]),
        watch:{
        	'$route'(to, from) {
        		 if(to.path=="/list"){
        		 	this.$store.commit("changeTitle","歌单")
        		 }else if(to.path=="/top"){
        		 	this.$store.commit("changeTitle","排行")
        		 }else if(to.path=="/my"){
        		 	this.$store.commit("changeTitle","我的")
        		 }
        	}
        }
    }
</script>