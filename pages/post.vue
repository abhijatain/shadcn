<template>
    <ArticlePost :article="article" class="px-12"/>
    <CarouselSimilar />
</template>

<script setup>
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
        topicColor: '#4682B4', // Slight Left
        authorColor: '#4682B4', // Slight Left
        topicLeanValue: 'left',
        authorLeanValue: 'left'
    }
</script>