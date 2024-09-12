<script setup>

import { Linkedin, Github } from 'lucide-vue-next';

</script>

<template>

    <main>

        <section class="flex flex-col w-full p-6 mt-6 border bg-neutral-900 rounded-4xl border-gray-925">

            <figure>
                <img class="mb-4 w-[516px] rounded-2xl" src="../assets/avatar.png">
            </figure>


            <h3 class="mb-2 text-2xl font-semibold tracking-wide text-white">

                {{ $t('sayHi') }} &#128075

            </h3>

            <nav class="space-y-2">

                <div class="border rounded-lg bg-black-925 hover:bg-opacity-50 border-gray-925">

                    <a class="flex justify-center w-full text-base font-semibold tracking-wide text-white font-manrope"
                        href="https://www.linkedin.com/in/gabriel-augt" target="_blank">

                        <figure class="flex flex-row gap-2 p-2">

                            <Linkedin fill="#212121" />

                            <figcaption>Gabriel Augusto</figcaption>

                        </figure>

                    </a>

                </div>

                <div class="border rounded-lg bg-black-925 hover:bg-opacity-50 border-gray-925">

                    <a class="flex justify-center w-full text-base font-semibold tracking-wide text-white font-manrope"
                        href="https://github.com/Gabriel-augt" target="_blank">

                        <figure class="flex flex-row gap-2 p-2">

                            <Github fill="#212121" />

                            <figcaption>@Gabriel-augt</figcaption>

                        </figure>

                    </a>

                </div>

            </nav>

        </section>

    </main>

</template>