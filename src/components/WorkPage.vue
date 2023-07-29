<script setup>
import Flicking from '@egjs/vue3-flicking'
import { Pagination, Arrow } from '@egjs/flicking-plugins'

import '@egjs/flicking-plugins/dist/pagination.css'
import { onMounted, ref } from 'vue'

const plugins = [[new Pagination({ type: 'scroll' })], [new Arrow()]]

const flicking = ref()
</script>
<template>
  <div class="h-full py-10 px-3 pt-20">
    <h1
      class="uppercase pb-4 ont-Audiowide font-semibold text-2xl xsm:text-base sm:text-lg md:text-4xl text-center text-white"
    >
      Noteworthy Projects I've Been Involved In
    </h1>
    <div
      class="flex items-center pt-10 gap-1 h-full text-center md:flex-col md:text-left md: py-2 md:py-0"
    >
      <div
        v-motion
        :initial="{ opacity: 0 }"
        :visible="{ opacity: 1 }"
        :delay="800"
        class="p-1 w-full grid grid-rows gap-4"
      >
        <div class="relative h-full rounded-3xl flex flex-col">
          <div class="relative holder">
            <img
              class="rounded-3xl absolute top-0 left-0 h-full w-full"
              src="@/assets/images/moradio.png"
              alt="moradio"
            />
            <p
              class="absolute left-2 bottom-2 p-1 h-auto text-center font-Montserrat font-light text-white bg-neutral-900 bg-opacity-80 rounded-3xl"
            >
              Moroccan radio stations.
            </p>
          </div>
          <div class="w-full flex justify-end items-center gap-8 p-2">
            <a
              href="https://moradios.netlify.app/"
              target="_blank"
              class="py-2 w-1/2 px-2 bg-slate-50 text-neutral-900 hover:bg-amber-500 hover:text-white text-center cursor-pointer shadow-formShadow rounded-full"
            >
              website</a
            >
          </div>
        </div>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0 }"
        :visible="{ opacity: 1 }"
        :delay="900"
        class="p-1 w-full grid grid-rows gap-4"
      >
        <div class="relative h-full rounded-3xl flex flex-col">
          <div class="relative holder">
            <img
              class="rounded-3xl absolute top-0 left-0 h-full w-full"
              src="@/assets/images/cod401.png"
              alt="moradio"
            />
            <p
              class="absolute left-2 bottom-2 p-1 h-auto text-center font-Montserrat font-light text-white bg-neutral-900 bg-opacity-80 rounded-3xl"
            >
              A platform for driver license exams.
            </p>
          </div>
          <div class="w-full flex justify-end items-center gap-8 p-2">
            <p
              class="py-2 w-1/2 px-2 bg-gray-300 text-neutral-900 text-center cursor-not-allowed shadow-formShadow rounded-full"
            >
              website
            </p>
          </div>
        </div>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0 }"
        :visible="{ opacity: 1 }"
        :delay="1000"
        class="p-1 w-full grid grid-rows gap-4"
      >
        <div class="relative h-full rounded-3xl flex flex-col">
          <div class="relative holder">
            <img
              class="rounded-3xl absolute top-0 left-0 h-full w-full"
              src="@/assets/images/ader1.png"
              alt="moradio"
            />
            <p
              class="absolute left-2 bottom-2 p-1 h-auto text-center font-Montserrat font-light text-white bg-neutral-900 bg-opacity-80 rounded-3xl"
            >
              A website for a digital agency .
            </p>
          </div>
          <div class="w-full flex justify-end items-center gap-8 p-2">
            <p
              class="py-2 w-1/2 px-2 bg-gray-300 text-neutral-900 text-center cursor-not-allowed shadow-formShadow rounded-full"
            >
              website
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
