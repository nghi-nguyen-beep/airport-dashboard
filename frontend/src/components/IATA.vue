<template>
    <div class="IATA-container">
        <form >
            <div class="IATA-input-block" >
                <label class="IATA-label">Enter a city</label>
                <input type="text" class="form-control" v-model="city" name="city" id="IATA-CITY" />
            </div>
            <div class= "IATA-button-div">
                <button id= "IATA-button" type="button" @click='getIATA()'>get codes</button>
            </div>
        </form>

        <div class="IATA-table-container">
            <div class="table-wrapper-scroll-y my-custom-scrollbar">
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
        this.$emit('getIATA', payload)
    }
    }  
}
</script>