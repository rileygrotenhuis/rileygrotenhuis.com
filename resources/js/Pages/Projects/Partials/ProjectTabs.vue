<script setup>
defineProps({
  projects: Array,
  currentProject: Number,
});

defineEmits(['updateCurrentProject']);
</script>

<template>
  <div
    class="flex items-center justify-between sm:justify-start flex-wrap sm:space-x-12"
  >
    <button
      v-for="(project, index) in projects"
      :key="index"
      @click.prevent="$emit('updateCurrentProject', index)"
      class="block bg-none border border-white text-white py-2 px-4 rounded-xl text-left text-xs sm:text-sm font-semibold mb-4"
      :class="{ 'bg-primary-700 border-none': currentProject === index }"
    >
      {{ project.name }}
    </button>
  </div>
</template>
