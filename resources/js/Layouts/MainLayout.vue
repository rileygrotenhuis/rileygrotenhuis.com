<script setup>
import { ref } from 'vue';

const pages = ref([
  { label: 'About', path: '#' },
  { label: 'Experience', path: '#' },
  { label: 'Projects', path: '#' },
  { label: 'Contact', path: '#' },
]);
</script>

<template>
  <div>
    <nav>
      <div
        class="max-w-4xl mx-auto flex justify-between items-center px-8 py-6"
      >
        <h1 class="text-2xl font-bold uppercase">RG.</h1>

        <a
          class="bg-primary-700 text-white px-6 py-1 rounded-md font-bold hover:bg-primary-500"
          href="https://dev.to/rileygrotenhuis"
          target="_blank"
        >
          My Blog
        </a>
      </div>
    </nav>
    <main>
      <slot />
    </main>
  </div>
</template>
