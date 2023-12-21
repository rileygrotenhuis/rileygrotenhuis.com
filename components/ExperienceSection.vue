<template>
  <div>
    <h3 class="text-text-primary text-3xl">
      <span class="text-primary text-xl">02. </span>
      My professional experience
    </h3>
    <div class="flex flex-col md:flex-row gap-4">
      <div class="flex flex-row md:flex-col text-sm font-extralight">
        <button
          v-for="experience in experiences"
          :key="experience.index"
          :aria-label="experience.company"
          :class="`cursor-pointer w-48 h-10 ${
            experience.index === experienceIndex
              ? 'text-primary border-primary'
              : 'text-white border-white'
          } hover:text-primary border-l`"
          @click="experienceIndex = experience.index"
        >
          {{ experience.company }}
        </button>
      </div>
      <div>
        <h3 class="text-lg">
          {{ experiences[experienceIndex].title }}
          <a
            :href="experiences[experienceIndex].company_url"
            target="__blank"
            class="text-primary"
          >
            @{{ experiences[experienceIndex].company }}
          </a>
        </h3>
        <p class="text-text-secondary mt-2 text-sm font-extralight">
          {{ experiences[experienceIndex].dates }}
        </p>
        <ul class="flex flex-col gap-2 list-disc text-primary ml-4 mt-4">
          <li
            v-for="(text, index) in experiences[experienceIndex].description"
            :key="index"
          >
            <span class="text-white font-light">{{ text }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const experienceIndex = ref(0);

const experiences = [
  {
    index: 0,
    title: 'Software Engineer',
    company: 'Midwestern',
    company_url: 'https://www.buildmidwestern.com',
    dates: 'November 2021 - Present',
    description: [
      "Work alongside other engineers, designers, and other various roles to deliver comprehensive embedded team solutions for our clients' software projects",
      'Implemented real-time card payment functionality into self-serve kiosks for school cafeterias by integrating a Stripe card reader terminal. This enhancement facilitated thousands of transactions, enhancing the user experience and operational efficiency.',
      'Integrated a data analytics platform with multiple data warehouses to provide customers with the ability to build pipelines and visualize their data in a single platform.',
      'The technologies I work with on a day-to-day basis include Laravel, Nuxt (Vue), MySQL, and Docker.',
    ],
  },
  {
    index: 1,
    title: 'Student Web Developer',
    company: 'Missouri State',
    company_url: 'https://www.missouristate.edu/Web/default.htm',
    dates: 'January 2021 - November 2021',
    description: [
      'Developed and maintained applications and internal tools used at Missouri State University by various faculty, staff, and students.',
      'Increased the efficiency of a transition in content management systems by writing a tool that utilized the APIs of both CMSs to migrate web assets from one platform to another without the need for long, manual work.',
      'Collaborated closely with the student employment offices to add features and improve their internal tool that handled their approval process for student employment candidates.',
      'Most of my work consisted of .NET technologies such as ASP.NET and C#, but I also got the chance to work with Javascript frameworks like Next (React).',
    ],
  },
];
</script>
