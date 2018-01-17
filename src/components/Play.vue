<template>
	<div class="play">
		<img :src="urlM" alt="">
		<b>{{songName}}</b>
		<audio id="au" autoplay :src="musicM" style="display:none"></audio>
		<div class="p_con">
			<div class="bg">
				<div class="track">
					<div class="d"></div>
				</div>
			</div>
			<p class="iconfont" @click="prev">&#xe94d;</p>
			<p @click="pause" class="iconfont btn1">&#xe62d;</p>
			<p class="iconfont" @click="next1">&#xe94e;</p>
			<p>
				<span class="iconfont" id="jia" @click="up">&#xe92f;</span>
				<span class="iconfont" id="jian" @click="down">&#xe932;</span>
				<span id="yinliang">5</span>
			</p>
		</div>
	</div>
</template>
<script>
	var vol = 5;
	import {mapState} from "vuex"
	export default {
		methods: {
			pause() {
				var Ms = document.getElementById("au");
				var oBtn = document.getElementsByClassName("btn1")[0]
				
				if(Ms.paused) {
					Ms.play();
					oBtn.innerHTML = "&#xe62d;"
				} else {
					Ms.pause();
					oBtn.innerHTML = "&#xe9cf;"
				}				
			},
			prev() {
				this.$store.commit("hash", this.prevIndex);
			},
			next1() {
				this.$store.commit("hash", this.nextIndex);
			},
			up() {
				var Ms = document.getElementById("au");
				var yl=document.getElementById("yinliang")
				vol++;
				if(vol >= 10) {
					vol = 10
				}
				Ms.volume = vol / 10;
				yl.innerHTML=vol;
			},
			down() {
				var Ms = document.getElementById("au");
				var yl=document.getElementById("yinliang")
				vol--;
				if(vol <= 0) {
					vol = 0
				}
				Ms.volume = vol / 10;
				yl.innerHTML=vol;
			}
		},
		watch: {
			hashM: function() {
				this.$http.get("http://127.0.0.1/music/music.php", {
					params: {
						hash: this.hashM
					}
				}).then(function(res) {
					this.$store.commit("addImg", res.data.imgUrl);
					this.$store.commit("addMusic", res.data.url);
					this.$store.commit("title", res.data.fileName);
					
//					var Ms = document.getElementById("au");
//					var oBg = document.getElementsByClassName("bg")
//					var oTrack = document.getElementsByClassName('track');
//					var w = oBg.offsetWidth;
//					console.log(w)
//					Ms.addEventListener('timeupdate', function() {
//						var scale = Ms.currentTime / Ms.duration;
//						var newWidth = scale * w;
//						newWidth > w - 10 ? newWidth = w - 10 : newWidth;
//						oTrack.offsetWidth = newWidth + 10 + "px";
//						console.log(oTrack.offsetWidth)
//					}, 0)
					
					
				}.bind(this))

			}
		},
		computed: mapState([
			"hashM",
			"urlM",
			"musicM",
			"songName",
			"prevIndex",
			"nextIndex"
		])
	}
</script>