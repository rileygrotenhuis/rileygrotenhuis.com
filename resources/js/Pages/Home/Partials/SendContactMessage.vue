<script setup>
import Modal from '@/Components/Breeze/Modal.vue';
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

const submitContactForm = () => {
  if (Boolean(contactFormIsValid.value)) {
    contactForm.post(route('send-contact-message'), {
      preserveScroll: true,
      onSuccess: () => {
        showContactModal.value = false;
        contactForm.reset();
        alert(
          'Thanks for reaching out! I will get back to you as soon as possible.'
        );
      },
      onError: () => {
        alert('There was an error sending your message. Please try.');
      },
    });
  }
};
</script>

<template>
  <button
    class="bg-primary-600 text-white px-4 py-1 rounded-md font-semibold hover:bg-primary-700 transition-all"
    @click.prevent="showContactModal = true"
  >
    Get connected
  </button>

  <Modal :show="showContactModal" @close="showContactModal = false">
    <div class="p-6">
      <h3 class="text-black text-3xl font-semibold">Say hello!</h3>

      <form @submit.prevent="submitContactForm" class="mt-4">
        <div>
          <label for="name" class="text-gray-700 text-sm">Full name</label>
          <input
            type="text"
            id="name"
            v-model="contactForm.name"
            placeholder="Master Chief"
            class="w-full border border-gray-300 rounded-md p-2 mt-1 text-black placeholder-gray-400"
          />
        </div>

        <div class="mt-4">
          <label for="email" class="text-gray-700 text-sm">Email address</label>
          <input
            type="email"
            id="email"
            v-model="contactForm.email"
            placeholder="masterchief@cortana.com"
            class="w-full border border-gray-300 rounded-md p-2 mt-1 text-black placeholder-gray-400"
          />
        </div>

        <div class="mt-4">
          <label for="phone" class="text-gray-700 text-sm">Phone number</label>
          <input
            type="tel"
            id="phone"
            v-model="contactForm.phone"
            placeholder="117-117-1117"
            class="w-full border border-gray-300 rounded-md p-2 mt-1 text-black placeholder-gray-400"
          />
        </div>

        <div class="mt-4">
          <label for="message" class="text-gray-700 text-sm">Message</label>
          <textarea
            id="message"
            v-model="contactForm.message"
            placeholder="Enter your message here..."
            rows="4"
            class="w-full border border-gray-300 rounded-md p-2 mt-1 text-black placeholder-gray-400"
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
