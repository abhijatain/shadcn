<template>
    <div class=" p-1 rounded-lg flex flex-col gap-2  ">
      <!-- Header -->
      <div class="flex flex-row gap-4 rounded-xl my-auto w-full text-start justify-between">
        <div class="flex flex-row gap-4 my-auto text-start">
          <p class="justify-start text-xs w-full">
            <span class="font-bold ">{{ article.source }} |</span>
            {{ article.date }}
          </p>
        </div>
        
      </div>
  
      <!-- Title -->
      <div>
        <NuxtLink to="/discussions/post">
        <h1 class="mb-1 merriweather-bold text-xl text-wrap">
          {{ article.title }}
        </h1>
    </NuxtLink>
      </div>
  
      <!-- Progress Bars and Icons -->
      
     
  
      <!-- Replies and Views -->
      <div class="flex flex-row gap-2 w-full">
        <div class="flex flex-row my-2 px-1 border rounded-lg text-xs items-center">
          <p class="p-1 font-bold text-xs">
            {{ article.replies }}
          </p><span class="px-1">|</span>
          <p class="p-1 text-xs">
            Replies
          </p>
        </div>
        <div class="flex flex-row my-2 px-1 border rounded-lg text-xs items-center">
          <p class="p-1 font-bold text-xs">
            {{ article.views }}
          </p><span class="px-1">|</span>
          <p class="p-1 text-xs">
            Views
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>


  const props = defineProps({
    article: Object
  });
  

  </script>
  
  <style scoped>
 .merriweather-bold {
  font-family: "Merriweather", serif;
  font-weight: 700;
  font-style: normal;
}

.merriweather-regular {
  font-family: "Merriweather", serif;
  font-weight: 400;
  font-style: normal;
}
  </style>