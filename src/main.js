import { createApp, VueElement } from 'vue'
import LoadScript from "vue-plugin-load-script";
import App from './App.vue'

import './assets/default.css'
import './assets/layout.css'
import './assets/media-queries.css'
import './assets/magnific-popup.css' 
import './assets/images/loader.gif'


const app = createApp(App);
app.use(LoadScript);
 

createApp(App).mount('#app')
