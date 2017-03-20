<template>
	<div class="form-horizontal">
		<div class="form-group">
			<div class="col-sm-6">
				<label>日期</label>
				<input
					type="date"
					class="form-control"
					v-model="date"
					placeholder="Date"
				/>
			</div>
			<div class="col-sm-6">
				<label>时间</label>
				<input
					type="number"
					v-model="totalTime"
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
					v-model="comment"
					placeholder="Comment"
				/>
			</div>
		</div>
		<button class="btn btn-primary" v-on:click="save()">保存</button>
		<router-link to="/time-entries" class="btn btn-danger">取消</router-link>

		<hr>
	</div>

</template>

<script>
export default {
	name: 'LogTime',
	data() {
		return {
			date: '',
			totalTime: '',
			comment: ''
		}
	},
	methods: {
		save() {
			const plan = {
				name: 'chenhhs',
				avatar: 'http://upload.jianshu.io/users/upload_avatars/1392599/5b92f79692ee.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',
				date: this.date,
				totalTime: this.totalTime,
				comment: this.comment
			};
			this.$store.dispatch('savePlan', plan)
			this.$store.dispatch('addTotalTime', this.totalTime)
			this.$router.go(-1)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
