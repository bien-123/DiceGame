<template>
  <div id="app">
    <CompHeader/>
    <list-user-vue/>
    
    <!-- <CompFooterVue/> -->
    <comp-footer-vue />
  </div>
</template>

<script>
/*
App
    Header
    ListProducts
      Product
    Footer
 */
import CompHeader from "./components/CompHeader.vue"
import CompFooterVue from "./components/CompFooter.vue"
import ListUserVue from './components/ListUser.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    CompHeader,
    CompFooterVue,
    ListUserVue
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
