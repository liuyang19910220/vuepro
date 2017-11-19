<template>
  <div class="detail">
    <div class="am-slider am-slider-default" data-am-flexslider id="demo-slider-0"
         style="border-bottom: 1px solid #b6b6b6;">
      <!--在此将父数据传detail递给子-->
      <slider :m="detail"></slider>

      <div class="am-header-left am-header-nav return">

        <a href="javascript:history.back()" class="return-fir">
          <i class="am-icon-chevron-left"></i>
        </a>
        <a href="javascript:;" class="share"></a>
        <a href="" class="xin"></a>
      </div>
      <div class="share-con">
        <a href="" class="friend"></a>
        <a href="" class="zone"></a>
        <a href="" class="weixin"></a>
        <a href="" class="qq"></a>
        <a href="" class="sina"></a>
      </div>
    </div>
    <!--home数据保持一致-->
    <div class="content">
      <div class="title">{{detail.title}}</div>
      <div class="con">
        <div class="price"><span>{{detail.price}}</span></div>
        <div class="p-pur">
          <a class="decrease">-</a>
          <em class="sy_num">0</em>
          <a class="increase">+</a>
        </div>
      </div>
    </div>
    <div class="con-num">
      <span class="con-num-l">规格</span>
      <span class="con-num-r">{{detail.num}}</span>
    </div>
    <a class="con-num" href="javascript:;">
      <span class="con-num-l">商品评价</span>
      <i class="am-icon-angle-right" style=" float:right; color: #b4b4b4;"></i>
      <span class="con-num-m">
		<p style="color: #b4b4b4;">97%的果友给了</p>
		<p style=" margin-top: 1px;">
			<img src="../assets/images/start.png"/>
			<img src="../assets/images/start.png"/>
			<img src="../assets/images/start.png"/>
			<img src="../assets/images/start.png"/>
			<img src="../assets/images/start.png"/>
		</p>
	</span>
    </a>
    <div class="con-relative">
      <div class="title">购买该产品的果友也买了</div>
      <ul class="am-gallery am-avg-sm-3 am-avg-md-3 am-avg-lg-3 am-gallery-default ">

        <!--v-for-->
        <li>
          <a href="">
            <img src="../assets/images/p1.jpg">
            <div class="am-gallery-desc">
              <p class="tit">南丰贡桔<span>12个装</span></p>
              <p class="yanse">￥<span>88</span></p>
            </div>
          </a>
        </li>
      </ul>
    </div>

    <div class="con-moretit"><img src="../assets/images/tit.png"></div>
    <div class="con-pic"><img src="../assets/images/test.jpg"></div>
    <div class="con-pic"><img src="../assets/images/test2.jpg"></div>

    <div class="shop-cart">
      <span><i class="am-icon-shopping-cart am-icon-sm"></i><p class="nums">1</p></span>
      <router-link to="/shopcar">加入购物车</router-link>
    </div>

  </div>
</template>

<style>
  .am-direction-nav {
    display: none;
  }

  body {
    background: #fff;
  }
</style>


<script>
  import slider from './slider.vue'

  export default {
    data() {
      return {
        detail: [],
//        slider:[]
      }
    },
    //生命周期挂载后->模板加载完毕后VUE接管
    mounted() {
      $('.am-slider').flexslider();
      $(function () {
        $(".share").click(function () {
          $(".share-con").fadeToggle()
        })
      })

    },

    created() {
      this.$http({
        url: '/data/index.json'
      }).then((res) => {
//        console.log(res.data[this.$route.params.id], this.$route.params)//no1,1
//this.$route.params.id-->home中路由传递过来的item.id={id:1}
        this.detail = res.data[this.$route.params.id];

      }).catch((res) => {
        console.log(res);
      })

      /*this.$http({
        url: '/data/slider.json',
      }).then((res) => {
        this.slider = res.data;
        console.log(res.data)
      }).catch((res) => {
        console.log(res);
      })*/
    },

    components: {
      slider
    }

  }
</script>
