<script setup>
import { Github } from 'lucide-vue-next';
</script>
<template>
    <section class="z-10 flex flex-col items-center justify-center gap-6">

        <section class="w-[908px] h-[408px] mt-6 flex flex-row justify-center items-center border
        border-gray-925 rounded-4xl bg-gradient-to-tr from-black to-red-950 max-[850px]:mt-0
        max-[850px]:rounded-none max-[850px]:flex-col max-[850px]:h-[834px] max-[960px]:w-screen z-10">
            
            <div class="h-full grow flex flex-col justify-center items-start ml-12
            rounded-[31px] max-[850px]:ml-0 max-[850px]:-mt-6">
                <h1 class="mb-3 text-3xl font-bold">Flamengo site conceito</h1>
                
                <p class="text-base max-w-[340px] tracking-wider leading-relaxed">
                    Desenvolvi um site conceitual para o Flamengo, focado em uma experiência <strong>visual moderna e intuitiva</strong>,
                    destacando a história, títulos e notícias do clube. Utilizei HTML, CSS e JavaScript para
                    criar uma <strong>interface interativa e responsiva</strong>, alinhada com a identidade visual do time.
                    <strong>Português, inglês e espanhol</strong> disponível.
                </p>

                <div class="flex flex-row gap-6">

                    <button class="flex flex-row items-center justify-center gap-4 mt-6 max-[850px]:mt-10">  
                             
                        <a href="https://flamengogb.netlify.app" target="_blank"
                        class="relative inline-flex items-center px-20 overflow-hidden transition rounded-full py-7 group bg-zinc-800 ">

                            <div class="absolute inset-0 flex items-center [container-type:inline-size]">
                    
                                <div class="absolute h-[100cqw] w-[100cqw] animate-spin
                                bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)]
                                opacity-0 transition duration-300 [animation-duration:3s] group-hover:opacity-100 max-lg:opacity-100"></div>
                    
                                <div class="absolute inset-0.5 rounded-full bg-zinc-900"></div>
                    
                                <div class="absolute bottom-0 w-4/5 transition-all duration-500 -translate-x-1/2 rounded-full opacity-50 left-1/2 h-1/3 bg-white/10 blur-md group-hover:h-2/3 group-hover:opacity-100 max-lg:opacity-100"></div>
                    
                                <span class="relative flex flex-row gap-1 mt-px ml-3 text-xl font-semibold text-center text-transparent transition-all duration-200 font-manrope bg-gradient-to-b from-white/25 to-white bg-clip-text">
                                    <figure class="w-6 h-6 mt-[2px]">
                                        <img src="/eye.svg">
                                    </figure>
                                    Ver projeto
                                </span>
                            </div>
                        </a>
                    </button>
                    
                    <button class="flex flex-row items-center justify-center gap-4 mt-6 max-[850px]:mt-10">       
                        <a href="https://github.com/Gabriel-augt/flamengo-website" target="_blank"
                        class="relative inline-flex items-center px-20 overflow-hidden transition rounded-full py-7 group bg-zinc-800 ">
                            <div class="absolute inset-0 flex items-center [container-type:inline-size]">
                    
                                <div class="absolute h-[100cqw] w-[100cqw] animate-spin
                                bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)]
                                opacity-0 transition duration-300 [animation-duration:3s] group-hover:opacity-100 max-lg:opacity-100"></div>
                    
                                <div class="absolute inset-0.5 rounded-full bg-zinc-900"></div>
                    
                                <div class="absolute bottom-0 w-4/5 transition-all duration-500 -translate-x-1/2 rounded-full opacity-50 left-1/2 h-1/3 bg-white/10 blur-md group-hover:h-2/3 group-hover:opacity-100 max-lg:opacity-100"></div>
                    
                                <span class="relative flex flex-row gap-1 mt-px ml-8 text-xl font-semibold text-center text-transparent transition-all duration-200 font-manrope bg-gradient-to-b from-white/25 to-white bg-clip-text">
                                <Github fill="#B6B6B6" />
                                GitHub
                                </span>
                            </div>
                        </a>
                    </button>
                </div>

            </div>

            <section class="flex flex-col items-center justify-center h-full gap-6 grow max-[850px]:-mt-28">
                <figure>
                    <img class="w-[368px] h-[192px] rounded-xl" src="/flamengo-print.png">
                </figure>
                
                <div class="flex flex-row gap-8 font-bold tracking-wider max-[850px]:mt-4">
                    
                    <div class="flex flex-col items-center">
                        <figure class="p-2 border rounded-xl border-gray-925 hover:bg-black-925">
                            <img class="w-6 h-6 rounded-md" src="/javascript.svg">
                        </figure>
                        <p class="mt-1 text-xs">JavaScript</p>
                    </div>
                    
                    <div class="flex flex-col items-center">
                        <figure class="p-2 border rounded-xl border-gray-925 hover:bg-black-925">
                            <img class="w-6 h-6" src="/html.svg">
                        </figure>
                        <p class="mt-1 text-xs">HTML</p>
                    </div>

                    <div class="flex flex-col items-center">
                        <figure class="p-2 border rounded-xl border-gray-925 hover:bg-black-925">
                            <img class="w-6 h-6" src="/css.svg">
                        </figure>
                        <p class="mt-1 text-xs">CSS</p>
                    </div>
                </div>
                
            </section>

        </section>

    </section>
</template>