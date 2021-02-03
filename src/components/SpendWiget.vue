<template>
  <div class="progress-main">
    <div class="progress-area">
      <div class="progress-matrix top">
        <div class="matrix-inner">
          <div class="matrix-element spend-start" style="display: none;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
              <path d="M 3,97 L 3,20 30,20" style="fill: none; stroke: #000; stroke-width: 1px;" />

              <g>
                <text x="35" y="20" style="font-size: 30px; font-family: 'Montserrat'; fill: #000; font-weight: 300; dominant-baseline: middle;">
                  20.12.2020
                </text>
              </g>
            </svg>
          </div>
          <div class="matrix-element spend-aim" style="float: right; left: -5px;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100">
              <path d="M 297,97 L 297,20 261,20" style="fill: none; stroke: #000; stroke-width: 1px;" />

              <g>
                <text x="261" y="20" style="text-anchor: end; font-size: 40px; font-family: 'Montserrat'; fill: #000; font-weight: 400; dominant-baseline: middle;">
                  {{ beauftifyCurreny(currentGoal, '€', 3, ".") }}
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <progress class="progress-bar" :value="progress" max="100">0%</progress>
      <div class="progress-matrix bottom">
        <div class="matrix-inner">
          <div v-if="progress <= 75" class="matrix-element spend-current" style="float: left;" :style="{ left: 'calc(' + progress + '% - 80px)' }">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
              <path d="M 80,3 L 80,60" style="fill: none; stroke: #000; stroke-width: 1px;" />

              <g>
                <text x="3" y="90" style="font-size: 30px; font-family: 'Montserrat'; fill: #000; font-weight: 300; dominant-baseline: top;">
                  {{ beauftifyCurreny(current, '€', 3, ".") }}
                </text>
              </g>
            </svg>
          </div>
          <div v-else class="matrix-element spend-current" style="float: right;" :style="{ left: 'calc(-' + (100 - progress) + '% + 10px)' }">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
              <path d="M 180,3 L 180,60" style="fill: none; stroke: #000; stroke-width: 1px;" />

              <g>
                <text x="197" y="90" style="text-anchor: end; font-size: 30px; font-family: 'Montserrat'; fill: #000; font-weight: 300; dominant-baseline: top;">
                  {{ beauftifyCurreny(current, '€', 3, ".") }}
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

  .progress-main {
    width: 100%;

  }

  .progress-area {
    width: calc(100% - 0px);
    margin: 0;
    overflow: hidden;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .progress-area .progress-matrix {
    width: 100%;
    height: 100px;
    position: relative;
    text-align: left;
  }
  .progress-area .progress-matrix .matrix-inner {
    position: absolute;
    height: 100%;
    width: 100%;
  }
  .progress-area .progress-matrix .matrix-inner .matrix-element {
    display: inline-block;
    top: 0;
    left: 0;
    max-height: 100%;
    position: relative;
  }
  .progress-area .progress-matrix .matrix-inner .matrix-element > svg {
    height: 100px;
  }



  .progress-area .progress-bar {
    width: 100%;
    -webkit-appearance: none;
    border-radius: 15px;
    height: 30px;
    overflow: hidden;

  }
  .progress-bar::-webkit-progress-bar {
    -webkit-appearance: none;
    background-color: #ececec;
  }
  .progress-bar::-webkit-progress-value {
    -webkit-appearance: none;
    background-color: #D60078;

  }
</style>

<script>
  export default {
    name: "SpendWidget",
    props: {
      current: {
        type: Number,
        default: 0
      },
      goals: {
        type: Array,
        default: () => [100000]
      }
    },
    computed: {
      currentGoal() {
        return this.goals.filter(target => (this.current * 1.25) < target)[0];
      },
      progress() {
        return (this.current / this.currentGoal) * 100;
      }
    },
    methods: {
      roundComma(num, count) {
        return Math.round(num * 10 ** count) / 10 ** count;
      },
      getDigits(number, system) {
        const digitsAfterComma = (numComma => {
          const digits = [];
          while (numComma > 0) {
            numComma = numComma * 10;
            const digit = Math.trunc(numComma);
            digits.push(digit);

            numComma -= digit;
            numComma = this.roundComma(numComma, 6);
          }
          return digits;
        })(number % 1);

        const digitsBeforeComma = (numInt => {

          const digits = [];
          while (numInt > 0) {
            const digit = numInt % system;
            digits.push(digit);
            numInt = (numInt - digit) / system;
          }
          return digits;
        })(Math.trunc(number));

        return [digitsBeforeComma, digitsAfterComma];
      },
      beauftifyCurreny(value, currencySymbol, digitGroupSize = 3, digitGroupSeperator = ' ') {
        currencySymbol;
        const digits = this.getDigits(value, 10);

        const integerParts = (digits => {
          const integerPartsAmount = Math.ceil(digits.length / digitGroupSize);
          return new Array(integerPartsAmount).fill(0).map((value, i) => {
            const sliceStartPos = i * digitGroupSize;
            const sliceEndPos = sliceStartPos + digitGroupSize;

            return digits.slice(sliceStartPos, sliceEndPos);
          });
        })(digits[0]).map(digitGroup => digitGroup.reverse()).reverse();



        const strBeforeComma = integerParts.map(digitGroup => digitGroup.join('')).join(digitGroupSeperator);
        const strAfterComma = digits[1].join('');

        const str = [strBeforeComma, strAfterComma].filter(str => str).join(',') + ' ' + currencySymbol;

        return str;
      }
    },
    data() {
      return {

      }
    },
    mounted() {

    }
  }
</script>
