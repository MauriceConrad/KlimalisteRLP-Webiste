<template>
  <div class="program-view" data-nav-id="Programm">
    <div class="program-description" v-html="content.description"></div>
    <a href="files/Klimaplan Rheinland-Pfalz.pdf" class="anchor-program" target="_blank">
      Vollständiges Programm
    </a>
    <br>
    <div class="program-application">
      <div class="tab-bar">
        <div class="tab-bar-inner" ref="tabBarInner">
          <ul>
            <li v-for="(topic, index) in program" :key="index" ref="tabItems" @click="selectTopic(index)" :class="{ active: index == activeTopicIndex }" :style="{ 'background-color': ((index == activeTopicIndex) ? alpharizeColor(topic.color, 0.2) : 'transparent') }">
              <div class="icon-main">
                <SVGIcon :src="topic.icon" width="35" :fill="index == activeTopicIndex ? topic.color : '#444'"></SVGIcon>
              </div>
              <div class="label">
                {{ topic.title }}
              </div>
            </li>

          </ul>
          <div class="active-detector" :style="{ width: currTabWidth + 'px', transform: 'translateX(' + (currTabPos) + 'px)', 'background-color': activeTopic.color }">
          </div>
        </div>
      </div>
      <div class="content-view">
        <swiper :options="swiperOptions" ref="mySwiper" @slideChange="handleSlideChange">
          <swiper-slide v-for="(topic, index) in program" :key="index">
            <div class="topic-content">
              <div class="topic-content-inner" v-html="topic.text"></div>
            </div>
          </swiper-slide>

        </swiper>
      </div>
    </div>
  </div>
</template>

