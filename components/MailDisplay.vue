<script setup>

const props = defineProps({
  mail: Object
})

const mailFallbackName = computed(() => {
  return props.mail?.name
    .split(' ')
    .map(chunk => chunk[0])
    .join('')
})

const today = new Date()

</script>

<template>
    <div class="flex h-full flex-col">
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
        <Separator class="mt-auto" />
        <div class="p-4">
          <form>
            <div class="grid gap-4">
              <Textarea
                class="p-4"
                :placeholder="`Reply ${props.mail.name}...`"
              />
              <div class="flex items-center">
                <Label
                  html-for="mute"
                  class="flex items-center gap-2 text-xs font-normal"
                >
                  <Switch id="mute" aria-label="Mute thread" /> Mute this
                  thread
                </Label>
                <Button
                  type="button"
                  size="sm"
                  class="ml-auto"
                >
                  Send
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div v-else class="p-8 text-center text-muted-foreground">
        No message selected
      </div>
    </div>
  </template>
  