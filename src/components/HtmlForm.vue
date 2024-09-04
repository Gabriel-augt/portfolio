<script setup>
import { ChevronRight } from 'lucide-vue-next';
</script>
<template>
    <section class="flex flex-col justify-center px-6 py-3 space-y-3 border border-gray-925 rounded-4xl bg-neutral-900">
        
          <h1 class="text-2xl text-white">Contato</h1>  
                
          <form action="https://formsubmit.co/e88c1e2bff99593b3a0feb6ff3c1c95d" method="POST" class="flex flex-col space-y-3 text-white">

              <input class="w-full h-8 p-6 capitalize rounded-xl bg-black-925 focus:outline-none focus:ring-1 focus:ring-neutral-200 focus:ring-inset" type="text" name="name" placeholder="Nome" required>
              
              <input class="w-full h-8 p-6 rounded-xl bg-black-925 focus:outline-none focus:ring-1 focus:ring-neutral-200 focus:ring-inset"
              type="email" name="email" placeholder="E-mail" required>
              
              <textarea class="w-full px-6 py-3 resize-none rounded-xl bg-black-925 focus:outline-none focus:ring-1 focus:ring-neutral-200 focus:ring-inset" cols="40" rows="3" name="message" placeholder="Mensagem" required></textarea>
              
              <button class="inline-flex items-center justify-center w-full h-11 rounded-xl bg-black-925 hover:bg-gray-925" type="submit">
                  
                  Enviar <ChevronRight   />
                  
                </button>

                <input type="hidden" name="_subject" value="Novo Contato!">
                <input type="text" name="_honey" style="display:none">
                <input type="hidden" name="_captcha" value="false">
                <input type="hidden" name="_next" value="http://localhost:5173/thanks">

          </form>

    </section>
</template>