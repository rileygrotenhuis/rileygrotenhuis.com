<script setup>
const learnMoreScroll = () => {
  window.scrollTo({
    top: 500,
    behavior: 'smooth',
  });
};
</script>

<template>
  <div
    class="max-w-4xl mx-auto px-4 flex justify-between items-center gap-12 mt-24"
  >
    <div>
      <img src="/images/hero.svg" alt="Hero Image" class="w-[400px]" />
    </div>

    <div class="w-full">
      <h1 class="text-4xl font-bold mb-2">Hi, I'm Riley.</h1>
      <p class="text-sm">
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
      <button
        class="mt-4 bg-primary-600 text-white px-4 py-1 rounded-md font-bold hover:bg-primary-700 transition-all"
        @click.prevent="learnMoreScroll"
      >
        Learn More
      </button>
    </div>
  </div>
</template>
