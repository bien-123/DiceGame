var vueIntance = new Vue ({
    el: '#app', //gọi đến id là app
    data: {
        firstName: 'Nguyen',
    },
    methods: {
        handleKeyUp(e) {
            this.firstName = e.target.value
            // console.log(e.target)
        }
    },
});
