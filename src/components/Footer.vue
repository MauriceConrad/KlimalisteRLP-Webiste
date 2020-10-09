<template>
  <footer>
    <div class="inner">
      <div class="emblems">
        <ul>
          <li v-for="emblem in emblems" :key="emblem.alias">
            <img :src="emblem.src" :alt="emblem.alias">
          </li>
        </ul>
      </div>
      <div class="links">
        <ul>
          <li>
            <a href="/impressum.html">Impressum</a>
          </li>
          <li>
            <a href="/datenschutz.html">Datenschutz</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  footer {
    font-family: 'Montserrat', 'Helvetica Neue', 'Helvetica', sans-serif;

    text-align: center;
    padding: 20px 0 10px;
    background-color: rgb(235, 235, 235);
    color: #222;
  }
  footer .inner {
    max-width: 1000px;
    margin: auto;
  }
  footer .links ul {
    list-style: none;
    padding: 0;
    margin: 0;

  }
  footer .links ul li {
    display: inline-block;
    padding: 0 10px;
  }
  footer a {
    color: inherit;
  }
  .emblems {

  }
  .emblems ul {
    list-style: none;
    margin: 0;
    padding: 0;

  }
  .emblems ul li {
    display: inline-block;
    padding: 10px 0;
  }
  .emblems ul li img {
    width: 100%;
    height: 100%;
    max-height: 80px;
  }
</style>

<script>

  export default {
    name: "Footer",
    data() {
      return {
        emblems: [
          /*{
            src: 'images/emblems/klimalisterlp.svg',
            alias: 'Klimaliste RLP'
          },*/
          {
            src: 'images/emblems/klimalistedeutschland.svg',
            alias: 'Klimaliste Deutschland'
          }
        ]
      }
    }
  }
</script>
