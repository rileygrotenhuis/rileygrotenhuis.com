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
            class="text-primary hover:underline"
          >
            {{ projects[projectIndex].title }}
          </a>
        </h3>
        <p class="mt-2 text-sm font-extralight">
          {{ projects[projectIndex].subtitle }}
        </p>
        <ul class="flex flex-col gap-2 list-disc text-primary ml-4 mt-4">
          <li
            v-for="(text, index) in projects[projectIndex].description"
            :key="index"
          >
            <span class="text-white font-light">{{ text }}</span>
          </li>
          <li>
            <span class="text-white font-light">
              Technologies Used:
              {{ projects[projectIndex].technologies.join(', ') }}
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
    description: [
      'Corvesive is a budgeting application that focuses on tracking your personal finances over customizable segments of time.',
      'This project has seem multiple iterations over the entirety of 2023, including the original version that was created with the purpose of tracking a personal daily allowance that I gave myself during one of my vacations. That then transitioned into focusing on more modern budgeting application until the current version that exists today.',
      'After registering with Corvesive, users gain the ability to input their paystubs, bills, budgets, and savings they have throughout the month. Users can then enhance their financial oversight by organizing monthly transactions into more personalized and adaptable time segments called Pay Periods. Additionally, our platform offers comprehensive metrics and dashboard reports to facilitate a more insightful overview of your monthly finances that work in tandem with our transactions feature.',
    ],
    technologies: ['Laravel', 'Nuxt', 'TailwindCSS', 'MySQL'],
  },
  {
    index: 1,
    title: 'rbranch',
    subtitle: 'Custom CLI tool for Git branch operations',
    url: 'https://github.com/rileygrotenhuis/rbranch',
    description: [
      'rbranch is a custom CLI tool used for making Git branch operations much easier.',
      'The motivation for making this tool came from working on projects that utilize issue tracking tools like Jira or Trello, and having Git branch names having issue ID prefixes attached to them. This can make doing simple Git branch operations like merging, rebasing, and even simple operations like checking out a branch, much more time consuming. Now I probably could’ve just found a tool that probably already exists, but instead of taking the five seconds to Google it I decided to use it as an excuse to learn Go and build something useful at the same time.',
      'Users simply type “rbranch” followed by an optional command flag to denote the branch operation, to produce a list of their available Git branches in which they can select from using their arrow keys and your keyboard. Instead of using some helpful built-in features in most modern terminals, users can view all available branches in a larger window to scroll and select from.',
    ],
    technologies: ['Go', 'Bubbletea'],
  },
  {
    index: 2,
    title: 'Ripcord',
    subtitle: 'Build chart.js components with PHP',
    url: 'https://github.com/rileygrotenhuis/ripcord',
    description: [
      'Ripcord is a lightweight and user-friendly Composer package designed to streamline the creation of chart.js components in PHP, facilitating seamless integration with frontend JavaScript applications.',
      'Utilizing the included chart builder class, you gain the capability to effortlessly create a variety of chart types. This tool provides access to an array of methods for validating your chart data and generating the requisite code to render your chart accurately and efficiently.',
      'Ripcord currently offers the following chart types: bar, line, pie, scatter, and bubble.',
    ],
    technologies: ['PHP', 'Composer'],
  },
];
</script>
