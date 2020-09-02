<template>
  <div class="general-description" :style="{ 'background-color': background }" data-nav-id="Motivation">
    <div class="inner" v-html="content.about"></div>
  </div>
</template>

<style scoped>

  .general-description {
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
    font-family: 'Montserrat', 'Helvetica Neue', 'Helvetica', sans-serif;
  }
  .general-description .inner {
    max-width: 1000px;
    margin: auto;
    font-weight: 300;
    line-height: 1.5;
  }
</style>

<script>
  import ContentAbout from '../../data/content/about1.md';

  export default {
    name: "Description",
    props: {
      background: String
    },
    data() {
      return {
        content: {
          about: ContentAbout
        }
      }
    }
  }
</script>
