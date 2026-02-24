const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    submitForm() {
      alert("Submitted!");
    },
    setName(event) {
      this.name = event.target.value;
    },
    increment() {
      return this.counter++;
    },
    decrement() {
      return this.counter--;
    },
    resetName() {
      this.name = "";
    },
  },
});

app.mount("#events");
