import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import "./registerServiceWorker";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faViruses } from "@fortawesome/free-solid-svg-icons";

library.add(faViruses);

createApp(App)
  .use(router)
  .mount("#app");
