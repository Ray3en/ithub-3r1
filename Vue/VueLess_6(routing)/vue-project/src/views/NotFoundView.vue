<template>
    <section class="main">
        <h1>404 ERROR!</h1>
        <button @click="goBack">Go back</button>
    </section>
</template>

<script>
export default{
    methods: {
        goBack(){
            this.$router.back()           // назад
            // this.$router.forward()        вперед
            // this.$router.push('/path')    програмная навигация

        }
    },
    mounted(){
        setTimeout(() => {
            this.$router.push('/')
        }, 3000)
    }
}
</script>

<style>
    .main{
        margin: 100px 0px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>