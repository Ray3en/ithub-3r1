<template>
  <Header></Header>
  <RouterView :message="message"/>
</template>

<script>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';

export default{
    components: { Header },
    data(){
      return{
        message: 'code'
      }
    },
    mounted(){
      // Пример проверки перехода внутри комопнента 
      // this.$router.beforeEach((to, from, next) => {
      //     next()
      // })
    }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>