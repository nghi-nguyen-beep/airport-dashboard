<template>
    <div class="IATA-container">
    
        <h2 class="IATA-h2">Search IATA</h2>

        <div >
            <form class="IATA-form" >
                <div class="IATA-input-block" >
                    <label class="IATA-label">Enter a city</label>
                    <input type="text" class="form-control" v-model="city" name="city" id="IATA-city" />
                </div>
                <div class= "IATA-button-div">
                    <button id= "IATA-button" type="button" @click='getIATA()'>get codes</button>
                </div>
            </form>
        </div>

        <div v-if="Object.keys(iataCodes).length === 0"><h2>nothing found</h2></div>
        
        <div v-else class= "IATA-table-container">
            <div id= "IATA-scroll" class="table-wrapper-scroll-y my-custom-scrollbar">
                <table class="table table-bordered table-striped mb-0">
                    <thead>
                        <tr>
                            <th scope="col">IATA</th>
                            <th scope="col">State</th>
                            <th scope="col">City</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr v-for="item in iataCodes" :key="item.id">            
                            <td>{{ item.IATA}}</td>
                            <td>{{ item.State}}</td>
                            <td>{{ item.City}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import '../assets/css/IATA.css';
export default {
  name: 'IATA',
  props: ["iataCodes"],
  data() {
    return {
      city: '',
    }
  },
  
  methods: {
    getIATA() {
        const payload = {
        city: this.city,
        }
        this.$emit('getIATA', payload);
    }
  }  
}
</script>