<template>
  <div class="container">
    Haha.
  </div>
</template>

<style scoped>

</style>

<script>
  import GhostContentAPI from '@tryghost/content-api';

  const api = new GhostContentAPI({
    url: 'https://blog.klimalisterlp.de',
    key: 'bbb1de00ea0edc0bd83f7018f2',
    version: "v3"
  });


  export default {
    name: "Blog",
    data() {
      return {

      }
    },
    created() {
      api.posts.browse({
        limit: 5,
        include: 'tags,authors'
      }).then(result => {
        //import VueAwesomeSwiper from 'vue-awesome-swiper';
        import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
      })
    }
  }
</script>
