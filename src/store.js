//定义一个用于储存功能的js文件模块
//给模块有两个功能：一个fetch，一个save

const STORAGE_KEY = 'my-first-vue-project'
export default {
	fetch() {
		return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
	},
	save(items) {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
	}
}