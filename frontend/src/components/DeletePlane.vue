<template>
    <div>
        <button @click='deletePlane()' >delete</button>
    </div>
</template>

<script>
export default {
    name: 'DeletePlane',
    props: ["rev", "id"],
    methods: {
        deletePlane() {
          const payload = {
              _id: this.id,
              _rev: this.rev
            }
            console.log("delete", payload);
          this.$emit('deletePlane', payload)
          }
        }
    }
</script>