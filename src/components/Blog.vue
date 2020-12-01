<template>
  <div class="container">
    <h2>Aktuelles</h2>
    <ul class="article-list">
      <a :href="article.url" target="_blank" v-for="(article, index) in articles" :key="index">
        <li>
          <div class="preview" :style="{ 'background-image': `url('${ article.feature_image }')` }" />
          <div class="description-article">
            {{ article.title }}
          </div>
        </li>
      </a>
    </ul>
  </div>
</template>

<style scoped>
  .container {
    font-family: 'Montserrat', 'Helvetica Neue', 'Helvetica', sans-serif;
    padding: 20px 20px;
    overflow: scroll;
    scrollbar-width: none;
  }
  .container::-webkit-scrollbar {
    display: none;
  }
  a {
    text-decoration: inherit;
    color: inherit;
  }
  h2 {
    text-align: center;
    margin: 0 0 15px 0;
    font-weight: 600;
  }
  .article-list {
    list-style: none;
    margin: 0 auto;
    padding: 0;
    white-space: nowrap;
    text-align: center;

  }
  .article-list li {
    display: inline-block;
    padding: 10px;
    vertical-align: top;
    margin: 0 10px;
    background-color: #f9f9f9;
    border: 1px solid #f0f0f0;
    border-radius: 3px;


  }
  .article-list li .preview {
    width: 300px;
    height: 200px;
    background-size: cover;
    background-position: center;
  }
  .article-list li .description-article {
    max-width: 100%;
    white-space: pre-wrap;
    text-align: center;
    width: 300px;
    font-weight: 600;
    padding: 10px 0;

  }
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
        swiperOptions: {
          loop: true,
          effect: 'coverflow',
          coverflowEffect: {
            rotate: 30,
            slideShadows: false,
          },
          //slidesPerView: 1,
          centeredSlides: true,
          pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          },
        },
        articles: []
      }
    },
    created() {
      api.posts.browse({
        limit: 5,
        include: 'tags,authors'
      }).then(result => {
        const legalTags = ["website"];

        const articles = result.filter(article => {
          for (let tag of article.tags) {
            if (legalTags.includes(tag.name)) {
              return true;
            }
          }
          return false;
        });
        console.log(articles);
        this.articles = articles;
      })
    }
  }
</script>
