// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//视频播放器
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)

//u3转换
const hls = require("videojs-contrib-hls")
Vue.use(hls)

//element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// flv播放器
import flvjs from 'flvjs';
Vue.use(flvjs);

// 请求axios
import axios from "../src/assets/axios"

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.HOST="/api"






/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
