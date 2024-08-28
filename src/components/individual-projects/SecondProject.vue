<script setup>
import { Github } from 'lucide-vue-next';
</script>
<template>
    <section class="w-[1200px] flex flex-col items-center justify-center gap-6 h-min bg-[#101010]">

        <section class="w-[908px] h-[408px] mt-6 flex flex-row justify-center items-center border-[1px]
        border-[#ffffff1a] rounded-[32px] bg-gradient-to-tr from-black to-purple-950">
            
            <div class="h-full grow flex flex-col justify-center items-start ml-12 rounded-[31px]">
                <h1 class="mb-3 text-3xl font-bold">Quizzler</h1>
                
                <p class="text-base max-w-[358px] tracking-wider leading-relaxed">
                    Quiz com <strong>30 questões dinâmicas</strong>, onde apenas 10 são exibidas por rodada.
                    Cada questão possui 4 alternativas, e a cada atualização da página,
                    novas perguntas e alternativas <strong>são geradas aleatoriamente</strong>.
                    <strong>Português, inglês e espanhol</strong> disponível.
                </p>

                <div class="flex flex-row gap-6">

                    <button class="flex flex-row items-center justify-center gap-4 mt-8">
                               
                        <a href="https://quiizzler.netlify.app/" target="_blank"
                        class="relative inline-flex items-center px-20 overflow-hidden transition rounded-full py-7 group bg-zinc-800 ">

                            <div class="absolute inset-0 flex items-center [container-type:inline-size]">
                    
                                <div class="absolute h-[100cqw] w-[100cqw] animate-spin
                                bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)]
                                opacity-0 transition duration-300 [animation-duration:3s] group-hover:opacity-100"></div>
                    
                                <div class="absolute inset-0.5 rounded-full bg-zinc-900"></div>
                    
                                <div class="absolute bottom-0 w-4/5 transition-all duration-500 -translate-x-1/2 rounded-full opacity-50 left-1/2 h-1/3 bg-white/10 blur-md group-hover:h-2/3 group-hover:opacity-100"></div>
                    
                                <span class="relative flex flex-row gap-1 mt-px ml-3 text-xl font-semibold text-center text-transparent transition-all font-manrope bg-gradient-to-b from-white/25 to-white bg-clip-text duration-200a">
                                    <figure class="w-6 h-6 mt-[2px]">
                                        <img src="/eye.svg">
                                    </figure>
                                    Ver projeto
                                </span>
                            </div>
                        </a>
                    </button>
                    
                    <button class="flex flex-row items-center justify-center gap-4 mt-8">       
                        <a href="https://github.com/Gabriel-augt/quizzler" target="_blank"
                        class="relative inline-flex items-center px-20 overflow-hidden transition rounded-full py-7 group bg-zinc-800 ">
                            <div class="absolute inset-0 flex items-center [container-type:inline-size]">
                    
                                <div class="absolute h-[100cqw] w-[100cqw] animate-spin
                                bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)]
                                opacity-0 transition duration-300 [animation-duration:3s] group-hover:opacity-100"></div>
                    
                                <div class="absolute inset-0.5 rounded-full bg-zinc-900"></div>
                    
                                <div class="absolute bottom-0 w-4/5 transition-all duration-500 -translate-x-1/2 rounded-full opacity-50 left-1/2 h-1/3 bg-white/10 blur-md group-hover:h-2/3 group-hover:opacity-100"></div>
                    
                                <span class="relative flex flex-row gap-1 mt-px text-xl font-semibold text-center text-transparent transition-all ml-7 font-manrope bg-gradient-to-b from-white/25 to-white bg-clip-text duration-200a">
                                <Github fill="#B6B6B6" />
                                GitHub
                                </span>
                            </div>
                        </a>
                    </button>
                </div>

            </div>

            <section class="flex flex-col items-center justify-center h-full gap-6 grow">
                <figure>
                    <img class="w-[368px] h-[192px] rounded-xl" src="/quizzler-print.png">
                </figure>
                
                <div class="flex flex-row gap-6 font-bold tracking-wider">
                    
                    <div class="flex flex-col items-center">
                        <figure class="p-2 rounded-xl border-[1px] border-[#ffffff1a] hover:bg-[#262626]">
                            <img class="w-6 h-6 rounded-md" src="/vue.svg">
                        </figure>
                        <p class="mt-1 text-xs">VueJS</p>
                    </div>

                    <div class="flex flex-col items-center">
                        <figure class="p-2 rounded-xl border-[1px] border-[#ffffff1a] hover:bg-[#262626]">
                            <img class="w-6 h-6 rounded-md" src="/tailwind-css.svg">
                        </figure>
                        <p class="mt-1 text-xs">Tailwind</p>
                    </div>

                    <div class="flex flex-col items-center">
                        <figure class="p-2 rounded-xl border-[1px] border-[#ffffff1a] hover:bg-[#262626]">
                            <img class="w-6 h-6 rounded-md" src="/javascript.svg">
                        </figure>
                        <p class="mt-1 text-xs">JavaScript</p>
                    </div>
                    
                    <div class="flex flex-col items-center">
                        <figure class="p-2 rounded-xl border-[1px] border-[#ffffff1a] hover:bg-[#262626]">
                            <img class="w-6 h-6" src="/html.svg">
                        </figure>
                        <p class="mt-1 text-xs">HTML</p>
                    </div>

                    <div class="flex flex-col items-center">
                        <figure class="p-2 rounded-xl border-[1px] border-[#ffffff1a] hover:bg-[#262626]">
                            <img class="w-6 h-6" src="/css.svg">
                        </figure>
                        <p class="mt-1 text-xs">CSS</p>
                    </div>
                </div>
                
            </section>

        </section>

    </section>
</template>