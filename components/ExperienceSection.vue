<template>
  <div>
    <h3 class="text-text-primary text-3xl">
      <span class="text-primary text-xl">02. </span>
      Where I Have Worked
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
      'Work alongside other engineers, designers, project managers and other creatives to provide an embedded teams solution for our clients',
      'Build and ship full stack applications for our clients using technologies like Laravel, Vue, React and many others to help solve their business requirements',
      'Assist other engineers with any technical knowledge or experience I have that may help guide them to better solve problems they are working on with their clients',
      'Run weekly group sessions where we improve our technical and professional skills as a software engineer by working on group programming and other engineering exercises in a collaboriative effort',
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
    ],
  },
];
</script>
