<template>
    <div class="col-full">
        <form @submit.prevent="save">
            <div class="form-group">
              <textarea v-model="text" class="form-input" cols="30" rows="10"></textarea>
            </div>
            
            <div class="form-actions">
              <button class="btn-blue ">Submit post</button>
            </div>
          </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: ''
        }
    },
     methods: {
        save() {
        const post = {
            text: this.text,
        }
        this.$emit('save', { post })
        this.text = ""
        }
  }
}
</script>

<style scoped>
</style>