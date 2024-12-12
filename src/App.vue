<script setup>
import Navbar from "./components/Navbar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <Navbar/>
  <div class="main-content">
    <router-view v-slot="{ Component }">
      <transition mode="out-in">
        <!-- <div :key="$route.path"> -->
          <component :is="Component" />
        <!-- </div> -->
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.main-content {
  padding: 4rem 0;
  max-width: 50rem;
  min-height: calc(100vh - 8rem);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
