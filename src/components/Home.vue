<script setup>

import LangSwitcher from '../components/LangSwitcher.vue';
import HomeButtons from './HomeButtons.vue';

</script>

<template>

  <main class="flex flex-col items-center justify-center w-screen h-screen space-y-1">

    <LangSwitcher />

    <h1 class="z-10 mb-2 tracking-wider text-white text-7xl font-manrope font-extralight max-sm:text-5xl
    max-[375px]:text-4xl max-[345px]:text-[40px]">
      Gabriel Augusto
    </h1>

    <h2 class="text-white-75 text-3xl font-manrope tracking-wider font-light z-10
    after:bg-white-75 after:w-[1px] after:h-20 after:absolute after:rotate-90 after:ml-16 after:-translate-y-5
    before:bg-white-75 before:w-[1px] before:h-20 before:absolute before:rotate-90 before:-ml-16 before:-translate-y-5
    max-sm:after:h-6 max-sm:after:ml-7 max-sm:after:translate-y-[5px] max-sm:before:h-6 max-sm:before:-ml-7
    max-sm:before:translate-y-[5px] max-sm:text-2xl max-sm:overflow-hidden max-[375px]:after:ml-4 max-[375px]:after:h-4
    max-[375px]:after:translate-y-[10px] max-[375px]:before:h-4 max-[375px]:before:-ml-4 max-[375px]:before:translate-y-[10px]
    max-[345px]:before:w-0 max-[345px]:after:h-0 max-[345px]:text-[22px]">
      Desenvolvedor Front-End
    </h2>

    <HomeButtons />

  </main>

</template>