<template>
    <div class="col-large push-top">
        <h1>{{ thread.title }}</h1>

        <post-list :posts="threadPosts"/>

        <div class="col-full">
          <form @submit.prevent="addPost">
            <div class="form-group">
              <textarea v-model="newPostText" class="form-input" cols="30" rows="10"></textarea>
            </div>
            
            <div class="form-actions">
              <button class="btn-blue ">Submit post</button>
            </div>
          </form>
        </div>
    </div>
 
</template>

<script>
import sourceData from '@/data.json'
import PostList from '@/components/PostList.vue'
export default {
    name: 'PageThreadShow',
    components: {
      PostList
    },
    props: {
        id: {
            required: true,
            type: String
        }
    },
    data() {
      return {
        threads: sourceData.threads,
        posts: sourceData.posts,
        newPostText: ''
    }
  },
  computed : {
    thread() {
        return this.threads.find(thread => 
        thread.id === this.id)
    },
    threadPosts() {
      return this.posts.filter(post => post.threadId === this.id)
    }
  },
  methods: {
    addPost() {
      const postId = 'aaa' + Math.random()
      const post = {
        id: postId,
        text: this.newPostText,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.id,
        userId: "u4r8XCziZEWEXsj2UIKNHBoDh0n2"
      }
      this.posts.push(post)
      this.thread.posts.push(postId)
      this.newPostText = ""
    }
  }
  
}
</script>

<style scoped>

</style>