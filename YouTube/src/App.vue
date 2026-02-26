<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->


<!-- Sample Component -->
<script setup>
import { ref } from 'vue'
import Greeting from './components/Greeting.vue'
import Footer from './components/Footer.vue'

// Reactive data
const count = ref(0)
const year = ref(2026)

// Methods
const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}

const reset = () => {
  count.value = 0
}
</script>

 <template>
  <Greeting />
  <div class="counter">
    <h2>Counter App</h2>

    <p>Current Count: {{ count }}</p>

    <button @click="increment">Increment ➕</button>
    <button @click="decrement">Decrement ➖</button>
    <button @click="reset">Reset 🔄</button>
  </div>
  <Footer /> 
  <!-- <footer>
    <p>&copy; {{ year }} </p>
  </footer> -->
</template>

<style scoped>
.counter {
  text-align: center;
  padding: 30px;
  font-family: Arial, sans-serif;
}

h2 {
  color: #42b883;  /* Vue green */
}

p {
  font-size: 24px;
  font-weight: bold;
}

footer > p {
  color: lightblue;
}

button {
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 6px;
}

button:hover {
  background-color: #2d8a5e;
}
</style>


