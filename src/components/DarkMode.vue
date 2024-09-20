<script setup>
  import { useDark, useToggle } from '@vueuse/core'

  const darkMode = useDark({ disableTransition: false });
  const toggleDarkMode = useToggle(darkMode);

</script>

<template>
  <span @click="toggleDarkMode()" id="dark-mode-button">
    <img v-if="!darkMode" src="/sun.svg"/>
    <img v-if="darkMode" src="/moon.svg"/>
  </span>
</template>

<style scoped>
  #dark-mode-button {
    cursor: pointer;
  }
</style>