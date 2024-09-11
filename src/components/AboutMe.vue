<script setup>

import Skills from '../components/Skills.vue';
import Form from './Form.vue';
import { Linkedin, Github } from 'lucide-vue-next';

</script>

<template>

  <div class="flex justify-center text-white-75">

    <div class="z-10 flex flex-row justify-center h-screen gap-6 max-[1200px]:flex-col
    max-[1200px]:gap-0 max-[1200px]:h-min max-[590px]:container max-[1200px]:mx-3">

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
                href="https://www.linkedin.com/in/gabriel-augusto-44732a219" target="_blank">

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

      <aside class="space-y-4 font-semibold tracking-wide mt-7 font-manrope max-[1200px]:mb-28">

        <section class="flex flex-col text-left">

          <article class="w-[564px] bg-neutral-900 p-6 border border-gray-925 rounded-4xl space-y-2
          max-[1200px]:h-min max-[590px]:container">

            <h1 class="text-2xl text-white">
              
              {{ $t('aboutMe') }}
            
            </h1>

            <p class="font-normal leading-relaxed">

              {{ $t('descriptionAboutMe.pt1') }}
              
              <strong>{{ $t('descriptionAboutMe.pt2') }}</strong>

              {{ $t('descriptionAboutMe.pt3') }}

              <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>

              {{ $t('descriptionAboutMe.pt4') }} <strong>VueJS</strong>. 

              {{ $t('descriptionAboutMe.pt5') }}

              <strong>{{ $t('descriptionAboutMe.pt6') }}</strong>,

              {{ $t('descriptionAboutMe.pt7') }}
              
              <strong>{{ $t('descriptionAboutMe.pt8') }}</strong>
              
              {{ $t('descriptionAboutMe.pt9') }}

            </p>

          </article>
        </section>

        <section class="text-justify">

          <article class="w-[564px] bg-neutral-900 p-6 border border-gray-925 rounded-4xl
          max-[590px]:container">

            <h2 class="text-2xl text-white">
              
              {{ $t('technologies') }}
            
            </h2>

            <Skills />

          </article>

        </section>

        <Form />

      </aside>

    </div>

  </div>
</template>
