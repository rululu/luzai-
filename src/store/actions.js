const actions={
	changeTitle({commit},n){
		commit("changeTitle",n)
	},
	addList({commit},n){
		commit("addList",n)
	},
	hash({commit},n){
		commit("hash",n)
	},
	addImg({commit},n){
		commit("addImg",n)
	},
	addMusic({commit},n){
		commit("addMusic",n)
	},
	title({commit},n){
		commit("title",n)
	}
}


export default actions;
