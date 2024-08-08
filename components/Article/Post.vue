<template>
  <ScrollArea>
    <div class=" mx-auto container">
  
  
  <div class="p-3 rounded-lg flex flex-col items-center justify-between md:flex-row gap-3">
    <div class="flex flex-row gap-4 rounded-xl md:hidden my-auto w-full text-start justify-between">
      <div class="flex flex-row gap-4 my-auto text-start">
        <img class="rounded-xl h-8 md:h-12" src="https://planetabled.com/wp-content/uploads/2019/07/The-Hindu-Logo.jpg" alt="Jese image">
        <p class="justify-start text-xs md:hidden w-full">
          <span class="font-bold">{{ article.source }}</span><br> {{ article.date }}
        </p>
      </div>
      <div class="flex flex-row gap-4"></div>
    </div>
    
    <div class="block md:hidden">
      <h1 class="mb-1 text-xl">
{{article.title}} {{article.title}}
      </h1>
    </div>
    
    <div class="md:flex flex-row gap-3 hidden">
      <img class="rounded-xl h-8 md:h-12" src="https://planetabled.com/wp-content/uploads/2019/07/The-Hindu-Logo.jpg" alt="Jese image">
      <div class="">
        <div class="flex flex-col gap-1 p-2">
          <div class="flex flex-row justify-between">
            <p class="text-xs mb-2">
              <span class="font-bold">{{ article.source }}</span> | {{ article.date }}
            </p>
          </div>
        </div>
        <h5 class="mb-2 text-xl">
          {{article.title}} {{article.title}}
        </h5>
      </div>
    </div>
    
    <div class="flex flex-row gap-2 w-full md:w-40 ">
      <div class="md:block flex flex-row my-2 px-1 border rounded-lg text-xs items-center">
        <p class="p-1 font-bold text-xs md:text-center">
          235
        </p>
        <hr class="hidden md:block">
        <span class="md:hidden">|</span>
        <p class="p-1 text-xs text-center">
          Replies
        </p>
      </div>
      <div class="md:block flex flex-row px-1 my-2 border rounded-lg text-xs items-center">
        <p class="p-1 font-bold text-xs md:text-center">
          285K
        </p>
        <hr class="hidden md:block">
        <span class="md:hidden">|</span>
        <p class="p-1 text-xs text-center">
          Views
        </p>
      </div>
    </div>
  </div>
  <div class="flex gap-3 flex-col mb-4">
    <div class="flex w-full gap-2">
      <ProgressBar :value="article.topicLean" :color="article.topicColor" :lean="article.topicLeanValue" text="Topic covers left views" height="18" />
    </div>
    <div class="flex w-full gap-2">
      <ProgressBar :value="article.authorLean" :color="article.authorColor" :lean="article.authorLeanValue" text="Author view's are Right" height="18" />
    </div>
  </div>
  <Tabs default-value="summary">
    <TabsList>
      <TabsTrigger value="summary">
        Summary
      </TabsTrigger>
      <TabsTrigger value="history">
        History
      </TabsTrigger>
    </TabsList>
    <TabsContent value="summary">
      {{article.content}}
      <ul role="list" class="space-y-8 p-3 text-gray-600 dark:text-gray-200">
        <li class="flex gap-x-3">
          <svg class="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
          </svg>
          <span>
            <strong class="font-semibold text-gray-900 dark:text-white">Push to deploy.</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
          </span>
        </li>
        <li class="flex gap-x-3">
          <svg class="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
          </svg>
          <span>
            <strong class="font-semibold text-gray-900 dark:text-white">SSL certificates.</strong> Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
          </span>
        </li>
        <li class="flex gap-x-3">
          <svg class="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
            <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd" />
          </svg>
          <span>
            <strong class="font-semibold text-gray-900 dark:text-white">Database backups.</strong> Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
          </span>
        </li>
      </ul>
    </TabsContent>
    <TabsContent value="history">
      People will break Modi's 'chakravyuh': Rahul Gandhi on PSBs collecting crores as penalty.
      People will break Modi's 'chakravyuh': Rahul Gandhi on PSBs collecting crores as penalty.
      People will break Modi's 'chakravyuh': Rahul Gandhi on PSBs collecting crores as penalty.
      <ul role="list" class="space-y-8 p-3 text-gray-600 dark:text-gray-200">
        <li class="flex gap-x-3">
          <svg class="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
          </svg>
          <span>
            <strong class="font-semibold text-gray-900 dark:text-white">Push to deploy.</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
          </span>
        </li>
        <li class="flex gap-x-3">
          <svg class="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
          </svg>
          <span>
            <strong class="font-semibold text-gray-900 dark:text-white">SSL certificates.</strong> Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
          </span>
        </li>
        <li class="flex gap-x-3">
          <svg class="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
            <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd" />
          </svg>
          <span>
            <strong class="font-semibold text-gray-900 dark:text-white">Database backups.</strong> Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
          </span>
        </li>
      </ul>
    </TabsContent>
  </Tabs>
  
  <Separator label="Similar News"  class="my-4"/>
</div>
</ScrollArea>
</template>

<script setup>
const props = defineProps({
  article: Object
})
</script>