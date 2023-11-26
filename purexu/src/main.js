import Vue from 'vue'
import App from './App.vue'

// 引入ElementUI组件库
import ElementUI from 'element-ui';
// 引入ElementUI全部样式
import 'element-ui/lib/theme-chalk/index.css';


//关闭Vue的生产提示
Vue.config.productionTip = false

Vue.use(ElementUI);


new Vue({
	el:'#app',
	render: h => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this
	}
})
