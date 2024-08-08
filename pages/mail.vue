<script  setup>

import { articles } from '../data/articles'
</script>

<template>

  <div class=" flex-col flex ">
    <Mail
      :articles="articles"
      
    />
  </div>
</template>