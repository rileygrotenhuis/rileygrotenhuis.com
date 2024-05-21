<script setup>
import SendContactMessage from '@/Pages/Home/Partials/SendContactMessage.vue';
</script>

<template>
  <div
    class="max-w-4xl mx-auto px-8 pb-36 flex flex-col sm:flex-row justify-center items-center gap-8"
  >
    <div>
      <img
        src="/images/headshot.jpg"
        alt="Headshot"
        class="w-[250px] sm:w-[400px] rounded-2xl"
      />
    </div>

    <div class="w-full">
      <h2 class="text-white font-bold text-2xl mb-4">
        A little more about me.
      </h2>
      <p class="text-white text-sm mb-2">
        My name is Riley Grotenhuis and I'm a software engineer based out of
        Springfield, Missouri. I currently work for Midwestern Interactive, and
        have been in the industry for over 3 years.
      </p>
      <p class="text-white text-sm mb-4">
        I specialize in building full-stack web applications. Here are a few of
        the technologies I've been building with recently.
      </p>
      <div
        class="flex items-center flex-wrap justify-center sm:justify-start gap-4 mb-4"
      >
        <img
          width="50"
          src="https://github.com/marwin1991/profile-technology-icons/assets/25181517/afcf1c98-544e-41fb-bf44-edba5e62809a"
          alt="Laravel"
          title="Laravel"
        />
        <img
          width="50"
          src="https://user-images.githubusercontent.com/25181517/183570228-6a040b9f-3ddf-47a2-a201-743121dac664.png"
          alt="php"
          title="php"
        />
        <img
          width="50"
          src="https://user-images.githubusercontent.com/25181517/117448124-a2da9800-af3e-11eb-85d2-bd1b69b65603.png"
          alt="Vue.js"
          title="Vue.js"
        />
        <img
          width="50"
          src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png"
          alt="TypeScript"
          title="TypeScript"
        />
        <img
          width="50"
          src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png"
          alt="Tailwind CSS"
          title="Tailwind CSS"
        />
        <img
          width="50"
          src="https://user-images.githubusercontent.com/25181517/117207330-263ba280-adf4-11eb-9b97-0ac5b40bc3be.png"
          alt="Docker"
          title="Docker"
        />
        <img
          width="50"
          src="https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png"
          alt="MySQL"
          title="MySQL"
        />
      </div>
    </div>
  </div>
</template>
