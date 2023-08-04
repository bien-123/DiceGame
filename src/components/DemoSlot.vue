<template>
    <div class="demo-slot">
        <CompTabsVue title="Tiêu đề của Tab">
            <ul class="tabs-header">
                <li 
                    v-for="(item, index) in tabsHeader" 
                    v-bind:key="item.id"
                    v-on:click="setActiveTab(index)"
                    v-bind:class="{ active: tabActive == index }"
                >{{ item.text }}</li>
            </ul>
            <div class="tab-content tabs1" v-if="tabActive === 0">
                <p>Tab1: HELLO TAB1</p>
            </div>
            <div class="tab-content tabs2" v-if="tabActive === 1">
                <p>Tab2: HELLO TAB1</p>
            </div>
            <div class="tab-content tabs3" v-if="tabActive === 2">
                <p>Tab3: HELLO TAB1</p>
            </div>
        </CompTabsVue>
    </div>
</template>

<script>
import CompTabsVue from './CompTabs.vue'
export default {
    name: "demo-slot",
    components: {
        CompTabsVue
    },
    data() {
        return {
            tabsHeader: [
                {id: 1, text: 'Tab 1'},
                {id: 2, text: 'Tab 2'},
                {id: 3, text: 'Tab 3'},
            ],
            tabActive: 0
        }
    },
    methods: {
        setActiveTab(index) {
            console.log("setActiveTab", index)
            this.tabActive = index;
        }
    }
}
</script>

<style>
    .demo-slot {
        margin-top: 100px;
        padding: 100px 30px;
        border: 1px solid #000;
    }
    .avatar {
        color: #fff;
        border: 2px solid #333;
        padding: 12px 15px;
        background-color: #333;
        transition: all .3s ease;
    }
    .avatar:hover {
        color: #333;
        background-color: #fff;
    }
</style>