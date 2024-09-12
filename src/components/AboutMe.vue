<script setup>

import Profile from './Profile.vue'
import Skills from './Skills.vue';
import Form from './Form.vue';

</script>

<template>

  <div class="flex justify-center text-white-75">

    <div class="z-10 flex flex-row justify-center h-screen gap-6 max-[1200px]:flex-col
    max-[1200px]:gap-0 max-[1200px]:h-min max-[590px]:container max-[1200px]:mx-3">

      <Profile />

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
