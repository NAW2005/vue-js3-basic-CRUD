<template>
    <div class=" text-center">
        <h1 class=" w-full mx-auto text-3xl text-gray-600 font-bold">Project</h1>
        <Filternav @filtervalue="carrent = $event" :carrent="carrent"></Filternav>
    </div>
    <div v-for="project in filterProject" :key="project.id">
        <Singleprojec :project="project" @rellycomplate="complateproject" @delete="deleteProject"></Singleprojec>
    </div>
    <p>{{ carrent }}</p>
</template>

<script>
import Filternav from '../components/Filternav.vue'
import Singleprojec from '../components/Singleprojec.vue'
export default {
    components: {
        Filternav, Singleprojec
    },
    data() {
        return {
            projects: [],
            carrent: 'all'
        }
    },
    computed: {
        filterProject() {
            if (this.carrent === 'complate') {
                return this.projects.filter((usr) => usr.complate)
            }
            if (this.carrent === 'ongoing') {
                return this.projects.filter((usr) => { return !usr.complate })
            }
            if (this.carrent === 'all') {
                return this.projects
            }
        }
    },
    mounted() {
        fetch('http://localhost:3000/projects')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.projects = data
            })
            .catch(() => {

            })
    },
    methods: {
        deleteProject(id) {
            this.projects = this.projects.filter((usr) => usr.id !== id)
        },
        complateproject(id) {
            const findproject = this.projects.find((usr) => usr.id === id)
            findproject.complate = !findproject.complate
        }
    },

}
</script>

<style>

</style>