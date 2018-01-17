const mutations={
	changeTitle(state,name){
		state.title=name
	},
	addList(state,n){
		state.mList=n
	},
    hash(state,index){
        state.hashM=state.mList[index].hash;
        state.nextIndex=index+1;
        state.prevIndex=index-1;
    },
    addImg(state,url){
        state.urlM=url.replace("{size}/","")
        console.log(state.urlM)
    },
    addMusic(state,url){
        state.musicM=url
        console.log(url)
    },
    title(state,url){
        state.songName=url;
    }
}
export default mutations;