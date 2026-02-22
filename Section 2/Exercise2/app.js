const app = Vue.createApp({
  data() {
    return {
        message: "Master Vue.js course",
        inputName: "",
        name: ""
    };
  },
  methods:{
    submit(){
        alert(this.message);
    },
    register(event){
        this.inputName = event.target.value;
    },
    confirmName(){
        this.name = this.inputName;
    }
  }
});

app.mount('#assignment')
