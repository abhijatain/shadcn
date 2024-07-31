<script setup>

import { playlists } from '../data/playlists';
import { cn } from '@/lib/utils'



const props = defineProps({
  album: {
    type: Object,
    required: true,
  },
  aspectRatio: {
    type: String,
    default: 'portrait',
  },
  width: Number,
  height: Number,
});
</script>

<template>
  <div :class="cn('space-y-3', $attrs.class ?? '')">
   
        <div class="overflow-hidden rounded-md">
          <img
            :src="album.cover"
            :alt="album.name"
            :width="width"
            :height="height"
            :class="cn(
              'h-auto w-auto object-cover transition-all hover:scale-105',
              aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'
            )"
          >
        </div>
     
    <div class="space-y-1 text-sm">
      <h3 class="font-medium leading-none">
        {{ album.name }}
      </h3>
      <p class="text-xs text-muted-foreground">
        {{ album.artist }}
      </p>
    </div>
  </div>
</template>