<script setup>
import { computed } from 'vue';

const showNavbarTitle = computed(() => {
  return window.location.pathname !== '/';
});
</script>

<template>
  <nav>
    <div class="max-w-4xl mx-auto flex justify-between items-center px-8 py-6">
      <h1 class="text-2xl font-bold">
        <a v-if="showNavbarTitle" href="/">
          Riley
          <span class="hidden sm:inline-block"> Grotenhuis </span>.
        </a>
      </h1>

      <a
        class="bg-primary-700 text-white text-sm px-6 py-1 rounded-md font-semibold hover:bg-primary-500"
        href="https://dev.to/rileygrotenhuis"
        target="_blank"
      >
        My Blog
      </a>
    </div>
  </nav>
</template>
