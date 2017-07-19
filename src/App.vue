<template>
  <div id="app">

    <componentB></componentB>


  <!-- componentA 或者 component-a都可以完成组件调用 -->
  <!-- 子组件传值给父组件 -->
  <!-- 方法一：通过$on $emit事件完成-->
    <componentA msgfromfather='i am your father!'
    v-on:child-tell-me-something='listenToMyBoy'></componentA>
    <p>child tell me 1: {{childWords}}</p>


  <!-- 方法二：通过$dispatch $broatcast事件完成,此方法已被弃用 -->
    <componentA msgfromfather='i am your father!'></componentA>
    <!--<p>child tell me 2: {{childWords}}</p>-->


    <h1>{{title}}</h1>
    <h1 v-text='title1'></h1>
    <h1 v-html='title1'>{{title}}</h1>
    <input v-model='newItem' v-on:keyup.13='addNew'/>
    <ul>
      <li v-for='item in items' v-bind:class='[liClass, {isfinished: item.isfinished}]' v-on:click='toggleFinish(item)'>
        {{item.label}}
      </li>
    </ul>


    <p>{{num1+4}}</p>
    <p>{{num1+num2+num3}}</p>

    <p v-if="false">hhah</p>

    <input type="text" v-model="vOnleOnce">
    <p v-once>{{vOnleOnce}}</p>
  </div>
</template>

<script>
import Store from './store'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'

// console.log(Store)

export default {
  components: {ComponentA, ComponentB},
  data () {
    return {
      title: 'this is a todo list',
      title1: '<span>???</span>this is a todo list',
      items: Store.fetch(),
      liClass: 'liClass',
      newItem: '',
      childWords: '',
      num1: 1,
      num2: 2,
      num3: 10,
      vOnleOnce: 'dsd'
    }
  },
  watch: {
    items: {
      handler: function(val, oldVal) {
        Store.save(val)
      },
      deep: true//为了深层检测到items里某个对象的某个key的变化
    }
  },
  methods: {
      toggleFinish: function(item) {
        item.isfinished = !item.isfinished;
      },
      addNew: function() {
        this.items.push({
          label: this.newItem,
          isfinished: false
        });
        this.newItem = '';
      },
      listenToMyBoy: function(msg) {
        this.childWords = msg;
      }
  },
  computed: {
      sum() {
          return this.num1 + this.num2;
      }
  }
  /*方法二：通过$dispatch $broatcast事件完成,此方法已被弃用
  events: {
    'child-tell-me-something': function(msg) {
      console.log(msg);
      this.childWords = msg;
    }
  }*/
}
</script>

<style>
.isfinished {
  text-decoration: underline;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 60px;
  /*text-align: center;*/
}
</style>
