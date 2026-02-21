// Create Vue.js
const app = Vue.createApp({
  data() {
    return {
      myName: "Abraham Haile Araya",
      myAge: 32,
      vueLogo: "https://vuejs.org/images/logo.png",
      imageDescription: "The official Vue.js Logo",
    };
  },
  methods: {
    fiveYear() {
      const finalYear = this.myAge + 5;
      return finalYear;
    },
    randomNumber() {
      const randomNumbers = Math.random();
      return randomNumbers;
    },
  },
});

app.mount("#assignment");
