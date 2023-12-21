<template>
  <div>
    <h3 class="text-text-primary text-3xl">
      <span class="text-primary text-xl">03. </span>
      Some of my personal projects
    </h3>
    <div class="flex flex-col md:flex-row gap-4">
      <div class="flex flex-row md:flex-col text-sm font-extralight">
        <button
          v-for="project in projects"
          :key="project.index"
          :aria-label="project.title"
          :class="`cursor-pointer w-48 h-10 ${
            project.index === projectIndex
              ? 'text-primary border-primary'
              : 'text-white border-white'
          } hover:text-primary border-l`"
          @click="projectIndex = project.index"
        >
          {{ project.title }}
        </button>
      </div>
      <div>
        <h3 class="text-lg">
          <a
            :href="projects[projectIndex].url"
            target="__blank"
            class="text-primary"
          >
            {{ projects[projectIndex].title }}
          </a>
        </h3>
        <p class="mt-2 text-sm font-extralight">
          {{ projects[projectIndex].subtitle }}
        </p>
        <ul class="flex flex-col gap-2 list-disc text-primary ml-4 mt-4">
          <li>
            <span class="text-white font-light">
              {{ projects[projectIndex].description }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const projectIndex = ref(0);

const projects = [
  {
    index: 0,
    title: 'Corvesive',
    subtitle: 'Segmented budgeting tool built using Laravel and Nuxt',
    url: 'https://www.corvesive.com',
    technologies: ['Laravel', 'Nuxt', 'MySQL'],
    description:
      'Corvesive is a budgeting application that focuses on tracking your personal finances over the course of customizable periods of times. This project has seen multiple iterations all trying to solve some of my own personal financial goals and needs, but this was the first time I have built it with the intention of releasing it to the public. You can signup for a free account and start trakcing your finances today!',
  },
  {
    index: 1,
    title: 'rbranch',
    subtitle: 'Custom CLI tool for Git branch operations',
    url: 'https://github.com/rileygrotenhuis/rbranch',
    technologies: ['Go', 'Bubbletea'],
    description:
      'On certain projects that I have been apart of in the past, I have found myself typing out annoying Git branch names with specific issue tracking numbers and other prefixes. Instead of taking the 5 minutes to search a pre-existing solution for this problem (or even using a Git GUI), I decided to build it myself. I also slightly am using this as an on-going excuse to learn Go.',
  },
];
</script>
