<script setup>

import { ChevronRight, LoaderCircle } from 'lucide-vue-next';
import { ref } from 'vue';

const send = ref(true);
const sending = ref(false);
const ButtonDisabled = ref(false);

const onSubmit = () => {

    ButtonDisabled.value = true;
    send.value = false;
    sending.value = true;

};

</script>

<template>

    <section class="flex flex-col justify-center px-6 py-5 space-y-3 border border-gray-925 rounded-4xl bg-neutral-900">

        <h1 class="text-2xl text-white">

            {{ $t('contact') }}
        
        </h1>

        <form @submit="onSubmit" action="https://formsubmit.co/e88c1e2bff99593b3a0feb6ff3c1c95d" method="POST"
            class="flex flex-col space-y-3 text-white">

            <input
                class="w-full h-8 p-6 capitalize rounded-xl bg-black-925 focus:outline-none focus:ring-1 focus:ring-neutral-200 focus:ring-inset"
                type="text" name="name" :placeholder="$t('name')" required>

            <input
                class="w-full h-8 p-6 rounded-xl bg-black-925 focus:outline-none focus:ring-1 focus:ring-neutral-200 focus:ring-inset"
                type="email" name="email" :placeholder="$t('email')" required>

            <textarea
                class="w-full px-6 py-3 resize-none rounded-xl bg-black-925 focus:outline-none focus:ring-1 focus:ring-neutral-200 focus:ring-inset"
                cols="40" rows="3" name="message" :placeholder="$t('message')" required></textarea>

            <button
                class="w-full h-11 rounded-xl bg-black-925 hover:bg-gray-925 max-[590px]:h-12 disabled:bg-transparent"
                type="submit" :disabled="ButtonDisabled">

                <figure v-if="send" class="inline-flex items-center justify-center">

                    <figcaption class="pr-1">

                        {{ $t('send') }}

                    </figcaption>

                    <ChevronRight />

                </figure>


                <figure v-if="sending" class="inline-flex items-center justify-center">

                    <figcaption class="p-1">

                        {{ $t('sending') }}...

                    </figcaption>

                    <LoaderCircle class="animate-spin" />

                </figure>

            </button>

            <input type="hidden" name="_subject" value="Novo Contato!">
            <input type="text" name="_honey" style="display:none">
            <input type="hidden" name="_captcha" value="false">
            <input type="hidden" name="_next" value="http://localhost:5173/thanks">

        </form>

    </section>

</template>