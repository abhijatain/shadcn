<template>

<div class="antialiased  relative" >
      <div class="flex items-center justify-center">
        <div class=" rounded-lg overflow-hidden  relative">
          <img class="h-[300px] object-cover object-end" :src="items" width="300" alt="Image" />
          <div class="absolute inset-0 p-3   flex flex-col justify-between">
            <div>
              <div class="flex items-baseline p-2">
                <span class="inline-block  py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">New</span>
                <div class="ml-2 text-xs uppercase font-semibold tracking-wide text-white">
                  The Hindu 
                </div>
              </div>
            </div>
            <div>
              <p class="p-1 font-semibold text-lg text-wrap text-white  rounded-lg ">
  Rahul Gandhi Criticizes Modi’s Recent Financial Reforms
</p>
              <div class="flex gap-3 flex-col">
                <div class="flex gap-2 p-2 flex-col mb-6">
                  <ProgressBar :value="85" color="#7A2048" lean="Right" text="Content right  85% " height="16"/>
                  <ProgressBar :value="65" color="#408EC6" lean="Center" text="Author views center  65% " height="16"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup >
const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});


</script>