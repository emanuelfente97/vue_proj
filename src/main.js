import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "animate.css";
import AOS from 'aos'

createApp(App).use(router).mount("#app");
