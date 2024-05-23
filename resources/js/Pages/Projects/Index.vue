<script setup>
import { computed, ref, markRaw } from 'vue';
import MainLayout from '@/Layouts/MainLayout.vue';
import ProjectTabs from '@/Pages/Projects/Partials/ProjectTabs.vue';
import GitIcon from '@/Components/Icons/GitIcon.vue';
import PhpIcon from '@/Components/Icons/PhpIcon.vue';
import LaravelIcon from '@/Components/Icons/LaravelIcon.vue';
import JavascriptIcon from '@/Components/Icons/JavascriptIcon.vue';
import NodeIcon from '@/Components/Icons/NodeIcon.vue';
import VueIcon from '@/Components/Icons/VueIcon.vue';
import TailwindIcon from '@/Components/Icons/TailwindIcon.vue';
import DockerIcon from '@/Components/Icons/DockerIcon.vue';
import MySqlIcon from '@/Components/Icons/MySqlIcon.vue';
import GithubIcon from '@/Components/Icons/GithubIcon.vue';
import GoIcon from '@/Components/Icons/GoIcon.vue';

const selectedProject = ref(0);

const projects = ref([
  {
    name: 'Corvesive',
    prodUrl: 'https://corvesive.com',
    githubUrl: 'https://github.com/rileygrotenhuis/corvesive',
    actionText: 'Get started',
    content: [],
    stack: [
      markRaw(PhpIcon),
      markRaw(LaravelIcon),
      markRaw(JavascriptIcon),
      markRaw(NodeIcon),
      markRaw(VueIcon),
      markRaw(TailwindIcon),
      markRaw(DockerIcon),
      markRaw(MySqlIcon),
    ],
  },
  {
    name: 'AirQueue',
    prodUrl: 'https://airqueue.live',
    githubUrl: 'https://github.com/rileygrotenhuis/airqueue',
    actionText: 'Get started',
    content: [
      'AirQueue is an online platform that easily allows you to get live song recommendations and send recommendations to your friends as well. Simply register an account, connect your Spotify account, and then start up a live session with your friends. View the incoming stream of song recommendations for you and then approve them to be added to your live Spotify player’s queue to listen to!',
      'This project has had many different variations over the past few years as the initial inspiration was a way for hosts to manage numerous song requests at live events (a wedding for example). Getting this project right has been in the back of my mind for the last several years, and I feel with this current version I can finally lay those thoughts to rest. While I don’t plan on adding any major features in the near future I plan on doing my best to maintain it so it’s at least in a usable state.',
    ],
    stack: [
      markRaw(PhpIcon),
      markRaw(LaravelIcon),
      markRaw(JavascriptIcon),
      markRaw(NodeIcon),
      markRaw(VueIcon),
      markRaw(TailwindIcon),
      markRaw(DockerIcon),
      markRaw(MySqlIcon),
    ],
  },
  {
    name: 'rbranch',
    prodUrl: 'https://github.com/rileygrotenhuis/rbranch',
    githubUrl: 'https://github.com/rileygrotenhuis/rbranch',
    actionText: 'View on Github',
    content: [
      'rbranch is a CLI tool built using Go and Bubbletea for those who are too lazy to type out those super long and annoying git branch names. Making your life maybe 2% easier, you can now simply use the "rbranch" with a few additional flags to easily perform simple git branch operations.',
      'The inspiration for this project was born from the pain of a certain, unnamed project management software and how it integrates with Github projects. To connect a task card to a specific git branch, you could include the UUID for that specific task in the naming of the git branch. Which I’m sure you could imagine gets quite annoying when you are switching branches on a consistent basis.',
      'So instead of switching my entire workflow over to using a popular git GUI, I built this custom CLI tool.',
    ],
    stack: [markRaw(GoIcon), markRaw(GitIcon)],
  },
  {
    name: 'Laravel Ecosystem',
    prodUrl: 'https://www.youtube.com/watch?v=kHjGp0Xtinw',
    githubUrl: 'https://github.com/rileygrotenhuis/the-laravel-ecosystem',
    actionText: 'Watch it now!',
    content: [
      'In March of 2024 I spoke at the eFactory in Springfield, Missouri for a SGF Devs Tech Talk to discuss the Laravel framework and it’s surrounding ecosystem of packages. I performed a live coding demo, creating a new Laravel application from scratch to show how easy it is to integrate different features and services into your project. This was all to showcase the vast library of first-party supported packages, and how powerful Laravel can be.',
    ],
    stack: [markRaw(LaravelIcon), markRaw(PhpIcon), markRaw(DockerIcon)],
  },
]);

const currentProject = computed(() => {
  return projects.value[selectedProject.value];
});
</script>

<template>
  <MainLayout>
    <div class="max-w-4xl min-h-[55vh] mx-auto px-8 mt-16">
      <ProjectTabs
        :projects="projects"
        :currentProject="selectedProject"
        @updateCurrentProject="selectedProject = $event"
      />

      <div class="w-full mt-16">
        <div class="flex justify-between items-center mb-8">
          <a :href="currentProject.prodUrl" target="_blank">
            <h2
              class="text-3xl font-semibold text-white hover:text-primary-700 transition-all ease-in-out"
            >
              {{ currentProject.name }}
            </h2>
          </a>

          <a :href="currentProject.githubUrl" target="_blank" class="mr-2">
            <GithubIcon />
          </a>
        </div>
        <p
          v-for="(content, index) in currentProject.content"
          :key="index"
          class="text-white mt-4"
        >
          {{ content }}
        </p>

        <div
          v-if="currentProject.stack"
          class="flex justify-start items-center flex-wrap gap-8 mt-8"
        >
          <component
            v-nfor="(icon, index) in currentProject.stack"
            :key="index"
            :is="icon"
          />
        </div>

        <div class="flex justify-end mt-8">
          <a
            :href="currentProject.prodUrl"
            target="_blank"
            class="bg-primary-700 text-white text-base font-semibold py-1 px-4 rounded-lg hover:bg-primary-500 transition-all ease-in-out"
          >
            {{ currentProject.actionText }}
          </a>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
