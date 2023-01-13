<template>
    <div class="card pt-1" >
        <h1 >{{title}}</h1>
        <button class="btn" @click="open()">{{isNewsOpen ? 'Закрыть':'Открыть'}}</button>
        <div v-if="isNewsOpen">
          <p>{{text}}</p>
          <button class="btn danger" v-if="!wasRead" @click="read()">Прочитано</button>
          <button class="btn primary" v-if="wasRead" @click="unread()">Не прочитано</button>
        </div>
      
    </div>  
    
    
</template>

<script>
export default{
    name:"AppNews",
    data(){
      return{
        isNewsOpen: this.isOpen,
      }  
    },
    props:{
        title:String,
        text:String,
        id:Number,
        wasRead:Boolean,
    },
    emits:['counter','openNews'],
    methods:{
        open(){
          this.isNewsOpen = !this.isNewsOpen
          if(this.isNewsOpen){
            this.$emit('counter')
          }
        },
        read(){
          this.isNewsOpen= false
            this.$emit('read-news',this.id)
        },
        unread(){
          this.isNewsOpen = true
          this.$emit('unread-news',this.id)
        }
        
    }
}
</script>