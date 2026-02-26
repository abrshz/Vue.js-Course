const app = Vue.createApp({
  // ✅ FIX: Removed the misplaced `template` with favoriteMeal — that belongs to app2
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // ✅ FIX: Actually set the message using the ref value
      this.message = this.$refs.userText.value;
    },
  },
});
app.mount("#app");

const app2 = Vue.createApp({
  // ✅ FIX: template correctly placed in app2 where favoriteMeal data lives
  template: `<p>{{ favoriteMeal }}</p>`,
  data() {
    return {
      favoriteMeal: "Pizza",
    };
  },
});
app2.mount("#app2");
