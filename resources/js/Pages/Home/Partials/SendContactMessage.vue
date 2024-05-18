<script setup>
import Modal from '@/Components/Modal.vue';
import { computed, ref } from 'vue';
import { useForm } from '@inertiajs/vue3';

const showContactModal = ref(false);

const contactForm = useForm({
  name: '',
  email: '',
  phone: '',
  message: '',
});

const contactFormIsValid = computed(() => {
  return contactForm.name && contactForm.email && contactForm.message;
});
</script>

<template>
  <button
    class="bg-primary-600 text-white px-4 py-1 rounded-md font-bold hover:bg-primary-700 transition-all"
    @click.prevent="showContactModal = true"
  >
    Get in Touch
  </button>

  <Modal :show="showContactModal" @close="showContactModal = false">
    <div class="p-6">
      <h3 class="text-black text-2xl font-bold">Send me a message!</h3>

      <p class="text-black text-sm font-semibold mt-2 w-[550px]">
        Although I am not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I
        will try my best to get back to you!
      </p>

      <form class="mt-8">
        <div>
          <label for="name" class="text-black text-sm font-semibold"
            >Full name</label
          >
          <input
            type="text"
            id="name"
            v-model="contactForm.name"
            class="w-full border border-gray-300 rounded-md p-2 mt-1 text-black font-bold"
          />
        </div>

        <div class="mt-4">
          <label for="email" class="text-black text-sm font-semibold"
            >Email address</label
          >
          <input
            type="email"
            id="email"
            v-model="contactForm.email"
            class="w-full border border-gray-300 rounded-md p-2 mt-1 text-black font-bold"
          />
        </div>

        <div class="mt-4">
          <label for="phone" class="text-black text-sm font-semibold"
            >Phone number</label
          >
          <input
            type="tel"
            id="phone"
            v-model="contactForm.phone"
            class="w-full border border-gray-300 rounded-md p-2 mt-1 text-black font-bold"
          />
        </div>

        <div class="mt-4">
          <label for="message" class="text-black text-sm font-semibold"
            >Message</label
          >
          <textarea
            id="message"
            v-model="contactForm.message"
            rows="4"
            class="w-full border border-gray-300 rounded-md p-2 mt-1 text-black font-bold"
          ></textarea>
        </div>

        <div class="mt-4 flex justify-end">
          <button
            type="submit"
            class="bg-primary-600 text-white px-4 py-1 rounded-md font-bold transition-all"
            :class="{
              'bg-gray-200': !contactFormIsValid,
              'bg-primary-600 hover:bg-primary-700': contactFormIsValid,
            }"
            :disabled="!contactFormIsValid"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </Modal>
</template>
