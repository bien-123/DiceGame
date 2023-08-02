var vueIntance = new Vue ({
    el: '#app', //gọi đến id là app
    data: {
        firstName: 'Nguyen',
        about: '',
        textClass: 'active',
        isActive: true,
        isError: false
    },
    methods: {
        handleKeyUp(e) {
            this.firstName = e.target.value
            // console.log(e.target)
        },
        changeActive() {
            this.isActive = !this.isActive;
        },
        changeError() {
            this.isError = !this.isError;
        }
    },
    computed: {
        objClass: function() {
            return {
                active: this.active, // active là tên class, this.active là giá trị true hoặc false
                error: this.error
            }
        }
    }
});
