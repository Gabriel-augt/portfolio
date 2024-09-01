<script setup>
import Skills from '../components/Skills.vue';
import HtmlForm from './HtmlForm.vue';
import { Linkedin , Github } from 'lucide-vue-next';
</script>

<template>

  <div class="flex justify-center bg-[#101010] text-[#B3B3B3]">

    <div class="max-w-[1200px] h-screen flex justify-center gap-6 z-10">

      <main>
  
        <section class="flex flex-col p-6 w-full bg-neutral-900 border-[1px] rounded-[32px] border-[#ffffff1a] mt-6">
          <figure>
            <img class="mb-4 w-[516px] h-[516px] rounded-2xl" src="../assets/avatar.png">
          </figure>
  
          <div>
             <h1 class="mb-2 text-2xl font-semibold tracking-wide text-white">
              Venha me dizer oi! &#128075
            </h1>
             
             <nav class="space-y-2">
              
              <div class="border-[1px] bg-[#262626] hover:bg-opacity-50 border-[#ffffff1a] rounded-lg">
                <a class="flex justify-center w-full text-base font-semibold tracking-wide text-white font-manrope" href="https://www.linkedin.com/in/gabriel-augusto-44732a219" target="_blank">
                  <figure class="flex flex-row gap-2 p-2">
                    <Linkedin fill="#212121" />
                    <figcaption>Gabriel Augusto</figcaption>
                  </figure>
                </a>
              </div>

              <div class="border-[1px] bg-[#262626] hover:bg-opacity-50 border-[#ffffff1a] rounded-lg">
                <a class="flex justify-center w-full text-base font-semibold tracking-wide text-white font-manrope" href="https://github.com/Gabriel-augt" target="_blank">
                  <figure class="flex flex-row gap-2 p-2">
                    <Github fill="#212121" />
                    <figcaption>@Gabriel-augt</figcaption>
                  </figure>
                </a>
              </div>

             </nav>
            </div>
              
        </section>
  
      </main>
  
      <aside class="space-y-4 font-semibold tracking-wide mt-7 font-manrope">

        <section class="flex flex-col text-left">

          <article class="w-[564px] bg-neutral-900 p-6 border-[1px] border-[#ffffff1a] rounded-[32px] space-y-2">
            
            <h2 class="text-2xl text-white">Um pouco sobre mim</h2>

            <p class="font-normal leading-relaxed">
              Desenvolvedor <strong>Front-End</strong> em início de carreira, com habilidades em <strong>HTML</strong>, <strong>CSS</strong>,
              <strong>JavaScript</strong> e frameworks modernos como <strong>VueJS</strong>. Apaixonado por criar interfaces
              <strong>intuitivas e responsivas</strong>, estou em busca de <strong>oportunidades</strong> para aplicar e expandir
              meus conhecimentos em projetos reais.
            </p>

          </article>
        </section>

        <section class="text-justify">

          <article class="w-[564px] bg-neutral-900 p-6 border-[1px] border-[#ffffff1a] rounded-[32px]">
            
            <h2 class="text-2xl text-white">Tecnologias</h2>

            <Skills/>

          </article>

        </section>

        <HtmlForm />

      </aside>

    </div>

  </div>
</template>
