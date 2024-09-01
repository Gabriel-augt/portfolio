<script setup>
import { ChevronRight } from 'lucide-vue-next';
</script>
<template>
    <section class="flex flex-col justify-center space-y-3 border-[1px] border-[#ffffff1a] rounded-[32px]
        bg-neutral-900 px-6 py-3">
        
          <h1 class="text-2xl text-white">Contato</h1>  
                
          <form class="flex flex-col space-y-3 text-white">

              <input class="h-8 p-6 rounded-xl bg-[#262626] w-96 capitalize" type="text" name="name" placeholder="Nome" required>
              
              <input class="h-8 p-6 rounded-xl bg-[#262626] w-96" type="email" name="email" placeholder="E-mail" required>
              
              <textarea class="px-6 py-3 rounded-xl bg-[#262626] w-full resize-none" cols="40" rows="3" name="message" placeholder="Mensagem" required></textarea>
              
              <button class="h-11 w-32 inline-flex items-center justify-center rounded-xl bg-[#262626] translate-x-96 hover:bg-[#ffffff1a]" type="submit" name="submit">
                  
                  Enviar <ChevronRight   />
                  
                </button>

          </form>

    </section>
</template>