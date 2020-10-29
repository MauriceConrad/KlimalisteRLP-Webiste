<template>
  <div class="support-tutorial" data-nav-id="Unterschreiben">
    <h2>Wir brauchen deine Unterschrift!</h2>
    <div class="step-description">
      {{ activeStep.description }}
    </div>
    <div class="step-view">
      <div class="bg-graphic">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 100">
          <svg width="100%" height="100%" viewBox="0 0 1381 1081" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
            <g style="transform: scale(0.92); transform-origin: 50% 50%;" :style="{ fill: shapeFill }">
              <path d="M98.647,217.8C66.578,313.123 51.783,890.625 169.06,952.35C229.048,983.922 251.814,948.008 353.933,954.983C448.567,961.447 457.648,1096.45 698.414,1096.96C879.367,1094.34 1041.47,1035.43 1241.1,1025.53C1322.21,1021.51 1374.77,851.662 1295.75,699.514C1257.46,625.776 1563.34,528.687 1416.19,356.408C1308.45,95.73 1218.79,222.998 970.948,139.757C703.026,93.056 313.251,-51.107 283.959,54.52C258.029,102.859 118.091,160.005 98.647,217.8Z"/>
            </g>
          </svg>
        </svg>
      </div>
      <div class="front-graphic">
        <div class="swiper-container swiper1" ref="swiperContainer">
          <div class="swiper-wrapper">
            <div class="swiper-slide" :key="index" v-for="(step, index) in steps">
              <div class="slide-inner">
                <div class="slide-graphic" :style="{ transform: 'scale(' + step.scale + ')' }">
                  <img :src="step.src" alt="Step...">
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>

            <div class="swiper-scrollbar"></div>
        </div>
      </div>
    </div>
    <div class="support-area">
      <a href="files/Tutorial_UU.pdf" target="_blank">Komplettes Tutorial als PDF</a>
    </div>
    <div class="support-btns">
      <a :href="ressource.href" target="_blank" v-for="(ressource, index) in ressources" :key="index">
        <button class="btn">
          <div class="icon">
            <SVGIcon :src="ressource.icon" height="25" width="25" fill="#fff"></SVGIcon>
          </div>
          <div class="label">
            {{ ressource.label }}
          </div>
        </button>
      </a>
    </div>
    <div class="adress-label">
      <strong>Unterschriften an:</strong>
      <br>
      <span>
        Greta Waltenberg
        <br>
        Taunussstraße 33
        <br>
        55118 Mainz
      </span>
    </div>
  </div>
</template>


<style scoped>

  .support-tutorial {
    font-family: 'Montserrat', 'Helvetica Neue', 'Helvetica', sans-serif;
    padding: 30px 0;
    background-color: rgb(244, 244, 244);
  }
  .swiper-container {
    max-width: 100%;
    height: 100%;
  }
  h2 {
    text-align: center;
    font-size: 2.2em;
    margin: 0;
    padding: 0 10px;

  }

  @media screen and (max-width: 600px) {
    h2 {
      font-size: 1.8em;
    }
  }
  .step-description {
    max-width: 800px;
    margin: auto;
    text-align: center;
    padding: 20px 10px;
    font-size: 1.5em;
  }
  .step-view {
    width: 100%;
    position: relative;
    height: 500px;
  }
  @media screen and (max-width: 600px) {
    .step-view {
      height: 370px;
    }
  }
  .front-graphic {
    height: 100%;
  }
  .swiper-pagination {
    z-index: 3;
  }
  .swiper-slide {
    z-index: 2;
  }
  .swiper-slide .slide-inner {
    width: 100%;
    height: 400px;
    box-sizing: border-box;
  }
  .swiper-slide .slide-inner .slide-graphic {
    flex: 1;
    box-sizing: border-box;
    height: calc(100% - 0px);
    position: relative;
    top: 30px;
  }
  .swiper-slide .slide-inner .slide-graphic > img {
    height: 100%;
    max-width: calc(100% - 50px);
    margin: auto;
    display: block;
    filter: drop-shadow(0px 0px 7px rgba(0, 0,0, 0.1));
  }
  @media screen and (max-width: 600px) {
    .swiper-slide .slide-inner .slide-graphic > img {
      height: 300px;
    }
  }
  .swiper-button-next,
  .swiper-button-prev {

      right: 10px;
      padding: 30px;
      color: #555 !important;
      fill: black !important;
      stroke: black !important;
  }
  .bg-graphic {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    height: calc(100% - 50px);
  }

  .bg-graphic svg {
    width: 100%;
    height: 100%;
  }
  .bg-graphic svg path {
    transition: all 0.3s;
  }


  .support-btns {
    max-width: 1000px;
    margin: auto;
    padding: 0px 0 10px;
    text-align: center;
  }
  .support-btns a {

  }
  .support-btns a .btn {
    background-color: transparent;
    border: none;
    font-size: 1.2em;
    background-color: rgb(60, 145, 113);
    padding: 10px 20px;
    cursor: pointer;
    margin: 10px 10px;
    color: #fff;
    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.3);
  }
  .support-btns a .btn .icon {
    display: inline-block;
    vertical-align: middle;
    margin: 0 3px 0 0;
  }
  .support-btns a .btn .label {
    display: inline-block;
    vertical-align: middle;
  }
  .adress-label {
    text-align: center;
  }
  .support-area {
    text-align: center;
    margin: 20px 0;
  }
