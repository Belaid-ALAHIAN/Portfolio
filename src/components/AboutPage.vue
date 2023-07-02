<script setup>
import MapLocation from '@/components/MapLocation.vue'
</script>
<template>
  <div>
    <div class="h-full sm:min-h-screen px-3 py-3 sm:px-6 mx-auto md:flex md:items-center">
      <div class="flex flex-col text-center md:text-left md:flex-row md:items-center py-2 md:py-0">
        <div class="flex flex-col w-full h-full p-2 sm:p-3 sm:pl-0">
          <h1
            class="uppercase ont-Audiowide font-semibold text-2xl sm:text-5xl md:text-4xl md:text-center text-amber-500"
          >
            Get in touch
          </h1>
          <div class="p-2 pt-4">
            <p class="text-gray-300 text-justify font-Montserrat px-3">
              Don't hesitate to get in touch if you're interested in connecting, collaborating, or
              speaking opportunities. Feel free to reach out to share your ideas, discuss your
              requirements, or even just to say hi. Initiate a conversation and let's explore the
              exciting prospects of working together.
            </p>
          </div>
          <div class="border border-amber-500 h-full sm:h-[62.5%] lg:flex">
            <div class="h-1/2 w-full sm:w-full sm:h-full">
              <MapLocation class="h-[100%]" />
            </div>
          </div>
        </div>
        <div class="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
          <div class="p-2 md:p-10 flex flex-col w-full shadow-formShadow rounded-sm">
            <div action="" class="w-full">
              <div class="h-1/2 sm:h-full p-6 flex flex-col justify-center">
                <div>
                  <h3 class="text-center text-white text-lg uppercase w-full">Address</h3>
                  <p class="uppercase text-gray-300 text-center text-sm py-2">
                    43 N 108 moulay ismail meknes
                  </p>
                </div>
                <div>
                  <h3 class="text-center text-white text-lg uppercase w-full">Phone</h3>
                  <p class="uppercase text-gray-300 text-center text-sm py-2">+212773284140</p>
                </div>
                <div>
                  <h3 class="text-center text-white text-lg uppercase w-full">Email</h3>
                  <p class="uppercase text-gray-300 text-center text-sm py-2">
                    alahian.belaid@gmail.com
                  </p>
                </div>
              </div>

              <div class="flex flex-col w-full my-5 shadow-formShadow rounded-sm">
                <a
                  href="mailto:alahian.belaid@gmail.com?subject='Hello from your portfolio'"
                  class="w-full py-4 bg-amber-500 rounded-sm text-white hover:bg-amber-600 text-center cursor-pointer"
                >
                  <div class="font-bold uppercase">send me a message</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
