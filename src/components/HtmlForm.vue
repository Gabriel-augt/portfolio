<script setup>
import { ChevronRight } from 'lucide-vue-next';
</script>
<template>
    <section class="flex flex-col justify-center space-y-3 border-[1px] border-[#ffffff1a] rounded-[32px]
        bg-neutral-900 px-6 py-3">
        
          <h1 class="text-2xl text-white">Contato</h1>  
                
          <form action="https://formsubmit.co/e88c1e2bff99593b3a0feb6ff3c1c95d" method="POST" class="flex flex-col space-y-3 text-white">

              <input class="h-8 p-6 rounded-xl bg-[#262626] w-full capitalize focus:outline-none focus:ring-1 focus:ring-neutral-200
              focus:ring-inset" type="text" name="name" placeholder="Nome" required>
              
              <input class="h-8 p-6 rounded-xl bg-[#262626] w-full focus:outline-none focus:ring-1 focus:ring-neutral-200 focus:ring-inset"
              type="email" name="email" placeholder="E-mail" required>
              
              <textarea class="px-6 py-3 rounded-xl bg-[#262626] w-full resize-none focus:outline-none focus:ring-1 focus:ring-neutral-200
              focus:ring-inset" cols="40" rows="3" name="message" placeholder="Mensagem" required></textarea>
              
              <button class="h-11 w-full inline-flex items-center justify-center rounded-xl bg-[#262626] hover:bg-[#ffffff1a]" type="submit">
                  
                  Enviar <ChevronRight   />
                  
                </button>

                <input type="hidden" name="_subject" value="Novo Contato!">
                <input type="text" name="_honey" style="display:none">
                <input type="hidden" name="_captcha" value="false">
                <input type="hidden" name="_next" value="http://localhost:5173/thanks">

          </form>

    </section>
</template>