</style>

<script>
  import SVGIcon from './SVGIcon.vue';
  //import { directive } from 'vue-awesome-swiper';
  //import 'swiper/swiper-bundle.css';
  import Swiper from 'swiper/bundle';
  import 'swiper/swiper-bundle.css';


  export default {
    name: "SupportTutorial",
    data() {
      return {
        swiper: null,
        steps: [
          {
            src: 'images/tutorial/print.svg',
            description: "Schritt 1: Unterschriften-Formular doppelseitig(!) ausdrucken",
            color: 'rgb(110, 187, 187)',
            scale: 0.9

          },
          {
            src: 'images/tutorial/sign.svg',
            description: "Schritt 2: Ausfüllen + Unterschreiben",
            color: 'rgb(175, 127, 195)',
            scale: 0.9

          },
          {
            src: 'images/tutorial/send.svg',
            description: "Schritt 3: Original + Unterschrift an uns schicken",
            color: 'rgb(187, 112, 112)',
            scale: 1
          }
        ],
        ressources: [
          {
            label: 'Unterstützungs-Formular Liste',
            href: 'files/Formblatt_UU.pdf',
            icon: 'icons/direct-download.svg'
          },/*
          {
            label: 'Unterstützungs-Formular Mainz II',
            href: '#',
            icon: 'icons/direct-download.svg'
          },
          {
            label: 'Unterstützungs-Formular Mainz I',
            href: '#',
            icon: 'icons/direct-download.svg'
          }*/
        ]
      }
    },
    computed: {
      activeStep() {
        return this.steps[this.swiper?.realIndex || 0];
      },
      shapeFill() {
        return this.activeStep.color;
      }
    },
    mounted() {
      this.$nextTick(() => {
        //console.log(this.swiper.effect);
        const swiper = new Swiper('.swiper1', {
          direction: 'horizontal',
          loop: false,
          flipEffect: {
            rotate: 30,
            slideShadows: false,
          },
          cubeEffect: {
            slideShadows: false,
            shadow: false
          },
          effect: 'cube',

          // If we need pagination
          pagination: {
            el: '.swiper-pagination',
          },
          // Navigation arrows
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },

          // And if we need scrollbar
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        });
        this.swiper = swiper;
      });


    },
    methods: {
      slideNext() {
        this.mySwiper.slideNext()
      },
      slidePrev() {
        this.mySwiper.slidePrev()
      }
    },
    components: {
      SVGIcon
      //Swiper,
      //SwiperSlide,
      //SVGIcon
    },
    directives: {
      //swiper: directive
    },
  }
</script>
