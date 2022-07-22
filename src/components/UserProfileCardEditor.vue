<template>
  <div class="profile-card">
    <form @submit.prevent="save">
   <p class="text-center">
    <img :src="user.avatar" :alt="`${user.name} profile picture`" class="avatar-xlarge img-update">
   </p>

   <div class="form-group">
    <input type="text" v-model="activeUser.username" class="form-input text-lead text-bold" placeholder="Username">
   </div>

   <div class="form-group">
    <input type="text" v-model="activeUser.name" class="form-input text-lead text-bold" placeholder="Full name">
   </div>

   <div class="form-group">
    <label class="form-label" for="user_bio">Bio</label>
    <textarea v-model="activeUser.bio" id="user_bio" class="form-input" placeholder="Write a few words about yourself."></textarea>
   </div>

   <div class="stats">
    <span>{{ user.postsCount }} posts</span>
    <span>{{ user.threadsCount }} threads</span>
   </div>

   <hr>

   <div class="form-group">
    <label for="user_website" class="form-label">Website</label>
    <input v-model="activeUser.website" autocomplete="off" id="user_website" class="form-input">
   </div>

   <div class="form-group">
    <label for="user_email" class="form-label">Email</label>
    <input v-model="activeUser.email" autocomplete="off" id="user_email" class="form-input">
   </div>

   <div class="form-group">
    <label for="user_location" class="form-label">Location</label>
    <input v-model="activeUser.location" autocomplete="off" id="user_location" class="form-input">
   </div>

   <div class="btn-group space-between">
    <button class="btn-ghost" @click="cancel">Cancel</button>
    <button type="submit" class="btn-blue">Save</button>
   </div>
   </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            activeUser: { ...this.user }
        }
    },
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    methods: {
        save() {
            this.$store.dispatch('updateUser', { ...this.activeUser })
            this.$router.push({ name: 'Profile' })
        },
        cancel() {
            this.$router.push({ name: 'Profile' })
        }
    }
}
</script>