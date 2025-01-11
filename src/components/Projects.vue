<template>
  <section id="projects-section">
    <h2>Projects</h2>
    <div class="project-container">
      <div class="project-card">
        <img src="/rodeo.png"></img>
        <div class="project-info">
          <h3>HackTX 24</h3>
          <p>Hackathon Management App</p>
          <div class="project-links">
            <a target="_blank" href="https://gitlab.com/freetail-hackers/rodeo"><img src=/link.svg> Gitlab</a>
            <a target="_blank" href="https://rodeo.freetailhackers.com"><img src=/link.svg> Demo</a>
          </div>
          <span>Svelte</span>
          <span>Prisma</span>
          <span>TRPC</span>
          <span>Postgre SQL</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>
      </div>
      <div class="project-card">
        <img src="/HackTX24 Banner.png"></img>
        <div class="project-info">
          <h3>HackTX 24</h3>
          <p>Static frontend</p>
          <div class="project-links">
            <a target="_blank" href="https://gitlab.com/freetail-hackers/hacktx-website"><img src=/link.svg> Gitlab</a>
            <a target="_blank" href="https://hacktx.com"><img src=/link.svg> Demo</a>
          </div>
          <span>Three.JS</span>
          <span>Vite</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>
      </div>
      <div class="project-card">
        <img src="/formulaHacks.png"></img>
        <div class="project-info">
          <h3>Formula Hacks</h3>
          <p>Fullstack application</p>
          <div class="project-links">
            <a target="_blank" href="https://gitlab.com/freetail-hackers/hacktx-website/-/tree/mainline/archive/23" ><img src=/link.svg> Github</a>
            <a target="_blank" href="https://freetail-hackers.gitlab.io/formula-hacks/" ><img src=/link.svg> Demo</a>
          </div>
          <span>Svelte</span>
          <span>Prisma</span>
          <span>TRPC</span>
          <span>Postgre SQL</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  h3 {
    margin: 0;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    font-size: 0.8rem;
    color: var(--background);
    display: inline;
    margin: 0 0.5em 0 0;
  }

  .project-container {
    /* width: 50rem; */
    /* max-width: 80vw; */
    columns: 20em;
    gap: 0;
    /* column-rule: dashed var(--foreground); */
  }

  .project-card {
    display: inline-block;
    border: 2px solid var(--foreground);
    background: var(--foreground);
    color: var(--background);
    text-align: left;
    padding: 0.5em;
    margin: 1em;
  }

  .project-info {
    padding: 0.5em;
    padding-top: 0;
    font-size: 0.7em;
  }

  .project-links {
    margin-bottom: 0.25em;
  }

  .project-info span {
    /* background: var(--foreground); */
    /* color: var(--background); */
    display: inline-block;
    background: var(--background);
    color: var(--foreground);
    margin: 0.1em;
    padding: 0.1em 0.5em 0.3em 0.5em;
    border-radius: 0.5em;
    text-wrap: nowrap;
    font-size: 0.7rem;
    cursor: default;
    user-select: none;
  }
</style>