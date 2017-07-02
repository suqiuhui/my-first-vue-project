<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ msgfromfather }}</h1>
    <button v-on:click='onClickMe'>open mouse!</button>
    <componentAB></componentAB>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.component('componentAB', {
  data: function() {
    return {
      parentMsg: '夜雨风凉'
    }
  },
  template: `<div><input v-model='parentMsg'/>
            <br/>
            <child-component :my-message='parentMsg'/></div>`,
  components: {
    'child-component': {
      props: ['myMessage'],
      template: '<div>{{myMessage}}</div>'
    }
  }
});
export default {
  name: 'componentA',
  data () {
    return {
      msg: 'hello father'
    }
  },
  props: ['msgfromfather'],
  methods: {
    onClickMe: function() {
      console.log(this.msgfromfather);
      //子组件传值给父组件
      //方法一：通过$on $emit事件完成
      this.$emit('child-tell-me-something', this.msg);
      //方法二：通过$dispatch $broatcast事件完成,此方法在vue2中被弃用
      // this.$dispatch('child-tell-me-something', this.msg);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
