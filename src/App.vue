<script setup>
import Navbar from "./components/Navbar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <Navbar/>
  <div class="background absolute w-dvw h-dvh bg-black z-[-1]" ></div>
  <div class="main-container m-auto h-2/3 w-2/3 p-4 rounded-sm overflow-y-scroll bg-page text-black">
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

.background {
  mask-image: url("dotsbg.svg");
  mask-size: 25px;
  mask-mode: alpha;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.main-container {
  box-shadow: black 1px 1px 4px;
}
</style>
