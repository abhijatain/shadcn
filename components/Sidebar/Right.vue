<script setup lang="ts">
import Button from '../ui/button/Button.vue';
import ScrollArea from '../ui/scroll-area/ScrollArea.vue';
</script>

<template>
   
   <div class=" flex flex-col gap-4 border-s ">
  
        <div class="flex justify-center my-6">
            <h1 class="font-bold text-xl">DAILY STATISTICS</h1>
        </div>
        <Card class=" border-0 p-0">
            <CardHeader class="p-2">
                <CardTitle>Weekly Stats</CardTitle>
                <CardDescription>Distribution of articles collected weekly. Hover to get more info</CardDescription>
            </CardHeader>
            <CardContent class="p-2">
                <Overview />
            </CardContent>
            <CardFooter>
                <Button>View All Stats</Button>
            </CardFooter>
        </Card>
        <Card class=" border-0">
            <CardHeader class="p-2">
                <CardTitle>News Sources</CardTitle>
                <CardDescription>Political Leanings of Indian Newspapers and Channels. Hover to get more info</CardDescription>
            </CardHeader>
            <CardContent class="p-2">
                <Overview3 />
            </CardContent>
            <CardFooter>
                <Button>View All Stats</Button>
            </CardFooter>
        </Card>
        
   
</div>
</template>