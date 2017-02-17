
// 每一个 Vuex 应用的核心就是 store（仓库）。
// "store" 基本上就是一个容器，它包含着你的应用中大部分的状态(state)

// index.js : 传入state/mutations/actions来初始化Store
// 有需要的话还可能创建 getter
// 需要2个全局数据：总时间、计划列表的数组

import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
	totalTime: 1,
	list: []
}

//先写个假数据
// const state = {
// 	totalTime: 3,
// 	list: [{
// 		name: 'chenhhs',
// 		avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
// 		date : '2017-02-16',
// 		totalTime: '3',
// 		comment: 'learning cost 3h'
// 	}]
// }

export default new Vuex.Store({
	state,
	mutations,
	actions
})