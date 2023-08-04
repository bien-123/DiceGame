<template>
  <div id="app">
    <div class="container">
      <button v-on:click="title = 'Hoc lap trinh VueJS'">Thay doi title tu Component App.vue</button>
      <CompHeader 
        v-bind:title="title"
        v-on:changeTitleEvent="handleChangeTitle"
        v-bind:list-user="listUser"/>
      <list-user-vue 
        v-on:deleteUserEvent="handleDeleteUser"
        v-bind:list-user="listUser"/>
      <comp-footer-vue v-bind:title="title"/>
    </div>
    <DemoRef />
    <demo-slot >
      <div class="app-slot">HELLO WORLD</div>
    </demo-slot>

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
import DemoRef from './components/DemoRef.vue'
import DemoSlot from './components/DemoSlot.vue'

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
    ListUserVue,
    DemoRef,
    DemoSlot
  },
  methods: {
    handleChangeTitle(data) {
      // this.title = "Học lập trình VueJS";
      this.title = data.title;
      console.log("handleChangeTitle được gọi sau khi kích hoạt thành công App.vue");
    },
    handleDeleteUser(data) {
      var indexDelete = -1;
      this.listUser.forEach((u, idx) => {
        console.log(u.id, idx, data.id)
        if(u.id === data.id) {
          indexDelete = idx
        }
      });
      if(indexDelete != -1) {
        var test = this.listUser.splice(indexDelete, 1)
        console.log('test =', test)
      }
      console.log('indexDelete sau khi chạy vòng lặp for', indexDelete)
      console.log("handleDeleteUser trong App.vue", data);
    }
  },
  beforeCreate() {
    console.log("beforeCreate", this.title, document.querySelector('.container'))
  },
  created() {
    //Call API, Call Ajax
    console.log("created", this.title, this.title, document.querySelector('.container'));
  },
  beforeMount() {
    console.log("beforeMount", this.title, this.title, document.querySelector('.container'));
  },
  mounted() { 
    // Nếu muốn sử dụng jQuery -> Chỉ truy xuất DOM được trong mouted -> Có thể sử dụng jQuery
    console.log("mounted", this.title, this.title, document.querySelector('.container'));
  },
  beforeUpdate() {
    console.log("beforeUpdate", this.title);
  },
  updated() {
    console.log("updated", this.title);
  },
  beforeDestroy() {
    // Được chạy khi đối tượng vue bị hủy bỏ
    console.log("beforeDestroy");
  }, 
  destroyed() {
    // Destroyed các thư viện của bên thứ 3
    console.log("destroyed");
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
.container {
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 15px;
  min-height: 3000px;
}
</style>
