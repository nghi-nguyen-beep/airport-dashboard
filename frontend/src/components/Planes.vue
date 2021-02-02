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
                    <td v-if="updateSelected && planeToUpdate._id === item._id"> <input type="text" class="form-control" v-model="updatePlaneNumber" /> </td>
                    <td v-else>{{ item.planeObject.plane_number }}</td>

                    <td v-if="updateSelected && planeToUpdate._id === item._id"> <input type="text" class="form-control" v-model="updateDeparture" /> </td>
                    <td v-else>{{ item.planeObject.departure }}</td>

                    <td v-if="updateSelected && planeToUpdate._id === item._id"> <input type="text" class="form-control" v-model="updateDestination" /> </td>
                    <td v-else>{{ item.planeObject.destination }}</td>

                    <td v-if="updateSelected && planeToUpdate._id === item._id"> <input type="text" class="form-control" v-model="updateStatus" /> </td>
                    <td v-else>{{ item.planeObject.status }}</td>

                    <td v-if="updateSelected && planeToUpdate._id === item._id"> <button @click='updatePlane()'>Save</button> </td>
                    <td v-else>
                        <div>
                            <DeletePlane v-if="!updateSelected" v-on:deletePlane="$emit('deletePlane', $event)" v-bind:id="item._id" v-bind:rev="item._rev" />
                            <UpdatePlane v-if="!updateSelected" @updatePressed="updateForm($event)" v-bind:item="item" />    
                        </div>
                    </td>  
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import DeletePlane from './DeletePlane.vue';
    import UpdatePlane from './UpdatePlane.vue';
    // import UpdatePlaneForm from './UpdatePlaneForm.vue';

    export default {
        data() {
            return {
                updateSelected: null,
                planeToUpdate: null,
                updatePlaneNumber: null,
                updateDeparture: null,
                updateDestination: null,
                updateStatus: null
            }
        },
        name: 'planes',
        props: ['planes'],
        components: {
            DeletePlane,
            UpdatePlane,
            // UpdatePlaneForm
        },
        methods: {
            updateForm(payload) {
                console.log("pay", payload.plane.planeObject.departure);
                this.updateSelected = payload.update;
                this.planeToUpdate = payload.plane;
                this.updatePlaneNumber = payload.plane.plane_number;
                this.updateDeparture = payload.plane.departure;
                this.updateDestination = payload.plane.destination;
                this.updateStatus = payload.plane.status;
                console.log(this.planeToUpdate._id, this.planeToUpdate.planeObject);
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

            }
        }
     }
</script>

<style scoped>
.container {
    padding: 5%;
}

</style>