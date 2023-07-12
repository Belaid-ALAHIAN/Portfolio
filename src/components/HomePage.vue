<script setup>
import HeroSvg from './HeroSvg.vue'
</script>
<template>
  <div
    class="container items-center my-auto flex flex-row py-0 gap-28 relative h-[91vh] sm:flex-col sm:py-8"
  >
    <div
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1 }"
      :delay="1000"
      class="sm:my-auto w-full p-2"
    >
      <h1 class="font-Audiowide font-semibold text-5xl text-white uppercase">
        I'm <span class="text-amber-500">belaid</span> Alahian
      </h1>
      <p class="font-Montserrat font-extralight text-white p-1 text-left">
        Frontend developer creating engaging web experiences,<br />
        with a focus on user-friendly interfaces and clean code.
      </p>
    </div>

    <div
      class="h-[150px] flex flex-col justify-around py-3 w-80 absolute bottom-0 left-[10%] bg-gray-801 rounded-tl-3xl rounded-tr-3xl shadow-formShadow"
    >
      <h1 class="text-center text-white uppercase">Stack</h1>
      <div class="flex justify-around">
        <p class="px-4 py-1 relative text-white">
          Html
          <span
            class="blur-md bg-gradient-to-r from-amber-300 to-amber-500 absolute h-1/2 w-full left-0 top-2 opacity-70"
          ></span>
        </p>
        <p class="px-4 py-1 relative text-white">
          Css
          <span
            class="blur-md bg-gradient-to-r from-amber-300 to-amber-500 absolute h-1/2 w-full left-0 top-2 opacity-70"
          ></span>
        </p>
        <p class="px-4 py-1 relative text-white">
          JavaScript
          <span
            class="blur-md bg-gradient-to-r from-amber-300 to-amber-500 absolute h-1/2 w-full left-0 top-2 opacity-70"
          ></span>
        </p>
      </div>
      <div class="flex justify-evenly">
        <p class="px-4 py-1 relative text-white">
          VueJs
          <span
            class="blur-md bg-gradient-to-r from-amber-300 to-amber-500 absolute h-1/2 w-full left-0 top-2 opacity-70"
          ></span>
        </p>
        <p class="px-4 py-1 relative text-white">
          Inertia
          <span
            class="blur-md bg-gradient-to-r from-amber-300 to-amber-500 absolute h-1/2 w-full left-0 top-2 opacity-70"
          ></span>
        </p>
      </div>
    </div>
    <div class="h-full w-full">
      <HeroSvg class="h-full w-full" />
    </div>
  </div>
</template>
