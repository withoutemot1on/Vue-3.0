<template>
<div class="card pt-1">
<h1>Актуальные новости на {{now}}</h1>
<span>Открыто: {{openRate}} Прочитано:{{readRate}}</span>
</div>

<hr>
<app-news
v-for="item in news"
:key="item.title"
:title="item.title"
:isOpen="item.isOpen"
:wasRead="item.wasRead"
:id="item.id"
:text="item.text"
@counter="counter"
@open-news="openNews"
@unread-news="unreadNews"
@read-news="readNews">
</app-news>
</template>

<script>
import appNews from './appNews.vue'

export default {
  name: 'App',
 
  data:()=>({
    openRate: 0,
    readRate: 0,
    items:"Заголовок title",
    now: new Date().toLocaleDateString(),
    news:[
      {title:"News 1", text: "Lorem ipsum dolor.", isOpen: false, wasRead: false, id:1},
      {title:"News 2", text: "Lorem ipsum dolor sit.", isOpen: false, wasRead: false, id:2},
      {title:"News 3", text: "Lorem ipsum dolor sit amet.", isOpen: false, wasRead: false, id:3},
    ],
  }),
  components:{
    'app-news':appNews,
  },
  methods:{
    counter(){
      return this.openRate++
    },
    openNews(){
      this.openRate++
    },
    readNews(id){
    const idx = this.news.findIndex(news=>news.id===id)
    this.news[idx].wasRead=true
    this.readRate++
  },
  unreadNews(id){
    const idx = this.news.findIndex(news=>news.id===id)
    this.news[idx].wasRead=false
    this.readRate--
  },
  }
}
</script>
