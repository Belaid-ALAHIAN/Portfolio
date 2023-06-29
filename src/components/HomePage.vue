<script setup>
import GithubIcon from '@/components/icons/GithubIcon.vue'
import InIcon from '@/components/icons/InIcon.vue'
import HeroSvg from './HeroSvg.vue'
</script>
<template>
  <div class="container flex-col items-center my-auto md:flex md:flex-row gap-28 relative h-full">
    <div class="md:my-auto p-2">
      <h1 class="font-Audiowide font-semibold text-5xl text-white uppercase">
        I'm <span class="text-amber-500">belaid</span> Alahian
      </h1>
      <p class="font-Montserrat font-extralight text-white p-1">
        Frontend developer creating engaging web experiences,<br />
        with a focus on user-friendly interfaces and clean code.
      </p>
    </div>
    <div class="h-1/2 order-1 md:order-2 md:h-full pb-3">
      <HeroSvg />
    </div>
    <div class="flex-cols gap-4 absolute bottom-0 px-1">
      <a href="http://"><GithubIcon /></a>

      <div class="flex justify-center p-1">
        <div class="h-3 w-px bg-amber-500"></div>
      </div>
      <a href="http://"><InIcon /></a>

      <div class="flex justify-center">
        <div class="h-20 w-px bg-amber-500"></div>
      </div>
    </div>
  </div>
</template>
