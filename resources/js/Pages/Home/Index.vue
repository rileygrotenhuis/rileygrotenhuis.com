<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
import Landing from '@/Pages/Home/Partials/Landing.vue';
import CorvesiveBanner from '@/Pages/Home/Partials/CorvesiveBanner.vue';
import ProjectsBanner from '@/Pages/Home/Partials/ProjectsBanner.vue';
import AboutSection from '@/Pages/Home/Partials/AboutSection.vue';
import ContactSection from '@/Pages/Home/Partials/ContactSection.vue';
</script>

<template>
  <MainLayout>
    <Landing />
    <AboutSection />
    <CorvesiveBanner />
    <ProjectsBanner />
    <ContactSection />
  </MainLayout>
</template>
