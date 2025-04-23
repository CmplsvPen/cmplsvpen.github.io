<script setup>
  import SkillItem from './SkillItem.vue';
</script>

<template>
  <section id="skills">
    <h2>Skills</h2>
    <div class="flex p-4 gap-4">
      <div class="w-1/2 grid grid-cols-[repeat(auto-fit,minmax(3em,1fr))] grid-rows-[repeat(auto-fit,minmax(3em,1fr))] rounded-sm gap-4 p-2 bruh">
        <SkillItem icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg" skill="Svelte"/>
        <SkillItem icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" skill="React"/>
        <SkillItem icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" skill="Vue"/>
        <SkillItem icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" skill="TailwindCSS"/>
        <SkillItem icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" skill="PostgreSQL"/>
        <SkillItem icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg" skill="Apache Spark"/>
        <SkillItem icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hadoop/hadoop-original.svg" skill="Hadoop"/>
        <SkillItem icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg" skill="Three.js"/>
        <SkillItem icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" skill="Vite"/>
        <SkillItem icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" skill="Python"/>
        <SkillItem icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" skill="C/C++/C#"/>
        <SkillItem icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trpc/trpc-original.svg" skill="tRPC"/>
        <SkillItem icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" skill="HTML"/>
        <SkillItem icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" skill="CSS"/>
        <SkillItem icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" skill="JavaScript"/>
        <SkillItem icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" skill="TypeScript"/>
        <SkillItem icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" skill="Blender"/>
        <SkillItem icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gimp/gimp-original.svg" skill="GNU Image Manipulation Program"/>
        <SkillItem icon=""/>
        <SkillItem/>
        <SkillItem/>
        <SkillItem/>
        <SkillItem/>
        <SkillItem/>
        <SkillItem/>
        <SkillItem/>
        <SkillItem/>
        <SkillItem/>
        <SkillItem/>
        <SkillItem/>
        <SkillItem/>
        <SkillItem/>
        <SkillItem/>
        <SkillItem/>
        <SkillItem/>
        <SkillItem/>
        <SkillItem/>
        <SkillItem/>
        <SkillItem/>
        <SkillItem/>
      </div>
      <div class="w-1/2">
        Lorem ipsum
      </div>
    </div>
  </section>
</template>

<style>
  .bruh {
    background: radial-gradient(circle, #000 1px, transparent 1px);
    background-size: 3em 3em;
    box-shadow: inset 0 0 4px #000;
    position: relative;
  }
</style>