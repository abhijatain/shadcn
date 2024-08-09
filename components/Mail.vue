<script setup>

const props = defineProps({
  articles: { type: Array, default: () => [] },
  
})

const selectedArticle = ref(props.articles[0].id)
const searchValue = ref('')


const selectedArticleData = computed(() => props.articles.find(item => item.id === selectedArticle.value))

</script>

<template>

  <div class="flex h-full max-h-[800px]">
    
    <!-- Left Column -->
    <div class="w-1/2 flex-shrink-0">
      <div class=" p-4">
        <form>
          <div class="relative">
            <Input v-model="searchValue" placeholder="Search" class="pl-8" />
          </div>
        </form>
      </div>
      <div class="m-0">
        <MailList2 v-model:selected-article="selectedArticle" :items="articles" />
      </div>
    </div>

    <!-- Right Column -->
    <div class="w-1/2 flex-grow">
      <ArticlePost :article="selectedArticleData" />
    </div>
    
  </div>


</template>
  