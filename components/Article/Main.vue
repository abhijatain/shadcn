<script setup >

const articles = ref([
  

  {
    title: "Modi's Economic Policies and Their Impact on Public Sector Banks",
    source: 'The Hindu',
    date: 'May 12, 2024',
    topicLean: 80,
    authorLean: 65,
    topicLeanText: 'Topic covers left views',
    authorLeanText: "Author views are center",
    topicLeanReason: 'The article explores economic policies and their implications, with a critical view on how they affect public sector banks.',
    authorLeanReason: 'The article provides a balanced view but includes critical insights into government policies.',
    replies: 310,
    views: '320K',
    topicColor: '#035397', // Left
    authorColor: '#399918', // Light Green (Center)
    topicLeanValue: 'left',
    authorLeanValue: 'center'
  },
  {
    title: "Rahul Gandhi Criticizes Modi’s Recent Financial Reforms",
    source: 'The Times of India',
    date: 'May 13, 2024',
    topicLean: 70,
    authorLean: 60,
    topicLeanText: 'Topic covers left views',
    authorLeanText: "Author views are left",
    topicLeanReason: 'The article reports on Rahul Gandhi’s criticism of recent financial reforms, reflecting a left-leaning perspective.',
    authorLeanReason: 'The article’s author is known for a left-leaning stance on economic policies.',
    replies: 150,
    views: '200K',
    topicColor: '#035397', // Left
    authorColor: '#035397', // Left
    topicLeanValue: 'left',
    authorLeanValue: 'left'
  },
  {
    title: "Impact of Modi’s Economic Policies on the Banking Sector",
    source: 'The Economic Times',
    date: 'May 14, 2024',
    topicLean: 60,
    authorLean: 75,
    topicLeanText: 'Topic covers center views',
    authorLeanText: "Author views are center",
    topicLeanReason: 'The article provides an analysis of Modi’s policies from a neutral perspective, focusing on their impact on the banking sector.',
    authorLeanReason: 'The author maintains a neutral stance while analyzing economic policies.',
    replies: 220,
    views: '275K',
    topicColor: '#399918', // Light Green (Center)
    authorColor: '#399918', // Light Green (Center)
    topicLeanValue: 'center',
    authorLeanValue: 'center'
  },
  {
    title: "BJP's Economic Strategy: A Critical Review",
    source: 'The Indian Express',
    date: 'May 15, 2024',
    topicLean: 75,
    authorLean: 90,
    topicLeanText: 'Topic covers left views',
    authorLeanText: "Author views are center",
    topicLeanReason: 'The article critically reviews the BJP’s economic strategy, suggesting left-leaning implications.',
    authorLeanReason: 'The author’s views are more centered but offer a critical perspective.',
    replies: 180,
    views: '250K',
    topicColor: '#035397', // Left
    authorColor: '#399918', // Light Green (Center)
    topicLeanValue: 'left',
    authorLeanValue: 'center'
  },
  {
    title: "Public Sector Banks and Modi’s Financial Policies: An Overview",
    source: 'Hindustan Times',
    date: 'May 16, 2024',
    topicLean: 85,
    authorLean: 90,
    topicLeanText: 'Topic covers center-left views',
    authorLeanText: "Author views are center",
    topicLeanReason: 'The article discusses the financial policies with a focus on public sector banks, adopting a center-left approach.',
    authorLeanReason: 'The author’s views are more centered but provide a critical analysis of financial policies.',
    replies: 195,
    views: '260K',
    topicColor: '#399918', // Light Green (Center)
    authorColor: '#399918', // Light Green (Center)
    topicLeanValue: 'center-left',
    authorLeanValue: 'center'
  },
  {
    title: "The Role of Public Sector Banks in Modi’s Economic Vision",
    source: 'Business Standard',
    date: 'May 17, 2024',
    topicLean: 65,
    authorLean: 70,
    topicLeanText: 'Topic covers center views',
    authorLeanText: "Author views are right",
    topicLeanReason: 'The article evaluates the role of public sector banks in the context of Modi’s economic vision, with a center perspective.',
    authorLeanReason: 'The author’s views lean towards the right, providing a supportive analysis.',
    replies: 140,
    views: '210K',
    topicColor: '#399918', // Light Green (Center)
    authorColor: '#E8630A', // Right
    topicLeanValue: 'center',
    authorLeanValue: 'right'
  },
  {
    title: "Analyzing the Effectiveness of Modi’s Economic Policies",
    source: 'Financial Express',
    date: 'May 18, 2024',
    topicLean: 85,
    authorLean: 60,
    topicLeanText: 'Topic covers right views',
    authorLeanText: "Author views are center",
    topicLeanReason: 'The article offers a detailed analysis of Modi’s economic policies, reflecting right-leaning views on their effectiveness.',
    authorLeanReason: 'The author provides a center view while discussing the effectiveness of the policies.',
    replies: 250,
    views: '290K',
    topicColor: '#E8630A', // Right
    authorColor: '#399918', // Light Green (Center)
    topicLeanValue: 'right',
    authorLeanValue: 'center'
  },
  {
    title: "Modi’s Financial Reforms and Their Impact on the Economy",
    source: 'The Guardian',
    date: 'May 19, 2024',
    topicLean: 70,
    authorLean: 85,
    topicLeanText: 'Topic covers left views',
    authorLeanText: "Author views are center",
    topicLeanReason: 'The article reviews Modi’s financial reforms, highlighting their impact on the economy with a left-leaning perspective.',
    authorLeanReason: 'The author maintains a neutral stance but provides a critical perspective on the financial reforms.',
    replies: 230,
    views: '280K',
    topicColor: '#035397', // Left
    authorColor: '#399918', // Light Green (Center)
    topicLeanValue: 'left',
    authorLeanValue: 'center'
  },
  {
    title: "Rahul Gandhi’s View on Modi’s Economic Reforms",
    source: 'The New Indian Express',
    date: 'May 20, 2024',
    topicLean: 75,
    authorLean: 90,
    topicLeanText: 'Topic covers left views',
    authorLeanText: "Author views are center",
    topicLeanReason: 'The article covers Rahul Gandhi’s perspective on Modi’s economic reforms, reflecting left-leaning views.',
    authorLeanReason: 'The author provides a balanced view but highlights criticisms of the reforms.',
    replies: 160,
    views: '225K',
    topicColor: '#035397', // Left
    authorColor: '#399918', // Light Green (Center)
    topicLeanValue: 'left',
    authorLeanValue: 'center'
  },
  {
    title: "Economic Policies Under Modi: A Comprehensive Review",
    source: 'Livemint',
    date: 'May 21, 2024',
    topicLean: 60,
    authorLean: 75,
    topicLeanText: 'Topic covers center views',
    authorLeanText: "Author views are center",
    topicLeanReason: 'The article offers a comprehensive review of economic policies under Modi, with a center-leaning perspective.',
    authorLeanReason: 'The author presents a balanced view with a focus on the effectiveness of the policies.',
    replies: 210,
    views: '270K',
    topicColor: '#399918', // Light Green (Center)
    authorColor: '#399918', // Light Green (Center)
    topicLeanValue: 'center',
    authorLeanValue: 'center'
  },
  {
    title: "The Impact of Financial Reforms on Public Sector Banks",
    source: 'Deccan Herald',
    date: 'May 22, 2024',
    topicLean: 65,
    authorLean: 90,
    topicLeanText: 'Topic covers center-left views',
    authorLeanText: "Author views are center",
    topicLeanReason: 'The article discusses the impact of financial reforms on public sector banks, reflecting a center-left view.',
    authorLeanReason: 'The author provides a balanced perspective with a critical analysis of the reforms.',
    replies: 190,
    views: '265K',
    topicColor: '#399918', // Light Green (Center)
    authorColor: '#399918', // Light Green (Center)
    topicLeanValue: 'center-left',
    authorLeanValue: 'center'
  },
  {
    title: "Public Sector Banks and Economic Reforms: A Balanced Analysis",
    source: 'The Tribune',
    date: 'May 23, 2024',
    topicLean: 70,
    authorLean: 85,
    topicLeanText: 'Topic covers left views',
    authorLeanText: "Author views are center",
    topicLeanReason: 'The article provides a balanced analysis of public sector banks and economic reforms with left-leaning insights.',
    authorLeanReason: 'The author maintains a neutral stance but provides a critical perspective on the economic reforms.',
    replies: 200,
    views: '275K',
    topicColor: '#035397', // Left
    authorColor: '#399918', // Light Green (Center)
    topicLeanValue: 'left',
    authorLeanValue: 'center'
  },
]);

