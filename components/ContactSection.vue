<template>
  <div>
    <UModal
      v-if="isModalOpen"
      v-model="isModalOpen"
      :ui="{
        container: 'flex items-start items-top justify-center text-right',
      }"
    >
      <div class="p-4">
        <UIcon
          name="i-heroicons-x-mark"
          class="w-8 h-8 hover:cursor-pointer absolute top-5 right-3"
          @click="isModalOpen = false"
        />
        <div class="text-center">
          <h3 class="text-primary font-bold text-2xl mt-8 mb-4">Hey!</h3>
          <p>
            My email has been copied to your clipboard, I won't open any apps
            for you... Feel free to reach out!
          </p>
        </div>
      </div>
    </UModal>
    <p class="text-primary text-lg">04. What Next?</p>
    <h3 class="text-5xl text-text-primary mt-4 font-bold">Get In Touch</h3>
    <p class="text-text-secondary mt-4">
      Although I am not currently looking for any new opportunities, my inbox is
      always open. Whether you have a question or just want to say hi, I will
      try my best to get back to you!
    </p>
    <button
      aria-label="Say Hello"
      class="py-4 px-8 mt-8 rounded-md border border-primary text-lg font-extralight text-primary"
      @click="openModal"
    >
      Say Hello
    </button>
  </div>
</template>

<script setup lang="ts">
const isModalOpen = ref(false);

const openModal = async () => {
  isModalOpen.value = true;
  await navigator.clipboard.writeText('rg@buildmidwestern.com');
};
</script>
