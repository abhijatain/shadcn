<template>
<div class="antialiased  border-r" style="width: 450px;">
  <div class=" flex flex-col items-center justify-center">
    <div class="flex flex-row rounded-lg overflow-hidden items-center">
      <!--E11-->
      <!-- <div class="h-48 bg-cover bg-center" style="background-image:url('https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80')"></div>-->
      <img class="h-[150px] w-[150px] rounded-full object-cover" :src="items" alt="Home in Countryside" />

      <div class="p-3 ">
        <div class="flex items-baseline">
          <span class="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">New</span>
          <div class="ml-2 text-xs uppercase font-semibold tracking-wide ">
            The Hindu 
          </div>
        </div>
        <p class="mt-2 font-semibold text-lg w-[280px] text-wrap">Rahul Gandhi Criticizes Modi’s Recent Financial Reforms</p>

        <div class="flex gap-3 flex-col">

  
<div class="flex gap-2 p-2 flex-col w-[280px] mb-6">
  <ProgressBar :value="85" color="#035397" lean="Right" text="Content right  85% " height="16"/>
                  <ProgressBar :value="65" color="#399918" lean="Center" text="Author views center  65% " height="16"/>
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