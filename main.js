var vueIntance = new Vue ({
    el: '#app',
    data: {
        title: 'Hello'
    },
    methods: {
        say: function(text) {
            return 'Hello' + text;
        }
    }
});

// Hệ thống phản ứng Reactactivity
console.log(vueIntance)

setTimeout(() => {
    vueIntance.title = "Welcome to Reactactivity";
},2000)