var vueIntance = new Vue ({
    el: '#app', //gọi đến id là app
    data: {
        scores: {
            math: 9.0,
            english: 8.0,
            physical: 7.0
        },
        listBlogs: [
            {
                "usedId": 1,
                "id": 1,
                "title": "Xây dựng web với NodeJS & ExpressJS 123",
                "body": "Học Back-end với Node & ExpressJS framework, hiểu các khái niệm khi làm Back-end và xây dựng RESTful API cho trang web." 
            },
            {
                "usedId": 2,
                "id": 2,
                "title": "HTML CSS từ Zero đến Hero",
                "body": "Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee." 
            },
            {
                "usedId": 3,
                "id": 3,
                "title": "Responsive Với Grid System",
                "body": "Trong khóa này chúng ta sẽ học về cách xây dựng giao diện web responsive với Grid System, tương tự Bootstrap 4." 
            },
            {
                "usedId": 4,
                "id": 4,
                "title": "Lập trình C++ cơ bản, nâng cao",
                "body": "Khóa học lập trình C++ từ cơ bản tới nâng cao dành cho người mới bắt đầu. Mục tiêu của khóa học này nhằm giúp các bạn nắm được các khái niệm căn cơ của lập trình, giúp các bạn có nền tảng vững chắc để chinh phục con đường trở thành một lập trình viên." 
            },
            {
                "usedId": 5,
                "id": 5,
                "title": "Lập Trình JavaScript Cơ Bản",
                "body": "Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học." 
            },
            {
                "usedId": 6,
                "id": 6,
                "title": "Xây Dựng Website với ReactJS",
                "body": "Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa học này." 
            }
        ]
    },
    methods: {
    },
    computed: {
    }
});
