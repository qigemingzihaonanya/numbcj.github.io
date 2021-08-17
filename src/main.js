import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUi from 'element-ui'
import VueAMap from 'vue-amap'

Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: '7d2cb18b5d6436448dff0abc08bbd88b',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  v: '1.4.4'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
