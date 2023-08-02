var vueIntance = new Vue ({
    el: '#app', //gọi đến id là app
    data: {
        tabSelected: 'login'
    },
    methods: {
        changeTabs(tab) {
            this.tabSelected = tab;
        }
    },
    computed: {
        
    }
});
