<script setup>

const props = defineProps({
  article: Object
})

</script>

<template>
    <div class="flex h-full flex-col">
      <!-- 
      <div v-if="props.mail" class="flex flex-1 flex-col">
        <div class="flex items-start p-4">
          <div class="flex items-start gap-4 text-sm">
            <Avatar>
              <AvatarFallback>
                {{ mailFallbackName }}
              </AvatarFallback>
            </Avatar>
            <div class="grid gap-1">
              <div class="font-semibold">
                {{ props.mail.name }}
              </div>
              <div class="line-clamp-1 text-xs">
                {{ props.mail.subject }}
              </div>
              <div class="line-clamp-1 text-xs">
                <span class="font-medium">Reply-To:</span> {{ props.mail.email }}
              </div>
            </div>
          </div>
          <div v-if="props.mail.date" class="ml-auto text-xs text-muted-foreground">
            
          </div>
        </div>
        <Separator />
        <div class="flex-1 whitespace-pre-wrap p-4 text-sm">
          {{ props.mail.text }}
        </div>
        
        
      </div>
      <div v-else class="p-8 text-center text-muted-foreground">
        No message selected
      </div>
      -->
      <ScrollArea>
        <ArticlePost :article="article" />
        {{ article.title }}
      </ScrollArea>
      
    </div>
  </template>
  