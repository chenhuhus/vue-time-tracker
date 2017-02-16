<template>
	<div class="form-horizontal">
		<div class="form-group">
			<div class="col-sm-6">
				<label>日期</label>
				<input
					type="date"
					class="form-control"
					placeholder="Date"
				/>
			</div>
			<div class="col-sm-6">
				<label>时间</label>
				<input
					type="number"
					class="form-control"
					placeholder="Hours"
				/>
			</div>
		</div>
		<div class="form-group">
			<div class="col-sm-12">
				<label>备注</label>
				<input
					type="text"
					class="form-control"
					placeholder="Comment"
				/>
			</div>
		</div>
		<button class="btn btn-primary">保存</button>
		<router-link to="/time-entries" class="btn btn-danger">取消</router-link>
	</div>

</template>

<script>
export default {
  // computed: {
    // time() {
    //   return this.$store.state.totalTime
    // }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
