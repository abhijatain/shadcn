<template>
 
    <div class="m-6 flex flex-col gap-6">
        <div class="flex justify-between ">
            <p class="text-sm">Published 12 hours ago • 
            <Badge variant="outline" class="mx-1 hidden md:inline-block">Gaza</Badge>
            <Badge variant="outline" class="mx-1 hidden md:inline-block">Palestine</Badge>
            <Badge variant="outline" class="mx-1 hidden md:inline-block">War</Badge> </p>
            <div class="flex gap-6 flex-row ">
                <Share2 />
                <Bookmark />
            </div>
        </div>
        
        <h1 class="font-bold text-3xl  text-wrap">Israel broadens evacuation orders after deadly strike on Gaza school-turned-shelter</h1>
        <div class="flex gap-3 flex-col md:flex-row ">
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
      <TabsTrigger value="lean">
        Lean Reason
      </TabsTrigger>
    </TabsList>
    <TabsContent value="summary">
      
      <ul class="list-disc p-4 ">
        <li class="my-2">
            The Israeli military ordered evacuations in southern Gaza after an airstrike on a school-turned-shelter killed at least 80 Palestinians, according to local health authorities.
        </li>
        <li class="my-2">
            Hundreds of thousands have sought refuge in tent camps or schools, stating nowhere in Gaza feels safe.
        </li>
        <li class="my-2"> 
            The U.N. Human rights office says Israel has conducted “systematic attacks on schools,” impacting hundreds, including women and children, since July 4.
        </li>
    </ul>
    </TabsContent>
    <TabsContent value="history">
        <ul class="list-disc p-4 ">
        <li class="my-2">
            The Israeli military ordered evacuations in southern Gaza after an airstrike on a school-turned-shelter killed at least 80 Palestinians, according to local health authorities.
        </li>
        <li class="my-2">
            Hundreds of thousands have sought refuge in tent camps or schools, stating nowhere in Gaza feels safe.
        </li>
        <li class="my-2"> 
            The U.N. Human rights office says Israel has conducted “systematic attacks on schools,” impacting hundreds, including women and children, since July 4.
        </li>
    </ul>
    </TabsContent>
    <TabsContent value="lean">
        <ul class="list-disc p-4 ">
        <li class="my-2">
            The Israeli military ordered evacuations in southern Gaza after an airstrike on a school-turned-shelter killed at least 80 Palestinians, according to local health authorities.
        </li>
        <li class="my-2">
            Hundreds of thousands have sought refuge in tent camps or schools, stating nowhere in Gaza feels safe.
        </li>
        <li class="my-2"> 
            The U.N. Human rights office says Israel has conducted “systematic attacks on schools,” impacting hundreds, including women and children, since July 4.
        </li>
    </ul>
    </TabsContent>
        </Tabs>
        
        <Separator label="More News"/>
        <Tabs default-value="more">
            <TabsList>
                <TabsTrigger value="more">
                For You
            </TabsTrigger>
            <TabsTrigger value="similar">
                Similar
            </TabsTrigger>
            
            
            </TabsList>
            <TabsContent value="more">
                <div class="flex gap-2 flex-col ">
                    <div class="    " >
                        <div class=" flex flex-col items-center justify-center">
                            <div class="flex flex-row rounded-lg overflow-hidden ">
                            <!--E11-->
                            <!-- <div class="h-48 bg-cover bg-center" style="background-image:url('https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80')"></div>-->
                            <img class="h-[100px] w-[100px] rounded-lg object-cover" src="https://cdn.statcdn.com/Infographic/images/normal/27391.jpeg" alt="Home in Countryside" />

                            <div class="px-3 ">
                            
                                <p class=" font-semibold text-lg  ">Boxer Lin Yu-ting wins gold, following Imane Khelif to conclude an Olympics filled with scrutiny</p>

                                <div class="flex gap-3 flex-col">

                        
                        <div class="flex gap-2 py-2 flex-col w-[280px] mb-6">
                        <ProgressBar :value="85" color="#1E2761" lean="Right" text="Content right  85% " height="16"/>
                        <ProgressBar :value="65" color="#408EC6" lean="Center" text="Author views center  65% " height="16"/>
                        </div>

                        </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="antialiased  w-full  " >
                        <div class=" flex flex-col items-center justify-center">
                            <div class="flex flex-row rounded-lg overflow-hidden ">
                            <!--E11-->
                            <!-- <div class="h-48 bg-cover bg-center" style="background-image:url('https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80')"></div>-->
                            <img class="h-[100px] w-[100px] rounded-lg object-cover" src="https://cdn.statcdn.com/Infographic/images/normal/27391.jpeg" alt="Home in Countryside" />

                            <div class="px-3 ">
                            
                                <p class=" font-semibold text-lg  text-wrap">Boxer Lin Yu-ting wins gold, following Imane Khelif to conclude an Olympics filled with scrutiny</p>

                                <div class="flex gap-3 flex-col">

                        
                        <div class="flex gap-2 py-2 flex-col w-[280px] mb-6">
                        <ProgressBar :value="85" color="#1E2761" lean="Right" text="Content right  85% " height="16"/>
                                        <ProgressBar :value="65" color="#408EC6" lean="Center" text="Author views center  65% " height="16"/>
                        </div>

                        </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="antialiased  w-full  " >
                        <div class=" flex flex-col items-center justify-center">
                            <div class="flex flex-row rounded-lg overflow-hidden ">
                            <!--E11-->
                            <!-- <div class="h-48 bg-cover bg-center" style="background-image:url('https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80')"></div>-->
                            <img class="h-[100px] w-[100px] rounded-lg object-cover" src="https://cdn.statcdn.com/Infographic/images/normal/27391.jpeg" alt="Home in Countryside" />

                            <div class="px-3 ">
                            
                                <p class=" font-semibold text-lg  text-wrap">Boxer Lin Yu-ting wins gold, following Imane Khelif to conclude an Olympics filled with scrutiny</p>

                                <div class="flex gap-3 flex-col">

                        
                        <div class="flex gap-2 py-2 flex-col w-[280px] mb-6">
                        <ProgressBar :value="85" color="#1E2761" lean="Right" text="Content right  85% " height="16"/>
                                        <ProgressBar :value="65" color="#408EC6" lean="Center" text="Author views center  65% " height="16"/>
                        </div>

                        </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="antialiased  w-full  " >
                        <div class=" flex flex-col items-center justify-center">
                            <div class="flex flex-row rounded-lg overflow-hidden ">
                            <!--E11-->
                            <!-- <div class="h-48 bg-cover bg-center" style="background-image:url('https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80')"></div>-->
                            <img class="h-[100px] w-[100px] rounded-lg object-cover" src="https://cdn.statcdn.com/Infographic/images/normal/27391.jpeg" alt="Home in Countryside" />

                            <div class="px-3 ">
                            
                                <p class=" font-semibold text-lg  text-wrap">Boxer Lin Yu-ting wins gold, following Imane Khelif to conclude an Olympics filled with scrutiny</p>

                                <div class="flex gap-3 flex-col">

                        
                        <div class="flex gap-2 py-2 flex-col w-[280px] mb-6">
                        <ProgressBar :value="85" color="#1E2761" lean="Right" text="Content right  85% " height="16"/>
                                        <ProgressBar :value="65" color="#408EC6" lean="Center" text="Author views center  65% " height="16"/>
                        </div>

                        </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="antialiased  w-full  " >
                        <div class=" flex flex-col items-center justify-center">
                            <div class="flex flex-row rounded-lg overflow-hidden ">
                            <!--E11-->
                            <!-- <div class="h-48 bg-cover bg-center" style="background-image:url('https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80')"></div>-->
                            <img class="h-[100px] w-[100px] rounded-lg object-cover" src="https://cdn.statcdn.com/Infographic/images/normal/27391.jpeg" alt="Home in Countryside" />

                            <div class="px-3 ">
                            
                                <p class=" font-semibold text-lg  text-wrap">Boxer Lin Yu-ting wins gold, following Imane Khelif to conclude an Olympics filled with scrutiny</p>

                                <div class="flex gap-3 flex-col">

                        
                        <div class="flex gap-2 py-2 flex-col w-[280px] mb-6">
                        <ProgressBar :value="85" color="#1E2761" lean="Right" text="Content right  85% " height="16"/>
                                        <ProgressBar :value="65" color="#408EC6" lean="Center" text="Author views center  65% " height="16"/>
                        </div>

                        </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="antialiased  w-full  " >
                        <div class=" flex flex-col items-center justify-center">
                            <div class="flex flex-row rounded-lg overflow-hidden ">
                            <!--E11-->
                            <!-- <div class="h-48 bg-cover bg-center" style="background-image:url('https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80')"></div>-->
                            <img class="h-[100px] w-[100px] rounded-lg object-cover" src="https://cdn.statcdn.com/Infographic/images/normal/27391.jpeg" alt="Home in Countryside" />

                            <div class="px-3 ">
                            
                                <p class=" font-semibold text-lg  text-wrap">Boxer Lin Yu-ting wins gold, following Imane Khelif to conclude an Olympics filled with scrutiny</p>

                                <div class="flex gap-3 flex-col">

                        
                        <div class="flex gap-2 py-2 flex-col w-[280px] mb-6">
                        <ProgressBar :value="85" color="#1E2761" lean="Right" text="Content right  85% " height="16"/>
                                        <ProgressBar :value="65" color="#408EC6" lean="Center" text="Author views center  65% " height="16"/>
                        </div>

                        </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            
            </TabsContent>
            <TabsContent value="similar">
            
            </TabsContent>
  
        </Tabs>
    </div>
</template>

<script setup>
import { Share2, Bookmark } from 'lucide-vue-next'

const article =   {
        id: '110e8400-e29b-11d4-a716-446655440000',
        title: 'Tech Industry Faces New Challenges',
        author: 'Alice Smith',
        source: 'The Hindu',
        date: 'October 22, 2023',
        content: 'The technology sector is facing unprecedented challenges as new regulations come into effect. Industry leaders are concerned about the impact on innovation and growth, while proponents of the regulations argue that they are necessary to ensure fair competition...',
        topicLean: 60,
        authorLean: 65,
        topicLeanText: 'Topic leans slightly left',
        authorLeanText: 'Author leans slightly left',
        topicLeanReason: 'The article highlights concerns about regulations, with a slight emphasis on their potential drawbacks, aligning with a left-leaning perspective.',
        authorLeanReason: 'The author presents the challenges faced by the tech industry, with a tone that suggests caution about over-regulation.',
        replies: 180,
        views: '150K',
        topicColor: '#7a2048', // Slight Left
        authorColor: '#4682B4', // Slight Left
        topicLeanValue: 'left',
        authorLeanValue: 'left'
    }
</script>