const items = [
  'https://cdn.pixabay.com/photo/2023/11/09/19/36/zoo-8378189_1280.jpg',
  'https://cdn.pixabay.com/photo/2024/06/20/17/03/fishing-8842590_1280.jpg',
  'https://cdn.pixabay.com/photo/2024/02/27/00/13/heliconia-8599119_1280.jpg',
  'https://cdn.pixabay.com/photo/2024/06/21/08/21/hut-8843868_1280.jpg',
  'https://cdn.pixabay.com/photo/2023/11/09/19/36/zoo-8378189_1280.jpg',
  'https://cdn.pixabay.com/photo/2024/06/20/17/03/fishing-8842590_1280.jpg',
  'https://cdn.pixabay.com/photo/2024/02/27/00/13/heliconia-8599119_1280.jpg',
  'https://cdn.pixabay.com/photo/2024/06/21/08/21/hut-8843868_1280.jpg',
];

const articles2 = ref([
  
  {
    title: "Modi’s Financial Reforms and Their Impact on the Economy",
    source: 'The Guardian',
    date: 'May 19, 2024',
    topicLean: 70,
    authorLean: 85,
    topicLeanText: 'Topic covers left views',
    authorLeanText: "Author views are center",
    topicLeanReason: 'The article reviews Modi’s financial reforms, highlighting their impact on the economy with a left-leaning perspective.',
    authorLeanReason: 'The author maintains a neutral stance but provides a critical perspective on the financial reforms.',
    replies: 230,
    views: '280K',
    topicColor: '#035397', // Left
    authorColor: '#399918', // Light Green (Center)
    topicLeanValue: 'left',
    authorLeanValue: 'center'
  },
  {
    title: "Rahul Gandhi’s View on Modi’s Economic Reforms",
    source: 'The New Indian Express',
    date: 'May 20, 2024',
    topicLean: 75,
    authorLean: 90,
    topicLeanText: 'Topic covers left views',
    authorLeanText: "Author views are center",
    topicLeanReason: 'The article covers Rahul Gandhi’s perspective on Modi’s economic reforms, reflecting left-leaning views.',
    authorLeanReason: 'The author provides a balanced view but highlights criticisms of the reforms.',
    replies: 160,
    views: '225K',
    topicColor: '#035397', // Left
    authorColor: '#399918', // Light Green (Center)
    topicLeanValue: 'left',
    authorLeanValue: 'center'
  },
  {
    title: "Economic Policies Under Modi: A Comprehensive Review",
    source: 'Livemint',
    date: 'May 21, 2024',
    topicLean: 60,
    authorLean: 75,
    topicLeanText: 'Topic covers center views',
    authorLeanText: "Author views are center",
    topicLeanReason: 'The article offers a comprehensive review of economic policies under Modi, with a center-leaning perspective.',
    authorLeanReason: 'The author presents a balanced view with a focus on the effectiveness of the policies.',
    replies: 210,
    views: '270K',
    topicColor: '#399918', // Light Green (Center)
    authorColor: '#399918', // Light Green (Center)
    topicLeanValue: 'center',
    authorLeanValue: 'center'
  },
]);
</script>

