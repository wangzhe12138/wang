<template>
  <div class="container">
       <Header-Own></Header-Own>
    <!-- 导航 -->
    <Banner-Own></Banner-Own>
    <div id="wrap">
      <Product-Own :message='dataAll1'></Product-Own>
      <div class="mitem" style="height:622px;overflow:hidden">
        <div class="title" id="zxyp">
          <span class="layer cur">
            <i class="l">1</i>
            <i class="r">F</i>
          </span>
          <h2>优选推荐</h2>
        </div>
        <div class="content clearfix">
          <div class="mleft zxyp">
            <div class="slide2">
              <el-carousel trigger="click" height="360px">
                <el-carousel-item v-for="(ele, inds) in lunbow" :key="inds">
                  <a class="a1" href="javascript:void(0)" :title="ele.title">
                    <img :src="ele.img" :alt="ele.title" />
                  </a>
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="pp clearfix">
              <a href="javascript:void(0) " class="f1" title=" ">
                <img src="@/assets/1 (7).png" alt=" " />
              </a>
              <a href="javascript:void(0) " title=" ">
                <img src="@/assets/1 (8).png" alt=" " />
              </a>
              <a href="javascript:void(0) " class="f1" title="   ">
                <img src="@/assets/1 (12).png" alt=" " />
              </a>
              <a href="javascript:void(0) " title=" ">
                <img src="@/assets/1 (9).png" alt=" " />
              </a>
              <a href="javascript:void(0) " class="f1 nb" title=" ">
                <img src="@/assets/1 (10).png" alt=" " />
              </a>
              <a href="javascript:void(0) " class="nb" title=" ">
                <img src="@/assets/1 (11).png" alt=" " />
              </a>
            </div>
          </div>
          <div class="mcenter2">
            <ul id="tab-catalog-323" class="hlist2 clearfix" style>
              <li class v-for="(ele, ind) in this.dataAll.salesgoods" :key="ind">
                <nuxt-link
                  :to="{ path: '/luyou', query: { item: ele.id } }"
                  :title="ele.goods_image"
                >
                  <img :src="ele.goods_image | msgFormat" :alt="ele.goods_image" />
                </nuxt-link>
                <nuxt-link
                  :to="{ path: '/luyou', query: { item: ele.id } }"
                  :title="ele.goods_image"
                  class="goods_name"
                >{{ ele.goods_name }}</nuxt-link>
                <p class="st">{{ ele.keyword }}</p>
                <p class="money">{{ ele.goods_price }}</p>
                <div class="gx"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mitem" style="height:622px;overflow:hidden">
        <div id="ysbj" class="title">
          <span class="layer cur">
            <i class="l">2</i>
            <i class="r">F</i>
          </span>
          <h2>名优企业</h2>
          <div class="snavs">
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="content clearfix">
          <div class="mleft ysbj">
            <div class="slide2">
              <el-carousel trigger="click" height="360px">
                <el-carousel-item v-for="(ele, inds) in this.lunbow1" :key="inds">
                  <a class="a1" href="javascript:void(0)" :title="ele.title">
                    <img :src="ele.img" :alt="ele.title" />
                  </a>
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="pp clearfix">
              <a href="javascript:void(0)" class="f1" title="汤恩倍健">
                <img src="@/assets/1 (1).png" alt="汤恩倍健医药网提供网上买药" />
              </a>
              <a href="javascript:void(0)/catalog-3-0-142-0-0-0-0-1-p1.html" title="养生堂">
                <img src="@/assets/1 (2).png" alt="养生堂医药网提供网上买药" />
              </a>
              <a
                href="javascript:void(0)/search.html?keyword=%E5%A4%AA%E5%A4%AA"
                class="f1"
                title="太太"
              >
                <img src="@/assets/1 (4).png" alt="太太网上药店（网上药房）" />
              </a>
              <a
                href="javascript:void(0)/search.html?keyword=%E7%BE%8E%E6%BE%B3%E5%81%A5"
                title="美澳健"
              >
                <img src="@/assets/1 (5).png" alt="美澳健网上药店（网上药房）" />
              </a>
              <a
                href="javascript:void(0)/search.html?keyword=%E5%8D%83%E6%9E%97"
                class="f1 nb"
                title="千林(TREERLY)"
              >
                <img src="@/assets/1 (6).png" alt="药房网商城供应千林(TREERLY)的各种药品" />
              </a>
              <a
                href="javascript:void(0)/search.html?keyword=%E5%90%88%E7%94%9F%E5%85%83"
                class="nb"
                title="合生元(BIOSTIME)"
              >
                <img src="@/assets/1 (3).png" alt="药房网商城供应合生元(BIOSTIME)的各种药品" />
              </a>
            </div>
          </div>
          <div class="mcenter2">
            <ul id="tab-catalog-46" class="hlist2 clearfix" style>
              <li class v-for="(ele, ind) in this.dataAll.recommendgoods" :key="ind">
                <nuxt-link
                  :to="{ path: '/luyou', query: { item: ele.id } }"
                  :title="ele.goods_name"
                >
                  <img :src="ele.goods_image | msgFormat" :alt="ele.goods_name" />
                </nuxt-link>
                <nuxt-link
                  :to="{ path: '/luyou', query: { item: ele.id } }"
                  class="txt"
                  :title="ele.goods_name"
                >{{ ele.goods_name }}</nuxt-link>
                <p class="st">{{ ele.keyword }}</p>
                <p
                  class="money"
                  style=" overflow: hidden; white-space: nowrap; text-overflow: ellipsis;"
                >{{ ele.goods_price }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="rcmnd-item" class="mitem" style="height: auto; opacity: 1; ">
        <div class="title">
          <div class="title-center">
            <div class="tc-txt">还没看够</div>
            <span class="tc-l-line"></span>
            <span class="tc-r-line"></span>
          </div>
        </div>
        <div class="content">
          <div class="rcmnd-prod">
            <div class="rp-item" v-for="(ele, inds) in this.dataAll.hotgoods" :key="inds">
              <nuxt-link :to="{ path: '/luyou', query: { item: ele.id } }" class="rpi-img">
                <img :src="ele.goods_image | msgFormat" :alt="ele.goods_name" />
              </nuxt-link>
              <a class="rpi-name">{{ ele.goods_name }}</a>
              <div class="rpi-st">{{ ele.keyword }}</div>
              <span class="rpi-money">{{ ele.goods_price }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="had" style="height:110px;">
        <a
          href="javascript:void(0)zt/xkzx.html"
          title="新人专享"
          style="position: relative; font-size: 0px;"
        >
          <img src="@/assets/lok.jpg" />
          <img
            src="//c1.yaofangwang.net/common/yaotu/images/gg.png"
            style="width:24px;height:14px;display:block;left:0;bottom:0;position:absolute;"
          />
        </a>
      </div>
      <div id="bot-lazy" class="newslist clearfix" style="height:276px;">
        <div class="news">
          <div class="title clearfix">
            <h4>最新资讯</h4>
            <a href="#/newpage">更多&gt;&gt;</a>
          </div>

          <div class="top">
            <div class="r">
              <nuxt-link
                :to="{ name: 'newdetails', query: { id: imgs.id } }"
                :title="imgs.title"
                class="t"
              >
                <b>[ 新闻热点 ]</b>
                {{ imgs.title }}
              </nuxt-link>
              <p class="txt">{{ imgs.keyword }}...</p>
            </div>
          </div>
          <ul class="n clearfix">
            <li v-for="(ele, ind) in this.dataed" :key="ind">
              <nuxt-link :to="{ name: 'newdetails', query: { id: ele.id } }" :title="ele.title">
                <b>[ 最新资讯 ]</b>
                {{ ele.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div class="news center" style="height:276px">
          <div class="title clearfix">
            <h4>阅读排行</h4>
            <a href="javascript:void(0)">更多&gt;&gt;</a>
          </div>
          <ul class="n clearfix">
            <li v-for="(ele, inds) in this.dataed1" :key="inds">
              <nuxt-link :to="{ name: 'newdetails', query: { id: ele.id } }" :title="ele.title">
                <i class="num t2" style="color:red">·</i>
                <b>[ 高热度 ]</b>
                {{ ele.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="news">
          <div class="title clearfix">
            <h4>最新评价</h4>
            <a href="#"></a>
          </div>
    
          <div class="pcontainer swiper-container1">
            <ul id="RollUL" class="swiper-wrapper" style="margin-top: -127.603px;">
              <li class="swiper-slide">
                <div class="item clearfix">
                  <div class="left">
                    <img src="//c1.yaofangwang.net/common/images/default/touxiang.png" alt="M***0" />

                    <p>M***0</p>
                  </div>
                  <div class="right">
                    <p class="txt">
                      物流快药品好
                      <i></i>
                    </p>
                  </div>
                </div>
              </li>
              <li class="swiper-slide">
                <div class="item clearfix">
                  <div class="left">
                    <img src="//c1.yaofangwang.net/common/images/default/touxiang.png" alt="M***0" />

                    <p>M***0</p>
                  </div>
                  <div class="right">
                    <p class="txt">
                      物流快药品好
                      <i></i>
                    </p>
                  </div>
                </div>
              </li>
              <li class="swiper-slide">
                <div class="item clearfix">
                  <div class="left">
                    <img src="//c1.yaofangwang.net/common/images/default/touxiang.png" alt="m***2" />

                    <p>m***2</p>
                  </div>
                  <div class="right">
                    <p class="txt">
                      商家不诚心，发的是要过期了的，态度很不好
                      <i></i>
                    </p>
                  </div>
                </div>
              </li>
              <li class="swiper-slide">
                <div class="item clearfix">
                  <div class="left">
                    <img src="//c1.yaofangwang.net/common/images/default/touxiang.png" alt="M***8" />
                    <p>M***8</p>
                  </div>
                  <div class="right">
                    <p class="txt">
                      收到了，非常好！
                      <i></i>
                    </p>
                  </div>
                </div>
              </li>
              <li class="swiper-slide">
                <div class="item clearfix">
                  <div class="left">
                    <img src="//c1.yaofangwang.net/common/images/default/touxiang.png" alt="M***8" />

                    <p>M***8</p>
                  </div>
                  <div class="right">
                    <p class="txt">
                      收到了，非常好！
                      <i></i>
                    </p>
                  </div>
                </div>
              </li>
              <li class="swiper-slide">
                <div class="item clearfix">
                  <div class="left">
                    <img src="//c1.yaofangwang.net/common/images/default/touxiang.png" alt="M***5" />

                    <p>M***5</p>
                  </div>
                  <div class="right">
                    <p class="txt">
                      非常好，才11块钱的东西,还免费邮寄，极力推荐。
                      <i></i>
                    </p>
                  </div>
                </div>
              </li>
              <li class="swiper-slide">
                <div class="item clearfix">
                  <div class="left">
                    <img
                      src="//c1.yaofangwang.net/18/1618/aeaed9714d2f572311537b9db5d402cd.jpg"
                      alt="M***1"
                    />

                    <p>M***1</p>
                  </div>
                  <div class="right">
                    <p class="txt">
                      发货快，挺好的。
                      <i></i>
                    </p>
                  </div>
                </div>
              </li>
              <li class="swiper-slide">
                <div class="item clearfix">
                  <div class="left">
                    <img src="//c1.yaofangwang.net/common/images/default/touxiang.png" alt="j***8" />

                    <p>j***8</p>
                  </div>
                  <div class="right">
                    <p class="txt">
                      必须好评！
                      <i></i>
                    </p>
                  </div>
                </div>
              </li>
              <li class="swiper-slide">
                <div class="item clearfix">
                  <div class="left">
                    <img src="//c1.yaofangwang.net/common/images/default/touxiang.png" alt="M***7" />
                    <p>M***7</p>
                  </div>
                  <div class="right">
                    <p class="txt">
                      我要发票了，但是没有给我，不知道是什么情况
                      <i></i>
                    </p>
                  </div>
                </div>
              </li>
              <li class="swiper-slide">
                <div class="item clearfix">
                  <div class="left">
                    <img
                      src="//c1.yaofangwang.net/19/2893/4f8370c1607ab0021ad3c6caec162a9d.jpg"
                      alt="M***9"
                    />
                    <p>M***9</p>
                  </div>
                  <div class="right">
                    <p class="txt">
                      店家服务好，物流快，给贵店五星好评！
                      <i></i>
                    </p>
                  </div>
                </div>
              </li>
              <li class="swiper-slide">
                <div class="item clearfix">
                  <div class="left">
                    <img src="//c1.yaofangwang.net/common/images/default/touxiang.png" alt="a***2" />

                    <p>a***2</p>
                  </div>
                  <div class="right">
                    <p class="txt">
                      物流很快商家服务一流
                      <i></i>
                    </p>
                  </div>
                </div>
              </li>
              <li class="swiper-slide">
                <div class="item clearfix">
                  <div class="left">
                    <img src="//c1.yaofangwang.net/common/images/default/touxiang.png" alt="m***3" />
                    <p>m***3</p>
                  </div>
                  <div class="right">
                    <p class="txt">
                      还不错的，而且实惠
                      <i></i>
                    </p>
                  </div>
                </div>
              </li>
              <li class="swiper-slide">
                <div class="item clearfix">
                  <div class="left">
                    <img src="//c1.yaofangwang.net/common/images/default/touxiang.png" alt="m***3" />
                    <p>m***3</p>
                  </div>
                  <div class="right">
                    <p class="txt">
                      黄的的维A酸效果特别好，用了三天痘痘就消了很多。用蓝色的维A酸一周都没啥效果
                      <i></i>
                    </p>
                  </div>
                </div>
              </li>
              <li class="swiper-slide">
                <div class="item clearfix">
                  <div class="left">
                    <img src="//c1.yaofangwang.net/common/images/default/touxiang.png" alt="M***7" />
                    <p>M***7</p>
                  </div>
                  <div class="right">
                    <p class="txt">
                      申通快递就是垃圾
                      <i></i>
                    </p>
                  </div>
                </div>
              </li>
              <li class="swiper-slide">
                <div class="item clearfix">
                  <div class="left">
                    <img src="//c1.yaofangwang.net/common/images/default/touxiang.png" alt="M***6" />
                    <p>M***6</p>
                  </div>
                  <div class="right">
                    <p class="txt">盒都湿，不知道哪里投诉</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer-Own></Footer-Own>
  </div>
</template>
<script>
import FooterOwn from "~/components/FooterOwn"
import HeaderOwn from "~/components/NewHeader";
import BannerOwn from "~/components/banner";
import ProductOwn from "~/components/product";
export default {
  data() {
    return {
      lunbo: [],
      dataAll1: [],
      fenlei: [],
      dataAll: [],
      imgs: {},
      types: [],
      tuijian: [],
      dataed: [],
      dataed1: [],
      index: 10,
      idsed: "",
      lunbow: [
        { img: require("~/assets/1.1.jpg"), title: "图片1" },
        { img: require("~/assets/1.2.jpg"), title: "图片2" },
        { img: require("~/assets/1.3.jpg"), title: "图片3" },
      ],
      lunbow1: [
        { img: require("~/assets/2.1.jpg"), title: "图片1" },
        { img: require("~/assets/2.2jpg.jpg"), title: "图片2" },
        { img: require("~/assets/2.jpg"), title: "图片3" },
      ],
    };
  },
  components:{
    FooterOwn,
    HeaderOwn,
    BannerOwn,
    ProductOwn
  },
   async asyncData(){}
};
</script>

<style scoped>
.newslist .news.center {
  margin: 0 20px;
}
.header .container1 {
  position: relative;
  margin: 0 auto 0;
  width: 1200px !important;
  height: 140px;
}
.header-img {
  position: absolute;
  right: 0;
  top: 50px;
  width: 180px;
  height: 330px;
  font-size: 0;
  /* display: none; */
}
.nav2 .container {
  position: relative;
  margin: 0 auto 0;
  width: 1190px;
  height: 50px;
}
.catlist .subcat .sitems li .bit {
  background: #0cb95f;
  color: #fff;
  float: none;
  height: 20px;
  line-height: 20px;
  left: 0;
  padding: 0;
  position: absolute;
  top: 9px;
  width: 73px;
  padding-left: 5px;
  color: #fff;
  text-decoration: none;
  text-align: left;
}
.catlist .subcat .sitems li .bit i {
  background-image: url(../assets//icons.png);
  /* _background-image: url(/common/images/icons.jpg); */
  background-position: -14px -21px;
  right: 3px;
  top: 0;
  position: absolute;
  height: 20px;
  width: 14px;
}

#wrap,
.wrap {
  margin: 0 auto;
  width: 1190px;
  text-align: left;
}
.xsqg {
  font-size: 0;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  margin-bottom: 20px;
}
.xsqg .ic.ic-xs {
  background-position: -100px -5px;
  width: 45px;
  height: 27px;
  vertical-align: middle;
}
.xsqg .ic {
  background: transparent url(../assets/xianshi.png) no-repeat 0 0;
  display: inline-block;
  *display: inline;
  *zoom: 1;
}
.xsqg .h2 .tit {
  font-size: 20px;
  margin: 0 10px;
  vertical-align: middle;
}
.xsqg .cont {
  border: 1px solid #e4e4e4;
  height: 302px;
  letter-spacing: -4px;
  text-align: left;
}
.xsqg .cont .item {
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 19.999%;
  letter-spacing: 0;
  height: 100%;
  *display: inline;
  *zoom: 1;
  overflow: hidden;
}
.xsqg .cont .item {
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 19.999%;
  letter-spacing: 0;
  height: 100%;
  *display: inline;
  *zoom: 1;
  overflow: hidden;
}
.xsqg .h2 {
  margin-bottom: 10px;
}

.xsqg .cont .item .img {
  display: block;
  height: 190px;
  width: 190px;
  margin-top: 18px;
  position: relative;
}
.xsqg .cont .item .name {
  font-size: 14px;
  color: #000;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 28px;
  display: block;
}
.xsqg .cont .item .st {
  color: #999;
  display: block;
  height: 20px;
  line-height: 20px;
  overflow: hidden;
  font-size: 12px;
  margin: 0 18px 5px;
}
.xsqg .cont .item .name,
.xsqg .cont .item .price {
  margin: 0 18px;
}
.xsqg .cont .item .price {
  color: #e50000;
  font-size: 16px;
}
.xsqg .cont .item .name,
.xsqg .cont .item .price {
  margin: 0 18px;
}
.xsqg .cont .item .price {
  color: #e50000;
  font-size: 16px;
}
.mitem .title .layer {
  float: left;
  margin: 8px 0;
}
.mitem .title .layer i {
  float: left;
  display: block;
  width: 22px;
  height: 24px;
  line-height: 24px;
  color: #fff;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
}
.mitem .title .layer.cur i {
  background: #046ad6;
}
.mitem .title .layer i.l {
  text-align: right;
  padding-right: 4px;
  border-bottom-left-radius: 13px;
  border-top-left-radius: 13px;
}
.mitem .title .layer i.r {
  text-align: left;
  padding-left: 4px;
  border-bottom-right-radius: 13px;
  border-top-right-radius: 13px;
  margin-left: 2px;
}
.mitem h2 {
  float: left;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  font-size: 20px;
  padding-left: 10px;
  height: 40px;
  line-height: 40px;
}
.mitem .content .pp {
  border: 1px solid #e5e5e5;
  width: 298px;
}
.mitem .content .pp a.f1 {
  border-right: 1px solid #e5e5e5;
  width: 148px;
  border-left: 1px solid #e5e5e5;
  box-sizing: border-box;
}
.mitem .content .pp a {
  display: block;
  float: left;
  width: 149px;
  height: 71px;
  border-bottom: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
}

.mitem .content .pp a img {
  width: 140px;
  height: 60px;
  margin: 5px 0 0 3px;
}
.mitem .content .pp a {
  display: block;
  float: left;
  width: 149px;
  height: 71px;
  border-bottom: 1px solid #e5e5e5;
}
.mitem .snavs {
  float: right;
  height: 14px;
  margin: 16px 0 9px;
}
.mitem .snavs a {
  display: block;
  height: 20px;
  line-height: 20px;
  padding: 0 4px;
  float: right;
  margin-bottom: 10px;
  text-decoration: none;
  font-size: 14px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  *width: 100px;
  text-align: center;
}
.mitem .snavs label {
  float: right;
  display: block;
  margin: 0 5px;
  height: 14px;
  line-height: 14px;
  margin: 3px 8px;
  color: #ccc;
}
.mitem .snavs a i {
  background-image: url(../assets/icons.png);
  width: 9px;
  height: 6px;
  background-position: -406px -32px;
  /* display: none; */
}
.mitem .snavs a.cur {
  background: #0cb95f;
  color: #fff;
  text-decoration: none;
}
.mitem .snavs a.cur i {
  display: block;
}
.clearfix {
  clear: both;
  zoom: 1;
}
.mitem .content .mleft {
  width: 300px;
  float: left;
  position: relative;
}
.slide2 {
  position: relative;
}
.mitem .content .pp {
  border: 1px solid #e5e5e5;
  width: 298px;
}
.mitem .addiv1 {
  height: 360px;
  width: 300px;
  overflow: hidden;
}
.mitem .addiv1 li {
  float: left;
  position: absolute;
  cursor: pointer;
}
.mitem .content .addiv1 .a1 {
  display: block;
  height: 360px;
  width: 300px;
}
.mitem .content .addiv1 .a1 img {
  width: 300px;
  height: 360px;
}
.slide2 .nextprev2 {
  position: absolute;
  width: 300px;
  left: 0;
  top: 150px;
  height: 60px;
}
.slide2 .nextprev2 a.left1 {
  background-position: -348px -138px;
  left: 0;
}
.slide2 .nextprev2 a.ar {
  background-image: url(../assets/icons.png);
  display: block;
  height: 60px;
  position: absolute;
  top: 0;
  width: 30px;
}
.slide2 .nextprev2 a.right1 {
  background-position: -382px -138px;
  right: 0;
}
.mitem .content .mcenter2 {
  width: 890px;
  float: left;
  border-top: 1px solid #e5e5e5;
}
.clearfix {
  clear: both;
  zoom: 1;
}
.mitem .hlist2 li {
  float: left;
  height: 267px;
  width: 185px;
  border-bottom: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  padding: 10px 18px 10px 18px;
  position: relative;
}
.mitem .hlist2 li .photo {
  display: block;
  text-align: center;
}
.mitem .hlist2 li img {
  height: 174px;
  width: 100%;
  transition: transform 0.2s linear 0s;
}
.mitem .hlist2 li .txt {
  display: block;
  height: 20px;
  line-height: 20px;
  margin: 15px 0 0;
  overflow: hidden;
}
.mitem .hlist2 li .st {
  color: #999;
  display: block;
  height: 20px;
  line-height: 20px;
  margin: 5px 0;
  overflow: hidden;
}
.mitem .hlist2 li .money {
  font-size: 14px;
  text-align: left;
}
.money {
  color: #e50000;
  font-style: normal;
  font-family: Arial;
}
.mitem .hlist2 li .gx {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 40px;
  text-align: left;
  background: #000;
  opacity: 0.65;
  color: #fff;
  line-height: 20px;
  padding: 10px;
  width: 202px;
  display: none;
}
.mitem .title {
  /* height: 40px; */
  line-height: 40px;
  margin-bottom: 5px;
}
.mitem .title-center .tc-txt {
  font-size: 20px;
  font-family: "微软雅黑";
  text-align: center;
  color: #333;
  text-align: center;
}
.mitem .title-center .tc-l-line {
  left: 50%;
  top: 50%;
  margin-top: -0.5px;
  margin-left: -93px;
}
.mitem .title-center .tc-l-line,
.mitem .title-center .tc-r-line {
  position: absolute;
  display: block;
  height: 0;
  width: 46px;
  border-bottom: 1px solid #ccc;
}
.mitem .title-center {
  position: relative;
}
.mitem .title-center .tc-r-line {
  left: 50%;
  top: 50%;
  margin-top: -0.5px;
  margin-left: 47px;
}
.mitem .rcmnd-prod {
  display: inline-block;
  *display: inline;
  margin: 10px -5px 16px;
  font-size: 0;
}
.mitem .rcmnd-prod .rp-item {
  width: 228px;
  float: left;
  border: 1px solid #e5e5e5;
  padding-bottom: 20px;
  margin: 0 5px 12px;
  *margin: 0 4px 12px;
}
.mitem .rcmnd-prod .rpi-img {
  display: block;
  text-align: center;
  margin: 30px 0 34px;
}
.mitem .rcmnd-prod .rpi-name {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.mitem .rcmnd-prod .rpi-st {
  color: #999;
  display: block;
  height: 20px;
  line-height: 20px;
  margin: 5px 0;
  overflow: hidden;
  font-size: 12px;
  text-align: center;
}
.mitem .rcmnd-prod .rpi-img img {
  width: 170px;
  height: 170px;
  transition: transform 0.2s linear 0s;
}
.mitem .rcmnd-prod .rpi-name {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.mitem .rcmnd-prod .rpi-name {
  display: block;
  text-align: center;
  line-height: 24px;
  font-size: 14px;
  color: #333;
  font-family: "微软雅黑";
}
.mitem .rcmnd-prod .rpi-money {
  display: block;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  font-family: Arial;
  color: #e50000;
}
.elevator {
  position: fixed;
  left: 0;
  top: 233px;
  background: #fff;
  width: 40px;
  z-index: 9997;
  border: 1px solid #e5e5e5;
  display: none;
  -webkit-transform: translateZ(0);
}
.elevator li {
  display: block;
  background: #fff;
  border-bottom: 1px solid #e5e5e5;
  height: 78px;
  width: 40px;
  list-style: none;
}
.elevator li a {
  display: block;
  height: 78px;
  width: 40px;
  position: relative;
}
.elevator li a i.l1 {
  background-position: -172px -371px;
}
.elevator li a i {
  background-image: url(../assets/icons.png);
  display: block;
  height: 24px;
  width: 20px;
  position: absolute;
  top: 9px;
  left: 10px;
}
.elevator li a span {
  color: #999;
  text-align: center;
  display: block;
  font-size: 12px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  position: absolute;
  bottom: 10px;
  left: 0;
  line-height: 16px;
  padding: 0 6px;
}
.elevator li a i.l2 {
  background-position: -188px -371px;
}
.elevator li a i.l3 {
  background-position: -206px -371px;
}
.elevator li a i.l4 {
  background-position: -228px -371px;
}
.elevator li a i.l5 {
  background-position: -251px -371px;
}
.elevator li a i.l6 {
  background-position: -276px -371px;
}
.elevator li a:hover,
.elevator li a.cur {
  background: #0cb95f;
}
.elevator li a:hover i.l2 {
  background-position: -188px -396px;
}
.elevator li a:hover i.l3 {
  background-position: -206px -396px;
}
.elevator li a:hover i.l4 {
  background-position: -228px -396px;
}
.elevator li a:hover span {
  color: white;
}
.elevator li a:hover i.l5 {
  background-position: -251px -396px;
}
.elevator li a:hover i.l6 {
  background-position: -276px -396px;
}
.elevator li a:hover i.l6 {
  background-position: -276px -396px;
}
.elevator li a:hover i.l1 {
  background-position: -172px -396px;
}
.mitem .hlist2 li img:hover {
  transform: translateX(-8px);
}
.mitem .rcmnd-prod .rpi-img img:hover {
  transform: translateX(-8px);
}
.newslist .news {
  width: 381px;
  border: 1px solid #e5e5e5;
  float: left;
  height: 100%;
}
.newslist .news .title {
  line-height: 40px;
  background: #f4f4f4;
  border-bottom: 1px solid #e5e5e5;
  padding-left: 20px;
  overflow: hidden;
}
.newslist .news .title h4 {
  font-family: "\5FAE\8F6F\96C5\9ED1";
  font-size: 14px;
  float: left;
  width: 100px;
  font-weight: normal;
  color: #666;
}
.newslist .news .title a {
  float: right;
  color: #999;
  width: 50px;
  display: block;
}
.newslist .news .top {
  /* height: 92px; */
  padding-top: 8px;
  padding-bottom: 6px;
}
.newslist .news .top .r {
  padding: 10px 10px 0 17px;
}
.newslist .news .top .r .t {
  display: block;
  height: 16px;
  line-height: 16px;
  margin-left: 0;
  margin-right: 0;
  margin-top: 5px;
  overflow: hidden;
  font-weight: bold;
}
.newslist .news .top .r .txt {
  line-height: 20px;
  color: #666;
  margin-top: 10px;
}
.newslist .news ul.n {
  padding: 5px 17px 10px;
}
.newslist .news ul.n li {
  line-height: 28px;
  white-space: nowrap;
  overflow: hidden;
}
.newslist .news ul.n li a {
  color: #666;
}
.newslist .news ul.p li {
  color: #666;
  clear: both;
  display: block;
  overflow: hidden;
  width: 360px;
  height: 113px;
  overflow: hidden;
}
.newslist .news ul.p .right {
  display: inline;
  float: left;
  margin-left: 20px;
  width: 276px;
  position: relative;
}
.newslist .news ul.p .left {
  display: inline;
  float: left;
  width: 50px;
}
.newslist .news ul.p .left p {
  text-align: center;
}

.newslist .news ul.p p.txt {
  background: #f4f4f4;
  padding: 5px 15px;
  height: 48px;
}
.newslist .news .pcontainer {
  height: 233px;
  overflow: hidden;
  position: relative;
  clear: both;
}
.newslist .news ul.p .left img {
  border: 1px solid #f4f4f4;
  border-radius: 50px;
  height: 50px;
  width: 50px;
}
.left img {
  width: 52px;
  height: 52px;
  border-radius: 50%;
}
.newslist .news .right p.txt {
  background: #f4f4f4;
  padding: 5px 15px;
  height: 48px;
}
.newslist .item .right {
  float: left;
  width: 256px;
  margin-left: 5px;
}
.newslist .item .left {
  float: left;
}
.newslist .item {
  padding: 0 15px;
}
.newslist .item .left {
  text-align: center;
}
.title {
}
</style>
