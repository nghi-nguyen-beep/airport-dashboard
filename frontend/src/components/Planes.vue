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
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'planes',
        props: ['planes']
     }
</script>