<template>
    <div class="Planes-container">
        <h2 class= "Planes-h2">Planes</h2>
        <div class="Planes-table-container">
        <table class="table table-bordered table-striped">
            <thead>
            <tr>
                <th scope="col">Plane Number</th>
                <th scope="col">Departure</th>
                <th scope="col">Destination</th>
                <th scope="col">Status</th>
        

            </tr>
            </thead>
            
            <tbody>
              <tr v-for="item in planes" :key="item.id">            
                    <td v-if="updateSelected && planeToUpdate._id === item._id"> <input type="text" id= "Planes-updatePlaneNumber" class="form-control" v-model="updatePlaneNumber" /> </td>
                    <td v-else>{{ item.planeObject.plane_number }}</td>

                    <td v-if="updateSelected && planeToUpdate._id === item._id"> <input type="text" id= "Planes-updateDeparture" class="form-control" v-model="updateDeparture" /> </td>
                    <td v-else>{{ item.planeObject.departure }}</td>

                    <td v-if="updateSelected && planeToUpdate._id === item._id"> <input type="text" id= "Planes-updateDestination" class="form-control" v-model="updateDestination" /> </td>
                    <td v-else>{{ item.planeObject.destination }}</td>

                    <td v-if="updateSelected && planeToUpdate._id === item._id"> <input type="text" id= "Planes-updateStatus" class="form-control" v-model="updateStatus" /> </td>
                    <td v-else>{{ item.planeObject.status }}</td>

                    <td v-if="updateSelected && planeToUpdate._id === item._id"> 
                        <div class="Planes-buttons">
                            <td><button @click='updatePlane()'>Save</button></td>
                            <td><button @click='cancelUpdate()'>Cancel</button></td>
                        </div>
                    </td>
                    
                    <td v-else>
                        <div class="Planes-buttons">
                            <td><DeletePlane v-if="!updateSelected" v-on:deletePlane="$emit('deletePlane', $event)" v-bind:id="item._id" v-bind:rev="item._rev" /></td>
                            <td><button v-if="!updateSelected" @click="updateForm(item)" class="btn btn-primary btn-sm active"  >update</button></td>    
                        </div>
                    </td>  
              </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>

<script>
    import DeletePlane from './DeletePlane.vue';
    import '../assets/css/Planes.css';
    export default {
        data() {
            return {
                updatePlaneNumber: null,
                updateDeparture: null,
                updateDestination: null,
                updateStatus: null,
                updateSelected: false,
                planeToUpdate: null,
            }
        },
        name: 'planes',
        props: ['planes'],
        components: {
            DeletePlane,

        },
        methods: {
            updateForm(payload) { // prefilling out input form upon update button
                this.updateSelected = !this.updateSelected;
                this.updatePlaneNumber = payload.planeObject.plane_number;
                this.updateDeparture = payload.planeObject.departure;
                this.updateDestination = payload.planeObject.destination;
                this.updateStatus = payload.planeObject.status;
                this.planeToUpdate = payload;
            },

            updatePlane() {
                const payload = {
                    _id: this.planeToUpdate._id,
                    _rev: this.planeToUpdate._rev,
                    planeObject: {
                        plane_number: this.updatePlaneNumber,
                        departure: this.updateDeparture,
                        destination: this.updateDestination,
                        status: this.updateStatus
                        }
                }
          this.updateSelected = null;
          this.$emit('updatePlane', payload);

        },
            cancelUpdate() {
                this.updateSelected = null;
            }

        }
     }
</script>

<style scoped>
.container {
    padding: 5%;
}

</style>