var vueIntance = new Vue ({
    el: '#app', //gọi đến id là app
    data: {
        message: 'Hello world',
        a: 0,
        b: 0,
        number: 20,
    },
    methods: {
        reverseMessage: function() {
            return this.message.split('').reverse().join('')
        }
    },
    computed: {
        addA() {
            console.log('addA run');
            return this.a + this.number;
        },
        addB() {
            console.log('addB run');
            return this.b + this.number;
        }
    }
});
