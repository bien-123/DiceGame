<template>
    <div class="list-user">
        <user-vue 
            v-for="user in listUser"
            v-bind:key="user.id"
            v-bind:user="user"
        />
        <!-- <user-vue/>
        <user-vue/>
        <user-vue/> -->
    </div>
</template>

<script>
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
    }
}
</script>

<style>

</style>