<script setup>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheResource from "./components/learning-resource/TheResource.vue";
</script>
<template>
  <TheHeader title="Remember Me" />
  <TheResource />
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
