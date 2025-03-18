<script setup>
import { ref } from 'vue';

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  skill: {
    type: String,
    required: true
  },
  blurb: {
    type: String,
    required: true
  }
});

const audioRef = ref(null);

const playSound = () => {
  if (audioRef.value) {
    audioRef.value.currentTime = 0; // Reset playback to the start
    audioRef.value.play();
  }
};
</script>

<template>
  <div @mouseover="playSound" class="skill-item h-8 w-8 bg-red-500">
    <img :src="icon" class="icon" />
    <audio ref="audioRef" src="src/assets/sfx/click.mp3" preload="auto"></audio>
    <span class="tooltip">
      <strong>{{ skill }}</strong>{{ blurb }}
    </span>
  </div>
</template>


<style scoped>
.skill-item {
  position: relative;
}

.skill-item .tooltip {
  position: absolute;
  top: 0;
  left: 100%;
  visibility: hidden;
  background-color: black;
  color: #fff;
  z-index: 1;
}

.skill-item:hover .tooltip {
  visibility: visible;
}
</style>