<template>
    <div class="flex w-full justify-start items-center mt-2 p-4">
        <div class="text-center">
            <div @mouseenter="showStat" @mouseleave="hideStat" class="bg-white drop-shadow-xl border-4 z-50 rounded-full flex flex-col justify-center items-center h-32 w-32 overflow-hidden" v-bind:class="[color]">
                <img v-bind:src="require('../assets' + image)" class="rounded-full object-fill">
            </div>
            <h1 class="mt-2 text-lg uppercase font-heading ">{{ name }}</h1>
        </div>
        <div class="flex justify-center items-center grow-animation h-32 " ref="box" v-bind:style="{width: widthSize}" v-bind:class="{'grow-up': grow}">
            <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="h-2.5 rounded-full progress-animation" v-bind:class="[loading]"></div>
            </div>
            <h1 class="text-2xl pl-4 font-heading align-center" v-bind:class="{'hidden': !grow}">{{pourcent}}%</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "CompetenceComponent",
    data:  function () {
        return {
            grow: false,
            canGrow: false,
            widthSize : 0
        }
    },
    props: ['name', 'color', 'image', 'loading', 'pourcent'],
    methods: {
        showStat: function ()
        {
            this.widthSize += this.pourcent + '%'
            this.grow = true
        },
        hideStat: function ()
        {
            this.widthSize = '0'
            this.grow = false
        },
    },
    mounted() {

    }
}
</script>

<style>
    .grow-animation {
        width: 0;
        transition: width .3s;
    }
</style>
