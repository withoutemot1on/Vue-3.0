let App={
    data(){
        return{
            title:'Список задач',
            inputValue:'',
            placeholderString:'Введите задачу',
            notes: ["Заметка 1","Заметка 2","Заметка 3"],
        }
    },
    methods:{
        getValue(event){
            this.inputValue=event.target.value;
        },
        addNote(){
            this.notes.push(this.inputValue)
        }
    }
}

Vue.createApp(App).mount('#app')    
