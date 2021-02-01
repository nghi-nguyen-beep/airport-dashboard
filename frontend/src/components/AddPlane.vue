<template>
  <div class="AddPlane-container">
      
    <div class="row">
     <h2 class="AddPlane-h2">Add Plane</h2>
        <div class="AddPlane-form">
            <form >
                <div>
                    <div class="input-block" >
                        <label class="AddPlane-label">Plane Number</label>
                        <input type="text" class="form-control" v-model="planeNumber" name="planenumber" id="planenumber" />
                    </div>
                    <div class="input-block">
                        <label class="AddPlane-label" >Departure</label>
                        <input type="text" class="form-control" v-model="departure" name="departure" id="departure" />
                    </div>
                    <div class="input-block">
                        <label class="AddPlane-label" >Destination</label>
                        <input type="text" class="form-control" v-model="destination" name="destination" id="destination" />
                    </div>
                    <div class="input-block">
                        <label class="AddPlane-label" >Status</label>
                        <input type="text" class="form-control" v-model="status" name="status" id="status" />
                    </div>
                </div>
                <button id= "AddPlane-button" type="button" @click='addPlane()' class="btn btn-primary btn-sm active" role="button" aria-pressed="true">Create</button>
            </form>
        </div>
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
          console.log(this.planeNumber)
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