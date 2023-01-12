<script setup>
import { ref } from 'vue'

let count = ref(0);
let isOpen = ref(false)
let isRead = ref(false)
let read = ref(0)

defineProps({
  newsTitle: String,
  newsText: String
})

function btnHandler(){
  if(!this.isOpen) this.count += 1 
  this.isOpen = !this.isOpen
}
function readPost(){
  if(!this.isRead) this.read += 1 
  else this.read  -= 1
  this.isRead = !this.isRead 
}

</script>

<template>
  <div>
    <h3>{{ newsTitle }}</h3>
    <button class="btn" @click="btnHandler()">{{isOpen ? 'Свернуть' : 'Развернуть'}}</button>
    <p v-if="isOpen">{{ newsText }}</p>
    <p>Просмотров статьи: {{ count }}</p>
    <button class="btn" @click="readPost()">{{isRead ? 'Непрочитано' : 'Прочитано'}}</button>
    <p v-if="isRead"></p>
    <p>Статья прочитана: {{read}} раз</p>
  </div>
</template>

<style scoped lang="sass">

</style>
