<template>
    <div class="Planes-container">
        <h2 class= "Planes-h2">Planes</h2>
        <div class="Planes-table-container">
            <div class="table-wrapper-scroll-y my-custom-scrollbar">
                <table class="table table-bordered table-striped mb-0">
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
                            <td v-if="updateSelected && planeSelected._id === item._id"> <input type="text" id= "Planes-updatePlaneNumber" class="form-control" v-model="updatePlaneNumber" /> </td>
                            <td v-else>{{ item.planeObject.plane_number }}</td>

                            <td v-if="updateSelected && planeSelected._id === item._id"> <input type="text" id= "Planes-updateDeparture" class="form-control" v-model="updateDeparture" /> </td>
                            <td v-else>{{ item.planeObject.departure }}</td>

                            <td v-if="updateSelected && planeSelected._id === item._id"> <input type="text" id= "Planes-updateDestination" class="form-control" v-model="updateDestination" /> </td>
                            <td v-else>{{ item.planeObject.destination }}</td>

                            <td v-if="updateSelected && planeSelected._id === item._id"> <input type="text" id= "Planes-updateStatus" class="form-control" v-model="updateStatus" /> </td>
                            <td v-else>{{ item.planeObject.status }}</td>

                            <td v-if="updateSelected && planeSelected._id === item._id"> 
                                <div class="Planes-buttons">
                                    <td><button id="Planes-button-update" @click='updatePlane()'>Save</button></td>
                                    <td><button id="Planes-button-cancel" @click='cancelUpdate()'>Cancel</button></td>
                                </div>
                            </td>
                            <td v-else>
                                <div class="Planes-buttons">
                                    <td><button id="Planes-button-delete" v-if="!updateSelected" @click='deletePlane(item)' >delete</button></td>
                                    <td><button id="Planes-button-select" v-if="!updateSelected" @click="updateForm(item)"  >update</button></td>    
                                </div>
                            </td>  
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import '../assets/css/Planes.css';
    export default {
        data() {
            return {
                updatePlaneNumber: null,
                updateDeparture: null,
                updateDestination: null,
                updateStatus: null,
                updateSelected: false,
                planeSelected: null,
            }
        },
        name: 'planes',
        props: ['planes'],
        methods: {
            updateForm(payload) { // prefilling out input form with current data upon update button
                this.updateSelected = !this.updateSelected;
                this.updatePlaneNumber = payload.planeObject.plane_number;
                this.updateDeparture = payload.planeObject.departure;
                this.updateDestination = payload.planeObject.destination;
                this.updateStatus = payload.planeObject.status;
                this.planeSelected = payload;
            },

            deletePlane(item) {
                const payload = {
                    _id: item._id,
                    _rev: item._rev
                    }
                this.$emit('deletePlane', payload)
                },

            updatePlane() {
                const payload = {
                    _id: this.planeSelected._id,
                    _rev: this.planeSelected._rev,
                    planeObject: {
                        plane_number: this.updatePlaneNumber,
                        departure: this.updateDeparture,
                        destination: this.updateDestination,
                        status: this.updateStatus
                    }
                }
                this.$emit('updatePlane', payload);
                this.updateSelected = null;
            },

            cancelUpdate() {
                this.updateSelected = null;
            }
        }
     }
</script>
