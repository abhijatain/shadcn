<script setup>
import { cn } from '@/lib/utils'

const props = defineProps({
  items: Array
})

const selectedArticle = defineModel('selectedArticle', { required: false })

function getBadgeVariantFromLean(leanValue) {
  if (leanValue === 'left')
    return 'primary'
  if (leanValue === 'center')
    return 'secondary'
  if (leanValue === 'right')
    return 'danger'

  return 'default'
}
</script>

<template>
  <ScrollArea class="h-screen flex">
    <div class="flex-1 flex flex-col gap-2 p-4 pt-0">
      <TransitionGroup name="list" appear>
        <button
          v-for="item in props.items"
          :key="item.title"
          :class="cn(
            'flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent',
            selectedArticle === item.id && 'bg-muted',
          )"
          @click="selectedArticle = item.id"
        >
          <div class="flex w-full flex-col gap-1">
            <div class="flex items-center">
              <div class="flex items-center gap-2">
                <div class="font-semibold">
                  {{ item.title }}
                </div>
              </div>
              <div
                :class="cn(
                  'ml-auto text-xs',
                  selectedArticle === item.title
                    ? 'text-foreground'
                    : 'text-muted-foreground',
                )"
              >
                {{ item.source }} - {{ item.date }}
              </div>
            </div>

            <div class="text-xs font-medium">
              {{ item.topicLeanText }} | {{ item.authorLeanText }}
            </div>
          </div>
          <div class="line-clamp-2 text-xs text-muted-foreground">
            {{ item.topicLeanReason }}
          </div>
          <div class="flex items-center gap-2 mt-2">
            <Badge :variant="getBadgeVariantFromLean(item.topicLeanValue)">
              Topic Lean
            </Badge>
            <Badge :variant="getBadgeVariantFromLean(item.authorLeanValue)">
              Author Lean
            </Badge>
          </div>
        </button>
      </TransitionGroup>
    </div>
  </ScrollArea>
</template>
