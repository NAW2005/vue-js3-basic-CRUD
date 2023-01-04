<template>

  <form @submit.prevent="addproject" action="" class=" p-20 rounded-sm ">
    <h1 class="text-3xl text-gray-700 uppercase font-bold">add project</h1>
    <label for="" class="block mt-5 text-gray-400 uppercase text-lg font-bold ">Project Title</label>
    <input v-model="title" type="text" class="p-4 border-0 border-b-green-500 border-b-2 w-full">

    <label for="" class="block mt-5 text-gray-400 uppercase text-lg font-bold ">Project detail</label>
    <input v-model="detail" type="textarea" class="border-0 border-b-2  border-gray-500 p-4 w-full h-full">

    <button
      class="bg-transparent mt-5 mx-auto hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      Add project
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      detail: "",
      title: ""
    }
  },
  methods: {
    addproject() {
      fetch('http://localhost:3000/projects', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          {
            title: this.title,
            detail: this.detail,
            complate: false,
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