# my-first-vue-project

> this is my first vue project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


组件划分：
功能模块：select， pagenation
页面区域：header， footer, sidebar

将组件 引入进来后，还需要在new Vue里通过components注册尽量方可使用
new Vue({
	components: {Header, Footer}
})
