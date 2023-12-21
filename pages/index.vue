<template>
  <HeroSection class="w-5/6 md:w-4/6 mx-auto mt-8 md:mt-24 max-w-[1100px]" />
  <AboutSection
    id="about"
    class="w-3/4 lg:w-7/12 mx-auto mt-72 flex flex-col md:flex-row gap-16 xl:mt-96 max-w-[1000px]"
  />
  <ExperienceSection
    id="experience"
    class="w-3/4 lg:w-1/2 mx-auto mt-72 xl:mt-96 flex flex-col gap-12 max-w-[1000px]"
  />
  <ProjectsSection
    id="projects"
    class="w-3/4 lg:w-1/2 mx-auto mt-72 xl:mt-96 flex flex-col gap-12 max-w-[1000px]"
  />
  <ContactSection
    id="contact"
    class="w-3/4 lg:w-[550px] text-center mx-auto mt-72 xl:mt-96 font-extralight"
  />
</template>

<script setup lang="ts">
useHead({
  title: 'Riley Grotenhuis',
  meta: [
    {
      name: 'description',
      content:
        'Riley Grotenhuis is a software engineer based out of the United States.',
    },
  ],
});
</script>
