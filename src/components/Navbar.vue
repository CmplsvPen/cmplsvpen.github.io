<script setup>
import { RouterLink } from "vue-router";
import DarkMode from "./DarkMode.vue";
</script>

<template>
  <nav>
    <h3 class="bg-page shadow-custom px-4 py-2">Khang Tran</h3>
    <span id="links" class="flex align-center bg-page shadow-custom">
      <RouterLink to="/">Projects</RouterLink>
      <RouterLink to="/skills">Skills</RouterLink>
      <a href="/Khang_Tran_Resume.pdf" target="_blank">Resume</a>
      <RouterLink to="/music">Music</RouterLink>
      <DarkMode/>
    </span>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 0.5rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  z-index: 100;
}

h3 {
  margin: 1em 0.5em;
}
#links > * {
  padding: 0.5em 0.5em;
}
a {
  text-decoration: none;
}
a:hover {
  background-color: var(--color-page-darker);
}
a.router-link-active {
  text-decoration: underline;
}
</style>