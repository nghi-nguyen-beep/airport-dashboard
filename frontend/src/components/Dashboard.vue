<template>
  <div class="Dashboard">
    <Navbar/>
    <Header />
    <div class="Dashboard-main">
    <div class="Dashboard-component">  
        <AddPlane @addPlane="addPlane($event)" />      
    </div>
    <div class="Dashboard-component">
        <Planes v-bind:planes="planes" @deletePlane="deletePlane($event)" @updatePlane="updatePlane($event)" />
    </div>
    </div>
  </div>
</template>

<script>
import AddPlane from './AddPlane.vue'
import Planes from './Planes.vue'
import Navbar from './Navbar.vue'
import '../assets/css/Dashboard.css'
import { getAllPlanes, addPlane, deletePlane, updatePlane } from '../services/planeServices'

export default {
  name: 'Dashboard',
  components: {
    AddPlane,
    Planes,
    Navbar
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
      .catch(err => console.log("err", err))
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
      .then(() => {
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

