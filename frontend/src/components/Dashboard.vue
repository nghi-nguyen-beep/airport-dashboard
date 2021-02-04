<template>
  <div class="Dashboard">
    <Navbar/>
    <Header />
    <div class="Dashboard-main">
    <div class="Dashboard-component">  
        <AddPlane @addPlane="addPlane($event)" />      
    </div>

        <div class="Dashboard-component">
        <IATA v-bind:iataCodes="iataCodes" @getIATA="getIATA($event)" />
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
import IATA from './IATA.vue'
import '../assets/css/Dashboard.css'
import { getAllPlanes, addPlane, deletePlane, updatePlane, getIATA } from '../services/planeServices'

export default {
  name: 'Dashboard',
  components: {
    AddPlane,
    Planes,
    Navbar,
    IATA
  },
  data() {
      return {
          planes: [],
          numberOfPlanes: 0,
          iataCodes: []
      }
  },
  methods: {
    getAllPlanes() {
      getAllPlanes().then(response => {
        console.log('getting planes: ', response)
        this.planes = response
        this.numberOfPlanes = this.planes.length
      })
      .catch(err => console.log("err", err))
    },

    addPlane(data) {
      console.log('adding plane: ', data)
      addPlane(data)
      .then(() => {
        this.getAllPlanes()})
      .catch(err => console.log(err));
    },

    deletePlane(data) {
      console.log('deleting plane: ', data)
      deletePlane(data)
      .then(() => {
        this.getAllPlanes()})
      .catch(err => console.log(err));
    },

   updatePlane(data) {
      console.log('updating plane: ', data)
     updatePlane(data)
     .then(() => {
        this.getAllPlanes()})
     .catch(err => console.log(err));
    },

   getIATA(data) {
   
     getIATA(data)
     .then((result) => {
       console.log(result);
        this.iataCodes = result})
     .catch(err => console.log(err));
    },

  },
  mounted () {
    this.getAllPlanes();
  }
}
</script>

