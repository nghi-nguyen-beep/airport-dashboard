<template>
    <div>
        <button @click='updatePressed()'>update</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            update: false,
        }
    },
    name: "UpdatePlane",
    props: ["item"],
    methods: {
        updatePressed() {
            this.update = !this.update;
            const payload = {
                plane: this.item,
                update: this.update
                }

            console.log("update", payload);
          this.$emit('updatePressed', payload)
          }
        }

}
</script>