<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeNavBar from './components/HomeNavBar.vue';
import ProjectsNavBar from './components/ProjectsNavBar.vue';
import AboutMeNavBar from './components/AboutMeNavBar.vue';
import { ref } from 'vue';

const homeBg = ref();
const projectsBg = ref();
const aboutMeBg = ref();
const homeIndicator = ref(false);
const projectsIndicator = ref(false);
const aboutMeIndicator = ref(false);
const url = ref(document.URL);

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
};

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
};

enableUrlStyles();

</script>

<template>

  <main>

    <figure class="absolute bg-gradient-to-tr from-black to-black/95">
      <img class="w-screen h-screen opacity-30" src="/bg.jpg">
    </figure>
    
  </main>

  <footer>

    <div class="fixed z-30 text-xl border bg-black-975 backdrop-blur-sm border-gray-925 text-white-25 rounded-3xl bottom-3 left-2/4 -translate-x-2/4 flex-nowrap">
      
      <nav class="z-10 flex flex-row gap-5 p-3 text-xs tracking-wider font-manrope">

        <RouterLink to="/">

          <HomeNavBar @click="fixedBg('home')" :class="homeBg" />

          <span v-if="homeIndicator" class="absolute w-4 h-[3px] my-[5px] rounded-full left-7 bg-gray-925 border-none"></span>
          
        </RouterLink>

        <RouterLink to="/projects">

          <ProjectsNavBar @click="fixedBg('projects')" :class="projectsBg" />

          <span v-if="projectsIndicator" class="absolute w-4 h-[3px] my-[5px] rounded-full left-24 bg-gray-925 border-none"></span>
          
        </RouterLink>

        <RouterLink to="/about">
          
          <AboutMeNavBar @click="fixedBg('aboutMe')" :class="aboutMeBg" />

          <span v-if="aboutMeIndicator" class="absolute w-4 h-[3px] my-[5px] rounded-full left-[164px] bg-gray-925 border-none"></span>
        </RouterLink>

      </nav>

    </div>
  </footer>

  <RouterView />
</template>