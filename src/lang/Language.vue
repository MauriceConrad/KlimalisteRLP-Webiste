<template>
  <div class="lang-button-item" @click="activate">
    <div class="icon">
      <SVGIcon :src="icon" width="40"></SVGIcon>
    </div>
    <div class="label">
      <span>{{ label }}</span>
    </div>
  </div>
</template>



<style scoped>
  .lang-button-item {
    white-space: nowrap;
    color: #fff;

  }
  .lang-button-item + .lang-button-item {
    border-top: 1px solid #525252;
  }
  .lang-button-item > * {
    display: inline-block;
    vertical-align: middle;
  }
  .lang-button-item .label {
    padding: 0 10px;
  }

</style>

<script>
  import SVGIcon from '../components/SVGIcon.vue';

  export default {
    name: "LangButton",
    props: {
      label: String,
      icon: String,
      default: Boolean
    },
    methods: {
      activate() {
        this.$parent.setCurrent({
          label: this.label,
          icon: this.icon
        });
      }
    },
    data() {
      return {
        test: 100
      };
    },
    mounted() {


      console.log(this.label, this.icon, this.default);

    },
    components: {
      SVGIcon
    }
  }


</script>
