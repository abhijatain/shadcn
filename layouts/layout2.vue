<template>
  <h1 class="font-bold text-center text-4xl p-4 font-mono">
    NOSIDES
  
  </h1>
    <div class="flex flex-row max-w-[1900px] mx-auto">
      <div class="md:w-[20%] lg:w-[20%]">
        <SidebarLeft />
      </div>
      <div class="md:w-[60%] lg:w-[60%]">
        <slot />
      </div>
      <div class="md:w-[20%] lg:w-[20%]">
        <SidebarRight />
      </div>
    
      
     
    </div>
    <Footer />
</template>