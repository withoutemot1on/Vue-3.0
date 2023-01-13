<template>
    <div>
        <h2>Заголовок</h2>
        <button class="btn" @click="isOpen=!isOpen">Открыть</button>
        <p v-if="isOpen">Lorem ipsum dolor sit amet.</p>
        </div>
</template>

<script>
export default{
    name:"TheHeader",
    data:()=>({
        isOpen: false,
    })
}
</script>