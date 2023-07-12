<script setup>
import MapLocation from '@/components/MapLocation.vue'
</script>
<template>
  <div>
    <div class="h-full px-20 mx-auto flex items-center sm:min-h-screen py-3 sm:px-6">
      <div class="items-center py-0">
        <div
          v-motion
          :initial="{ opacity: 0, y: -100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :delay="500"
          class="w-full h-full p-2 sm:p-3 sm:pl-0"
        >
          <div class="px-8 py-4">
            <h1
              class="uppercase ont-Audiowide font-semibold text-2xl sm:text-5xl md:text-4xl md:text-center text-white"
            >
              Get in touch
            </h1>

            <p class="text-gray-300 text-justify w-1/2 font-Montserrat p-3">
              Reach out for networking, collaboration, or speaking opportunities. Share ideas,
              provide feedback, or just say hello. Let's connect and explore the possibilities
              together.
            </p>
          </div>
          <div class="border border-amber-500 h-full sm:h-[62.5%] lg:flex">
            <div class="h-1/2 w-full sm:w-full sm:h-full">
              <MapLocation class="h-[100%]" />
            </div>
          </div>
        </div>
        <div class="w-full md:basis-1/4 lg:w-9/12 mx-auto md:mx-0">
          <div
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, scale: 1 }"
            :hovered="{ scale: 1.2 }"
            :delay="500"
            class="p-2 md:p-10 flex flex-col w-full shadow-formShadow rounded-sm"
          >
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
