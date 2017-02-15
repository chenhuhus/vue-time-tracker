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
        <div class="panel panel-default">
          <div class="panel-heading">已有时长</div>
          <div class="panel-body">0小时</div>
        </div>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// import Hello from './components/Hello'

export default {
  // name: 'app',
  // components: {
  // }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
