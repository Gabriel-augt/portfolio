<script setup>

import Description from './Description.vue';
import DeployButtons from './DeployButtons.vue';
import Infos from './Infos.vue';

</script>

<template>

    <section class="z-10 flex flex-col items-center justify-center gap-6 h-min">

        <section class="w-[908px] h-[408px] mt-6 flex flex-row justify-center items-center border
        border-gray-925 rounded-4xl bg-gradient-to-tr from-black to-purple-950 max-[850px]:mt-0
         max-[850px]:rounded-none max-[850px]:flex-col max-[850px]:h-[834px] max-[960px]:w-screen z-10">

            <div class="h-full grow flex flex-col justify-center items-start ml-12 rounded-[31px]
            max-[344px]:ml-2 max-[850px]:ml-4 max-[850px]:-mb-48 max-[850px]:-mt-24">

                <Description />

                <DeployButtons />

            </div>

            <Infos />

        </section>

    </section>

</template>