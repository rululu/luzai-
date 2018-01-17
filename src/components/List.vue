<template>
    <div>
    	<loading-vue v-show="mList.length==0"></loading-vue>
    	<ul>
    		<li v-for="(key,index) in mList" @click="$store.commit('hash',index)"><span>{{index+1}}</span>{{key.filename}}</li>
    	</ul>
    	<play-vue v-show="hashM!=''"></play-vue>
    </div>
</template>
<script>
	import PlayVue from "./Play.vue"
	import {mapState} from "vuex";
	export default{
		mounted: function() {
            this.$http.get("http://127.0.0.1/music/kugou.php", {
              params:{
                page:1
              }
            }).then(function(res) {
              	this.$store.dispatch("addList",res.data.songs.list)
            }.bind(this))
        },
        computed:{
          ...mapState([
            "mList",
            "hashM"
          ])
        },
        components:{
		    "play-vue":PlayVue
		}
	}
</script>