<template>
  <div class="container">
    <h2>Deine Spende.</h2>

    <SpendWiget :current="current" :goals="[10000, 25000, 50000, 100000, 500000]" />
    <br><br>
    <div class="description">
      Um unseren <strong>Wahlkampf</strong> zu ermöglichen, sind wir auf <strong>Spenden</strong> angewiesen. Dadurch gewährleisten wir unsere Unabhängigkeit.
      <br><br>
      Spenden an Wahler:innenvereinigungen sind besonders <strong>steuerlich abzugsfähig</strong>. <strong>50%</strong> werden direkt von der Einkommensteuer abgezogen. Von jährlich bis zu <strong>1.650 €</strong> bei Ledigen, bzw <strong>3.300 €</strong> bei gemeinsam Veranlagten.
    </div>

  </div>
</template>

<style scoped>
  .container {
    max-width: 1330px;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    font-family: 'Montserrat';
    padding: 60px 0;
  }
  h2 {
    font-weight: 300;
    font-size: 1.6em;
    text-align: center;
    margin: 10px 0;
    display: none;
  }
  .description {
    text-align: center;
    letter-spacing: 0.2px;
    line-height: 1.5;
    max-width: 800px;
    margin: auto;
    background-color: rgb(250, 250, 250);
    padding: 10px 10px;
    border-radius: 5px;
    font-weight: 300;
  }


</style>


<script>
  import SpendWiget from './SpendWiget.vue';
  import SVGIcon from './SVGIcon.vue';
  SVGIcon;

  export default {
    name: "Spend",
    data() {
      return {
        current: 0,
        topics: [
          {
            icon: 'icons/poster-colored.svg',
            title: 'Plakate',
            text: `Um in Rheinland-Pfalz Präsenz zu zeigen, planen wir knapp 30.000 Plakate im ganzen Land aufzustellen. Dabei verwenden wir ausschlißelich recycelete und wiederverwendbare Materialien. Dafür rechnen wir mit Kostem zwischen 40.000 und 50.000 €. `
          },
          {
            icon: 'icons/poster-colored.svg',
            title: 'Plakate',
            text: `Um in Rheinland-Pfalz Präsenz zu zeigen, planen wir knapp 30.000 Plakate im ganzen Land aufzustellen. Dabei verwenden wir ausschlißelich recycelete und wiederverwendbare Materialien. Dafür rechnen wir mit Kostem zwischen 40.000 und 50.000 €. `
          }
        ]
      }
    },
    async mounted() {
      const valueRaw = await (await fetch('https://klimalisterlp.de/spenden/api/money_value.txt')).text();

      this.current = Number(valueRaw);
    },
    components: {
      SpendWiget,
      //SVGIcon
    }
  }
</script>
