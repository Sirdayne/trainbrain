<template>
  <div>
    <section class="main-menu" v-if="inMenu">
      <h1 class="title">Введите данные для теста:</h1>
      <div class="input-block">
        <p>Максимальное количество цифр: </p>
        <input type="number" v-model="maxNumbers">
      </div>
      <div class="input-block">
        <p>Скорость: </p>
        <input type="number" v-model="delay">
      </div>
      <div class="buttons">
        <button class="btn" @click="toTest()">Начать тест</button>
      </div>
    </section>
    <section class="test" v-if="inTest">
      <h2 class="title2">Количество цифр: {{maxNumbers}} Скорость: {{delay}} </h2>
      <h1 class="title">Посчитайте количество цифр:</h1>
      <div class="main-block">{{ elem }}</div>
      <div class="buttons">
        <button class="btn" @click="startStep()">Запуск</button>
        <button class="btn" v-if="isAnswerButtonShown" @click="showAnswer()">Ответ</button>
        <button class="btn" @click="toMenu()">В меню</button>
      </div>
      <div v-if="isAnswerShown" class="answers">
        <div v-if="isAnswerArray" v-for="item in answer" class="answer">{{ item }}</div>
        <div v-if="!isAnswerArray">Не было цифр</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      elem: 'X',
      testSteps: 5,
      cycleSteps: 25,
      numberOfNumbers: 0,
      maxNumbers: 2,
      delay: 150,
      symbols: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      inMenu: true,
      inTest: false,
      randomArray: [],
      answer: [],
      isAnswerButtonShown: false,
      isAnswerShown: false,
      randomFactor: 4,
    }
  },
  created() {

  },
  computed: {
    isAnswerArray: function () {
      if (this.answer.length > 0) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    startStep() {
      this.isAnswerShown = false
      this.isAnswerButtonShown = false
      this.answer = []
      this.numberOfNumbers = 0
      console.log(this.maxNumbers)
      for (var i=0; i<this.cycleSteps; i++) {
        this.randomArray.push(this.randomNumberOrSymbol(i))
      }
      var here = this
      for (var i=0; i<this.cycleSteps; i++){
        setTimeout(function(x) { return function() {
          if (here.randomArray[x] === 'number'){
            var isDuplicate = 0
            while (isDuplicate > -1){
              here.elem = here.randomNumber()
              isDuplicate = here.answer.findIndex(x => x == here.elem)
            }
            here.answer.push(here.elem)
          } else {
            here.elem = here.randomSymbol()
          }
        }; }(i), i*this.delay);
      }
      setTimeout(function() { here.isAnswerButtonShown = true }, this.cycleSteps*this.delay)
    },
    randomNumberOrSymbol(step) {
      var element = 'symbol'
      this.maxNumbers = parseInt(this.maxNumbers)
      if ((step < this.cycleSteps) && (this.numberOfNumbers < this.maxNumbers)) {
        var max = 10
        var min = 0
        var random = Math.floor(Math.random() * (max - min)) + min
        if (random < this.randomFactor) {
          element = 'number'
          this.numberOfNumbers++
        }
      }
      return element;
    },
    randomNumber() {
      var max = 10
      var min = 0
      var random = Math.floor(Math.random() * (max - min)) + min
      return random;
    },
    randomSymbol() {
      var max = this.symbols.length
      var min = 0
      var random = Math.floor(Math.random() * (max - min)) + min
      var symbol = this.symbols.substr(random, 1)
      return symbol;
    },
    toTest() {
      this.inMenu = false
      this.inTest = true
    },
    toMenu() {
      this.inMenu = true
      this.inTest = false
    },
    showAnswer() {
      this.isAnswerShown = true
    },
    decreaseRandomFactor() {
      if (this.randomFactor > 1){
        this.randomFactor--
      }
    },
    increaseRandomFactor() {
      if (this.randomFactor < 10){
        this.randomFactor++
      }
    }
  }
}
</script>

<style scoped>

</style>
