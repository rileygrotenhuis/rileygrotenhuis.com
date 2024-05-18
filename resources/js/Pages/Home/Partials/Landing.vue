<script setup>
const learnMoreScroll = () => {
  window.scrollTo({
    top: 750,
    behavior: 'smooth',
  });
};
</script>

<template>
  <div
    class="max-w-4xl mx-auto px-8 flex justify-between items-center gap-12 mt-24"
  >
    <div class="hidden sm:block">
      <img src="/images/hero.svg" alt="Hero Image" class="w-[400px]" />
    </div>

    <div class="w-full">
      <h1 class="text-6xl font-bold mb-2">Hi, I'm Riley.</h1>
      <p class="hidden sm:block text-sm">
        Software Engineer at Midwestern Interactive. I also enjoy creating
        developer tools and am currently building
        <a
          href="https://www.corvesive.com"
          target="_blank"
          class="text-primary-600 font-bold hover:underline"
        >
          Corvesive
        </a>
        to help provide budgeting solutions.
      </p>
      <p class="block sm:hidden text-2xl">Software Engineer</p>
      <button
        class="mt-4 bg-primary-600 text-white px-4 py-1 rounded-md font-semibold hover:bg-primary-700 transition-all"
        @click.prevent="learnMoreScroll"
      >
        Get to know me
      </button>
    </div>
  </div>
</template>
