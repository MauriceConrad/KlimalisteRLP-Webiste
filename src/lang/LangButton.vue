<template>
  <div class="lang-button-main">
    <div class="curr-lang-container" @click="popup" ref="langContainer">
      <div class="icon" v-if="currentIcon">
        <img :src="currentIcon" alt="Language Flag">
      </div>
      <div class="symbols">
        <div class="btn-down">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <g style="fill: #fff;">
              <polygon points="225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093 		"/>
            </g>
          </svg>
        </div>
      </div>
    </div>
    <div class="pop-menu" :style="{ right: -80 + 'px' }" :class="{ show: popupOpen }">
      <div class="popup-head">
        <div class="head-symbol">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50" width="100%">
            <g>
              <path d="M 50,0 L 100,50 0,50" />
            </g>
          </svg>
        </div>
      </div>
      <div class="popup-inner">
        <div class="lang-list" ref="slotsList">
          <slot></slot>
        </div>
      </div>
    </div>

  </div>
</template>




<style scoped>
  .lang-button-main {
    padding: 0 10px;
    vertical-align: middle;
  }
  .lang-button-main .curr-lang-container {
    height: 100%;
    vertical-align: middle;
  }
  .lang-button-main .curr-lang-container:before {
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
    content: "";
  }
  .lang-button-main .curr-lang-container > * {
    vertical-align: middle;
    display: inline-block;
  }
  .lang-button-main .curr-lang-container > .icon {

  }
  .lang-button-main .curr-lang-container > .icon img {
    width: 40px;
  }

  .lang-button-main .curr-lang-container .symbols {
    padding: 0 5px;

  }
  .lang-button-main .curr-lang-container .symbols .btn-down {
    width: 20px;
    height: 20px;

  }

  .pop-menu {
    position: absolute;
    float: right;
    transform: translate(calc(-100% + 70px), 15px);


    display: none;
  }
  .pop-menu.show {
    display: block;
  }
  .pop-menu .popup-head {
    text-align: right;
    font-size: 0;
  }
  .pop-menu .popup-head .head-symbol {

    width: 30px;
    display: inline-block;

  }
  .pop-menu .popup-head .head-symbol > svg path {
    fill: #1f1f1f;
  }
  .pop-menu .popup-inner {
    padding: 10px 20px;
    background-color: #1f1f1f;
    border-radius: 7px;
  }
  .pop-menu .popup-head .head-symbol:nth-child(1) {
    transform: translate(-30px);
  }
  .lang-list {

  }

</style>

<script>
  import SVGIcon from '../components/SVGIcon.vue';
  SVGIcon;

  export default {
    name: "LangButton",
    data() {
      return {
        currentIcon: null,
        currentLabel: null,
        popupOpen: false,
        popupPos: {
          x: null,
          y: null
        }
      };
    },
    methods: {
      popup() {
        this.popupOpen = !this.popupOpen;

        const bounds = this.$refs.langContainer.getBoundingClientRect();

        const x = screen.width - bounds.right;
        const y = bounds.bottom;

        this.popupPos = { x, y };


      },
      setCurrent(data) {
        this.currentIcon = data.icon;
        this.currentLabel = data.label;

      },
    },
    created() {

      const defaultNode = Array.from(this.$slots.default).find(vnode => "default" in vnode.componentOptions.propsData);
      this.setCurrent(defaultNode.componentOptions.propsData);


      window.addEventListener("touchstart", event => {
        if (!event.target.closest('.lang-button-main') && this.popupOpen) {
          this.popup();
        }
      });
    },
    components: {
      //SVGIcon
    }
  }
</script>
