<template>
    <div class="list-user">
        <user-vue/>
        <user-vue/>
        <user-vue/>
        <user-vue/>
    </div>
</template>

<script>
import UserVue from './User.vue'
export default {
    name: "list-user",
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