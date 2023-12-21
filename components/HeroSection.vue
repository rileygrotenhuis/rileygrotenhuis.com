<template>
  <div>
    <span class="text-primary">Hello, my name is</span>
    <h1 class="text-5xl md:text-6xl text-white font-bold mt-4 mb-4">
      Riley Grotenhuis.
    </h1>
    <h3
      class="text-5xl md:text-6xl text-slate-400 font-bold opacity-100 animate-fade-in"
    >
      {{ slogan }}
    </h3>
    <p class="text-white font-extralight w-5/6 md:w-2/4 mt-4 mb-2">
      Software engineer at
      <a
        class="text-primary font-normal hover:underline"
        href="https://www.buildmidwestern.com/"
        >Midwestern Interactive
      </a>
      based in Springfield, MO.
    </p>
    <div class="flex gap-2 items-center">
      <a href="https://github.com/rileygrotenhuis" target="__blank">
        <IconsGitHubIcon />
      </a>
      <a href="https://www.linkedin.com/in/rileygrotenhuis" target="__blank">
        <IconsLinkedInIcon />
      </a>
    </div>
  </div>
</template>

<style>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-in;
}
</style>

<script setup lang="ts">
const slogans = [
  'Professional code maestro.',
  'Professional code monkey.',
  'I build things for the web.',
  'I write code and other stuff.',
];

const slogan = slogans[Math.floor(Math.random() * slogans.length)];
</script>
