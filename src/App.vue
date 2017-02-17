<template>
  <div id="app" class="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>Brand
        </a>
        <ul class="nav navbar-nav">
          <li><router-link to="/home">HOME</router-link></li>
          <li><router-link to="/time-entries">LIST</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">
        <sidebar></sidebar>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'

export default {
  name: 'app',
  components: {
    Sidebar
  }
  // components: { 'sidebar': Sidebar }
}
</script>

<style>
</style>
