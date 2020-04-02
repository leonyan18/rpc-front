import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import Axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import "echarts/lib/component/title";
import VCharts from 'v-charts'
import Dashboard from './components/Dashboard'
import RequestData from './components/RequestData'
import LinkQuery from './components/LinkQuery'

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VCharts);
const routes = [
    {path: '', component: Dashboard},
    {path: '/dashboard', component: Dashboard},
    {path: '/linkQuery', component: LinkQuery},
    {path: '/requestData', component: RequestData}
];
const router = new VueRouter({
    mode: 'history',  //h5模式
    routes // (缩写) 相当于 routes: routes
});
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});
