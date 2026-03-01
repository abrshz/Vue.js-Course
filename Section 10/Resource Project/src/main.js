import { createApp } from "vue";
import App from "./App.vue";
import BasedCard from "./components/UI/BaseCard.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseDialog from "./components/UI/BaseDialog.vue";


const app = createApp(App);

// Register it globally
app.component("base-card", BasedCard);
app.component("base-button", BaseButton);
app.component("base-dialog", BaseDialog);


app.mount("#app");
