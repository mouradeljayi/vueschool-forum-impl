import { createStore } from "vuex";
import sourceData from '@/data'
export default createStore({
    state: {
        ...sourceData,
        authId: 'jVa6Go6Nl1Urkag1R2p9CHTf4ny1'
    },
    getters: {
        authUser: state => state.users.find(user => user.id === state.authId)
    },
    actions: {
        createPost(context, post) {
            post.id = 'aaa' + Math.random()
            context.commit('setPost', { post })
            context.commit('appendPostToThread', { postId: post.id, threadId: post.id })
        }
    },
    mutations: {
        setPost(state, { post }) {
            state.posts.push(post)
        },
        appendPostToThread(state, { postId, threadId }) {
            const thread = state.threads.find(thread => thread.id === threadId)
            thread.posts.push(postId)
        }
    }
})