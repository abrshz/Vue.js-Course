<script setup>
import {ref} from 'vue'

const darkMode = ref(true);

setTimeout(()=>{
    darkMode.value = !darkMode.value;
}, 5000)

</script>

<template>
    <button>{{ darkMode }}</button>
</template>

<style scoped>
</style>






