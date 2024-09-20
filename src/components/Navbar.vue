<script setup>
import DarkMode from "./DarkMode.vue";
</script>

<template>
  <nav>
    <h2>Khang Tran</h2>
    <DarkMode/>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;

  /* background: url(/broken-noise.png); */
  /* backdrop-filter: blur(10px);
    mask-image: linear-gradient(#000 90%, transparent 100%); */
  filter: drop-shadow(0 0 10px #000000aa);
  background: var(--background);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: var(--white);
}
</style>