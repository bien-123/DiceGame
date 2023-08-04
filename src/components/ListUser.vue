<template>
    <div class="list-user">
        <user-vue 
            v-for="user in listUser"
            v-bind:key="user.id"
            v-bind:user="user"
            v-on:deleteUser="deleteUser"
        />
        <!-- <user-vue/>
        <user-vue/>
        <user-vue/> -->
    </div>
</template>

<script>
/** 
App
    ListUser -> ko đc quyền thay đổi arrListUser -> Truyền tiếp Event thêm một lần nữa ra App.vue
        UserVue -> Truyền Event thông báo ra cho thằng ListUser
        UserVue
*/
import UserVue from './User.vue'
export default {
    name: "list-user",
    props: {
        listUser: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            
        }
    },
    components: {
        UserVue
    },
    methods: {
        deleteUser(data) {
            console.log("deleteUser ListUser.vue", data)
            this.$emit('deleteUserEvent', data)
        }
    }
}
</script>

<style>
    .list-user {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .list-user .user {
        padding: 30px;
        margin-bottom: 30px;
        border: 1px solid #333;
        width: calc(33.3333% - 20px);
    }
</style>