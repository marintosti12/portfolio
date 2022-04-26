<template>
    <div class="shadow-lg w1/3" @mouseenter="mouseOver" @mouseleave="mouseLeave">
        <div class="relative">
            <img class="rounded-t-lg object-cover h-48 w-full" v-bind:src="image">
            <div v-if="grow" class="bg-black/25 absolute w-full h-full top-0 flex justify-center items-center">
                <a :href="link"><button type="button" class="uppercase flex flex-row justify-center items-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mt-8">
                    Voir le projet
                </button></a>
            </div>
        </div>
        <div class="px-4 py-4">
            <label class="text-red-700 font-heading">{{ type }}</label>
            <h1 class="text-2xl mt-2 font-heading">{{ name }}</h1>
            <p class="font-heading whitespace-pre-line">
                {{ description }}
            </p>
            <h2 class="mt-8 font-bold">{{ date }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "RealisationComponent",
    props: ['name', 'type', 'image', 'date', 'description', 'link'],
    data:  function () {
        return {
            grow: false,
        }
    },
    methods: {
        mouseOver: function ()
        {
            console.log("dd")
            this.grow = true
        },
        mouseLeave: function ()
        {
            console.log("dd")
            this.grow = false
        }
    }
}
</script>

<style scoped>

</style>
