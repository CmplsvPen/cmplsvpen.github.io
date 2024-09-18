<script setup>
import Navbar from "./components/Navbar.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Projects from "./components/Projects.vue";
</script>

<template>
  <Navbar/>
  <div class="main-content">
    <HelloWorld msg="Vite + Vue" />
    <Projects>hyuh?</Projects>
  </div>
</template>

<style scoped>
.main-content {
  margin-top: 5em;
}
</style>
