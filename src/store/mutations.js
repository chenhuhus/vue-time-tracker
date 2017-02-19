
import * as types from './mutation-types'

// ES2015 风格的计算属性命名功能来使用一个常量作为函数名
export default {
  // 增加总时间
  [types.ADD_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime + time
  },

  // 减少总时间
  [types.DEC_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime - time
  },

  // 新增计划
  [types.SAVE_PLAN] (state, plan) {
    state.list.push(
      Object.assign({}, plan)
    )
  },

  // 删除某计划
  [types.DELETE_PLAN] (state, idx) {
    state.list.splice(idx, 1);
  }
};