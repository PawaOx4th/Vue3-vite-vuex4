import { createApp } from "vue";
import { store, key } from "./store/index";
import App from "./App.vue";

const app = createApp(App);
app.use(store, key);
app.mount("#app");
