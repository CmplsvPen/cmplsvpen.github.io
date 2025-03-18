<script setup>
import Navbar from "./components/Navbar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <Navbar/>
  <div class="m-auto h-2/3 w-1/2 p-4 rounded-sm overflow-y-scroll bg-page text-black">
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
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
