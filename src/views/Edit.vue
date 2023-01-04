<template>
    <form @submit.prevent="Editproject" action="" class="bg-white p-20 rounded-sm ">
        <h1 class="text-3xl text-gray-700 uppercase font-bold">Edit your Project</h1>
        <label for="" class="block mt-7 text-gray-400 uppercase text-lg font-bold ">Project Title</label>
        <input v-model="title" type="text" class="p-4 border-0 border-b-green-500 border-b-2 w-full">

        <label for="" class="block mt-5 text-gray-400 uppercase text-lg font-bold ">Project detail</label>
        <input v-model="detail" type="textarea" class="border-0 border-b-2  border-gray-500 p-4 w-full h-full">

        <button
            class="bg-transparent mt-5 mx-auto hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            update
        </button>
    </form>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            title: "",
            detail: "",

        }
    },
    mounted() {
        fetch('http://localhost:3000/projects/' + this.id)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                this.title = data.title
                this.detail = data.detail

                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    methods: {
        Editproject() {
            fetch('http://localhost:3000/projects/' + this.id, {
                method: "PATCH",
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify(
                    {
                        title: this.title,
                        detail: this.detail
                    }
                )
            })
                .then(() => {
                    this.$router.push('/')
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

}
</script>

<style>

</style>