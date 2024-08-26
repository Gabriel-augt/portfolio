<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {House, Brush, CircleUserRound } from 'lucide-vue-next';
import { ref } from 'vue';

const homeBg = ref()
const projectsBg = ref()
const aboutMeBg = ref()
const homeIndicator = ref(false)
const projectsIndicator = ref(false)
const aboutMeIndicator = ref(false)
const url = ref(document.URL)

const fixedBg = (clicksOnIcons) => {

  switch (clicksOnIcons) {
    
    case clicksOnIcons = 'home':
    homeBg.value = 'bg-teal-700';
    projectsBg.value = '';
    aboutMeBg.value = '';
    homeIndicator.value = true;
    projectsIndicator.value = false;
    aboutMeIndicator.value = false;
    break;
  
    case clicksOnIcons = 'projects':
    projectsBg.value = 'bg-rose-900';
    homeBg.value = '';
    aboutMeBg.value = '';
    projectsIndicator.value = true;
    homeIndicator.value= false;
    aboutMeIndicator.value = false;
    break

    case clicksOnIcons = 'aboutMe':
    aboutMeBg.value = 'bg-sky-700';
    projectsBg.value = '';
    homeBg.value = '';
    aboutMeIndicator.value = true;
    projectsIndicator.value = false;
    homeIndicator.value = false;
    break
  }
}

const enableUrlStyles = () => {

if (url.value.includes('/projects') == true) {
  projectsBg.value = 'bg-rose-900';
  projectsIndicator.value = true;
  
} else if ((url.value.includes('/about') == true)) {
  aboutMeBg.value = 'bg-sky-700';
  aboutMeIndicator.value = true;
} else {
  homeBg.value = 'bg-teal-700';
  homeIndicator.value = true;
}
}
enableUrlStyles()

</script>

<template>
  <footer>

    <div class="bg-[#212121bd] backdrop-blur-sm border-[1px] border-[#ffffff1a] text-[#F8F8F8] fixed rounded-3xl bottom-3 left-2/4 -translate-x-2/4 text-xl flex-nowrap z-30">
      
      <nav class="z-10 flex flex-row gap-5 p-3 text-xs tracking-wider font-manrope">

        <RouterLink to="/">
          <figure @click="fixedBg('home')" :class="homeBg" class="flex flex-col items-center justify-center border-[1px] border-[#ffffff1a] rounded-xl p-[11px]
          hover:bg-teal-700 hover:ease-out hover:duration-300 hover:after:absolute hover:after:left-2 hover:after:-top-[34px]
          hover:after:bg-neutral-900 hover:after:h-7 hover:after:w-[55px] hover:after:border-[1px] hover:after:border-[#ffffff1a]
            hover:after:rounded-lg hover:after:p-1 hover:after:px-2 hover:after:content-['Início'] hover:after:text-sm hover:after:font-manrope
            hover:after:text-[#B3B3B3] hover:after:flex-nowrap">

            <House />

          </figure>
          <span v-if="homeIndicator" class="absolute w-4 h-[3px] my-[5px] rounded-full left-7 bg-[#ffffff1a] border-none"></span>
        </RouterLink>

        <RouterLink to="/projects">
          <figure @click="fixedBg('projects')" :class="projectsBg" class="flex flex-col items-center border-[1px] border-[#ffffff1a] rounded-xl p-[11px]
           hover:bg-rose-900 hover:ease-out hover:duration-300 hover:after:absolute hover:after:left-16 hover:after:-top-[34px]
           hover:after:bg-neutral-900 hover:after:h-7 hover:after:w-[77px] hover:after:border-[1px] hover:after:border-[#ffffff1a]
           hover:after:rounded-lg hover:after:p-1 hover:after:px-2 hover:after:content-['Projetos'] hover:after:text-sm hover:after:font-manrope
           hover:after:text-[#B3B3B3] hover:after:flex-nowrap">

            <Brush />
            
          </figure>
          <span v-if="projectsIndicator" class="absolute w-4 h-[3px] my-[5px] rounded-full left-24 bg-[#ffffff1a] border-none"></span>
        </RouterLink>

        <RouterLink to="/about">
          <figure @click="fixedBg('aboutMe')" :class="aboutMeBg" class="flex flex-col items-center border-[1px] border-[#ffffff1a] rounded-xl p-[11px]
           hover:bg-sky-700 hover:ease-out hover:duration-300 hover:after:absolute 
            hover:after:left-[124px] hover:after:-top-[34px] hover:after:bg-neutral-900 hover:after:h-7 hover:after:w-[92px] hover:after:border-[1px]
            hover:after:border-[#ffffff1a] hover:after:rounded-lg hover:after:p-1 hover:after:px-2 hover:after:content-['Sobre_mim']
             hover:after:text-sm hover:after:font-manrope hover:after:text-[#B3B3B3] hover:after:flex-nowrap">

            <CircleUserRound />
            
          </figure>
          <span v-if="aboutMeIndicator" class="absolute w-4 h-[3px] my-[5px] rounded-full left-[164px] bg-[#ffffff1a] border-none"></span>
        </RouterLink>

      </nav>

    </div>
  </footer>

  <RouterView />
</template>

<style scoped>
</style>
