<template>
  <div class="quotes-view">
    <h2 class="title">Deine Utopie.</h2>
    <div class="quotes-swiper">
      <div class="swiper-controls">
        <button class="btn-swiper btn-prev" @click="swiper.slidePrev()">
          <div class="icon">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.787 490.787">
              <g>
                <path style="fill:#F44336;" d="M362.671,490.787c-2.831,0.005-5.548-1.115-7.552-3.115L120.452,253.006 c-4.164-4.165-4.164-10.917,0-15.083L355.119,3.256c4.093-4.237,10.845-4.354,15.083-0.262c4.237,4.093,4.354,10.845,0.262,15.083 c-0.086,0.089-0.173,0.176-0.262,0.262L143.087,245.454l227.136,227.115c4.171,4.16,4.179,10.914,0.019,15.085 C368.236,489.664,365.511,490.792,362.671,490.787z"/>
                <path d="M362.671,490.787c-2.831,0.005-5.548-1.115-7.552-3.115L120.452,253.006c-4.164-4.165-4.164-10.917,0-15.083L355.119,3.256 c4.093-4.237,10.845-4.354,15.083-0.262c4.237,4.093,4.354,10.845,0.262,15.083c-0.086,0.089-0.173,0.176-0.262,0.262 L143.087,245.454l227.136,227.115c4.171,4.16,4.179,10.914,0.019,15.085C368.236,489.664,365.511,490.792,362.671,490.787z"/>
              </g>
            </svg>
          </div>
        </button>
      </div>
      <div class="swiper-inner">
        <swiper :options="swiperOptions" ref="mySwiper" style="display: block;">
          <swiper-slide v-for="(quote, index) in quotes" :key="index">
            <div class="slide-inner">
              <div class="speech-bubble">
                <div class="inner">
                  {{ quote.text }}
                </div>
              </div>
              <div class="author-description">
                <div class="description-content">
                  <div class="author-label">
                    <div>
                      <span class="label-name">
                        {{ quote.name }}
                      </span>
                      <br>
                      <span class="label-more">
                        {{ quote.authorDescription }}
                      </span>
                    </div>
                  </div>
                  <div class="avatar" :style="{ 'background-image': `url('${ quote.avatar }')`, 'background-position': quote.avatarPos }"></div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <!--<div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-scrollbar"></div>-->
        </swiper>
      </div>
      <div class="swiper-controls">
        <button class="btn-swiper btn-next" @click="swiper.slideNext()">
          <div class="icon">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.8 490.8">
              <g>
                <path style="fill:#F44336;" d="M135.685,3.128c-4.237-4.093-10.99-3.975-15.083,0.262c-3.992,4.134-3.992,10.687,0,14.82 l227.115,227.136L120.581,472.461c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262 c0.089-0.086,0.176-0.173,0.262-0.262l234.667-234.667c4.164-4.165,4.164-10.917,0-15.083L135.685,3.128z"/>
                <path d="M128.133,490.68c-5.891,0.011-10.675-4.757-10.686-10.648c-0.005-2.84,1.123-5.565,3.134-7.571l227.136-227.115 L120.581,18.232c-4.171-4.171-4.171-10.933,0-15.104c4.171-4.171,10.933-4.171,15.104,0l234.667,234.667 c4.164,4.165,4.164,10.917,0,15.083L135.685,487.544C133.685,489.551,130.967,490.68,128.133,490.68z"/>
              </g>
            </svg>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  h2 {
    margin: 0;
  }
  .quotes-view {
    font-family: 'Montserrat', 'Helvetica Neue', 'Helvetica', sans-serif;
    padding: 20px 0 20px;

  }
  .quotes-view .title {
    text-align: center;
    font-size: 2.5em;
    font-weight: 300;
  }
  .quotes-swiper {
    max-width: 100%;
    margin: auto;
    padding: 0;
    display: flex;
    width: 100%;
  }
  .quotes-swiper .swiper-controls {
    flex: none;
  }
  .quotes-swiper .swiper-inner {
    flex: 1;
    position: relative;
    padding: 0 10px;
    max-width: 100%;
    overflow: hidden;

  }
  .quotes-swiper .swiper-container {


  }
  .swiper-slide {

  }
  .swiper-slide .slide-inner {
    max-width: 1000px;
    margin: auto;
    display: flex;
    padding: 50px 0;
  }
  .swiper-slide .speech-bubble {
    color: #fff;
    flex: 1;
    font-size: 2em;
    background-color: #9e4fa2;
    clip-path: polygon(0% 10px, 100% 0%, calc(100% - 10px) calc(100% - 70px), calc(100% - 30px) calc(100% - 60px), 100% 100%, calc(100% - 120px) calc(100% - 40px), 30px calc(100% - 20px));
  }
  .swiper-slide .speech-bubble .inner {
    padding: 25px 20px 60px 45px;
    font-weight: 200;
    letter-spacing: 1.5;
  }


  .swiper-slide .author-description {
    flex: none;
    padding: 0 10px;
    position: relative;
  }
  .swiper-slide .author-description .description-content {
    position: relative;
    top: 100%;
    transform: translate(0, -100%);
  }
  .swiper-slide .author-description .description-content .author-label {
    padding: 5px 0;
    max-width: 130px;
    word-wrap: break-word;
    text-align: right;
  }
  .swiper-slide .author-description .description-content .author-label .label-name {
    font-weight: 500;
  }
  .swiper-slide .author-description .description-content .author-label .label-more {
    font-weight: 200;
    font-size: 0.9em;
  }
  .swiper-slide .author-description .description-content .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
  }
  .swiper-controls {
    position: relative;
  }
  @media screen and (max-width: 600px) {
    .swiper-controls {
      display: none;
    }
    .swiper-slide .slide-inner {
      display: block;
      padding: 10px;
      box-sizing: border-box;
    }
    .swiper-slide .author-description {
      text-align: right;
      padding: 10px 0;
      box-sizing: border-box;
    }
    .swiper-slide .author-description .description-content {
      top: 0;
      transform: none;
      display: inline-block;
      width: 100%;
      display: flex;

    }
    .swiper-slide .author-description .description-content .author-label {
      max-width: none;
      flex: 1;
      padding: 0 10px;
      box-sizing: border-box;
    }
    .swiper-slide .author-description .description-content .author-label:before {
      vertical-align: middle;
      display: inline-block;
      content: "";
      width: 0;
      height: 100%;
    }
    .swiper-slide .author-description .description-content .author-label > div {
      vertical-align: middle;
      display: inline-block;
    }
    .swiper-slide .author-description .description-content .avatar {
      flex: none;
    }
    .swiper-slide .speech-bubble {
      font-size: 1.2em;
      clip-path: polygon(0% 10px, 100% 0%, calc(100% - 10px) calc(100% - 65px), calc(100% - 30px) calc(100% - 60px), calc(100% - 60px) 100%, calc(100% - 120px) calc(100% - 40px), 30px calc(100% - 20px));
    }
    .swiper-slide .speech-bubble .inner {
      font-weight: 300;
    }
  }
  .swiper-controls .btn-swiper {
    position: relative;
    top: 50%;
    transform: translate(0, -50%);
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
  }
  .swiper-controls .btn-swiper .icon {
    width: 50px;
    height: 50px;
  }

</style>

<script>
  //import VueAwesomeSwiper from 'vue-awesome-swiper';
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
  //import 'swiper/css/swiper.css';
  import 'swiper/swiper-bundle.css';

  import ContentQuotes from '../../data/content/quotes/quotes.js';


  export default {
    name: "QuotesView",
    data() {
      return {
        quotes: ContentQuotes,
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
        },
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper;
      }
    },
    components: {
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
    }
  }
</script>
