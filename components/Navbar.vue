<template>
  <nav class="flex justify-between py-8 w-11/12 max-w-[1200px] mx-auto">
    <h1
      class="text-primary text-xl border-2 border-primary rounded-[100%] p-2 cursor-pointer"
    >
      RG
    </h1>
    <div class="flex md:hidden">
      <IconsHamburgerMenuIcon
        class="hover:cursor-pointer"
        @click="isOpen = true"
      />
      <USlideover v-model="isOpen">
        <div class="p-4 flex-1 mt-4">
          <span
            class="text-2xl mb-4 float-right hover:cursor-pointer"
            @click="isOpen = false"
            >X</span
          >
          <ul class="flex flex-col gap-6">
            <li
              v-for="(link, i) in navigationLinks"
              :key="link"
              class="font-light text-white hover:text-primary hover:cursor-pointer"
              @click="scrollToSection(link.toLowerCase())"
            >
              <span class="text-primary">0{{ i + 1 }}. </span>
              {{ link }}
            </li>
            <NuxtLink to="/blog">
              <li
                class="text-primary w-[100px] text-sm text-center border border-primary font-extralight my-auto py-1 px-4 rounded-md"
              >
                Blog
              </li>
            </NuxtLink>
          </ul>
        </div>
      </USlideover>
    </div>
    <ul class="hidden md:flex gap-12 items-center">
      <li
        v-for="(link, i) in navigationLinks"
        :key="link"
        class="font-light text-sm text-white hover:text-primary hover:cursor-pointer"
        @click="scrollToSection(link.toLowerCase())"
      >
        <span class="text-primary">0{{ i + 1 }}. </span>
        {{ link }}
      </li>
      <a href="https://rileygrotenhuis.medium.com" target="__blank">
        <li
          class="text-primary text-sm border border-primary font-extralight my-auto py-1 px-4 rounded-md"
        >
          Blog
        </li>
      </a>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const isOpen = ref(false);

const navigationLinks = ['About', 'Experience', 'Projects', 'Contact'];

const scrollToSection = async (section: string) => {
  isOpen.value = false;
  await navigateTo(`/#${section}`);
};
</script>
