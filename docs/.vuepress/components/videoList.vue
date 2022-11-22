<template>
	<div>
		<div v-if="list.length"
			 class="video-box">
			<div v-for="(item,index ) in list"
				 :key="index"
				 class="video-list"
				 @click="handeDeail(item)">
				<img src="./images/test.png"
					 alt="">
				<p class="title"
				   :title="item.title">{{item.title}}</p>
				<p class="brief"
				   :title="item.brief"> <b>学习要点：</b>{{item.brief}}</p>
			</div>
		</div>
		<p v-else
		   class="no-data">
			暂无教学视频
		</p>
	</div>

</template>

<script>
import config from "../config";
export default {
	name: "videoList",
	props: ['command'],
	data() {
		return {
			list: []
		}
	},
	beforeMount() {
		console.log(window.baseUrl)
		window.fetch(config.base + "videos/" + this.command + '.json')
			.then((res) => res.json())
			.then((data) => {
				this.list = data.videosList;
			});
	},
	methods: {
		handeDeail(item) {
			item.url && window.open(item.url)
		}
	}
}
</script>

<style lang="scss">
.no-data {
	width: 100%;
	font-size: 24px;
	text-align: center;
	margin-top: 100px;
	color: #666;
}
.video-box {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	.video-list {
		cursor: pointer;
		margin: 20px 0;
		font-size: 14px;
		width: 30%;
		p {
			overflow: hidden;
		}
		.title {
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		.brief {
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
		}
	}
}
</style>