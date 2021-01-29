<template>
  <div class="dashboard">
    <Header />
    <div class="container mrgnbtm">
          <div class="row">
            <div class="col-md-8">
                <AddPlane @addPlane="addPlane($event)" />
            </div>
          </div>
    </div>
    <div class="row mrgnbtm">
        <Planes v-if="planes.length > 0" :planes="planes" />
    </div>
  </div>
</template>

<script>
import AddPlane from './AddPlane.vue'
import Planes from './Planes.vue'
import { getAllPlanes, addPlane } from '../services/planeServices'

export default {
  name: 'Dashboard',
  components: {
    AddPlane,
    Planes
  },
  data() {
      return {
          planes: [],
          numberOfPlanes: 0
      }
  },
  methods: {
    getAllPlanes() {
      getAllPlanes().then(response => {
        console.log(response)
        this.planes = response
        this.numberOfPlanes = this.planes.length
      })
    },
    addPlane(data) {
      console.log('adding plane: ', data)
      addPlane(data).then(response => {
        console.log(response);
        this.getAllPlanes();
      });
    }
  },
  mounted () {
    this.getAllPlanes();
  }
}
</script>