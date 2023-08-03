<template>
  <div id="app">
    <CompHeader v-bind:title="title"/>
    <list-user-vue v-bind:list-user="listUser"/>
    
    <!-- <CompFooterVue/> -->
    <comp-footer-vue v-bind:title="title"/>
  </div>
</template>

<script>
/*
App (title, listUser[])
    Header (title)
    ListUser (listUser[])
      User (user - object)
    Footer
    -> props -> những dữ liệu truyền từ Components cha vào components con
       -> Cú pháp giống thuộc tính
          -> Sử dụng v-bind:
 */
import CompHeader from "./components/CompHeader.vue"
import CompFooterVue from "./components/CompFooter.vue"
import ListUserVue from './components/ListUser.vue'

export default {
  name: 'app',
  data () {
    return {
      title: 'Hello VueJS!',
      listUser: [
        {id: 1, email: 'test1@example.com', active: true},
        {id: 2, email: 'test2@example.com', active: false},
        {id: 3, email: 'test3@example.com', active: true},
        {id: 4, email: 'test4@example.com', active: false},
        {id: 5, email: 'test5@example.com', active: true},
        {id: 6, email: 'test6@example.com', active: false},
      ]
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
