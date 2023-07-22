<script setup>
import Flicking from '@egjs/vue3-flicking'
import { Pagination, Arrow } from '@egjs/flicking-plugins'

import '@egjs/flicking-plugins/dist/pagination.css'
import { onMounted, ref } from 'vue'

const plugins = [[new Pagination({ type: 'scroll' })], [new Arrow()]]

const flicking = ref()
</script>
<template>
  <div class="h-full pt-8 px-3">
    <h1
      class="uppercase ont-Audiowide font-semibold text-2xl sm:text-5xl md:text-4xl text-right text-white"
    >
      Noteworthy Projects I've Been Involved In
    </h1>
    <div class="flex items-center gap-4 h-full text-center md:text-left md: py-2 md:py-0">
      <div class="p-5 w-full grid grid-rows gap-4">
        <p class="p-1 h-auto text-center font-Montserrat font-light text-white">
          Moroccan radio stations.
        </p>
        <div class="relative h-full rounded-3xl flex flex-col">
          <div class="">
            <img
              class="rounded-3xl h-[200px] w-full"
              src="@/assets/images/moradio.png"
              alt="moradio"
            />
          </div>
          <div class="w-full flex justify-between items-center gap-8 p-2">
            <a
              href="https://moradios.netlify.app/"
              target="_blank"
              class="py-2 w-full px-2 bg-fuchsia-700 text-white hover:bg-fuchsia-800 text-center cursor-pointer shadow-formShadow rounded-full"
            >
              visite page</a
            >
            <a
              href="https://moradios.netlify.app/"
              target="_blank"
              class="py-2 w-full px-2 bg-fuchsia-700 text-white hover:bg-fuchsia-800 text-center cursor-pointer shadow-formShadow rounded-full"
            >
              code</a
            >
          </div>
        </div>
      </div>

      <div class="p-5 w-full grid grid-rows gap-4">
        <p class="p-1 h-auto text-center font-Montserrat font-light text-white">
          A platform for driver license exams.
        </p>
        <div class="relative h-full rounded-3xl flex flex-col">
          <div class="">
            <img
              class="rounded-3xl h-[200px] w-full"
              src="@/assets/images/cod401.png"
              alt="moradio"
            />
          </div>
          <div class="w-full flex justify-between items-center gap-8 p-2">
            <a
              href="https://moradios.netlify.app/"
              target="_blank"
              class="py-2 w-full px-2 bg-fuchsia-700 text-white hover:bg-fuchsia-800 text-center cursor-pointer shadow-formShadow rounded-full"
            >
              visite page</a
            >
            <a
              href="https://moradios.netlify.app/"
              target="_blank"
              class="py-2 w-full px-2 bg-fuchsia-700 text-white hover:bg-fuchsia-800 text-center cursor-pointer shadow-formShadow rounded-full"
            >
              code</a
            >
          </div>
        </div>
      </div>

      <div class="p-5 w-full grid grid-rows gap-4">
        <p class="p-1 h-auto text-center font-Montserrat font-light text-white">
          A website for a digital agency .
        </p>
        <div class="relative h-full rounded-3xl flex flex-col">
          <div class="">
            <img
              class="rounded-3xl h-[200px] w-full"
              src="@/assets/images/ader1.png"
              alt="moradio"
            />
          </div>
          <div class="w-full flex justify-between items-center gap-8 p-2">
            <a
              href="https://moradios.netlify.app/"
              target="_blank"
              class="py-2 w-full px-2 bg-fuchsia-700 text-white hover:bg-fuchsia-800 text-center cursor-pointer shadow-formShadow rounded-full"
            >
              visite page</a
            >
            <a
              href="https://moradios.netlify.app/"
              target="_blank"
              class="py-2 w-full px-2 bg-fuchsia-700 text-white hover:bg-fuchsia-800 text-center cursor-pointer shadow-formShadow rounded-full"
            >
              code</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- <div
      class="grid grid-rows-5 grid-flow-col place-items-center gap-4 h-full text-center md:text-left md: py-2 md:py-0"
    >
      <div class="row-start-1 row-end-4 p-5 w-full">
        <div class="rounded-3xl flex flex-col gap-1">
          <div class="p-1 text-center font-Montserrat font-light text-white">
            list of moroccan radio stations that are available online
          </div>
          <div class="relative h-full rounded-3xl">
            <div class="">
              <img
                class="rounded-3xl object-scale-down"
                src="@/assets/images/moradio.png"
                alt="moradio"
              />
            </div>
            <div class="w-full flex justify-between items-center gap-8 p-2">
              <a
                href="https://moradios.netlify.app/"
                target="_blank"
                class="py-2 w-full px-2 bg-fuchsia-700 text-white hover:bg-fuchsia-800 text-center cursor-pointer shadow-formShadow rounded-full"
              >
                visite page</a
              >
              <a
                href="https://moradios.netlify.app/"
                target="_blank"
                class="py-2 w-full px-2 bg-fuchsia-700 text-white hover:bg-fuchsia-800 text-center cursor-pointer shadow-formShadow rounded-full"
              >
                code</a
              >
            </div>
          </div>
        </div>
      </div>

      <div class="row-start-2 row-end-5 p-5 w-full">
        <div class="rounded-3xl flex flex-col gap-1">
          <div class="p-1 text-center font-Montserrat font-light text-white">
            A platform for users to study and practice for their driver's license exams.
          </div>
          <div class="relative h-full rounded-3xl">
            <div class="">
              <img
                class="rounded-3xl object-scale-down"
                src="@/assets/images/cod401.png"
                alt="moradio"
              />
            </div>
            <div class="w-full flex justify-between items-center gap-8 p-2">
              <a
                href="https://moradios.netlify.app/"
                target="_blank"
                class="py-2 w-full px-2 bg-fuchsia-700 text-white hover:bg-fuchsia-800 text-center cursor-pointer shadow-formShadow rounded-full"
              >
                visite page</a
              >
              <a
                href="https://moradios.netlify.app/"
                target="_blank"
                class="py-2 w-full px-2 bg-fuchsia-700 text-white hover:bg-fuchsia-800 text-center cursor-pointer shadow-formShadow rounded-full"
              >
                code</a
              >
            </div>
          </div>
        </div>
      </div>

      <div class="row-start-3 row-end-6 p-5 w-full">
        <div class="rounded-3xl flex flex-col gap-1">
          <div class="p-1 text-center font-Montserrat font-light text-white">
            A website for a digital agency .
          </div>
          <div class="relative h-full rounded-3xl">
            <div class="">
              <img
                class="rounded-3xl object-scale-down"
                src="@/assets/images/ader1.png"
                alt="moradio"
              />
            </div>
            <div class="w-full flex justify-between items-center gap-8 p-2">
              <a
                href="https://moradios.netlify.app/"
                target="_blank"
                class="py-2 w-full px-2 bg-fuchsia-700 text-white hover:bg-fuchsia-800 text-center cursor-pointer shadow-formShadow rounded-full"
              >
                visite page</a
              >
              <a
                href="https://moradios.netlify.app/"
                target="_blank"
                class="py-2 w-full px-2 bg-fuchsia-700 text-white hover:bg-fuchsia-800 text-center cursor-pointer shadow-formShadow rounded-full"
              >
                code</a
              >
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
