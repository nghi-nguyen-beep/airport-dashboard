<template>
  <div class="AddPlane-container">
      
     <h2 class="AddPlane-h2">Add Plane</h2>
        <div >
            <form class="AddPlane-form">
              
                    <div class="input-block" >
                        <label class="AddPlane-label">Plane Number</label>
                        <input type="text" class="form-control" v-model="planeNumber" name="planenumber" id="AddPlane-planenumber" />
                    </div>

                    <div class="input-block">
                        <label class="AddPlane-label" >Status</label>
                        <select class="form-control" v-model="status" name="status" id="AddPlane-status" >
                            <option value="ARRIVED">ARRIVED</option>
                            <option value="BOARDING">BOARDING</option>
                            <option value="DELAYED">DELAYED</option>
                            <option value="SCHEDULED">SCHEDULED</option>
                            <option value="DEPARTED">DEPARTED</option>
                            <option value="IN AIR">IN AIR</option>
                            <option value="EXPECTED">EXPECTED</option>
                            <option value="DIVERTED">DIVERTED</option>
                            <option value="RECOVERY">RECOVERY</option>
                            <option value="LANDED">LANDED</option>
                            <option value="CANCELLED">CANCELLED</option>
                        </select>
                    </div>

                    <div class="input-block">
                        <label class="AddPlane-label" >Departure</label>
                        <input type="text" class="form-control" v-model="departure" name="departure" id="AddPlane-departure" />
                    </div>
                    <div class="input-block">
                        <label class="AddPlane-label" >Destination</label>
                        <input type="text" class="form-control" v-model="destination" name="destination" id="AddPlane-destination" />
                    </div>

                <div class= "AddPlane-button-div">
                <button id= "AddPlane-button" type="button" @click='addPlane()'>Create</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import '../assets/css/AddPlane.css'

export default {
  name: 'AddPlane',
  data() {
    return {
      planeNumber: '',
      departure: '',
      destination: '',
      status: ''
    }
  },
  methods: {
      addPlane() {
          const payload = {
              plane_number: this.planeNumber,
              departure: this.departure,
              destination: this.destination,
              status: this.status

          }
          this.$emit('addPlane', payload)
          this.clearForm();
      },
      clearForm() {
          this.planeNumber = "";
          this.departure = "";
          this.destination = "";
          this.status = "";
      }
  }
}
</script>