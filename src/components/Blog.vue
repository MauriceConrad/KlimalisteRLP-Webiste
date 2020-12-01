<template>
  <div class="container">
    <swiper :options="swiperOptions" ref="mySwiper" style="display: block;">
      <swiper-slide v-for="(quote, index) in [0, 0]" :key="index">
        Hahaha.
      </swiper-slide>
      <!--<div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-scrollbar"></div>-->
    </swiper>
  </div>
</template>

<style scoped>

</style>

<script>
  //import VueAwesomeSwiper from 'vue-awesome-swiper';
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
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
        swiperOptions: {
          loop: true,
          effect: 'cube',
          coverflowEffect: {
            rotate: 30,
            slideShadows: false,
          },
          cubeEffect: {
            slideShadows: false,
            shadow: false
          },
          //slidesPerView: 1,
          centeredSlides: true,
          pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          },
        }
      }
    },
    created() {
      api.posts.browse({
        limit: 5,
        include: 'tags,authors'
      }).then(result => {
        result;
      })
    },
    components: {
      Swiper,
      SwiperSlide
    }
  }
</script>
