<script setup>

import { Brush } from 'lucide-vue-next';

</script>

<template>

    <figure class="flex flex-col items-center border border-gray-925 rounded-xl p-[11px]
    hover:bg-rose-900 hover:ease-out hover:duration-300 group">

        <span class="hidden group-hover:absolute group-hover:left-16 group-hover:-top-[34px]
        group-hover:bg-neutral-900 group-hover:h-7 group-hover:w-max group-hover:border
        group-hover:border-gray-925 group-hover:rounded-lg group-hover:p-1 group-hover:px-2
        group-hover:text-sm group-hover:font-manrope group-hover:text-white-75 group-hover:block">

            {{ $t('projects') }}

        </span>

        <Brush />

    </figure>

</template>