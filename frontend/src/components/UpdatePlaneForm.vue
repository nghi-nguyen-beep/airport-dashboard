<template>
<tbody>
    <td>
        <div class="input-block" >
            <label class="AddPlane-label">Plane Number</label>
            <input type="text" class="form-control" v-model="updatePlaneNumber"  />
        </div>
    </td>

    <td>
        <div class="input-block" >
        <label class="AddPlane-label">Departure</label>
        <input type="text" class="form-control" v-model="updateDeparture"  />
        </div>
    </td>

    <td>
        <div class="input-block" >
            <label class="AddPlane-label">Destination</label>
            <input type="text" class="form-control" v-model="updateDestination"  />
        </div>
    </td>

    <td>
            <div class="input-block" >
            <label class="AddPlane-label">Status</label>
            <input type="text" class="form-control" v-model="updateStatus" />
        </div>
    </td>
    </tbody>
</template>

<script>
export default {
    data() {
        return {
        updatePlaneNumber: this.item.plane_number,
        updateDeparture: this.item.departure,
        updateDestination: this.item.destination,
        updateStatus: this.item.status
        }

    },
    name: "UpdatePlaneForm",
    props: ["item"],
    methods:{
    updatePlane() {
          console.log(this.planeNumber)
          const payload = {
              plane_number: this.updatePlaneNumber,
              departure: this.updateDeparture,
              destination: this.updateDestination,
              status: this.updateStatus

          }
          this.$emit('updatePlane', {_id: this.item._id, _rev: this.item._rev, planeObject: payload})
      },
    }
}
</script>