<template>
  <h2>Projects</h2>
  <div class="project-container">
    <div class="project-card">
      <a href="rodeo.freetailhackers.com">Rodeo</a>
      <img src="/bat.svg"></img>
      <p>An open source hackathon management website and official backend for Freetail Hackers' hackathons</p>
    </div>
    <div class="project-card">
      <a href="https://hacktx.com">HackTX 24</a>
      <img src="/hacktx.png"></img>
      <p>The frontend for the Freetail Hackers' 12th annual hackathon at UT Austin!</p>
    </div>
    <div class="project-card">
      <a href="https://freetailhackers.com/formula-hacks/">Formula Hacks</a>
      <img src="/formulaHacks.png"></img>
      <p>The frontend for the Freetail Hackers' 2023 spring hackathon at UT Austin!</p>
    </div>
  </div>
</template>

<style scoped>
  a {
    text-decoration: none;
    margin: 1em 0;
    display: block;
  }

  .project-container {
    width: 50em;
    column-width: 20em;
    column-rule: dashed var(--foreground);
  }

  .project-card {
    display: inline-block;
    border: 2px solid var(--foreground);
    padding: 1em;
    margin: 1em;
  }
</style>