<template>
    <div class="flex space-x-5 mt-5 uppercase items-center  justify-center font-bold text-gray-500">
        <p @click="filterby('all')" :class="{'text-green-500':carrent==='all'}">all project</p>
        <p @click="filterby('complate')" :class="{'text-green-500':carrent==='complate'}">complate</p>
        <p @click="filterby('ongoing')" :class="{'text-green-500':carrent==='ongoing'}">ongoing</p>
    </div>
</template>

<script>
export default {
    props: ['carrent'],
    methods: {
        filterby(value) {
            this.$emit("filtervalue", value)
        }
    }

}


</script>

<style>

</style>    