<template>
    <footer><h1>{{title}}</h1></footer>
</template>

<script>
export default {
    name: "comp-footer",
    props: {
        title: {
            type: String,
            default: "Gia tri mac dinh",
        }
    },
    data() {
        return {
            
        }
    }
}
</script>

<style>

</style>