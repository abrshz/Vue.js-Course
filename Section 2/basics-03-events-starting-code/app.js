const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: ""
    };
  },
  methods: {
    submitForm(){
      alert('Submitted!')
    },
    setName(event){
      this.name = event.target.value
    },
    increment() {
      return this.counter++;
    },
    decrement() {
      return this.counter--;
    },
  },
});

app.mount("#events");
