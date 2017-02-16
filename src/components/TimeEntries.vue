<template>
  <div class="time-entries">

    <router-link v-if="$route.path !== '/time-entries/log-time'" to="/time-entries/log-time" class="btn btn-primary">
      创建
    </router-link>

    <div v-if="$route.path === '/time-entries/log-time'">
      <h3>创建</h3>
    </div>

    <hr>

    <router-view></router-view>

    <ul class="list-group">
      <li class="list-group-item" v-for="(plan, index) in plans">
        <div class="row">
          <div class="col-sm-2 user-details">
            <img v-bind:src="plan.avatar" class="avatar img-responsive img-circle">
            <p class="text-center"> {{ plan.name }} </p>
          </div>
          <div class="col-sm-2 text-center time-block">
            <h3 class="total-time">
              <i class="glyphicon glyphicon-time"></i>
              {{ plan.totalTime }}
            </h3>
            <p>
              <i class="glyphicon glyphicon-calendar"></i>
              {{ plan.date }}
            </p>
          </div>
          <div class="col-sm-7 comment-section">
            <p>{{ plan.comment }}</p>
          </div>
          <div class="col-sm-1">
            <button class="btn btn-danger">X</button>
          </div>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'TimeEntries',
  computed: {
    plans() {
      return this.$store.state.list
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .user-details {
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;

    .avatar {
      height: 75px;
      margin: 0 auto;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }

  .comment-section {
    padding: 20px;
  }

</style>
