// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Home from './components/Home'
import TimeEntries from './components/TimeEntries'

import 'bootstrap/dist/css/bootstrap.css'

//注册两个插件 vue-router vue-resource
Vue.use(VueRouter)
Vue.use(VueResource)

const Homea = { template: '<div>default</div>' }

const routes = [
	{
		path: '/',
		component: Homea
	},
	{
		path: '/home',
		component: Home
	},
	{
		path: '/time-entries',
		component: TimeEntries
	}
	// {
	// 	path: '*',
	// 	component: NotFound
	// }
]

const router = new VueRouter({
	routes // (缩写)相当于 routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')
