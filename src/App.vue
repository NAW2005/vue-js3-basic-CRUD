<template>
  <div class=" min-h-screen bg-gray-100 mx-auto">
    <Nav></Nav>
   
    <RouterView />

  </div>
</template>

<script >
import Nav from './components/Nav.vue'
export default {
  components: {
    Nav,
  }
}
</script>

<style scoped>

</style>
