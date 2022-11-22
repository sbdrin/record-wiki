<script>
export default {
	name: "gButton",
	props: ['command'],
	data() {
		return {
			buttonName: "示例",
			show: false
		};
	},
	methods: {
		change() {
			window.postMessage({ type: 'open', command: this.command }, '*')
		}
	},
	beforeMount() {
		if (window.sideNames) {
			if (window.sideNames.includes(this.command)) {
				this.show = true
			}
		} else {
			window.addEventListener('message', event => {
				if (event.data.type === 'showButton') {
					if (window.sideNames.includes(this.command)) {
						this.show = true
					}
				}
			})
		}
	},
	render() {
		return (
			<span>
				{
					this.show
						? (
							<span class="g-button-text" onClick={this.change}>{this.buttonName}</span>
						)
						: null
				}
			</span>
		)
	}
}
</script>

<style lang="scss">
.g-button-text {
	color: #409eff;
	cursor: pointer;
	font-size: 16px;
	font-weight: 400;
	margin-left: 20px;
}
</style>