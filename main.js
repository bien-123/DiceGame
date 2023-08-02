var vueIntance = new Vue ({
    el: '#app', //gọi đến id là app
    data: {
        firstName: 'Nguyen',
        about: '',
        textClass: 'active',
        isActive: false,
        isError: false,
        activeColor: 'red',
        fontSize: 30,
        bg: 'https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000'
    },
    methods: {
        handleKeyUp(e) {
            this.firstName = e.target.value
            // console.log(e.target)
        },
        changeActive() {
            // true -> false
            // false -> true
            this.isActive = !this.isActive;
        },
        changeError() {
            this.isError = !this.isError;
        }
    },
    computed: {
        objClass: function() {
            return {
                active: this.active,
                error: this.error
            }
        },
        background() {
            return 'url(' + this.bg + ')';
        },
        objectStyle: function() {
            return {
                backgroundImage: 'url(' + this.bg + ')',
                margin: '10px',
                paddingTop: '10px'
            }
        }
    }
});
