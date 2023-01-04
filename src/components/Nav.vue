<template>
    <div class="flex mx-auto p-5 w-[90%] justify-between items-center">
        <div>
            <p class="text-2xl text-green-400 font-bold">Home</p>
        </div>
        <div class="flex space-x-5 items-center text-lg text-gray-500">
            <router-link to="/">Project</router-link>
            <router-link :to="{ name: 'Addproject' }">Add Project</router-link>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
a.router-link-exact-active {
    border-bottom: 2px solid #00ce89;
}
</style>