<script setup lang="ts">
import Button from '../ui/button/Button.vue';
import ScrollArea from '../ui/scroll-area/ScrollArea.vue';
</script>

<template>
   
<div class="fixed flex flex-col  p-2 gap-4 border-s">
    <ScrollArea  class="h-screen w-full">
    <div class="flex justify-center my-6">
        <h1 class="font-bold text-xl">DAILY STATISTICS</h1>
    </div>
    <Card class="p-2 border-0">
        <CardHeader>
            <CardTitle>Weekly Stats</CardTitle>
            <CardDescription>Distribution of articles collected weekly. Hover to get more info</CardDescription>
        </CardHeader>
        <CardContent>
            <Overview  />
        </CardContent>
        <CardFooter>
            <Button>View All Stats</Button>
        </CardFooter>
      
    </Card>
    <Card class="p-2 border-0">
        <CardHeader>
            <CardTitle>News Sources</CardTitle>
            <CardDescription>Political Leanings of Indian Newspapers and Channels. Hover to get more info</CardDescription>
        </CardHeader>
        <CardContent>
            <Overview3 />
        </CardContent>
        <CardFooter>
            <Button>View All Stats</Button>
        </CardFooter>
    </Card>
    <Card class="p-2 border-0">
        <CardHeader>
            <CardTitle>All Content Share</CardTitle>
            <CardDescription>Total Articles Distribution. Hover to get more info</CardDescription>
        </CardHeader>
        <CardContent>
            <Overview2 />
        </CardContent>
        <CardFooter>
            <Button>View All Stats</Button>
        </CardFooter>
        
    </Card>
</ScrollArea>

</div>
</template>