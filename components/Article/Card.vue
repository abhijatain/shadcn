<template>
    <div class=" p-3 rounded-lg flex flex-col gap-3 max-w-[500px] ">
      <!-- Header -->
      <div class="flex flex-row gap-4 rounded-xl my-auto w-full text-start justify-between">
        <div class="flex flex-row gap-4 my-auto text-start">
          <img class="rounded-xl  h-8 " src="https://planetabled.com/wp-content/uploads/2019/07/The-Hindu-Logo.jpg" alt="Article logo">
          <p class="justify-start text-xs w-full">
            <span class="font-bold ">{{ article.source }}</span>
            <br> {{ article.date }}
          </p>
        </div>
        
      </div>
  
      <!-- Title -->
      <div>
        <NuxtLink to="/post">
        <h1 class="mb-1 merriweather-bold text-xl text-wrap">
          {{ article.title }}
        </h1>
    </NuxtLink>
      </div>
  
      <!-- Progress Bars and Icons -->
      
      <div class="flex w-full gap-2">
        <ProgressBar :value="article.topicLean" :color="article.topicColor" :lean="article.topicLeanValue" :text="article.topicLeanText"/>
        <div class="card flex justify-center">
          <i class="pi pi-question-circle"></i>
          
        </div>
      </div>
  
      <div class="flex w-full gap-2">
        <ProgressBar :value="article.authorLean" :color="article.authorColor" :lean="article.authorLeanValue" :text="article.authorLeanText"/>
        <div class="card flex justify-center">
          <i class="pi pi-question-circle" ></i>
          
        </div>
      </div>
  
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