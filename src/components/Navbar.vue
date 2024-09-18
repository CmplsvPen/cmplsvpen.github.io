<script setup>
  import DarkMode from "./DarkMode.vue";
</script>

<template>
  <nav>
    <h2>Khang Tran</h2>
    <DarkMode></DarkMode>
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
    filter: drop-shadow(0 0 10px black);
    background: var(--background);

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    color: var(--white);
  }

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>