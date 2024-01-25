const { createApp } = Vue

const app = createApp({
    data() {
        return {
            message: 'vue hello',
            image: '<img src="https://picsum.photos/200/300" alt="vue-image">'
        }
    }
}).mount('#app')