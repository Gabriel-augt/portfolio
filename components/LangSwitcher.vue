<script setup>
const { setLocale } = useI18n()

const dropdown = ref(false);
const arrow = ref();

const languages = () => {

    dropdown.value = !dropdown.value

    dropdown.value === true ? arrow.value = 'rotate-180' : arrow.value = ''

}

const changeLanguage = (language) => {

    languages()

    setLocale(language)

}

</script>

<template>

    <div class="absolute flex flex-col tracking-wider text-white-25 w-28 right-8 top-4 font-manrope max-md:right-4">

        <button @click="languages" class="flex flex-row items-center justify-center">

            {{ $t('language') }}

            <LucideArrowDown :class="arrow" class="ml-2 duration-200" size="18" />

        </button>

        <div v-if="dropdown" class="flex flex-col items-center w-full mt-2 rounded-md bg-black-925/30 divide-zinc-700">

            <span @click="changeLanguage('pt')" class="px-2 py-2 my-2 cursor-pointer hover:bg-neutral-700 hover:rounded-lg
            after:absolute after:w-20 after:h-px after:top-[87px] after:right-4 after:bg-zinc-700">

                Português

            </span>

            <span @click="changeLanguage('en')" class="px-4 py-2 my-2 cursor-pointer hover:bg-neutral-700 hover:rounded-lg
            after:absolute after:w-20 after:h-px after:top-36 after:right-4 after:bg-zinc-700">

                English

            </span>

            <span @click="changeLanguage('es')" class="px-4 py-2 my-2 cursor-pointer hover:bg-neutral-700 hover:rounded-lg">

                Español

            </span>

        </div>

    </div>

</template>