<template>
    <div class="container">
        <h2>Planes</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>Plane Number</th>
                <th>Departure</th>
                <th>Destination</th>
                <th>Status</th>

            </tr>
            </thead>
            <tbody>
              <tr v-for="item in planes" :key="item.id">
                  <td>{{ item.planeObject.plane_number }}</td>
                  <td>{{ item.planeObject.departure }}</td>
                  <td>{{ item.planeObject.destination }}</td>
                  <td>{{ item.planeObject.status }}</td>
                  <td><DeletePlane v-on:deletePlane="$emit('deletePlane', $event)" v-bind:id="item._id" v-bind:rev="item._rev" /></td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import DeletePlane from './DeletePlane.vue';
    export default {
        name: 'planes',
        props: ['planes'],
        components: {
            DeletePlane
        }
    
     }
</script>

<style scoped>
.container {
    padding: 5%;
}

</style>