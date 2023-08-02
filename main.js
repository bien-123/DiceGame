var vueIntance = new Vue ({
    el: '#app', //gọi đến id là app
    data: {
        counter: 0,
        clientX: 0,
        clientY: 0,
    },
    methods: {
        handleClick(number, event) {
            console.log('click', event.target);
            // this.counter += 1;
            this.counter += number;
        },
        handleMouseMove(event) {
            console.log(event);
            this.clientX = event.clientX;
            this.clientY = event.clientY;
        }
    }
});

// Hệ thống phản ứng Reactactivity
console.log(vueIntance)

setTimeout(() => {
    vueIntance.title = "Welcome to Reactactivity";
},2000)