<template>
  <div class="dashboard">
    <Header />
    <div class="Dashboard-component">  
        <AddPlane @addPlane="addPlane($event)" />      
    </div>
    <div class="Dashboard-component">
        <Planes v-if="planes.length > 0" :planes="planes" @deletePlane="deletePlane($event)" />
    </div>
  </div>
</template>

<script>
import AddPlane from './AddPlane.vue'
import Planes from './Planes.vue'
import '../assets/css/Dashboard.css'
import { getAllPlanes, addPlane, deletePlane, updatePlane } from '../services/planeServices'

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
        console.log('response', response);
        this.getAllPlanes();
      });
    },

    deletePlane(data) {
      console.log('deleting plane: ', data)
      deletePlane(data)
      .then((response) => {
        console.log("response", response);
        this.getAllPlanes();
        })
      .catch(err => console.log(err));
    },

   updatePlane(data) {
      console.log('updating plane: ', data)
     updatePlane(data).then(response => {
        console.log('response', response);
        this.getAllPlanes();
      });
    }

  },
  mounted () {
    this.getAllPlanes();
  }
}
</script>

