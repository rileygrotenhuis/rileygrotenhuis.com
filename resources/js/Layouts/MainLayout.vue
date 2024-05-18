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
        class="max-w-4xl mx-auto flex justify-between items-center px-4 py-6"
      >
        <h1 class="text-2xl font-bold uppercase">RG.</h1>

        <ul class="flex items-center space-x-12">
          <li
            v-for="page in pages"
            :key="page.label"
            class="uppercase font-bold text-xs"
          >
            <a :href="page.path">
              {{ page.label }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <main class="max-w-4xl mx-auto px-4">
      <slot />
    </main>
  </div>
</template>
