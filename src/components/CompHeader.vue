<template>
    <header>
        <h1>
            {{title}} <br />
            <button v-on:click="changeTitleHeader">Thay doi title tư CompHeader.vue</button>
        </h1>
    </header>
</template>

<script>

export default {
    name: "comp-header",
    props: {
        title: String
    },
    data() 
    {
        return {
            
        }
    },
    methods: {
        changeTitleHeader(e) {
            // Không được phép thay đổi trực tiếp props từ component cha
            // -> Truyền sự kiện thông báo ra bên ngoài -> Kích hoạt sự kiện 'changeTitleHeader' trong CompHeader.vue
            // -> Khi kích hoạt function bên ngoài App.vue nó sẽ chạy
            // -> Khi function được chạy -> Thay đổi dữ liệu
            console.log("Truoc khi kich hoat su kien changeTitleEvent trong CompHeader.vue");
            var data = {
                title: 'test -> data truyền thông qua biến event'
            }
            this.$emit('changeTitleEvent', data)
            console.log("Sau khi kich hoat su kien changeTitleEvent trong CompHeader.vue");
        }
    }
}
</script>

<style>

</style>