<template>
  <div class="overview" :style="{ 'background-color': background, color }">
    <div class="topics-list">
      <ul>
        <li v-for="(topic, index) in topics" :key="index">
          <div class="topic-image">
            <img :src="topic.image" :alt="topic.title">
          </div>
          <div class="topic-title">
            <h4>
              {{ topic.title }}
            </h4>
          </div>
          <div class="topic-description">
            <article class="topic-description-article" v-html="topic.text"></article>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .overview {
    font-family: 'Montserrat', 'Helvetica Neue', 'Helvetica', sans-serif;
    padding: 20px 0;
  }
  .topics-list {
    padding: 0 10px;
  }
  .topics-list ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  .topics-list li {
    display: inline-block;
    flex: 1;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .topics-list li .topic-image {
    text-align: center;
  }
  .topics-list li .topic-image img {
    max-width: 250px;
    max-height: 250px;
    border-radius: 50%;
  }
  .topics-list li .topic-title {
    font-size: 2em;
    margin: 10px 0;
    word-wrap: break-word;
  }
  .topics-list li .topic-title h4 {
    margin: 0;
    text-align: center;
    font-weight: 300;
    word-wrap: break-word;
    color: #000;
  }
  .topics-list li .topic-description {
    max-width: 300px;
    text-align: center;
    margin: auto;
    color: #222;
    font-weight: 300;
    line-height: 1.4;
  }
  @media screen and (max-width: 1000px) {
    .topics-list li .topic-image img {
      max-width: 180px;
      max-height: 180px;
    }
    .topics-list li .topic-title h4 {
      font-size: 0.75em;
    }
    .topics-list li .topic-description {
      max-width: 230px;
    }
  }
  @media screen and (max-width: 600px) {
    .topics-list ul {
      display: block !important;
    }
    .topics-list ul li {
      flex: none !important;
      width: 100%;
    }
    .topics-list li .topic-description {
      max-width: 100%;
    }
    .topics-list li .topic-title h4 {
      font-size: 0.85em;
    }
    .topics-list li .topic-image img {
      max-width: 250px;
      max-height: 250px;
    }
  }
</style>

<script>
  import TopicClimate from '../../data/content/topics/climate/topic.js';
  import TopicGenerations from '../../data/content/topics/generations/topic.js';
  import TopicIndependence from '../../data/content/topics/independence/topic.js';


  export default {
    name: "Overview",
    props: {
      background: String,
      color: String
    },
    data() {
      return {
        topics: [
          TopicClimate,
          TopicGenerations,
          TopicIndependence
        ]
      }
    }
  }
</script>
