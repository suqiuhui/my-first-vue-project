<template>
  <section>
    <div class="unit">
      <div class="content">
        <h1>这是标题</h1>
        <div class="info">
          <span>2017.07.06</span>
          <span class="original">原创</span>
        </div>
      </div>
      <img class="imgLogo" src="../img/WechatIMG12.jpeg" alt="">
<!--<b style="clear: both"></b>-->
    </div>

  </section>
</template>


<script>
//  import Vue from 'vue'
  export default {
    name: 'componentB'
  }

</script>

<!-- scoped 是用来标记当下style中的样式仅是当前组件的独立样式对其他组件或页面不造成任何影响 -->
<style scoped>
  .unit{
    width: 300px;
    position: relative;
    position: relative;
    position: relative;
  }
.imgLogo {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  /*float: right;*/
}
</style>
