<script setup>
import Skills from '../components/Skills.vue';
import HtmlForm from './HtmlForm.vue';
import { Linkedin , Github } from 'lucide-vue-next';
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
  
          <div>
             <h3 class="mb-2 text-2xl font-semibold tracking-wide text-white">
              Venha me dizer oi! &#128075
            </h3>
             
             <nav class="space-y-2">
              
              <div class="border rounded-lg bg-black-925 hover:bg-opacity-50 border-gray-925">
                <a class="flex justify-center w-full text-base font-semibold tracking-wide text-white font-manrope" href="https://www.linkedin.com/in/gabriel-augusto-44732a219" target="_blank">
                  <figure class="flex flex-row gap-2 p-2">
                    <Linkedin fill="#212121" />
                    <figcaption>Gabriel Augusto</figcaption>
                  </figure>
                </a>
              </div>

              <div class="border rounded-lg bg-black-925 hover:bg-opacity-50 border-gray-925">
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
  
      <aside class="space-y-4 font-semibold tracking-wide mt-7 font-manrope max-[1200px]:mb-28">

        <section class="flex flex-col text-left">

          <article class="w-[564px] bg-neutral-900 p-6 border border-gray-925 rounded-4xl space-y-2
          max-[1200px]:h-min max-[590px]:container">
            
            <h1 class="text-2xl text-white">Um pouco sobre mim</h1>

            <p class="font-normal leading-relaxed">
              Desenvolvedor <strong>Front-End</strong> em início de carreira, com habilidades em <strong>HTML</strong>, <strong>CSS</strong>,
              <strong>JavaScript</strong> e frameworks modernos como <strong>VueJS</strong>. Apaixonado por criar interfaces
              <strong>intuitivas e responsivas</strong>, estou em busca de <strong>oportunidades</strong> para aplicar e expandir
              meus conhecimentos em projetos reais.
            </p>

          </article>
        </section>

        <section class="text-justify">

          <article class="w-[564px] bg-neutral-900 p-6 border border-gray-925 rounded-4xl
          max-[590px]:container">
            
            <h2 class="text-2xl text-white">Tecnologias</h2>

            <Skills/>

          </article>

        </section>

        <HtmlForm />

      </aside>

    </div>

  </div>
</template>
