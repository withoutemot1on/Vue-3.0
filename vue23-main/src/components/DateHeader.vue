<script setup>
import { NewsHeader } from './NewsHeader.vue'
let now = new Date().toLocaleDateString()

</script>

<template>
<div class="pt-1">
    <h1>Актуальные новости {{now}}</h1>
    
    <p>Просмотрена:{{count}}</p><p>Прочитна:{{read}}</p>
</div>
</template>

<style scoped lang="sass">

</style>
