<script setup>
import HomeButtons from './HomeButtons.vue';
</script>

<template>
  <main class="flex flex-col items-center justify-center w-screen h-screen space-y-3 bg-[#101010]">

    <div class="w-[700px] absolute h-[500px] bg-gray-600 blur-[900px] opacity-50 rounded-full"></div>
    
    <h1 class="z-10 mb-2 tracking-wider text-white text-7xl font-manrope font-extralight">Gabriel Augusto</h1>

    <h2 class="text-[#B3B3B3] text-3xl font-manrope tracking-wider font-light
    after:bg-[#B3B3B3] after:w-[1px] after:h-20 after:absolute after:rotate-90 after:ml-16 after:-translate-y-5
    before:bg-[#B3B3B3] before:w-[1px] before:h-20 before:absolute before:rotate-90 before:-ml-16 before:-translate-y-5">
      Desenvolvedor Front-End
    </h2>

    <HomeButtons />
    
  </main>
</template>