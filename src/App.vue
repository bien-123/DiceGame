<template>
    <div id="app">
        <div class="wrapper clearfix">
            <!-- Props -> Parent to Child -->
            <PlayersVue
                v-bind:activePlayer="activePlayer"
                v-bind:currentScore="currentScore"
                v-bind:scoresPlayer="scoresPlayer"
            />
            <controls-vue v-on:handleRollDice="handleRollDice" v-on:handleNewGame="handleNewGame" />
            <dices-vue v-bind:dices="dices" />
            <popup-rule-vue v-on:handleConfirm="handleConfirm" v-bind:isOpenPopup="isOpenPopup" />
        </div>
    </div>
</template>

<script>
import PlayersVue from './components/Players.vue';
import ControlsVue from './components/Controls.vue';
import DicesVue from './components/Dices.vue';
import PopupRuleVue from './components/PopupRule.vue';

export default {
    name: 'app',
    data() {
        return {
            isPlaying: false,
            isOpenPopup: false,
            activePlayer: 1, // Ai là người chơi hiện tại
            scoresPlayer: [10, 20],
            dices: [2, 5],
            currentScore: 30,
        };
    },
    components: {
        PlayersVue,
        ControlsVue,
        DicesVue,
        PopupRuleVue,
    },
    methods: {
        handleConfirm() {
            this.isPlaying = true;
            this.isOpenPopup = false;
            this.activePlayer = 0;
            this.dices = [1, 1];
            this.scoresPlayer = [0, 0];
            this.currentScore = 0;
        },
        handleNewGame() {
            this.isOpenPopup = true;
        },
        handleRollDice() {
            console.log('handleRollDice app.vue');
            if (this.isPlaying) {
                //Xoay xúc xắc
                // Math.random(): 0-> 1
                /**
                 * 0 <= X <= 1
                 * 0 <= Y = X*6 <=6
                 */
                var dice1 = Math.floor(Math.random() * 6) + 1;
                var dice2 = Math.floor(Math.random() * 6) + 1;
                this.dices = [dice1, dice2];
                console.log(dice1, dice2);
            } else {
                alert('Vui lòng nhấn nút NewGame');
            }
        },
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.clearfix::after {
    content: '';
    display: table;
    clear: both;
}

body {
    background-image: linear-gradient(rgba(62, 20, 20, 0.4), rgba(62, 20, 20, 0.4)), url('/src/assets/back.jpg');
    background-size: cover;
    background-position: center;
    font-family: Lato;
    font-weight: 300;
    position: relative;
    height: 100vh;
    color: #555;
}

.wrapper {
    width: 1000px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
    overflow: hidden;
}
</style>
