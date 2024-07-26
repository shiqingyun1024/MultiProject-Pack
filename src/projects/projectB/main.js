import '../../assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from '../../router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
// // 获取命令行参数
// const argv = process.argv;
// // const process = process;
// console.log('argv数据如下：', argv)
// console.log('process数据如下：', process)