<style scoped>
  * {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .program-view {
    font-family: 'Montserrat', 'Helvetica Neue', 'Helvetica', sans-serif;
    background-color: rgb(247, 247, 247);
    border-top: 1px solid rgb(236, 236, 236);
    text-align: center;
  }
  .program-view .anchor-program {
    background-color: #38ad79;
    padding: 5px 10px;
    color: #fff;
    display: inline-block;
    font-size: 1.1em;
    text-decoration: none;
    margin-bottom: 20px;
  }
  .program-description {
    margin: auto;
    max-width: 1000px;
    padding: 10px 10px;
    letter-spacing: 0.2px;
    line-height: 1.5;

  }
  .program-description h2 {
    margin: 0;
  }
  .program-application {
    filter: drop-shadow(0px -1px 5px rgba(0, 0, 0, 0.05));
  }
  .tab-bar {
    text-align: center;
    font-size: 0;
  }
  .tab-bar .tab-bar-inner {
    display: inline-block;
    width: 100%;
    max-width: 1200px;
    position: relative;
    overflow: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    font-size: 1rem;
    background-color: #fff;
  }
  .anchor-program {

  }
  .tab-bar .tab-bar-inner::-webkit-scrollbar {
    display: none;
  }
  .tab-bar ul {
    list-style: none;
    white-space: nowrap;
    padding: 0px 0;
    margin: 0;
    display: flex;


  }
  .tab-bar ul li {
    flex: 1;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
  }
  @media screen and (max-width: 700px) {

  }
  .tab-bar ul li .icon-main {
    padding: 10px;
    font-size: 0;
    border-radius: 50%;
    transition: all 0.3s;
  }
  .tab-bar ul li + li {
    border-left: 1px solid rgb(237, 237, 237);
  }
  .tab-bar ul li > div {
    display: inline-block;
    vertical-align: middle;
  }
  .tab-bar ul li .label {
    margin: 0;
    font-weight: 500;
    font-size: 1.2em;
    color: #444;
  }
  .tab-bar .active-detector {
    width: 100%;
    height: 3px;
    background-color: #df38a1;
    display: block;
    transition: all 0.5s;
    position: absolute;
    bottom: 0;
  }

  @media screen and (max-width: 1280px) {
    .tab-bar .tab-bar-inner {
      width: 100%;
      max-width: 100%;

    }
    .tab-bar ul {

    }
    .tab-bar ul li {
      padding: 10px 10px;
    }
    .tab-bar ul li .label {
      font-size: 1em;
    }
  }
  @media screen and (max-width: 600px) {
    .tab-bar ul li .label {
      font-size: 0.9em;
      display: none;
    }
  }


  .content-view {
    background-color: #fff;
  }
  .content-view .swiper-slide .topic-content {
    max-width: 1300px;
    margin: auto;
  }
  .content-view .swiper-slide .topic-content-inner {
    padding: 0 10px;
  }
</style>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
  import 'swiper/swiper-bundle.css';

  import SVGIcon from './SVGIcon.vue';



  import ProgramDescription from '../../data/content/programm_description.md';

  import ProgramTopicClimate from '../../data/content/program/climate/topic.js';
  import ProgramTopicTraffic from '../../data/content/program/traffic/topic.js';
  import ProgramTopicEducation from '../../data/content/program/education/topic.js';
  import ProgramTopicEconomy from '../../data/content/program/economy/topic.js';
  import ProgramTopicAgrar from '../../data/content/program/agrar/topic.js';
  import ProgramTopicEnergy from '../../data/content/program/energy/topic.js';

  export default {
    name: "ProgramView",
    data() {
      return {
        swiperOptions: {
          loop: true,
          slidesPerView: 1,
          centeredSlides: true,
          pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          },
        },
        content: {
          description: ProgramDescription
        },
        program: [
          ProgramTopicClimate,
          ProgramTopicTraffic,
          ProgramTopicEducation,
          ProgramTopicEconomy,
          ProgramTopicEnergy,
          ProgramTopicAgrar
        ],
        currTabPos: 0,
        currTabWidth: 0,
        activeTopicIndex: 0
      }
    },
    computed: {
      activeTopic() {
        return this.program[this.activeTopicIndex];
      },
      swiper() {
        return this.$refs.mySwiper.$swiper;
      }
    },
    methods: {
      handleSlideChange() {
        this.activeTopicIndex = this.swiper.realIndex;
      },
      updateCurrTabBounds() {
        const activeTabItem = this.$refs.tabItems[this.activeTopicIndex];
        const tabUl = activeTabItem.closest("ul");

        const tabUlBounds = tabUl.getBoundingClientRect();
        const tabItemBounds = activeTabItem.getBoundingClientRect();

        this.currTabWidth = tabItemBounds.width;
        this.currTabPos = tabItemBounds.x - tabUlBounds.x;
      },
      parseColor(input) {
        if (input.substr(0,1)=="#") {
        var collen=(input.length-1)/3;
        var fact=[17,1,0.062272][collen-1];
        return [
          Math.round(parseInt(input.substr(1,collen),16)*fact),
          Math.round(parseInt(input.substr(1+collen,collen),16)*fact),
          Math.round(parseInt(input.substr(1+2*collen,collen),16)*fact)
        ];
        }
        else return input.split("(")[1].split(")")[0].split(",").map(x=>+x);
      },
      alpharizeColor(input, alpha = 1) {
        return `rgba(${ this.parseColor(input).concat(alpha).join(', ') })`;
      },
      selectTopic(index) {
        this.activeTopicIndex = index;
        this.swiper.slideTo(index + 1, 500);

      },
      updateTabWidth() {
        if (this.$refs.tabBarInner) {
          const tabBarInnerBounds = this.$refs.tabBarInner.getBoundingClientRect();
          this.tabWidth =  tabBarInnerBounds.width / this.program.length;
        }
      }
    },
    components: {
      Swiper,
      SwiperSlide,
      SVGIcon
    },
    directives: {
      swiper: directive
    },
    watch: {
      activeTopicIndex() {
        this.updateCurrTabBounds();
      }
    },
    mounted() {
      this.updateCurrTabBounds();
      this.$nextTick(() => this.updateCurrTabBounds());
      window.addEventListener("resize", () => this.updateCurrTabBounds());
    }
  }
</script>
