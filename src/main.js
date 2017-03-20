// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Home from './components/Home'
import TimeEntries from './components/TimeEntries'
import LogTime from './components/LogTime'

import 'bootstrap/dist/css/bootstrap.css'
import './assets/style/base.scss'

//注册两个插件 vue-router vue-resource
Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
	{
		path: '/home',
		component: Home
	},
	{
		path: '/time-entries',
		component: TimeEntries,
		children: [{
			path: 'log-time',
			component: LogTime
		}]
	}

]

const router = new VueRouter({
	routes // (缩写)相当于 routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
}).$mount('#app')
