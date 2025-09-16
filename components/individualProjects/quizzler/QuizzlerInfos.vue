<template>

    <section class="flex flex-col items-center justify-center h-full gap-6 grow max-[850px]:-mt-12">

        <figure>

            <NuxtImg class="w-[368px] h-[192px] rounded-xl max-[380px]:w-screen" src="/quizzler-print.png" />

        </figure>

        <div class="flex flex-row gap-2 font-bold tracking-wider max-[850px]:mt-4">

            <div class="flex flex-col items-center w-22">

                <figure class="p-2 border rounded-xl border-gray-925 hover:bg-black-925">

                    <NuxtImg class="w-6 h-6 rounded-md" src="/vue.svg" />

                </figure>

                <p class="mt-1 text-xs">VueJS</p>

            </div>

            <div class="flex flex-col items-center w-22">

                <figure class="p-2 border rounded-xl border-gray-925 hover:bg-black-925">

                    <NuxtImg class="w-6 h-6 rounded-md" src="/tailwind-css.svg" />

                </figure>

                <p class="mt-1 text-xs">Tailwind CSS</p>

            </div>

            <div class="flex flex-col items-center w-22">

                <figure class="p-2 border rounded-xl border-gray-925 hover:bg-black-925">

                    <NuxtImg class="w-6 h-6 rounded-md" src="/figma.svg" />

                </figure>

                <p class="mt-1 text-xs">Figma</p>

            </div>

        </div>

    </section>

</template>