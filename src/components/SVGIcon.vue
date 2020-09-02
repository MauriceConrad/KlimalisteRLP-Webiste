<template>
  <div class="icon" :style="{ width: __width, height: __height }">
    <div class="svg-container" v-if="src" v-html="svg" ref="svgContainer"></div>
  </div>
</template>

<style scoped>
  .icon {
    display: inline-block;
  }
  .icon .svg-container {
    width: 100%;
    height: 100%;
  }
  .icon .svg-container svg {
    width: 100%;
    height: 100%;
  }
  .icon .svg-container svg * {

  }
</style>

<script>
  export default {
    name: "SVGIcon",
    props: {
      src: String,
      width: String,
      height: String,
      fill: String
    },
    computed: {
      __width() {
        return this.width + 'px';
      },
      __height() {
        return this.height + 'px';
      }
    },
    async created() {
      const response = await fetch(this.src);
      const svg = await response.text();
      this.svg = svg;

      this.$nextTick(() => {
        this.forceFill();
      });
    },
    methods: {
      forceFill() {
        const svg = this.$refs.svgContainer.getElementsByTagName("svg")[0];
        const elements = svg.getElementsByTagName("*");

        for (let elem of elements) {
          elem.style.fill = this.fill;
        }
      }
    },
    data() {
      return {
        svg: null
      }
    },
    updated() {
      this.forceFill();
    },
    watch: {
      fill() {
        this.forceFill();
      }
    }
  }
</script>
