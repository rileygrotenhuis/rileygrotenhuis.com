<script setup>
import SendContactMessage from '@/Pages/Home/Partials/SendContactMessage.vue';
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-24">
    <h3 class="text-white font-semibold text-3xl text-center mb-2">
      Want to reach out?
    </h3>
    <p class="text-white text-center max-w-[675px] mx-auto mb-4">
      While I'm not currently looking for any new opportunities at the moment,
      my inbox is always open. Whether you have a question or just want to say
      hi, I'll try my best to get back to you!
    </p>
    <div class="w-fit mx-auto">
      <SendContactMessage />
    </div>
  </div>
</template>
