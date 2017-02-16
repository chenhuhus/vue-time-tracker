import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//先写个假数据
const state = {
	totalTime: 3,
	list: [{
		name: 'chenhhs',
		avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
		date : '2017-02-16',
		totalTime: '3',
		comment: 'learning cost 2h'
	}]
}

export default new Vuex.Store({
	state
})