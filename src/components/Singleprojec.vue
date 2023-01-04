<template>
    <div :class="{ 'bg-green-300': project.complate }"
        class="  flex justify-between items-center space-y-3 p-12 rounded-md   m-10 bg-gray-200">
        <div>
            <p @click="detail = !detail" class="text-indigo-800 cursor-pointer text-2xl font-bold">{{ project.title }}
            </p>
            <p v-if="detail" class=" mt-4">{{ project.detail }}</p>
            <p v-if="detail" class=" mt-4">{{ project.complate }}</p>
            <p class=" mt-4">id {{ project.id }}</p>

        </div>
        <div class=" space-x-5 flex justify-between items-center text-3xl">
            <span @click="deleteproject" class="material-icons cursor-pointer text-3xl text-red-500 ">
                delete
            </span>
            <router-link :to="{ name: 'Editproject', params: { id: project.id } }">
                <span class="material-icons cursor-pointer text-3xl text-blue-500">
                    edit
                </span>
            </router-link>

            <span @click="iscomplate" class="material-icons cursor-pointer text-3xl text-green-500">
                done
            </span>
        </div>

    </div>

</template>

<script>
export default {

    props: [
        "project"
    ],
    data() {
        return {
            detail: false,
            api: 'http://localhost:3000/projects/'
        }
    },
    methods: {
        deleteproject() {
            const deleteapi = this.api + this.project.id;
            fetch(deleteapi, { method: "DELETE" })
                .then(() => {
                    this.$emit("delete", this.project.id)
                })
        },
        iscomplate() {
            const update = this.api + this.project.id
            fetch(update, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    complate: !this.project.complate
                })
            })
                .then(() => {
                    this.$emit("rellycomplate", this.project.id)
                })
        }
    }

}
</script>

<style>

</style>