<template>
  <div id="app">

    <h1>vue-cli/vue-resource22</h1>
    <input type="button" value="跨域访问nodejs" @click="show">
    <input type="button" value="跨域访问nodejs请求种cookie" @click="show2">

    <!--<headerbar></headerbar>-->
    <loading v-show="getLoading"></loading>
    <!--<keep-alive>网络环境下使用-->
    <transition  enterActiveClass="animated fadeIn" leaveActiveClass="">
      <router-view></router-view>
    </transition>
    <!--</keep-alive>-->
    <!--footerbar是公共组件-->
    <footerbar v-show="getFoot"></footerbar>
  </div>

</template>

<script>

  //   import mygift from './components/mygift.vue';
  import footerbar from './components/footerbar.vue';
  import {mapGetters} from 'vuex';

  export default {
    name: 'app',
    data() {
      return {
        msg: ''
      }
    },
    components: {
      footerbar
    },
    computed: mapGetters([
      'getFoot', 'getLoading'
    ]),

    mounted() {
//      console.log(this);
      this.changePath(this.$route.path);
    },

    methods: {
      changePath(path) {
        if (/brand|reg|login/.test(path)) {
          this.$store.dispatch('hideFoot');
        }
        ;
        if (/detail|home|member|myorder|mygift|shopcar|shoplist|talk/.test(path)) {
          this.$store.dispatch('showFoot');
        }
      },

      //-----------------------------test

        show(){
          this.$http.get('http://localhost:3000/users').then((res)=>{
            console.log(res.data);
          }).catch((res)=>{
            alert(res.status);
          });
        },
        show2(){
          this.$http({
            url:'http://localhost:3000/cookies',
//        withCredentials: true,//携带跨源凭证
          }).then((res)=>{
            console.log(res.data);
          }).catch((res)=>{
            alert(res.status);
          });
        }
      //--------------test


    },
//监听选项
    watch: {
      $route(to) {
// console.log(to.path)//获取路由指向--》/home.../shoplist..//问actions要东西
        this.changePath(to.path);
      }
    }


  }
</script>

<style>

</style>
