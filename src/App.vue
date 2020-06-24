<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <div class="test" @click="openDialog">点我一下,弹出提示弹出框</div>
     <bounced :isshow="showA" @closeDialog="close" :button="2">
        <template v-slot:header>
            <!-- 标题 -->
            <span>标题</span>
        </template>
        <template v-slot:main>
            <!-- 主要内容 -->
            <p>内容</p>
            <input />
        </template>
        <!-- 按钮名称 -->
        <template v-slot:button>提交</template>
        <template v-slot:button-left>取消</template>
        <template v-slot:button-right>确定</template>
    </bounced>
    <dropdown :list="list">
      <!-- 标题内容模板 -->
      <template v-slot:typeName>
        <img src="./assets/logo.png" alt />
        <span>查看</span>
      </template>
      <!-- 列表内容模板 -->
      <template v-slot:listItem="slotProps">
       <li class="dropitem"> 
         <img :src="slotProps.img" alt />
         <a href="#"> <span>{{slotProps.tex}}</span></a>
       </li>
      </template>
    </dropdown>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showA: false,
      list: [
        {
          img: "../src/assets/message.png",
          text: " 消息"
        },
        {
          img: "../src/assets/notification.png",
          text: "铃声"
        },
        {
          img: "../src/assets/play.png",
          text: "视频"
        }
      ],
    }
  },
  methods: {
    openDialog: function(){
      this.showA=true;
    },
     open() {
            this.showA = true;
        },
        //关闭提示框方法
        close() {
            this.showA = false;
            this.$emit('close');
        }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
