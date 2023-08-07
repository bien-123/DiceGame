<template>
    <div class="wrapper-popup">
        <div class="rule">
            <h3>Luật chơi</h3>
            <p>Luật chơi như sau:</p>
            <button class="confirm">Đã hiểu</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'popup-rule',
    data() {
        return {};
    },
};
</script>
<style>
.wrapper-popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
}
.rule {
    width: 350px;
    padding: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    position: absolute;
    font-family: Arial, Helvetica, sans-serif;
}

.rule h3 {
    margin-bottom: 10px;
}
.rule .confirm {
    cursor: pointer;
    margin-top: 20px;
    padding: 8px 15px;
    border: 2px solid #333;
    background-color: #fff;
    transition: all 0.3s ease;
}
.rule .confirm:hover {
    color: #fff;
    background-color: #333;
}
</style>
