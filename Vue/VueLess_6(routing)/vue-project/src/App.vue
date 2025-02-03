<template>
  <Header></Header>
  <RouterView/>
</template>

<script>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';

export default{
    components: { Header }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>