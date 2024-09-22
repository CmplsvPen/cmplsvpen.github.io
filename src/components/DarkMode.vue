<script setup>
  import { useDark, useToggle } from '@vueuse/core'

  const darkMode = useDark({ disableTransition: false });
  const toggleDarkMode = useToggle(darkMode);

</script>

<template>
  <span @click="toggleDarkMode()" id="dark-mode-button">
    <img v-show="!darkMode" src="/sun.svg"/>
    <img v-show="darkMode" src="/moon.svg"/>
  </span>
</template>

<style scoped>
  #dark-mode-button {
    cursor: pointer;
  }
</style>