<template>
  <div class="md:hidden">
    <VPImage
      alt="Music"
      width="1280"
      height="1214" class="block" :image="{
        dark: '/examples/music-dark.png',
        light: '/examples/music-light.png',
      }"
    />
  </div>
  <div class="">
 
    <div class="border-t">
      <div class="bg-background">
        <div class="">
          
          <div class=" lg:col-span-4 lg:border-l">
            <div class="h-full px-4 py-6 lg:px-8">
              <Tabs default-value="music" class="h-full space-y-6">
                <div class="space-between flex items-center">
                  <TabsList>
                    <TabsTrigger value="music" class="relative">
                      News
                    </TabsTrigger>
                    <TabsTrigger value="podcasts">
                      Youtube
                    </TabsTrigger>
                    <TabsTrigger value="overview" >
                      Stats
                    </TabsTrigger>
                  </TabsList>
                  
                </div>
                <TabsContent
                  value="music"
                  class="border-none p-0 outline-none"
                >
                  <div class="flex items-center justify-between">
                    <div class="space-y-1">
                      <h2 class="text-2xl font-semibold tracking-tight">
                        Latest News
                      </h2>
                      <p class="text-sm text-muted-foreground">
                        Top picks for you. Updated daily.
                      </p>
                    </div>
                    <Button class="mx-auto mt-3  flex">Read More</Button>
                  </div>
                  <Separator class="my-4" />
                  <div class="relative">
                    <ScrollArea class=" w-96 md:w-full whitespace-nowrap">
                      <div class="flex space-x-4 pb-4">
                        <ArticleCard2 
                          v-for="(item, index) in items" :key="index" :items="item"
                          class=" shadow-lg dark:shadow-blue-800/50 shadow-blue-500/50"
                          aspect-ratio="portrait"
                          :width="550"
                          
                        />
                      </div>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                  </div>
                  <Separator class="my-4" />
                  <div class="flex items-center justify-between">
                    <div class="space-y-1">
                      <h2 class="text-2xl font-semibold tracking-tight">
                        Is Budget for Middle Class
                      </h2>
                      <p class="text-sm text-muted-foreground">
                        Top picks for you. Updated daily.
                      </p>
                    </div>
                    <Button class="mx-auto mt-3  flex">Read More</Button>
                  </div>
                  <Separator class="my-4" />
                  <div class="relative">
                    <ScrollArea class=" w-96 md:w-full whitespace-nowrap">
                      <div class="flex space-x-2 pb-4">
                        <ArticleCard 
                          v-for="(article, index) in articles" :key="index" :article="article"
                          class=" shadow-lg dark:shadow-blue-800/50 shadow-blue-500/50"
                         
                          style="width: 300px;"
                          
                        />
                        <!--
                        <AlbumArtwork
                          v-for="album in listenNowAlbums"
                          :key="album.name"
                          :album="album"
                          class="w-[250px]"
                          aspect-ratio="portrait"
                          :width="250"
                          :height="330"
                        />-->
                      </div>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                  </div>
                  <Separator class="my-4" />
                  <div class="flex items-center justify-between md:hidden">
                    <div class="space-y-1">
                      <h2 class="text-2xl font-semibold tracking-tight">
                        Factual & Unbiased News
                      </h2>
                      <p class="text-sm text-muted-foreground">
                        Top picks for you. Updated daily.
                      </p>
                    </div>
                    <Button class="mx-auto mt-3  flex">Read More</Button>
                  </div>
                  <Separator class="my-4 md:hidden" />
                  <div class="md:hidden">
                    
                      <div class="flex flex-col justify-center">
                        <ArticleCard4
                        v-for="(article, index) in articles2" :key="index" :article="article"
                          class=""
                          aspect-ratio="portrait"
                          :width="550"
                          
                        />
                      </div>
                     
                    
                  </div>
                  
                  <Separator class="my-4" />
                  <div class="flex items-center justify-between">
                    <div class="space-y-1">
                      <h2 class="text-2xl font-semibold tracking-tight">
                        Top News
                      </h2>
                      <p class="text-sm text-muted-foreground">
                        Top picks for you. Updated daily.
                      </p>
                      
                    </div>
                    <Button class="mx-auto mt-3  flex">Read More</Button>
                  </div>
                  <Separator class="my-4" />
                  <div class="relative">
                    <ScrollArea class=" w-96 md:w-full whitespace-nowrap">
                      <div class="flex space-x-4 pb-4">
                        <ArticleCard3 
                          v-for="(item, index) in items" :key="index" :items="item"
                          class=" shadow-lg dark:shadow-blue-800/50 shadow-blue-500/50"
                          aspect-ratio="portrait"
                          :width="550"
                          
                        />
                      </div>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                  </div>
                  <Separator class="my-4" />
                  <div class="mt-6 space-y-1">
                    <h2 class="text-2xl font-semibold tracking-tight">
                      Made for You
                    </h2>
                    <p class="text-sm text-muted-foreground">
                      Your personal playlists. Updated daily.
                    </p>

                  </div>
                  
                  <Separator class="my-4" />
                  <div class="relative">
                    <ScrollArea class=" w-96 md:w-full whitespace-nowrap">
                      <div class="flex space-x-4 pb-4">
                        <ArticleCard 
                          v-for="(article, index) in articles" :key="index" :article="article"
                          class=" shadow-lg dark:shadow-blue-800/50 shadow-blue-500/50"
                          aspect-ratio="portrait"
                          
                        />
                      </div>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                  </div>
                </TabsContent>
                <TabsContent
                  value="podcasts"
                  class="h-full flex-col border-none p-0 data-[state=active]:flex"
                >
                  <div class="flex items-center justify-between">
                    <div class="space-y-1">
                      <h2 class="text-2xl font-semibold tracking-tight">
                        New Episodes
                      </h2>
                      <p class="text-sm text-muted-foreground">
                        Your favorite podcasts. Updated daily.
                      </p>
                    </div>
                  </div>
                  <Separator class="my-4" />
                  <PodcastEmptyPlaceholder />
                  
                </TabsContent>
                <TabsContent
                  value="overview"
                  class="h-full flex-col border-none p-0 data-[state=active]:flex"
                >
                <div class="flex flex-col mb-12">
      <div class="flex items-center justify-between space-y-2">
        <h2 class="text-3xl font-bold tracking-tight mb-3">
          Dashboard
        </h2>
       
      </div>
      <Tabs default-value="overview" class="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">
            Overview
          </TabsTrigger>
          <TabsTrigger value="analytics" disabled>
            Analytics
          </TabsTrigger>
          <TabsTrigger value="reports" disabled>
            Reports
          </TabsTrigger>
          <TabsTrigger value="notifications" disabled>
            Notifications
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" class="space-y-4">
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7 md:hidden">
            <Card class="col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent class="pl-2">
                <Overview />
              </CardContent>
            </Card>
            <Card class="col-span-3">
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>
                  You made 265 sales this month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RecentSales />
              </CardContent>
            </Card>
          </div>
          <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle class="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  class="h-4 w-4 text-muted-foreground"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </CardHeader>
              <CardContent>
                <div class="text-2xl font-bold">
                  $45,231.89
                </div>
                <p class="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle class="text-sm font-medium">
                  Subscriptions
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  class="h-4 w-4 text-muted-foreground"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </CardHeader>
              <CardContent>
                <div class="text-2xl font-bold">
                  +2350
                </div>
                <p class="text-xs text-muted-foreground">
                  +180.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle class="text-sm font-medium">
                  Sales
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  class="h-4 w-4 text-muted-foreground"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </CardHeader>
              <CardContent>
                <div class="text-2xl font-bold">
                  +12,234
                </div>
                <p class="text-xs text-muted-foreground">
                  +19% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle class="text-sm font-medium">
                  Active Now
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  class="h-4 w-4 text-muted-foreground"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </CardHeader>
              <CardContent>
                <div class="text-2xl font-bold">
                  +573
                </div>
                <p class="text-xs text-muted-foreground">
                  +201 since last hour
                </p>
              </CardContent>
            </Card>
          </div>
          <div class="md:grid gap-4 md:grid-cols-2 lg:grid-cols-7 hidden ">
            <Card class="col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent class="pl-2">
                <Overview />
              </CardContent>
            </Card>
            <Card class="col-span-3">
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>
                  You made 265 sales this month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RecentSales />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
                  
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

