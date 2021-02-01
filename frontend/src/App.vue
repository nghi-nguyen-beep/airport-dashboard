<template>

  <div id="app">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">

    <Dashboard />
  </div>
</template>

<script>

import Dashboard from './components/Dashboard.vue'
import './assets/css/App.css'
export default {
  name: 'App',
  components: {
    Dashboard
  },
}
</script>
