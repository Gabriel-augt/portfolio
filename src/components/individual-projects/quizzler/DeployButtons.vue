<script setup>

import { Github } from 'lucide-vue-next';

</script>

<template>

    <div class="flex flex-row gap-6 max-[344px]:-ml-2 max-[380px]:gap-1">

        <button class="flex flex-row items-center justify-center gap-4 mt-10">

            <a href="https://quiizzler.netlify.app/" target="_blank"
            class="relative inline-flex items-center px-20 overflow-hidden transition rounded-full py-7 group bg-zinc-800 w-44">

                <div class="absolute inset-0 flex items-center justify-center [container-type:inline-size]">

                    <div class="absolute h-[100cqw] w-[100cqw] animate-spin
                    bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)]
                    opacity-0 transition duration-300 [animation-duration:3s] group-hover:opacity-100 max-lg:opacity-100"></div>

                    <div class="absolute inset-0.5 rounded-full bg-zinc-900"></div>

                    <div class="absolute bottom-0 w-4/5 transition-all duration-500 -translate-x-1/2 rounded-full opacity-50 left-1/2 h-1/3
                    bg-white/10 blur-md group-hover:h-2/3 group-hover:opacity-100 max-lg:opacity-100"></div>

                    <span class="relative flex flex-row gap-1 text-xl font-semibold text-center text-transparent transition-all duration-200
                    font-manrope bg-gradient-to-b from-white/25 to-white bg-clip-text">

                        <figure class="w-6 h-6 mt-[2px]">

                            <img src="/eye.svg">

                        </figure>

                        {{ $t('viewProject') }}

                    </span>

                </div>

            </a>

        </button>

        <button class="flex flex-row items-center justify-center gap-4 mt-10">

            <a href="https://github.com/Gabriel-augt/quizzler" target="_blank"
                class="relative inline-flex items-center px-20 overflow-hidden transition rounded-full py-7 group bg-zinc-800 ">

                <div class="absolute inset-0 flex items-center justify-center [container-type:inline-size]">

                    <div class="absolute h-[100cqw] w-[100cqw] animate-spin
                    bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)]
                    opacity-0 transition duration-300 [animation-duration:3s] group-hover:opacity-100 max-lg:opacity-100"></div>

                    <div class="absolute inset-0.5 rounded-full bg-zinc-900"></div>

                    <div class="absolute bottom-0 w-4/5 transition-all duration-500 -translate-x-1/2 rounded-full opacity-50 left-1/2 h-1/3
                    bg-white/10 blur-md group-hover:h-2/3 group-hover:opacity-100 max-lg:opacity-100"></div>

                    <span class="relative flex flex-row gap-1 text-xl font-semibold text-center text-transparent transition-all duration-200
                    font-manrope bg-gradient-to-b from-white/25 to-white bg-clip-text">

                        <Github fill="#B6B6B6" />

                        GitHub

                    </span>

                </div>

            </a>

        </button>

    </div>

</template>