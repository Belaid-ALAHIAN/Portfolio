<template>
  <div class="container px-6 mx-auto">
    <div
      class="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center"
    >
      <div class="flex flex-col w-full">
        <p class="w-5/12 mx-auto md:mx-0 text-gray-500">left side</p>
      </div>
      <div class="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
        <div class="p-10 flex flex-col w-full shadow-formShadow rounded-sm">
          <h2 class="text-2xl uppercase font-bold text-white text-center mb-5">Contact me</h2>
          <form action="" class="w-full">
            <div class="flex flex-col w-full my-5">
              <input
                type="text"
                placeholder="Full Name"
                class="bg-neutral-700 appearance-none text-white rounded-sm px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:shadow-lg"
              />
            </div>
            <div class="flex flex-col w-full my-5">
              <input
                type="email"
                placeholder="Email"
                class="bg-neutral-700 appearance-none text-white rounded-sm px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:shadow-lg"
              />
            </div>
            <div class="flex flex-col w-full my-5">
              <textarea
                class="bg-neutral-700 appearance-none text-white rounded-sm px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:shadow-lg"
                placeholder="Enter Your Message..."
                rows="5"
                max-rows="6"
              ></textarea>
            </div>
            <div id="button" class="flex flex-col w-full my-5">
              <button
                type="button"
                class="w-full py-4 bg-amber-500 rounded-sm text-white hover:bg-amber-600"
              >
                <div class="font-bold">Submit</div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
