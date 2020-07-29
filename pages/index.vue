<template>
  <div class="container">
    <div id="wrap">
      <!-- <Product-Own :message='dataAll1'></Product-Own> -->
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
      <div id="rcmnd-item" class="mitem" style="height: auto; opacity: 1; " >
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
  </div>
</template>

<script>
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
      idsed: '',
      lunbow: [
        { img: require('~/assets/1.1.jpg'), title: '图片1' },
        { img: require('~/assets/1.2.jpg'), title: '图片2' },
        { img: require('~/assets/1.3.jpg'), title: '图片3' }
      ],
      lunbow1: [
        { img: require('~/assets/2.1.jpg'), title: '图片1' },
        { img: require('~/assets/2.2jpg.jpg'), title: '图片2' },
        { img: require('~/assets/2.jpg'), title: '图片3' }
      ]
    }
  }
}
</script>

<style scoped>
a {
  color: #333;
  text-decoration: none;
}
.goods_name {
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
}
a:hover,
a:active {
  color: #0cb95f;
  text-decoration: underline;
}

a:focus {
  outline: 0;
  -moz-outline: 0;
}

.nones {
  display: none;
}
.block {
  display: block !important;
}

ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.b20px {
  clear: both;
  height: 20px;
  font-size: 1px;
  line-height: 1px;
}

.obtn {
  float: left;
  display: block;
  padding: 5px 30px;
  border: 1px solid #0cb95f;
  background: #0cb95f;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  cursor: pointer;
}

a.ibtn1 {
  float: left;
  display: block;
  padding: 7px 22px;
  border: 1px solid #e50000;
  background: #e50000;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
}

a.ibtn1:hover {
  color: #fff;
}

a.ibtn2 {
  float: left;
  display: block;
  padding: 7px 22px;
  border: 1px solid #e50000;
  background: #fff;
  color: #e50000;
  text-align: center;
  font-size: 18px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
}

a.ibtn2:hover {
  color: #e50000;
}

a.ibtn3 {
  float: left;
  display: block;
  padding: 7px 22px;
  border: 1px solid #0cb95f;
  background: #fff;
  color: #0cb95f;
  text-align: center;
  font-size: 18px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
}

a.ibtn4 {
  float: left;
  display: block;
  padding: 7px 22px;
  border: 1px solid #e5e5e5;
  background: #f4f4f4;
  color: #999;
  text-align: center;
  font-size: 18px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
}

a.ibtn4:hover {
  color: #999;
  text-decoration: none;
}

a.ibtn1:hover,
a.ibtn2:hover,
a.ibtn3:hover {
  text-decoration: none;
}

a.ibtn1.dis {
  border: 1px solid #999;
  background: #999;
}

a.ibtn2.dis {
  border: 1px solid #999;
  color: #999;
}

a.ibtn3.dis {
  border: 1px solid #999;
  color: #999;
}

a.btn {
  display: block;
  background: #e50000;
  color: #fff;
  text-align: center;
}

a.btn:hover {
  text-decoration: none;
}

a.btn.b1 {
  padding: 0 11px;
  width: 48px;
  height: 24px;
  line-height: 24px;
}

a.btn.b2 {
  width: 120px;
  height: 60px;
  text-align: center;
  line-height: 60px;
}

a.btn.dis {
  background: #f4f4f4;
  color: #999;
}

a.btn2 {
  display: block;
  background: #0cb95f;
  color: #fff;
  text-align: center;
}

a.btn2:hover {
  text-decoration: none;
  color: #fff;
}

a.btn2.b1 {
  padding: 0 6px;
  width: 48px;
  height: 24px;
  line-height: 24px;
}

a.btn2.b2 {
  height: 48px;
  font-size: 18px;
  line-height: 48px;
  _height: 48px;
  font-size: 18px;
  _line-height: 48px;
}

a.btn6 {
  display: block;
  height: 24px;
  border: 1px solid #0cb95f;
  background: #fff;
  color: #0cb95f;
  text-align: center;
  line-height: 24px;
}

a.btn6:hover {
  text-decoration: none;
}

a.btn7 {
  display: block;
  height: 24px;
  border: 1px solid #e50000;
  background: #e50000;
  color: #fff;
  text-align: center;
  line-height: 24px;
}

a.btn7:hover {
  text-decoration: none;
}

a.btn3 {
  display: block;
  background: #0cb95f;
  color: #fff;
  text-align: center;
  white-space: nowrap;
}

a.btn3:hover {
  text-decoration: none;
}

a.btn3.b1 {
  padding: 0 15px;
  height: 30px;
  line-height: 30px;
}

a.btn3.b1.dis {
  background: #f4f4f4;
  border: #e5e5e5;
  color: #999;
}

a.btn3.b2 {
  padding: 0 30px;
  height: 30px;
  line-height: 30px;
}

a.btn4 {
  display: block;
  border: 1px solid #ddd;
  background: #fff;
  color: #666;
  text-align: center;
}

a.btn4:hover {
  text-decoration: none;
}

a.btn4.b1 {
  padding: 0 15px;
  height: 28px;
  line-height: 30px;
}

a.btn5 {
  display: block;
  border: 0;
  background: #0cb95f;
  color: #fff;
  text-align: center;
}

a.btn5:hover {
  text-decoration: none;
}

a.btn5.b1 {
  padding: 0 5px;
  height: 24px;
  line-height: 24px;
}

a.btn8 {
  display: block;
  background: #e5e5e5;
  color: #999;
  text-align: center;
  white-space: nowrap;
}

a.btn8:hover {
  text-decoration: none;
}

a.btn8.b1 {
  padding: 0 15px;
  height: 30px;
  line-height: 30px;
}

a.btn8.b2 {
  padding: 0;
  height: 48px;
  line-height: 48px;
}

a.btn9 {
  display: block;
  color: #999;
  background: #f4f4f4;
  text-align: center;
  border: 1px solid #e5e5e5;
  padding: 0 20px;
  margin-left: 5px;
}

a.btn9:hover {
  text-decoration: none;
}

a.btn10 {
  display: block;
  background: #e50000;
  color: #fff;
  text-align: center;
  padding: 0 6px;
  width: 48px;
  height: 24px;
  line-height: 24px;
}

a.btn10:hover {
  text-decoration: none;
  color: #fff;
}

a.btn11 {
  display: block;
  color: #f90;
  background: #fff;
  text-align: center;
  border: 1px solid #e5e5e5;
  padding: 0 20px;
  margin-left: 5px;
}

a.btn11:hover {
  text-decoration: none;
}

a.sbtn1 {
  display: block;
  border: 0;
  background: #0cb95f;
  color: #fff;
  text-align: center;
  padding: 6px 20px;
  border: 1px solid #0cb95f;
}

a.sbtn1:hover {
  text-decoration: none;
  color: #fff;
}

a.sbtn2 {
  display: block;
  border: 0;
  background: #fff;
  color: #0cb95f;
  text-align: center;
  padding: 6px 20px;
  border: 1px solid #0cb95f;
}

a.sbtn2:hover {
  text-decoration: none;
  color: #0cb95f;
}

a.sbtn3 {
  display: block;
  border: 0;
  background: #e50000;
  color: #fff;
  text-align: center;
  padding: 6px 20px;
  border: 1px solid #e50000;
}

a.sbtn3:hover {
  text-decoration: none;
  color: #fff;
}

a.sbtn4 {
  display: block;
  border: 0;
  background: #f4f4f4;
  color: #999;
  text-align: center;
  padding: 6px 20px;
  border: 1px solid #e5e5e5;
}

a.sbtn4:hover {
  text-decoration: none;
  color: #999;
}

a.sbtnicon {
  display: block;
  border: 0;
  background: #0cb95f;
  color: #fff;
  text-align: center;
  padding: 0 10px 0 35px;
  border: 1px solid #0cb95f;
  position: relative;
  height: 30px;
  line-height: 30px;
  float: left;
}

a.sbtnicon:hover {
  color: #fff;
}

a.sbtnicon i.kf {
  background-position: -446px -114px;
  display: block;
  height: 18px;
  left: 10px;
  position: absolute;
  top: 5px;
  width: 18px;
}

a.sbtnicon:hover {
  text-decoration: none;
}

.ra {
  display: block;
  width: 16px;
  height: 16px;
  background-position: -79px -25px;
  vertical-align: middle;
  position: relative;
  background-image: lo("/common/images/icons.png");
  _background-image: lo("/common/images/icons.jpg");
}

.ra .checked {
  display: block;
  width: 16px;
  height: 16px;
  background-position: -98px -25px;
  position: absolute;
  left: 0;
  top: 0;
  background-image: lo("/common/images/icons.png");
  _background-image: lo("/common/images/icons.jpg");
}

.ck {
  display: block;
  width: 16px;
  height: 16px;
  background-position: -41px -25px;
  vertical-align: middle;
  position: relative;
  background-image: lo("/common/images/icons.png");
  _background-image: lo("/common/images/icons.jpg");
}

.ck .checked {
  display: block;
  width: 16px;
  height: 16px;
  background-position: -60px -25px;
  position: absolute;
  left: 0;
  top: 0;
  background-image: lo("/common/images/icons.png");
  _background-image: lo("/common/images/icons.jpg");
}

.tip {
  position: absolute;
  z-index: 1001;
  display: block;
  padding: 0 5px;
  border: 1px solid #ccc;
  background: #fff;
}

.tip i {
  position: absolute;
  top: -8px;
  left: 22px;
  display: block;
  width: 11px;
  height: 9px;
  background-position: -308px -3px;
}

.footer .copyright {
  padding: 20px 0;
  background: #444a50;
  color: #959aa0;
}

.footer .copyright p {
  padding: 8px 0;
  color: #959aa0;
}

.footer .copyright p .mr {
  margin-right: 18px;
}

.footer .copyright p.white a {
  color: #dee5ea;
}

.footer .copyright p a {
  padding: 0 10px;
  color: #959aa0;
}

.footer .copyright p a.first {
  padding-left: 0;
}

.footer .copyright p.copy {
  font-family: Tahoma, Helvetica, Arial, sans-serif;
}

.footer .copyright .cert {
  margin-top: 10px;
}

.footer .copyright .icon {
  float: left;
  margin-right: 10px;
  width: 100px;
  height: 40px;
  background: lo("/common/images/icon_rz.gif");
  line-height: 40px;
}

.footer .copyright p.font {
  margin-top: 5px;
}

.footer .copyright p.zz span {
  display: block;
  float: left;
  height: 20px;
  line-height: 20px;
}

.footer .copyright p.zz span.gaba img {
  float: left;
  display: block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

.footer .copyright p.zz span.gaba a {
  float: left;
  display: block;
  padding-left: 3px;
  line-height: 20px;
  height: 20px;
}

.catlist .subcat .rmpp .pp a.last {
  margin-right: 0;
}

.catlist .subcat .rmpp .pp a img {
  height: 40px;
  width: 80px;
}

.catlist .subcat .rmpp .adout a {
  display: block;
  border: 1px solid #e5e5e5;
  width: 166px;
  height: 120px;
  margin: 5px 0 9px;
}

.catlist .subcat .rmpp .adout img {
  width: 166px;
  height: 120px;
}

.catlist .subcat .rmpp .tj {
  border: 1px solid #eaeaea;
  margin-bottom: 15px;
}

.catlist .subcat .rmpp .tj h6 {
  background: #fff none repeat scroll 0 0;
  border-bottom: 1px dotted #eaeaea;
  color: #666;
  display: block;
  font-size: 12px;
  padding: 8px 10px 8px 14px;
  text-align: left;
  font-weight: bold;
}

.catlist .subcat .rmpp .tj ul {
  background: #fff;
  padding: 5px 10px;
}

.catlist .subcat .rmpp .tj ul li {
  float: left;
  height: 28px;
  line-height: 28px;
  background-image: lo("/common/images/icons.png");
  background-position: -490px -260px;
  background-repeat: no-repeat;
  color: #999;
  padding-left: 18px;
}

.catlist .subcat .rmpp .tj ul li.hover {
  background-position: -490px -349px;
}

.catlist .subcat .rmpp .tj ul li.last {
  border-bottom: 0;
}

.catlist .subcat .rmpp .tj ul li a {
  display: block;
  height: 28px;
  line-height: 28px;
  overflow: hidden;
  white-space: nowrap;
  width: 131px;
  color: #666;
  float: left;
}

.catlist .subcat .rmpp .tj ul li a:hover {
  color: #0cb95f;
}

.tabnav {
  height: 50px;
  border-bottom: 1px solid #0cb95f;
  line-height: 50px;
  background: #fff;
  min-width: 500px;
}

.tabnav.fw {
  width: 950px;
}

.tabnav.fw .navul {
  width: 100%;
}

.tabnav .navul {
  float: left;
}

.tabnav .navul li {
  float: left;
  margin-right: 1px;
}

.tabnav .navul li a {
  height: 50px;
  line-height: 50px;
  position: relative;
  display: block;
  padding: 0 25px;
  background: #f7f7f7;
  text-decoration: none;
  font-size: 14px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  text-align: center;
  float: left;
}

.tabnav .navul li a:hover {
  background: #0cb95f;
  color: #fff;
}

.tabnav .navul li a.cur {
  background: #0cb95f;
  color: #fff;
  border-color: #0cb95f;
}

.tabnav .navul li a label {
  color: #080;
}

.tabnav .navul li a.cur label {
  color: #fff;
}

.tabnav .navul li span.cur {
  color: #fc551b;
  padding-left: 10px;
}

.tabnav .navul li a:hover label {
  color: #fff;
}

.tabnav.small {
  height: 40px;
  line-height: 40px;
}

.tabnav.small .navul li a {
  padding: 0 30px;
  height: 40px;
  line-height: 40px;
}

.tabnav.small span.count {
  color: #999;
  float: right;
  padding-right: 10px;
}

.tabnav.small span.count b {
  color: #333;
  padding: 0 5px;
}

.tabnav2 {
  border-bottom: 1px solid #e5e5e5;
}

.tabnav2 .navul {
  height: 49px;
  background: #fff;
}

.tabnav2 .navul li {
  position: relative;
  float: left;
  width: 238px;
  height: 49px;
  text-align: center;
  line-height: 30px;
}

.tabnav2 .navul li a {
  position: relative;
  display: block;
  border-bottom: 1px solid #e5e5e5;
  text-decoration: none;
  font-size: 18px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  line-height: 49px;
}

.tabnav2 .navul li a.cur,
.tabnav2 .navul li a:hover {
  height: 49px;
  border-bottom: 1px solid #0cb95f;
  background: #fff;
  color: #0cb95f;
  line-height: 49px;
}

.tabnav2 .navul li a i {
  position: absolute;
  bottom: -1px;
  left: 115px;
  display: none;
  width: 10px;
  height: 6px;
  background-image: lo("/common/images/icons.png");
  background-position: -156px -4px;
}

.tabnav2 .navul li a.cur i,
.tabnav2 .navul li a:hover i {
  display: block;
}

.tabnav2small {
  border-bottom: 1px solid #e5e5e5;
}

.tabnav2small .navul {
  height: 49px;
  background: #fff;
}

.tabnav2small .navul li {
  position: relative;
  float: left;
  width: 238px;
  height: 49px;
  text-align: center;
  line-height: 30px;
}

.tabnav2small .navul li a {
  position: relative;
  display: block;
  border-bottom: 1px solid #e5e5e5;
  text-decoration: none;
  font-size: 18px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  line-height: 49px;
}

.tabnav2small .navul li a.cur,
.tabnav2 .navul li a:hover {
  height: 49px;
  border-bottom: 1px solid #0cb95f;
  background: #fff;
  color: #0cb95f;
  line-height: 49px;
}

.tabnav2small .navul li a i {
  position: absolute;
  bottom: -1px;
  left: 70px;
  display: none;
  width: 10px;
  height: 6px;
  background-image: lo("/common/images/icons.png");
  background-position: -156px -4px;
}

.tabnav2small .navul li a.cur i,
.tabnav2 .navul li a:hover i {
  display: block;
}

.tabnav3 {
  position: relative;
  border: 0;
}

.tabnav3 .navul {
  height: 49px;
  background: #f4f4f4;
}

.tabnav3 .navul li {
  position: relative;
  float: left;
  width: 180px;
  height: 49px;
  border-right: 1px solid #e5e5e5;
  text-align: center;
  line-height: 49px;
}

.tabnav3 .navul li.first {
  border-left: 1px solid #e5e5e5;
}

.tabnav3 .navul li a {
  position: relative;
  display: block;
  border-top: 1px solid #e5e5e5;
  font-size: 18px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  line-height: 49px;
}

.tabnav3 .navul li a.cur {
  height: 49px;
  border-top: 2px solid #0cb95f;
  background: #fff;
  color: #0cb95f;
  line-height: 49px;
  _border-left-color: #fff;
  _border-right-color: #fff;
  _border-bottom: 0;
}

.tabnav3 .more {
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 14px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
}

.tabnav3 .more a {
  color: #0cb95f;
  text-decoration: underline;
}

.tabnav4 {
  border-bottom: 1px solid #0cb95f;
}

.tabnav4 .navul {
  height: 42px;
  background: #fff;
}

.tabnav4 .navul li {
  position: relative;
  float: left;
  width: 140px;
  height: 42px;
  text-align: center;
  line-height: 30px;
}

.tabnav4 .navul li a {
  position: relative;
  display: block;
  border-bottom: 1px solid #0cb95f;
  text-decoration: none;
  font-size: 16px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  line-height: 42px;
  cursor: pointer;
}

.tabnav4 .navul li a.cur,
.tabnav2 .navul li a:hover {
  height: 42px;
  border-bottom: 1px solid #0cb95f;
  background: #fff;
  color: #0cb95f;
  line-height: 42px;
}

.tabnav4 .navul li a i {
  position: absolute;
  bottom: -1px;
  left: 70px;
  display: none;
  width: 10px;
  height: 6px;
  background-image: lo("/common/images/icons.png");
  background-position: -156px -4px;
}

.tabnav4 .navul li a.cur i,
.tabnav2 .navul li a:hover i {
  display: block;
}

.tabnav5 {
  position: relative;
  border: 0;
}

.tabnav5 .navul {
  height: 49px;
  background: #f4f4f4;
}

.tabnav5 .navul li {
  position: relative;
  float: left;
  width: 385px;
  height: 49px;
  text-align: center;
  line-height: 49px;
  border: 0;
}

.tabnav5 .navul li.first {
  border-right: 1px solid #e5e5e5;
  width: 384px;
}

.tabnav5 .navul li a {
  position: relative;
  display: block;
  font-size: 18px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  line-height: 49px;
  border-bottom: 1px solid #e5e5e5;
  text-decoration: none;
}

.tabnav5 .navul li a.cur {
  height: 49px;
  background: #fff;
  color: #0cb95f;
  line-height: 49px;
  border-bottom: 1px solid #fff;
}

.tabnav6 {
  position: relative;
  border: 0;
}

.tabnav6 .navul {
  height: 41px;
  background: #f4f4f4;
  border-bottom: 1px solid #e5e5e5;
}

.tabnav6 .navul li {
  position: relative;
  float: left;
  width: 300px;
  height: 40px;
  border-right: 0;
  text-align: center;
  line-height: 40px;
}

.tabnav6 .navul li.first {
  border-right: 1px solid #e5e5e5;
}

.tabnav6 .navul li a {
  position: relative;
  display: block;
  font-size: 18px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  line-height: 40px;
  text-decoration: none;
}

.tabnav6 .navul li a:hover {
  color: #333;
}

.tabnav6 .navul li a.cur {
  height: 41px;
  border-bottom: 1px solid #fff;
  background: #fff;
  line-height: 49px;
  _border-left-color: #fff;
  _border-right-color: #fff;
  _border-bottom: 0;
  border-right: 1px solid #e5e5e5;
}

.tabnav6 .navul li.first a.cur {
  border-right: 0;
}

.catediv {
  padding: 0 15px 15px 0;
  position: relative;
}

.catediv .cname {
  font-size: 18px;
  font-weight: bold;
}

.catediv .line {
  background-image: lo("/common/images/line.png");
  display: inline-block;
  height: 10px;
  position: absolute;
  left: 86px;
  top: 12px;
  width: 1100px;
}

span.star {
  position: relative;
  display: inline-block;
  width: 70px;
  height: 14px;
  background-image: lo("/common/images/icons.png");
  background-position: -233px -91px;
  vertical-align: middle;
}

span.star label {
  position: absolute;
  top: 0;
  left: 0;
  width: 70px;
  height: 14px;
  background-image: lo("/common/images/icons.png");
  background-position: -233px -77px;
  vertical-align: middle;
}

span.star.red label {
  background-position: -233px -105px;
}

.spec span {
  position: relative;
  padding-left: 25px;
  height: 24px;
  color: #333;
  line-height: 24px;
  display: block;
}

.spec i {
  position: absolute;
  top: 4px;
  left: 0;
  display: block;
  width: 16px;
  height: 16px;
  background-image: lo("/common/images/icons.png");
}

.spec i.dao {
  background-position: -451px -5px;
}

.spec i.quan {
  background-position: -472px -5px;
}

.spec i.man {
  background-position: -451px -26px;
}

.spec i.baoyou {
  background-position: -451px -26px;
}

.spec i.fahuo {
  background-position: -472px -26px;
}

.spec i.support {
  background-position: -297px -119px;
}

.spec i.fahuo2 {
  background-position: -77px -46px;
}

.spec i.zheng2 {
  background-position: -95px -46px;
}

.spec i.piao2 {
  background-position: -113px -46px;
}

.spec i.tui {
  background-image: none;
  background-color: #ea6171;
  line-height: 16px;
  color: #fff;
  font-style: normal;
  text-align: center;
}

.spec i.xian {
  background-position: -113px -62px;
}

.spec i.xian2 {
  background-position: -95px -62px;
}

.zz i {
  display: block;
  width: 24px;
  height: 24px;
  background-image: lo("/common/images/icons.png");
}

.zz i.zong {
  background-position: -365px -46px;
}

.zz i.fen {
  background-position: -391px -46px;
}

.zz i.danti {
  background-position: -131px -46px;
}

.zz i.gsp {
  background-position: -157px -46px;
}

.zz i.yyzz {
  background-position: -209px -46px;
}

.zz i.jyxkz {
  background-position: -183px -46px;
}

.zz i.spws {
  background-position: -417px -46px;
}

.zz i.qixie {
  background-position: -443px -46px;
}

.zz i.shipin {
  background-position: -469px -46px;
}

.zz i.zzjg {
  background-position: -235px -46px;
}

.zz i.swdj {
  background-position: -287px -46px;
}

.zz i.zyys {
  background-position: -261px -46px;
}

.zz i.scxkz {
  background-position: -474px -209px;
}

.quantity {
  float: left;
  display: block;
  width: 90px;
  _width: 92px;
  height: 22px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 22px;
}

.quantity a {
  float: left;
  display: inline-block;
  width: 24px;
  height: 22px;
  background-color: #fff;
  background-image: lo("/common/images/icons.png");
  text-decoration: none;
  line-height: 22px;
}

.quantity a.dis {
  background-color: #e5e5e5;
}

.quantity a.add {
  background-position: -192px -79px;
}

.quantity a.sub {
  background-position: -165px -79px;
}

.quantity a.dis.add {
  background-position: -192px -105px;
}

.quantity a.dis.sub {
  background-position: -165px -105px;
}

.quantity input {
  float: left;
  width: 40px;
  height: 22px;
  _height: 23px;
  border: 0;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
  text-align: center;
  font-family: Arial;
  line-height: 22px;
  _line-height: 23px;
}

.fc-e50 {
  color: #e50000;
}

.fc-e16 {
  color: #e16070;
}

.disno {
  display: none;
}

.rx {
  display: inline-block;
  width: 33px;
  height: 16px;
  background-position: -220px -26px;
  font-size: 0;
  overflow: hidden;
}

.sbanner .zzicons ul li {
  float: left;
  padding: 0 0 0 45px;
  height: 34px;
  line-height: 34px;
  position: relative;
  color: #fff;
  margin-right: 20px;
}

.sbanner .zzicons ul li i {
  background-image: url("../assets/icons.png");
  width: 34px;
  height: 34px;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
}

.sbanner .zzicons ul li i.i1 {
  background-position: -317px -265px;
}

.sbanner .zzicons ul li i.i2 {
  background-position: -354px -265px;
}

.sbanner .zzicons ul li i.i3 {
  background-position: -391px -265px;
}

.sbanner .zzicons ul li i.i4 {
  background-position: -428px -265px;
}

.wxbig {
  z-index: 99999;
  border: 1px solid #e5e5e5;
  background: #fff;
}

.wxbig .pic {
  position: relative;
  width: 258px;
  height: 258px;
  background: lo("/common/images/icon_wx_big.jpg");
}

.wxbig .txt {
  padding: 0 10px 5px;
  width: 238px;
  color: #666;
  text-align: center;
  font-family: "\5FAE\8F6F\96C5\9ED1";
}

.appbig {
  z-index: 99999;
  border: 1px solid #e5e5e5;
  background: #fff;
}

.appbig .pic {
  position: relative;
  width: 258px;
  height: 258px;
  background: lo("/common/images/icon_app_big.png");
}

.appbig .txt {
  padding: 0 10px 5px;
  width: 238px;
  color: #666;
  text-align: center;
  font-family: "\5FAE\8F6F\96C5\9ED1";
}

.xcxbig {
  z-index: 99999;
  border: 1px solid #e5e5e5;
  background: #fff;
}

.xcxbig .pic {
  position: relative;
  width: 258px;
  height: 258px;
  background: lo("/common/images/icon_xcx_big.png");
  background-size: contain;
}

.xcxbig .txt {
  padding: 0 10px 5px;
  width: 238px;
  color: #666;
  text-align: center;
  font-family: "\5FAE\8F6F\96C5\9ED1";
}

.nav {
  background: #0cb95f;
  min-width: 1190px;
  z-index: 200;
  position: relative;
}

.nav .container {
  position: relative;
  margin: 0 auto 0;
  width: 1190px;
  height: 50px;
}

.nav .mainnav li {
  float: left;
  padding: 0 30px;
  height: 50px;
  line-height: 50px;
}

.nav .mainnav li a {
  color: #fff;
  font-size: 16px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
}

.nav .mainnav li.home {
  padding: 0 50px 0 50px;
}

.nav .mainnav li.category {
  padding: 0;
  padding-left: 20px;
  width: 210px;
  background: #0aa454;
  cursor: pointer;
}

.nav .mainnav li.category a {
  text-decoration: none;
}

.nav .mainnav li.cur {
  background: #0aa454;
}

.nav2 {
  background: #fff;
  position: relative;
  z-index: 202;
}

.nav2 .container {
  position: relative;
  margin: 0 auto 0;
  width: 1190px;
  height: 50px;
}

.nav2 .mainnav li {
  float: left;
  padding: 0 30px;
  height: 50px;
  line-height: 50px;
}

.nav2 .mainnav li a {
  color: #333;
  font-size: 16px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
}

.nav2 .mainnav li a:hover {
  color: #0cb95f;
}

.nav2 .mainnav li.home {
  padding: 0 50px 0 50px;
}

.nav2 .mainnav li.category {
  padding: 0;
  padding-left: 20px;
  width: 210px;
  background: #0cb95f;
  color: #fff;
}

.nav2 .mainnav li.category a {
  color: #fff;
}

.nav2 .mainnav li.cur {
  background: #0aa454;
}

.nav2 .mainnav li a.new_item {
  color: #ff7300;
  position: relative;
}

.new_item i {
  position: absolute;
  background: lo("../images/new_icon.gif") no-repeat center center;
  width: 36px;
  height: 15px;
  top: -3px;
}

.snav {
  background: #f8f8f8;
  border-bottom: 0 solid #e5e5e5;
}

.snav .container {
  position: relative;
  margin: 0 auto 0;
  width: 1190px;
  height: 50px;
}

.snav .mainnav li {
  float: left;
  padding: 0 30px;
  height: 50px;
  line-height: 50px;
}

.snav .mainnav li a {
  color: #333;
  font-size: 16px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  text-decoration: none;
}

.snav .mainnav li.home {
  padding: 0 50px 0 50px;
}

.snav .mainnav li.cur {
  border-bottom: 1px solid #0aa454;
}

.snav .mainnav li.cur a {
  color: #0cb95f;
}

#wrap,
.wrap {
  margin: 0 auto;
  width: 1190px;
  text-align: left;
}

#wrap.small {
  width: 990px;
}

.breadcrumb {
  padding: 15px 0;
  min-height: 24px;
  color: #aaa;
  text-align: left;
  line-height: 24px;
}

.breadcrumb a {
  float: left;
  display: block;
}

.breadcrumb i {
  float: left;
  display: block;
  margin: 3px 12px 0;
  width: 8px;
  height: 18px;
  background-image: lo("/common/images/icons.png");
  _background-image: lo("/common/images/icons.jpg");
  background-position: -30px -23px;
}

.breadcrumb strong {
  color: #666;
  font-weight: normal;
}

.breadcrumb .cat {
  position: relative;
  float: left;
  padding: 0 20px 0 8px;
  height: 22px;
  border: 1px solid #0cb95f;
  background: #fff;
  color: #333;
  line-height: 22px;
}

.breadcrumb .cat s {
  position: absolute;
  top: 4px;
  right: 4px;
  display: inline-block;
  width: 12px;
  height: 12px;
  background-image: lo("/common/images/icons.png");
  background-position: -365px 0;
}

.breadcrumb .cat a.m {
  color: #333;
  text-decoration: none;
}

.breadcrumb .cat.hover {
  height: 28px;
  border-bottom: 0;
  background: #fff;
}

.breadcrumb .cat.hover a.m {
  color: #333;
  color: #333;
}

.breadcrumb .cat.hover s {
  background-position: -155px 0;
}

.breadcrumb .cat ul {
  position: absolute;
  top: 27px;
  left: -1px;
  z-index: 998;
  display: none;
  padding: 8px 0;
  width: 218px;
  border: 1px solid #0cb95f;
  background: #fff;
}

.breadcrumb .cat.hover ul {
  display: block;
}

.breadcrumb .cat.hover ul li {
  float: left;
  display: block;
  margin: 6px 0;
  padding: 0 9px;
  height: 14px;
  border-left: 1px solid #ccc;
  line-height: 14px;
}

.breadcrumb .cat.hover ul li.n {
  border-left: 0;
}

.breadcrumb .cat.hover ul li a.cur {
  color: #0cb95f;
}

.breadcrumb .cat .line {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: none;
  width: 100%;
  height: 1px;
  border-top: 0 none;
  border-bottom: 1px solid #fff;
}

.breadcrumb .cat.hover .line {
  display: block;
}

.footer {
  margin-top: 0;
  min-width: 1190px;
}

.footer .container {
  margin: 0 auto 0;
  width: 1190px;
}

.footer .navigation {
  padding: 20px 0;
  height: 135px;
  border-top: 1px solid #e8e8e8;
  background: #f4f4f4;
}

.footer .navigation dl {
  float: left;
  width: 147px;
}

.footer .navigation dl dt {
  color: #6a6a6a;
  font-size: 14px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  line-height: 26px;
}

.footer .navigation dl dd {
  margin-top: 6px;
  text-align: left;
}

.footer .navigation dl dd a {
  display: block;
  overflow: hidden;
  height: 26px;
  color: #888;
  text-align: left;
  line-height: 26px;
}

.footer .navigation dl dd a:hover {
  color: #0cb95f;
}

.footer .navigation dl dd a.qr {
  height: auto;
}

.footer .navigation dl dd a.qr img {
  width: 80px;
  height: 80px;
}

.footer .navigation dl.last {
  width: 90px;
}

.footer .navigation dl.service {
  width: 200px;
}

.footer .navigation dl.service p {
  color: #888;
  line-height: 26px;
  height: 26px;
}

.footer .copyright {
  padding: 20px 0;
  background: #444a50;
  color: #959aa0;
}

.footer .copyright p {
  padding: 8px 0;
  color: #959aa0;
}

.footer .copyright p .mr {
  margin-right: 18px;
}

.footer .copyright p.white a {
  color: #dee5ea;
}

.footer .copyright p a {
  padding: 0 10px;
  color: #959aa0;
}

.footer .copyright p a.first {
  padding-left: 0;
}

.footer .copyright p.copy {
  font-family: Tahoma, Helvetica, Arial, sans-serif;
}

.footer .copyright .cert {
  margin-top: 10px;
}

.footer .copyright .icon {
  float: left;
  margin-right: 10px;
  width: 100px;
  height: 40px;
  background: lo("/common/images/icon_rz.gif");
  line-height: 40px;
}

.footer .copyright p.font {
  margin-top: 5px;
}

.footer .copyright p.zz span {
  display: block;
  float: left;
  height: 20px;
  line-height: 20px;
}

.footer .copyright p.zz span.gaba img {
  float: left;
  display: block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

.footer .copyright p.zz span.gaba a {
  float: left;
  display: block;
  padding-left: 3px;
  line-height: 20px;
  height: 20px;
}

.footer .copyright .icon.gs {
  background-position: 0 0;
}

.footer .copyright .icon.bj {
  background-position: 0 -40px;
}

.footer .copyright .icon.ba {
  background-position: 0 -80px;
}

.footer .copyright .icon.ls {
  background-position: 0 -120px;
}

.footer .copyright .icon.zx {
  background-position: 0 -160px;
}

.footer .copyright .icon.al {
  background-position: 0 -200px;
}

.footer .copyright .icon.cx {
  background-position: 0 -240px;
}

.footer .copyright .icon.sw {
  background-position: 0 -320px;
}

.footer .copyright .icon.rd {
  background-position: 0 -360px;
}

.footer .copyright .icon.nobg {
  background: 0;
}

.footer .copyright .icon.nobg .jvs-certifyOuter {
  height: 100% !important;
}

.footer .copyright .icon.nobg img {
  height: 100% !important;
}

.footer .copyright .icon a {
  display: block;
  width: 100px;
  height: 40px;
}

.footer .container.small {
  margin: 0 auto 0;
  width: 990px;
}

.footer .simple {
  color: #999;
  padding: 10px 0;
}

.footer .simple p {
  text-align: center;
  padding: 6px 0;
}

.footer .simple p a {
  color: #999;
  margin: 0 6px;
}

.footer .simple p.zz span {
  display: block;
  float: left;
  height: 20px;
  line-height: 20px;
  margin-right: 12px;
}

.footer .simple p.zz span.gaba img {
  float: left;
  display: block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

.footer .simple p.zz span.gaba a {
  float: left;
  display: block;
  padding-left: 3px;
  line-height: 20px;
  height: 20px;
  margin: 0;
}

.iform li {
  padding: 10px 0;
  height: 40px;
  color: #666;
  font-size: 14px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  line-height: 40px;
}

.iform li.radio .ckdiv {
  margin-right: 20px;
}

.iform li.radio .ra {
  margin-top: 9px;
}

.iform img.vcode {
  margin-right: 5px;
  vertical-align: middle;
  width: 100px;
  margin-left: 5px;
  float: left;
  height: 42px;
  line-height: 42px;
}

.iform.bg {
  background: #fcfcfc;
  padding: 10px;
}

.iform.s li {
  padding: 0;
}

.iform.s li .note {
  font-size: 12px;
  font-family: "宋体";
}

.iform .bginput {
  float: left;
  display: block;
}

.iform .note {
  float: left;
  display: block;
  margin-right: 10px;
  width: 170px;
  height: 40px;
  color: #999;
  text-align: right;
  font-size: 14px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  line-height: 40px;
}

.iform .note label {
  margin-right: 5px;
  color: #e50000;
  vertical-align: middle;
  font-size: 16px;
  font-family: serif;
}

.iform.s .note label {
  font-size: 10px;
}

.iform li.line {
  margin: 10px 0;
  padding: 0;
  height: 40px;
  line-height: 40px;
  border-top: 1px dotted #ccc;
  background: #f9f9f9;
}

.iform li.line label {
  width: 165px;
  text-align: right;
  display: inline-block;
}

.iform li.stitle {
  padding: 0 0 0 180px;
  height: 24px;
  color: #666;
  line-height: 24px;
}

.iform li.license {
  padding: 0 0 0 180px;
}

.iform li.license .ckdiv .ck {
  top: 12px;
}

.iform li.license a {
  color: #0cb95f;
}

.iform li.op {
  padding-left: 180px;
}

.iform li.op a {
  float: left;
  width: 320px;
}

.iform li.choice {
  height: 80px;
}

.iform li.choice .type {
  float: left;
}

.iform li.choice .type .item {
  display: block;
}

.iform li.choice .type .item .ckdiv {
  float: left;
}

.iform li.choice .type .item .ckdiv .ck {
  margin-top: 8px;
}

.iform li.choice .type .item .ckdiv .ra {
  top: 13px;
}

.iform li .ckdiv.s .ra {
  margin-top: 8px;
}

.iform li .ckdiv.s .ck {
  margin-top: 8px;
}

.iform li .ckdiv.s {
  font-family: "宋体";
  font-size: 12px;
}

.iform li .vcode img {
  vertical-align: middle;
  height: 40px;
  margin: 0 5px;
}

.iform li .vcode a {
  color: #0cb95f;
}

.iform .iselect {
  height: 32px;
  border: 1px solid #e5e5e5;
  min-width: 90px;
}

.iform .iselect.big {
  height: 38px;
}

.iform .bginput {
  position: relative;
}

.iform .bginput i {
  position: absolute;
  top: 9px;
  left: 10px;
  display: block;
  width: 18px;
  height: 25px;
  background-image: lo("/common/images/icons.png");
}

.iform .bginput i.user {
  background-position: -391px -109px;
}

.iform .bginput i.pass {
  background-position: -410px -109px;
}

.iform .input_big {
  padding: 0 20px 0 35px;
  width: 265px;
  height: 40px;
  border: 1px solid #e5e5e5;
  color: #333;
  font-size: 14px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  line-height: 40px;
}

.iform .input_big.s {
  padding: 0 20px 0 10px;
  width: 290px;
}

.iform .input_big.textarea {
  padding: 5px 20px 5px 10px;
  width: 440px;
  line-height: 22px;
  height: auto;
}

.iform .input_s {
  border: 1px solid #e5e5e5;
  color: #333;
  font-size: 12px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  width: 200px;
}

.iform .oninfo {
  position: relative;
  float: left;
  margin-left: 5px;
  padding: 0 10px 0 25px;
  font-size: 12px;
  font-family: Arial, "宋体";
  display: none;
}

.iform .oninfo i {
  position: absolute;
  top: 13px;
  left: 5px;
  display: block;
  width: 15px;
  height: 15px;
  background-image: lo("/common/images/icons.png");
}

.iform .oninfo.err {
  color: #e16070;
}

.iform .oninfo.focus {
  margin-top: 7px;
  margin-left: 12px;
  padding-left: 10px;
  height: 28px;
  border: 1px solid #e5e5e5;
  background: #f4f4f4;
  line-height: 28px;
}

.iform .oninfo.err i {
  background-position: -280px -120px;
}

.iform .oninfo.ok i {
  background-position: -297px -120px;
}

.iform .oninfo.focus i {
  top: 8px;
  left: -7px;
  width: 7px;
  height: 12px;
  background-position: -429px -116px;
}

.login {
  width: 100%;
  height: 540px;
  background: #353c45;
  background-position: center center;
}

.login.loginbg1 {
  background-image: lo("/common/images/loginbg1.png");
}

.login.loginbg2 {
  background-image: lo("/common/images/loginbg2.png");
}

.login .container {
  margin: 0 auto 0;
  width: 1100px;
}

.login .left {
  float: left;
  width: 540px;
  height: 540px;
}

.login .left a {
  display: block;
  width: 540px;
  height: 540px;
}

.login .left a img {
  width: 100%;
  height: 100%;
}

.login .right {
  float: right;
  width: 450px;
  margin-top: 56px;
  position: relative;
}

.login .form {
  margin-top: 0;
  padding: 64px 40px 6px 40px;
  width: 320px;
  background: #fff;
}

.login .form .item {
  position: relative;
  height: 50px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  line-height: 50px;
}

.login .form .item span {
  font-size: 16px;
}

.login .form .item span.note {
  color: #999;
  display: block;
  float: left;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  margin-right: 10px;
  text-align: right;
  width: 58px;
}

.login .form .item span.note1 {
  color: #999;
  font-size: 14px;
}

.login .form .item a.smalla {
  font-size: 12px;
}

.login .form .item .r {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 14px;
}

.login .form .item .r a {
  color: #0cb95f;
  text-decoration: underline;
  font-size: 14px;
}

.login .form .item .r.f {
  text-decoration: underline;
}

.login .form .item .input_big {
  padding: 0 20px 0 35px;
  width: 265px;
  height: 40px;
  border: 1px solid #ccc;
  color: #333;
  font-size: 14px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  line-height: 40px;
}

.login .form .item .input_big.short {
  padding: 0 10px;
  margin-right: 5px;
}

.login .form .item.mt {
  margin-top: 9px;
}

.login .form .item.mt7 {
  margin-top: 7px;
}

.login .form .item.mb {
  margin-bottom: 4px;
}

.login .form .item.op {
  margin: 5px 0;
}

.login .form .item.op .code {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 100%;
  margin: auto;
  width: 278px;
  height: 284px;
}

.login .form .consent input[type="checkbox"] {
  display: none;
}

.login .form .consent input[type="checkbox"] + i {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-position: -41px -25px;
  background-image: lo("/common/images/icons.png");
  vertical-align: middle;
}

.login .form .consent input[type="checkbox"]:checked + i {
  background-position: -60px -25px;
}

.login .form .consent .link {
  color: #0cb95f;
}

.login .form .bginput {
  position: relative;
}

.login .form .bginput i {
  position: absolute;
  top: 1px;
  left: 10px;
  display: block;
  width: 18px;
  height: 25px;
  background-image: lo("/common/images/icons.png");
  _top: 10px;
}

.login .form .bginput i.user {
  background-position: -351px -109px;
}

.login .form .bginput i.pass {
  background-position: -371px -109px;
}

.login .form .bginput img.vcode {
  height: 40px;
  width: 80px;
  vertical-align: middle;
  margin-right: 5px;
}

.login .form_div {
  margin-bottom: 6px;
}

.login .form_div.mb0 {
  margin-bottom: 0;
}

.login .ckdiv {
  font-size: 14px;
}

.login .ckdiv .ck {
  margin-top: 14px;
}

.login .other {
  margin-bottom: 20px;
}

.login .other a {
  float: left;
  display: block;
  margin-right: 20px;
  width: 30px;
  height: 30px;
  background-image: lo("/common/images/icons.png");
}

.login .other a.qq {
  background-position: -416px -142px;
}

.login .other a.weixin {
  background-position: -448px -142px;
}

.login .other a.alipay {
  background-position: -416px -174px;
}

.login .other a.weibo {
  background-position: -448px -174px;
}

.login .ltip {
  position: relative;
  padding-left: 20px;
  color: #e16070;
}

.login .ltip.mt10 {
  margin-top: 10px;
}

.login .ltip i {
  position: absolute;
  top: 1px;
  left: 0;
  display: block;
  width: 15px;
  height: 15px;
  background-position: -280px -120px;
}

.register {
  width: 100%;
  border-top: 1px solid #e5e5e5;
  background: #f4f4f4;
}

.register .container {
  margin: 0 auto 0;
  width: 990px;
}

.register .form {
  padding: 30px 0;
}

.register .form .items {
  padding: 30px 0;
  border: 1px solid #e5e5e5;
  background: #fff;
}

.page {
  height: 25px;
  line-height: 25px;
}

.page .num {
  float: left;
  margin: 0 7px;
}

.page .num label {
  color: #0cb95f;
}

.page a {
  float: left;
  display: block;
  width: 25px;
  height: 25px;
  background-image: lo("/common/images/icons.png");
  background-repeat: no-repeat;
}

.page a.l {
  background-position: -254px 0;
}

.page a.r {
  background-position: -280px -0;
}

.page a.l.d {
  background-position: -202px -0;
}

.page a.r.d {
  background-position: -228px -0;
}

.pager {
  margin: 10px 0;
  font-family: arial;
}

.pager .list {
  float: right;
  text-align: center;
}

.pager .list a {
  float: left;
  display: block;
  margin: 1px;
  width: 35px;
  height: 35px;
  border: 1px solid #f0f0f0;
  background-color: #fcfcfc;
  text-decoration: none;
  line-height: 35px;
}

.pager .list a:hover {
  border: 1px solid #0cb95f;
  background: #fff;
  color: #0cb95f;
}

.pager span {
  float: left;
  display: block;
  margin: 1px;
  width: 35px;
  height: 35px;
  border: 1px solid #f0f0f0;
  background-color: #fcfcfc;
  line-height: 35px;
  cursor: default;
}

.pager span.current {
  border: 1px solid #0cb95f;
  background: #0cb95f;
  color: #fff;
}

.pager .list a.next,
.pager .list a.prev {
  padding: 0 20px;
  width: 40px;
}

.pager .list a.noprev {
  padding: 0 20px;
  width: 40px;
  border: 1px solid #f0f0f0;
  background-color: #fcfcfc;
  color: #999;
}

.pager .list a.nonext {
  padding: 0 20px;
  width: 40px;
  border: 1px solid #f0f0f0;
  background-color: #fcfcfc;
  color: #999;
}

.pager2 {
  font-family: arial;
  margin: 10px 0;
}

.pager2 .list {
  float: right;
  text-align: center;
}

.pager2 .list a {
  background-color: #0cb95f;
  border: 1px solid #0cb95f;
  display: block;
  float: left;
  height: 35px;
  line-height: 35px;
  margin: 1px;
  text-decoration: none;
  width: 35px;
  color: #fff;
  margin-left: 10px;
}

.pager2 .list a.next,
.pager2 .list a.prev {
  padding: 0 20px;
  width: 40px;
}

.filter {
  padding: 0 10px;
  height: 40px;
  border: 1px solid #e5e5e5;
  background: #f4f4f4;
  line-height: 24px;
}

.filter .paixu {
  float: left;
  margin: 7px 15px 0 0;
  vertical-align: middle;
}

.filter .paixu a {
  position: relative;
  float: left;
  display: block;
  overflow: hidden;
  padding: 0 15px 0 15px;
  height: 22px;
  border: 1px solid #e5e5e5;
  border-left: 0;
  background: #fff;
  line-height: 22px;
}

.filter .paixu a.ud {
  padding: 0 15px 0 15px;
}

.filter .paixu a.first {
  border-left: 1px solid #e5e5e5;
}

.filter .paixu a:hover,
.filter .paixu a.cur {
  background: #fff;
  color: #0cb95f;
}

.filter .paixu a .arrow {
  position: absolute;
  top: 6px;
  right: 5px;
  background-position: 1px 1px;
  background-position: -184px -25px;
}

.filter .paixu a .arrow.up {
  background-position: -210px -25px;
}

.filter .paixu a .arrow.down {
  background-position: -197px -25px;
}

.filter .paixu .arrow {
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  width: 12px;
  height: 12px;
}

.filter .paixu .paixu-text {
  color: #999;
  float: left;
}

.filter .paixu .paixu-text-ml {
  margin-left: 18px;
}

.filter .condition {
  width: 450px;
  float: left;
  margin: 7px 15px 0 0;
}

.filter .condition .cinput {
  border: 1px solid #e5e5e5;
  height: 23px;
  line-height: 23px;
  vertical-align: middle;
  width: 140px;
  padding: 0 5px;
}

.filter .condition .cinput.small {
  width: 50px;
}

.filter .condition .cbtn {
  background: #0cb95f;
  height: 25px;
  width: 50px;
  border: 1px solid #e5e5e5;
  color: #fff;
  cursor: pointer;
}

.filter .txt {
  float: left;
  margin: 7px 0 0 20px;
}

.filter .page {
  float: right;
  margin-top: 8px;
}

.filter .ckdiv {
  margin-top: 7px;
  margin-left: 10px;
}

.filter .downup {
  margin-top: 7px;
}

.address-text {
  max-width: 180px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
}

.address-setting-btn {
  color: #0cb95f;
  margin-left: 5px;
  vertical-align: middle;
  cursor: pointer;
}

.searchresul {
  margin-bottom: 20px;
}

.searchresul b {
  margin: 0 5px;
  color: #f90;
}

.ckdiv {
  position: relative;
  float: left;
  padding-left: 20px;
  cursor: pointer;
}

.ckdiv .ck {
  position: absolute;
  top: 4px;
  left: 0;
}

.ckdiv .ra {
  position: absolute;
  top: 4px;
  left: 0;
}

.ckdiv.n {
  margin-left: 0;
}

.ichoice {
  position: relative;
  float: left;
  margin-right: 10px;
  padding: 0 20px;
  border: 1px solid #e5e5e5;
  background: #fff;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}

.ichoice.dis {
  background: #f4f4f4;
  color: #999;
}

.ichoice i {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  display: none;
  width: 14px;
  height: 14px;
  background-image: lo("/common/images/icons.png");
}

.ichoice.cur i {
  display: block;
  background-position: -248px -120px;
}

.ichoice.cur {
  border: 1px solid #e16070;
}

.ichoice2 {
  position: relative;
  float: left;
  margin-right: 10px;
  padding: 0 20px;
  border: 1px solid #e5e5e5;
  background: #fff;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}

.ichoice2 i {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  display: none;
  width: 18px;
  height: 18px;
  background-image: lo("/common/images/icons.png");
}

.paytype1 .ul2 li a {
  background-image: lo("/common/images/payicons.png") !important;
}

.paytype1 .jd_line {
  width: 100%;
  height: 1px;
  background-color: #e5e5e5;
  margin-top: 20px;
}

.paytype1 .jd_pay {
  padding-top: 22px;
}

.paytype1 .jd_pay li:nth-of-type(1) {
  margin-bottom: 20px;
  color: #999;
}

.paytype1 .jd_pay li {
  width: 100%;
}

.paytype1 .ul2 li .ichon_jingdong {
  background-repeat: no-repeat;
  background-position: -7px -325px;
}

.paytype1 .ul2 li .jd_blank {
  background-position: -7px -393px;
}

.ichoice2.cur i {
  display: block;
  background-position: -262px -120px;
}

.ichoice2.cur {
  border: 1px solid #e16070;
}

.downup {
  position: relative;
  float: left;
  height: 22px;
  border: 1px solid #ccc;
  background: #fff;
}

.downup .now {
  position: relative;
  overflow: hidden;
  padding-right: 22px;
  padding-left: 5px;
  white-space: nowrap;
  float: left;
}

.downup i {
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  width: 20px;
  height: 22px;
  background-color: #fff;
  background-position: -121px 3px;
  cursor: pointer;
}

.downup.hover i {
  background-position: -137px 1px;
}

.downup.hover {
  border-bottom: 0;
}

.downup .other {
  position: absolute;
  top: 22px;
  left: -1px;
  z-index: 1000;
  display: none;
  padding: 3px 0;
  min-width: 100%;
  border: 1px solid #ccc;
  background: #fff;
  white-space: nowrap;
  max-height: 238px;
  overflow-y: auto;
  overflow-x: hidden;
}

.downup.hover .other {
  display: block;
}

.downup .line {
  position: absolute;
  bottom: -1px;
  left: 0;
  z-index: 1001;
  display: none;
  width: 100%;
  height: 1px;
  border-top: 0 none;
  border-bottom: 1px solid #fff;
}

.downup.hover .line {
  display: block;
}

.downup .other a {
  display: block;
  padding: 0 15px 0 5px;
  height: 24px;
  color: #333;
  text-decoration: none;
  line-height: 24px;
}

.downup .other a:hover {
  background: #f4f4f4;
}

.downup2 {
  position: relative;
  float: left;
  margin-top: 5px;
  height: 28px;
  border: 1px solid #ccc;
  line-height: 28px;
  cursor: pointer;
}

.downup2 .now {
  position: relative;
  overflow: hidden;
  padding-right: 20px;
  padding-left: 10px;
  max-width: 220px;
  min-width: 130px;
  white-space: nowrap;
  float: left;
}

.downup2 .other li.cur {
  background: #f4f4f4;
}

.downup2 .other {
  position: absolute;
  top: 28px;
  left: -1px;
  z-index: 1001;
  display: none;
  padding: 3px 0;
  min-width: 100%;
  border: 1px solid #ccc;
  background: #fff;
  white-space: nowrap;
}

.downup2 .other a {
  display: block;
  padding: 0 15px 0 10px;
  height: 30px;
  color: #333;
  text-decoration: none;
  line-height: 30px;
}

.downup2 .other a:hover {
  background: #f4f4f4;
}

.downup2.hover .other {
  display: block;
}

.downup2 .line {
  position: absolute;
  bottom: -1px;
  left: 0;
  z-index: 1001;
  display: none;
  width: 100%;
  height: 1px;
  border-top: 0 none;
  border-bottom: 1px solid #fff;
}

.downup2.hover .line {
  display: block;
}

.downup2 i {
  position: absolute;
  top: 4px;
  right: 0;
  display: block;
  width: 20px;
  height: 20px;
  background-color: #fff;
  background-position: -121px 1px;
}

.downup2.hover i {
  background-position: -137px 1px;
}

.ileft {
  float: left;
  margin: 20px 20px 0 0;
  width: 220px;
}

.iright {
  float: left;
  width: 950px;
}

.iright .breadcrumb {
  padding: 0;
}

.ileft_side {
  float: left;
  margin: 0 20px 0 0;
  width: 220px;
}

.iright_side {
  float: right;
  width: 950px;
}

.category li {
  display: block;
}

.category li h5 {
  padding: 0 30px;
  width: 158px;
  height: 40px;
  border-top: 1px solid #e5e5e5;
  background: none repeat scroll 0 0 #f4f4f4;
  font-weight: normal;
  font-size: 14px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  line-height: 40px;
  cursor: pointer;
}

.category li h5 i {
  float: left;
  display: inline-block;
  margin: 13px 10px 10px 0;
  width: 15px;
  height: 15px;
  background-image: lo("/common/images/icons.png");
  background-position: -214px -83px;
}

.category li h5.n {
  border-bottom: 0;
}

.category li.hover h5 i {
  background-position: -214px -109px;
}

.category li .items {
  display: none;
}

.category li .items a {
  display: block;
  float: left;
  height: 28px;
  line-height: 28px;
  overflow: hidden;
  padding: 0 10px;
  width: 60px;
  text-align: center;
  text-decoration: none;
  margin: 0 1px 1px 0;
}

.category li .items a:hover {
  background: #0cb95f;
  color: #fff;
}

.category li .items a.cur {
  background: #0cb95f;
  color: #fff;
}

.category li.hover .items {
  display: block;
  padding: 10px 22px;
}

.block {
  margin-bottom: 20px;
  border: 1px solid #e5e5e5;
}

.block h4 {
  padding: 0 20px;
  height: 40px;
  border-bottom: 1px solid #ddd;
  background: #f4f4f4;
  font-weight: normal;
  font-size: 14px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  line-height: 40px;
}

.block h4.nb {
  border-bottom: 0;
}

.block ul li {
  float: left;
}

.block ul li .photo {
  display: block;
  text-align: center;
  height: 160px;
  width: 178px;
}

.block ul li .txt {
  display: block;
  overflow: hidden;
  margin-top: 5px;
  height: 20px;
  line-height: 18px;
  _width: 178px;
  text-align: left;
}

.block ul li .txt.nofix {
  height: auto;
}

.block ul li .subtitle {
  padding: 2px 0;
  color: #f90;
  line-height: 20px;
  _width: 178px;
}

.block ul li .st {
  padding: 5px 0;
  color: #999;
  line-height: 20px;
  height: 16px;
  overflow: hidden;
}

.block ul li .money {
  height: 24px;
  color: #e50000;
  text-align: center;
  font-style: normal;
  font-family: Arial;
  line-height: 24px;
}

.block ul.li6 li {
  padding: 15px 18px;
  width: 160px;
  height: 225px;
}

.block ul.li6 li a.photo {
  width: 160px;
  height: 160px;
}

.block ul.li6 li img {
  width: 160px;
  height: 160px;
}

.block ul.li6 li .money {
  font-size: 14px;
}

.block ul.li9 li {
  padding: 15px 8px;
  width: 115px;
  height: 175px;
}

.block ul.li9 li a.photo {
  width: 110px;
  height: 110px;
}

.block ul.li9 li img {
  width: 110px;
  height: 110px;
}

.block ul.li9 li .money {
  font-size: 12px;
}

.goods li {
  display: block;
  padding: 10px 20px;
  border-bottom: 1px solid #e5e5e5;
}

.goods li a {
  display: block;
}

.goods li img {
  width: 160px;
  height: 160px;
}

.goods li.nb {
  border-bottom: 0;
}

.goods li .money {
  text-align: left;
}

.goods li .money {
  font-size: 14px;
}

.goodlist {
  margin-top: 10px;
}

.goodlist li {
  float: left;
  margin-right: 20px;
  width: 221px;
  height: 325px;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
  overflow: visible;
}

.goodlist li.last {
  margin-right: 0;
}

.goodlist li.hover {
  z-index: 3;
}

.goodlist li .info {
  position: absolute;
  left: 0;
  top: 0;
  border: 1px solid #f5f5f5;
  overflow: hidden;
  z-index: 3;
  background: #fff;
  width: 221px;
  padding-top: 5px;
}

.goodlist li.hover .info {
  border: 1px solid #e5e5e5;
}

.goodlist li .info:hover .rx-m-mask .rx-m-tips {
  display: block;
}

.goodlist li .info .photo {
  display: block;
  text-align: center;
  margin: 0 10px;
  height: 195px;
  position: relative;
}

.goodlist li .info .photo img {
  width: 190px;
  height: 190px;
}

.goodlist li .info .money {
  height: 24px;
  color: #e50000;
  text-align: center;
  text-align: left;
  font-size: 18px;
  font-family: "\534E\6587\7EC6\9ED1", Arial;
  line-height: 24px;
  margin: 0 10px;
}

.goodlist li .info .money.small {
  font-size: 14px;
}

.goodlist li .info .ph {
  overflow: hidden;
  height: 30px;
  color: #999;
  line-height: 30px;
  margin: 0 10px;
  white-space: nowrap;
}

.goodlist li .info .ph label {
  color: #333;
}

.goodlist li .info .st {
  color: #999;
  margin: 0 10px;
  overflow: hidden;
  white-space: nowrap;
  height: 20px;
  line-height: 26px;
}

.goodlist li .info .st label {
  color: #333;
}

.goodlist li .info .ph img {
  height: 14px;
  vertical-align: middle;
  width: auto;
}

.goodlist li .info .cj {
  overflow: hidden;
  color: #999;
  line-height: 1.6;
  height: 40px;
  margin: 5px 10px 0;
  white-space: normal;
  line-height: 18px;
}

.goodlist li .info .txt {
  display: block;
  overflow: hidden;
  margin-top: 5px;
  height: 20px;
  line-height: 20px;
  margin: 0 10px;
  margin-top: 3px;
}

.goodlist li .info .no {
  color: #999;
  line-height: 20px;
  margin: 0 10px;
}

.goodlist li .info .h {
  color: red;
}

.goodlist li .info .n {
  margin: 0 10px;
  line-height: 22px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.goodlist li.hover .info .n .money {
  margin: 0;
}

.goodlist li .info .op {
  padding: 0;
  border-top: 1px dashed #f5f5f5;
  text-align: center;
  line-height: 28px;
  height: 28px;
}

.goodlist li .info .op a.b {
  display: none;
}

.goodlist li.hover .info .op a.b {
  display: inline-block;
}

.goodlist li.hover .info .op {
  border-right: 0;
  border-left: 0;
  background: #f4f4f4;
  margin-bottom: 12px;
}

.goodlist li .info .op span {
  display: inline-block;
  width: 212px;
  border-right: 1px solid #fff;
  text-align: left;
  padding-left: 10px;
}

.goodlist li.hover .info .op span {
  display: inline-block;
  width: 130px;
  border-right: 1px solid #f5f5f5;
}

.goodlist li .info .op span.detail {
  white-space: nowrap;
}

.goodlist li.hover .info .op span.detail {
  width: 130px;
}

.goodlist li .info .op span b {
  margin: 0 2px;
  color: #0cb95f;
  font-weight: normal;
}

.goodlist li .info .op a {
  display: inline-block;
  width: 80px;
  color: #e50000;
  background: #fff;
}

.goodlist li.hover .info .op a {
  background: #e50000;
  color: #fff;
}

.goodlist li .info .op a:hover {
  color: #0cb95f;
}

.goodlist li.hover .info .op a:hover {
  color: #fff;
}

.goodlist li .info .n .money {
  font-size: 12px;
}

.goodlist li .info .n a {
  float: right;
  color: #999;
  text-decoration: underline;
}

.goodlist_search {
  margin-top: 10px;
}

.goodlist_search li {
  float: left;
  margin-right: 20px;
  width: 221px;
  height: 325px;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
  overflow: visible;
}

.goodlist_search li.last {
  margin-right: 0;
}

.goodlist_search li.hover {
  z-index: 3;
}

.goodlist_search li .info {
  position: absolute;
  left: 0;
  top: 0;
  border: 1px solid #f5f5f5;
  overflow: hidden;
  z-index: 3;
  background: #fff;
  width: 221px;
  padding-top: 5px;
}

.goodlist_search li.hover .info {
  border: 1px solid #e5e5e5;
}

.goodlist_search li .info:hover .rx-m-mask .rx-m-tips {
  display: block;
}

.goodlist_search li .info .photo {
  display: block;
  text-align: center;
  margin: 0 10px;
  height: 195px;
  position: relative;
}

.goodlist_search li .info .photo img {
  width: 190px;
  height: 190px;
}

.goodlist_search li .info .money {
  height: 24px;
  color: #e50000;
  text-align: center;
  text-align: left;
  font-size: 18px;
  font-family: "\534E\6587\7EC6\9ED1", Arial;
  line-height: 24px;
  margin: 0 10px;
}

.goodlist_search li .info .money.small {
  font-size: 14px;
}

.goodlist_search li .info .ph {
  overflow: hidden;
  height: 30px;
  color: #999;
  line-height: 30px;
  margin: 0 10px;
  white-space: nowrap;
}

.goodlist_search li .info .ph label {
  color: #333;
}

.goodlist_search li .info .st {
  color: #999;
  margin: 0 10px;
  overflow: hidden;
  white-space: nowrap;
  height: 20px;
  line-height: 26px;
}

.goodlist_search li .info .st.st-mb {
  margin-bottom: 5px;
  display: block;
  line-height: 20px;
}

.goodlist_search li .info .st label {
  color: #333;
}

.goodlist_search li .info .ph img {
  height: 14px;
  vertical-align: middle;
  width: auto;
}

.goodlist_search li .info .cj {
  overflow: hidden;
  color: #999;
  line-height: 1.6;
  height: 40px;
  margin: 5px 10px 0;
  white-space: normal;
  line-height: 18px;
}

.goodlist_search li .info .txt {
  display: block;
  overflow: hidden;
  margin-top: 5px;
  height: 20px;
  line-height: 20px;
  margin: 0 10px;
  margin-top: 3px;
}

.goodlist_search li .info .txt.overshow {
  height: 40px;
}

.goodlist_search li .info .no {
  color: #999;
  line-height: 20px;
  margin: 0 10px;
}

.goodlist_search li .info .h {
  color: red;
}

.goodlist_search li .info .n {
  display: none;
  margin: 0 10px;
  line-height: 22px;
  margin: 6px 10px;
}

.goodlist_search li.hover .info .n {
  display: block;
}

.goodlist_search li.hover .info .n .money {
  margin: 0;
}

.goodlist_search li .info .op {
  padding: 0;
  text-align: center;
  line-height: 28px;
  height: 28px;
  font-size: 0;
}

.goodlist_search li .info .op.bggrey {
  background-color: #f4f4f4;
}

.goodlist_search li .info .op.bggrey .left-text {
  border-right-color: #f4f4f4;
}

.goodlist_search li .info .op.bggrey .right-opt {
  background-color: #f4f4f4;
}

.goodlist_search li .info .op a.b {
  display: none;
}

.goodlist_search li.hover .info .op a.b {
  display: inline-block;
}

.goodlist_search li.hover .info .op {
  border-right: 0;
  border-left: 0;
  background: #fff;
  margin-bottom: 12px;
}

.goodlist_search li .info .op .text-link {
  display: inline-block;
  width: 130px;
  border-right: 1px solid #fff;
  text-align: left;
  padding-left: 10px;
  color: #ccc;
  font-size: 12px;
}

.goodlist_search li .info .op .text-link:hover {
  color: #3cb95b;
  text-decoration: underline;
}

.goodlist_search li.hover .info .op .text-link {
  display: inline-block;
  width: 130px;
  border-right: 1px solid #f5f5f5;
}

.goodlist_search li .info .op .left-text {
  display: inline-block;
  width: 130px;
  border-right: 1px solid #fff;
  text-align: left;
  padding-left: 10px;
  color: #7b7979;
  font-size: 12px;
}

.goodlist_search li .info .op .left-text b {
  margin: 0 2px;
  color: #0cb95f;
  font-weight: normal;
}

.goodlist_search li .info:hover {
  border-color: #e5e5e5;
}

.goodlist_search li .info .op .text-link.detail {
  white-space: nowrap;
}

.goodlist_search li.hover .info .op .text-link.detail {
  width: 130px;
}

.goodlist_search li .info .op .text-link b {
  margin: 0 2px;
  color: #0cb95f;
  font-weight: normal;
}

.goodlist_search li .info .op .right-opt {
  display: inline-block;
  width: 80px;
  color: #666;
  background: #fff;
  cursor: pointer;
  font-size: 12px;
}

.goodlist_search li.hover .info .op .right-opt {
  background: #e50000;
  color: #fff;
}

.goodlist_search li .info .op .right-opt:hover {
  color: #0cb95f;
}

.goodlist_search li.hover .info .op .right-opt:hover {
  color: #fff;
}

.goodlist_search li .info .n .money {
  font-size: 12px;
}

.goodlist_search li .info .n a {
  float: right;
  color: #999;
  text-decoration: underline;
}

.gl-company-wrap {
  background-color: #fff;
}

.gl-company {
  display: block;
  padding-left: 10px;
  color: #888;
  line-height: 29px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-decoration: underline;
}

.gl-company.gl-company-short {
  width: 142px;
  float: left;
}

.gl-append {
  display: block;
  float: right;
  width: 52px;
  line-height: 29px;
  padding-right: 10px;
  color: #ccc;
  text-decoration: underline;
}

.r6441 .goodlist_search li .info .photo {
  display: block;
  text-align: center;
  margin: 0 10px;
  height: 195px;
  position: relative;
}

.goodlist_search li .info .photo img {
  width: 190px;
  height: 190px;
}

.goodlist_search li .info .money {
  height: 24px;
  color: #e50000;
  text-align: center;
  text-align: left;
  font-size: 18px;
  font-family: "\534E\6587\7EC6\9ED1", Arial;
  line-height: 24px;
  margin: 0 10px;
}

.goodlist_search li .info .money.small {
  font-size: 14px;
}

.goodlist_search li .info .ph {
  overflow: hidden;
  height: 30px;
  color: #999;
  line-height: 30px;
  margin: 0 10px;
  white-space: nowrap;
}

.goodlist_search li .info .ph label {
  color: #333;
}

.goodlist_search li .info .st {
  color: #999;
  margin: 0 10px;
  overflow: hidden;
  white-space: nowrap;
  height: 20px;
  line-height: 26px;
}

.goodlist_search li .info .st.st-mb {
  margin-bottom: 5px;
  display: block;
  line-height: 20px;
}

.goodlist_search li .info .st label {
  color: #333;
}

.goodlist_search li .info .ph img {
  height: 14px;
  vertical-align: middle;
  width: auto;
}

.goodlist_search li .info .cj {
  overflow: hidden;
  color: #999;
  line-height: 1.6;
  height: 40px;
  margin: 5px 10px 0;
  white-space: normal;
  line-height: 18px;
}

.goodlist_search li .info .txt {
  display: block;
  overflow: hidden;
  margin-top: 5px;
  height: 20px;
  line-height: 20px;
  margin: 0 10px;
  margin-top: 3px;
}

.goodlist_search li .info .txt.overshow {
  height: 40px;
}

.goodlist_search li .info .no {
  color: #999;
  line-height: 20px;
  margin: 0 10px;
}

.goodlist_search li .info .h {
  color: red;
}

.goodlist_search li .info .n {
  display: none;
  margin: 0 10px;
  line-height: 22px;
  margin: 6px 10px;
}

.goodlist_search li.hover .info .n {
  display: block;
}

.goodlist_search li.hover .info .n .money {
  margin: 0;
}

.goodlist_search li .info .op {
  padding: 0;
  text-align: center;
  line-height: 28px;
  height: 28px;
  font-size: 0;
}

.goodlist_search li .info .op.bggrey {
  background-color: #f4f4f4;
}

.goodlist_search li .info .op.bggrey .left-text {
  border-right-color: #f4f4f4;
}

.goodlist_search li .info .op.bggrey .right-opt {
  background-color: #f4f4f4;
}

.goodlist_search li .info .op a.b {
  display: none;
}

.goodlist_search li.hover .info .op a.b {
  display: inline-block;
}

.goodlist_search li.hover .info .op {
  border-right: 0;
  border-left: 0;
  background: #fff;
  margin-bottom: 12px;
}

.goodlist_search li .info .op .text-link {
  display: inline-block;
  width: 130px;
  border-right: 1px solid #fff;
  text-align: left;
  padding-left: 10px;
  color: #ccc;
  font-size: 12px;
}

.goodlist_search li .info .op .text-link:hover {
  color: #3cb95b;
  text-decoration: underline;
}

.goodlist_search li.hover .info .op .text-link {
  display: inline-block;
  width: 130px;
  border-right: 1px solid #f5f5f5;
}

.goodlist_search li .info .op .left-text {
  display: inline-block;
  width: 130px;
  border-right: 1px solid #fff;
  text-align: left;
  padding-left: 10px;
  color: #7b7979;
  font-size: 12px;
}

.goodlist_search li .info .op .left-text b {
  margin: 0 2px;
  color: #0cb95f;
  font-weight: normal;
}

.goodlist_search li .info:hover {
  border-color: #e5e5e5;
}

.goodlist_search li .info .op .text-link.detail {
  white-space: nowrap;
}

.goodlist_search li.hover .info .op .text-link.detail {
  width: 130px;
}

.goodlist_search li .info .op .text-link b {
  margin: 0 2px;
  color: #0cb95f;
  font-weight: normal;
}

.goodlist_search li .info .op .right-opt {
  display: inline-block;
  width: 80px;
  color: #666;
  background: #fff;
  cursor: pointer;
  font-size: 12px;
}

.goodlist_search li.hover .info .op .right-opt {
  background: #e50000;
  color: #fff;
}

.goodlist_search li .info .op .right-opt:hover {
  color: #0cb95f;
}

.goodlist_search li.hover .info .op .right-opt:hover {
  color: #fff;
}

.goodlist_search li .info .n .money {
  font-size: 12px;
}

.goodlist_search li .info .n a {
  float: right;
  color: #999;
  text-decoration: underline;
}

.gl-company-wrap {
  background-color: #fff;
}

.gl-company {
  display: block;
  padding-left: 10px;
  color: #888;
  line-height: 29px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-decoration: underline;
}

.gl-company.gl-company-short {
  width: 142px;
  float: left;
}

.gl-append {
  display: block;
  float: right;
  width: 52px;
  line-height: 29px;
  padding-right: 10px;
  color: #ccc;
  text-decoration: underline;
}

.goodlist_search li .info .photo {
  display: block;
  text-align: center;
  margin: 0 10px;
  height: 195px;
  position: relative;
}

.goodlist_search li .info .photo img {
  width: 190px;
  height: 190px;
}

.goodlist_search li .info .money {
  min-height: 24px;
  color: #e50000;
  text-align: center;
  text-align: left;
  font-size: 18px;
  font-family: "\534E\6587\7EC6\9ED1", Arial;
  line-height: 24px;
  margin: 0 10px;
}

.goodlist_search li .info .money.small {
  font-size: 14px;
}

.goodlist_search li .info .ph {
  overflow: hidden;
  height: 20px;
  color: #999;
  line-height: 24px;
  margin: 0 10px;
  white-space: nowrap;
}

.goodlist_search li .info .ph label {
  color: #333;
}

.goodlist_search li .info .st {
  color: #999;
  margin: 0 10px;
  overflow: hidden;
  white-space: nowrap;
  height: 20px;
  line-height: 26px;
}

.goodlist_search li .info .st.st-mb {
  margin-bottom: 5px;
  display: block;
  line-height: 20px;
}

.goodlist_search li .info .st label {
  color: #333;
}

.goodlist_search li .info .ph img {
  height: 14px;
  vertical-align: middle;
  width: auto;
}

.goodlist_search li .goods__sellerList {
  margin-top: 25px;
  height: 28px;
  line-height: 28px;
  border-top: 1px dashed #f4f4f4;
}

.goodlist_search li .info:hover .goods__sellerList {
  background-color: #f4f4f4;
}

.goodlist_search li .goods__sellerList > .num {
  float: left;
  padding: 0 10px;
}

.goodlist_search li .goods__sellerList > .more {
  float: right;
  width: 80px;
  height: 28px;
  color: #fff;
  text-align: center;
}

.goodlist_search li .info:hover .goods__sellerList > .more {
  background-color: #e50000;
}

.goodlist_search li .info .cj {
  overflow: hidden;
  color: #999;
  line-height: 1.6;
  height: 40px;
  margin: 5px 10px 0;
  white-space: normal;
  line-height: 18px;
}

.goodlist_search li .info .txt {
  display: block;
  overflow: hidden;
  margin-top: 5px;
  height: 20px;
  line-height: 20px;
  margin: 0 10px;
  margin-top: 3px;
}

.goodlist_search li .info .txt.overshow {
  height: 40px;
}

.goodlist_search li .info .no {
  color: #999;
  line-height: 20px;
  margin: 0 10px;
}

.goodlist_search li .info .h {
  color: red;
}

.goodlist_search li .info .n {
  display: none;
  margin: 0 10px;
  line-height: 22px;
  margin: 6px 10px;
}

.goodlist_search li.hover .info .n {
  display: block;
}

.goodlist_search li.hover .info .n .money {
  margin: 0;
}

.goodlist_search li .info .op {
  padding: 0;
  text-align: center;
  line-height: 28px;
  height: 28px;
  font-size: 0;
}

.goodlist_search li .info .op.bggrey {
  background-color: #f4f4f4;
}

.goodlist_search li .info .op.bggrey .left-text {
  border-right-color: #f4f4f4;
}

.goodlist_search li .info .op.bggrey .right-opt {
  background-color: #f4f4f4;
}

.goodlist_search li .info .op a.b {
  display: none;
}

.goodlist_search li.hover .info .op a.b {
  display: inline-block;
}

.goodlist_search li.hover .info .op {
  border-right: 0;
  border-left: 0;
  background: #fff;
  margin-bottom: 12px;
}

.goodlist_search li .info .op .text-link {
  display: inline-block;
  width: 130px;
  border-right: 1px solid #fff;
  text-align: left;
  padding-left: 10px;
  color: #ccc;
  font-size: 12px;
}

.goodlist_search li .info .op .text-link:hover {
  color: #3cb95b;
  text-decoration: underline;
}

.goodlist_search li.hover .info .op .text-link {
  display: inline-block;
  width: 130px;
  border-right: 1px solid #f5f5f5;
}

.goodlist_search li .info .op .left-text {
  display: inline-block;
  width: 130px;
  border-right: 1px solid #fff;
  text-align: left;
  padding-left: 10px;
  color: #7b7979;
  font-size: 12px;
}

.goodlist_search li .info .op .left-text b {
  margin: 0 2px;
  color: #0cb95f;
  font-weight: normal;
}

.goodlist_search li .info:hover {
  border-color: #e5e5e5;
}

.goodlist_search li .info .op .text-link.detail {
  white-space: nowrap;
}

.goodlist_search li.hover .info .op .text-link.detail {
  width: 130px;
}

.goodlist_search li .info .op .text-link b {
  margin: 0 2px;
  color: #0cb95f;
  font-weight: normal;
}

.goodlist_search li .info .op .right-opt {
  display: inline-block;
  width: 80px;
  color: #666;
  background: #fff;
  cursor: pointer;
  font-size: 12px;
}

.goodlist_search li.hover .info .op .right-opt {
  background: #e50000;
  color: #fff;
}

.goodlist_search li .info .op .right-opt:hover {
  color: #0cb95f;
}

.goodlist_search li.hover .info .op .right-opt:hover {
  color: #fff;
}

.goodlist_search li .info .n .money {
  font-size: 12px;
}

.goodlist_search li .info .n a {
  float: right;
  color: #999;
  text-decoration: underline;
}

.gl-company-wrap {
  background-color: #fff;
}

.gl-company {
  display: block;
  padding-left: 10px;
  color: #888;
  line-height: 29px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-decoration: underline;
}

.gl-company.gl-company-short {
  width: 142px;
  float: left;
}

.gl-append {
  display: block;
  float: right;
  width: 52px;
  line-height: 29px;
  padding-right: 10px;
  color: #ccc;
  text-decoration: underline;
}

.feature {
  font-size: 12px;
  padding-left: 10px;
  height: 20px;
  margin-bottom: 5px;
}

.red-label {
  display: inline-block;
  vertical-align: middle;
  background-color: #df5454;
  color: #fff;
  padding: 2px 3px;
  line-height: 12px;
  border-radius: 3px;
}

.orange-label {
  display: inline-block;
  vertical-align: middle;
  background-color: #ff9f04;
  color: #fff;
  padding: 2px 3px;
  line-height: 12px;
  border-radius: 3px;
}

.orange-label-outline {
  background: #fff;
  border: 1px solid #ff9f04;
  color: #ff9f04;
}

.coupon-prefix {
  background-color: #ff9f04;
  color: #fff;
  border-right: 1px dashed #fff;
}

.orange-label-outline .coupon-prefix {
  background: #fff;
  color: #ff9f04;
  border-right: 1px dashed #ff9f04;
  padding-right: 4px;
}

.yellow-label {
  display: inline-block;
  vertical-align: middle;
  background-color: #fff0bf;
  color: #fff;
  padding: 2px 3px;
  line-height: 12px;
  border-radius: 3px;
}

.font-grey {
  color: #ad7e00;
}

.itemsC {
  display: block;
  padding: 10px 22px;
}

.itemsC a {
  display: block;
  float: left;
  height: 28px;
  line-height: 28px;
  margin: 0 1px 1px 0;
  overflow: hidden;
  padding: 0 10px;
  text-align: left;
  text-decoration: none;
  width: 60px;
}

.itemsC a:hover {
  background: #0cb95f none repeat scroll 0 0;
  color: #fff;
}

.innersearch {
  padding: 10px;
  background: #fff;
}

.innersearch .txt.hui {
  color: #bbb;
}

.innersearch .txt {
  float: left;
  padding: 3px 3px;
  width: 148px;
  height: 24px;
  border: 0 none;
  border: 1px solid #ccc;
  line-height: 24px;
}

.innersearch .submit {
  position: relative;
  float: left;
  width: 40px;
  height: 32px;
  border: 1px solid #ccc;
  background: #ccc;
  font-size: 14px;
  cursor: pointer;
}

.innersearch .submit i {
  display: block;
  width: 16px;
  height: 16px;
  background-position: -391px -29px;
}

.select {
  margin-top: 20px;
  border: 1px solid #ddd;
  line-height: 24px;
}

.select:not(.on) .needhide {
  display: none;
}

.select.on .tj > .open {
  display: none;
}

.select:not(.on) .tj > .close {
  display: none;
}

.select .opt {
  padding: 0 10px;
  height: 40px;
  background: #f4f4f4;
  line-height: 40px;
}

.select .opt span {
  position: relative;
  display: inline-block;
  margin-right: 3px;
  padding: 0 24px 0 5px;
  height: 24px;
  border: 1px solid #eee;
  background: #fff;
  line-height: 24px;
}

.select .opt span.result {
  border: 0;
  background: 0;
}

.select .opt span.result label {
  color: #e16070;
}

.select .opt span.result b {
  color: #e16070;
  font-weight: normal;
}

.select .opt span label {
  color: #0cb95f;
}

.select .opt span a {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 11px;
  height: 11px;
  background-image: lo("/common/images/icons.png");
  background-position: -282px -29px;
}

.select .opt span a:hover {
  background-position: -304px -29px;
}

.select .opt .h {
  color: #e16070;
}

.select .opt .b {
  margin: 0 5px;
}

.select .tj {
  float: right;
  color: #999;
}

.select .tj a {
  color: #999;
}

.select .tj a:hover {
  color: #0cb95f;
}

.select .tj b {
  margin: 0 5px;
  color: #333;
  font-weight: normal;
}

.select .tj .icon-arrow_top {
  display: inline-block;
  margin-left: 6px;
  width: 15px;
  height: 15px;
  background-position: -291px -27px;
  vertical-align: text-bottom;
}

.select .tj .icon-arrow_bottom {
  display: inline-block;
  margin-left: 6px;
  width: 15px;
  height: 15px;
  background-position: -123px 0;
  vertical-align: text-bottom;
}

.select .sitems {
  padding: 5px 10px;
  background: #fff;
}

.select .sitems li {
  position: relative;
  overflow: hidden;
  padding: 6px 0 6px 100px;
  border-bottom: 1px solid #efefef;
  line-height: 16px;
}

.select:not(.on) .sitems li {
  border-bottom: 0;
}

.select .sitems li.nb {
  border-bottom: 0;
}

.select .sitems li span.bit {
  position: absolute;
  top: 12px;
  left: 0;
  float: none;
  padding: 0;
  width: 70px;
  height: 16px;
  color: #999;
  text-align: right;
  line-height: 16px;
}

.select .sitems li span.bit2 {
  position: absolute;
  top: 12px;
  left: 0;
  float: none;
  padding: 0;
  width: 75px;
  height: 16px;
  color: #999;
  text-align: right;
  line-height: 16px;
}

.select .sitems li span.plus,
.select .sitems li span.sub {
  position: absolute;
  top: 9px;
  right: 5px;
  width: 45px;
  height: 24px;
  line-height: 24px;
  cursor: pointer;
  color: #999;
}

.select .sitems li span i.icons {
  position: absolute;
  top: 4px;
  right: 0;
  display: block;
  width: 15px;
  height: 15px;
}

.select .sitems li span.plus i {
  background-position: -123px 0;
}

.select .sitems li span.sub i {
  background-position: -291px -27px;
}

.select .sitems li .more {
  display: none;
}

.select .sitems li a {
  float: left;
  overflow: hidden;
  margin: 0 11px 0 0;
  padding: 7px 10px;
  width: 62px;
  white-space: nowrap;
}

.select .sitems li a.cur {
  color: #0cb95f;
}

.select .sitems li a:hover {
  color: #0cb95f;
}

.select .sitems.tl li a {
  width: 68px;
}

.select .sitems li a i {
  color: #999;
  cursor: pointer;
  font-style: normal;
}

.tdgcontainer {
  position: fixed;
  position: fixed;
  bottom: 0;
  bottom: px;
  left: 0;
  z-index: 1003;
  display: none;
  width: 100%;
}

.tdgcontainer .infotip {
  display: none;
  margin: 0 auto;
  width: 1190px;
  border: 1px solid #db9a9a;
  background: #ffe8e8;
  color: #c00;
  text-align: center;
  line-height: 30px;
  padding: 5px 0;
}

.tdg {
  margin: 0 auto;
  width: 1190px;
  border: 1px solid #ddd;
  background: #fff;
  -webkit-box-shadow: 0 0 13px 0 #ccc;
  -moz-box-shadow: 0 0 13px 0 #ccc;
  box-shadow: 0 0 13px 0 #ccc;
  text-align: left;
  text-align: left;
}

.tdg .bcontent {
  margin: 0 auto;
  padding: 0 0 10px;
  width: 980px;
  height: 180px;
  border: 2px solid #f4f4f4;
  text-align: left;
}

.tdg .top {
  position: relative;
  width: 1190px;
  height: 36px;
  line-height: 36px;
}

.tdg .top .tab-btns {
  height: 40px;
  border-bottom: 1px solid #ccc;
  background: #f4f4f4;
}

.tdg .top ul {
  list-style: outside none none;
}

.tdg .top li {
  position: relative;
  float: left;
  width: 125px;
  height: 40px;
  border-right: 1px solid #ccc;
  text-align: center;
  line-height: 30px;
}

.tdg .top .tab-btns a.cur {
  position: relative;
  height: 41px;
  background: #fff;
  color: #666;
  color: #0cb95f;
  font-weight: normal;
}

.tdg .top .tab-btns a {
  color: #666;
  text-decoration: none;
}

.tdg .top .tab-btns a {
  display: block;
  font-size: 14px;
  line-height: 40px;
}

.tdg .bd {
  position: relative;
  display: none;
  overflow: hidden;
  width: 1190px;
}

.tdg .bd .item1 {
  position: relative;
  float: left;
  padding: 20px 10px;
  width: 231px;
  height: 85px;
  border-right: 1px solid #f1f1f1;
  border-bottom: 1px solid #f1f1f1;
  line-height: 18px;
}

.tdg .bd .item1.n {
  border-bottom: 0;
}

.tdg .bd .item1.nr {
  border-right: 0;
}

.tdg .bd .item1 .photo {
  float: left;
  margin-right: 10px;
  padding: 2px;
  border: 1px solid #eee;
  vertical-align: middle;
  text-align: center;
}

.tdg .bd .item1 .photo img {
  width: 78px;
  height: 78px;
}

.tdg .bd .item1 .txt {
  overflow: hidden;
  height: 38px;
}

.tdg .bd .item1 .st {
  overflow: hidden;
  margin: 4px 0;
  height: 20px;
}

.tdg .bd .item1 .price {
  overflow: hidden;
}

.tdg .bd .item1 a.btn5 {
  position: absolute;
  right: 0;
  bottom: 0;
  display: none;
}

.tdg .bd .item1 .no {
  margin: 32px 0 0 120px;
  color: #eee;
  font-size: 50px;
  font-family: arial;
}

.tdg .bd .item1.w2 {
  width: 276px;
}

.tdg .bd .item1.w2.nr {
  width: 279px;
}

.tdg .top .operate {
  position: absolute;
  top: 0;
  right: 0;
  clear: both;
  padding-right: 22px;
  width: 190px;
  height: 40px;
  text-align: right;
  line-height: 40px;
}

.tdg .tdgop {
  position: absolute;
  top: 90px;
  right: 1px;
  width: 160px;
}

.tdg .tdgop a {
  float: left;
  margin: 0 27px;
}

.tdg .tdgop a.btn4 {
  margin-top: 10px;
  width: 58px;
}

.reginbox {
  position: absolute;
  top: 22px;
  left: -1px;
  z-index: 9999;
  overflow: hidden;
  padding: 6px;
  width: 300px;
  border: 1px solid #e5e5e5;
  background: #fff;
  display: none;
}

.reginbox.big {
  width: 410px;
  _width: 130px;
}

.reginbox .shuom {
  padding: 3px 0 3px 6px;
  vertical-align: middle;
  text-align: left;
}

.reginbox .dline {
  clear: both;
  display: block;
  margin: 5px 0;
  padding: 0;
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed #ddd;
  font-size: 1px;
  line-height: 1px;
}

.reginbox ul {
  display: block;
  overflow: hidden;
  width: 285px;
  list-style-type: none;
  cursor: auto;
}

.reginbox.big ul {
  width: 400px;
}

.reginbox ul li {
  float: left;
  overflow: hidden;
  padding: 2px 12px 2px 3px;
  width: 42px;
  text-align: left;
  white-space: nowrap;
  word-break: keep-all;
}

.reginbox ul li a {
  float: left;
  padding: 2px 3px;
  color: #333;
  text-decoration: none;
  line-height: 16px;
}

.reginbox ul li a:hover {
  background: #0cb95f;
  color: #fff;
}

.btip {
  position: fixed;
  bottom: 0;
  z-index: 999;
  display: none;
  width: 100%;
  height: 100px;
  background: #333;
  color: #fff;
  font-size: 50px;
  line-height: 100px;
  opacity: 0.9;
  text-align: center;
}

.btip a {
  color: #080;
}

i.warn {
  background-position: -73px -212px;
  height: 22px;
  position: absolute;
  width: 24px;
}

.warntip {
  background-color: #fff;
  border: 1px solid #e5e5e5;
  margin: 10px 0;
  padding: 10px 10px 10px 40px;
  color: #e16070;
  position: relative;
}

.warntip i.warn {
  left: 7px;
  top: 7px;
}

.infotip {
  border: 1px solid #e5e5e5;
  color: #999;
  margin: 10px 0;
  padding: 10px;
}

.dfix {
  position: fixed;
  top: 0;
  z-index: 9999;
}

.moreload {
  background: #f4f4f4;
  border: 1px solid #e5e5e5;
  margin: 10px 0;
  padding: 10px 20px;
  text-align: center;
  cursor: pointer;
}

.had {
  margin: 10px 0;
}

.had a {
  display: block;
}

.had a img {
  width: 1190px;
}

.share {
  padding: 5px 0;
  height: 28px;
}

.share .ids {
  float: left;
  margin-top: 5px;
}

.share .item {
  position: relative;
  float: right;
  display: block;
  padding: 0 0 0 20px;
  margin-top: 6px;
}

.share .item b {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  overflow: hidden;
  height: 22px;
}

.share .item.s b {
  width: 18px;
  height: 18px;
  background-position: -163px -24px;
}

.share .item.f b {
  width: 18px;
  height: 18px;
  background-position: -144px -25px;
}

.share .item.f.cur b {
  width: 18px;
  height: 18px;
  background-position: -181px -4px;
}

.share .item em {
  color: #999;
}

#bdshare {
  float: right;
}

.share .bds_more {
  background: 0;
  background-image: none;
}

.share a {
  text-decoration: none;
  cursor: pointer;
}

.share .line {
  float: right;
  margin: 0 6px;
  color: #e5e5e5;
  margin-top: 5px;
}

.share .fx {
  float: left;
  display: block;
  margin-left: 20px;
}

.tipinfo {
  border: 1px solid #e5e5e5;
  position: relative;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  font-size: 14px;
  margin-bottom: 50px;
  padding: 80px 0;
}

.tipinfo .info {
  position: relative;
  margin: 0 auto;
  width: 450px;
  padding-left: 50px;
}

.tipinfo .info .suc {
  position: absolute;
  left: 0;
  top: 5px;
  width: 38px;
  height: 24px;
  background-position: -314px -110px;
}

.tipinfo .info h6 {
  color: #0cb95f;
  font-size: 24px;
  margin-bottom: 10px;
}

.tipinfo .info {
  position: relative;
}

.tipinfo .info p {
  line-height: 40px;
  height: 40px;
  clear: both;
}

.tipinfo .info p a {
  color: #0cb95f;
}

.tipinfo .info p a.txt {
  color: #666;
  text-decoration: underline;
}

.tipinfo .info p a.sbtn2 {
  padding: 0 20px;
  margin-top: 20px;
  margin-right: 20px;
}

.outblock {
  border: 1px solid #e5e5e5;
  padding: 30px;
}

.outblock .formtip {
  color: #666;
  padding: 10px 0 30px 0;
  font-size: 18px;
  text-align: center;
  font-family: "\5FAE\8F6F\96C5\9ED1";
}

.outblock .ws {
  border: 1px solid #e5e5e5;
  width: 770px;
  margin-bottom: 60px;
  padding-bottom: 30px;
}

.outblock .ws .htip {
  padding: 30px 0;
  color: #999;
  text-align: center;
}

.guidecontainer {
  margin: 20px 0;
  display: none;
}

.guidecontainer .other {
  float: left;
  margin-left: 20px;
  width: 240px;
}

.guide {
  float: left;
  width: 928px;
  border: 1px solid #e5e5e5;
}

.guide .ytip {
  color: #999;
  line-height: 40px;
  padding-left: 20px;
}

.guide .ytip.warning {
  border-bottom: 1px solid #e5e5e5;
  color: red;
}

.guide {
  width: 1188px;
}

.br0 {
  border-right: 0 !important;
}

.guidecontainer .r {
  float: right;
  width: 220px;
}

.guidecontainer .guide2 {
  width: 950px;
}

.guidecontainer .guide2 .subinfo dd {
  width: 719px;
}

.guidecontainer .guide2 .simagelist a {
  width: 316px;
  padding: 8px 0;
  text-align: center;
  height: 300px;
}

.guidecontainer .guide2 .simagelist a img {
  vertical-align: top;
  width: 300px;
  height: 300px;
  padding: 0;
}

.guide h2 {
  font-size: 18px;
  line-height: 50px;
  height: 50px;
  text-align: center;
  background: #f4f4f4;
  border-bottom: 1px solid #e5e5e5;
}

.guide .subinfo .title {
  background: #f4f4f4;
  line-height: 40px;
  height: 40px;
  display: block;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  padding-left: 15px;
  font-size: 14px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
}

.guide .subinfo dt {
  padding-left: 15px;
  line-height: 40px;
  height: 40px;
  width: 200px;
  float: left;
  border-top: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
}

.guide .subinfo dd {
  padding-left: 15px;
  line-height: 40px;
  height: 40px;
  width: 957px;
  float: left;
  border-top: 1px solid #e5e5e5;
}

.guide .subinfo dd strong {
  font-weight: normal;
}

.guide .subinfo dt.first {
  border-top: 0;
}

.guide .subinfo dd.first {
  border-top: 0;
}

.guide .subinfo .rcode {
  position: absolute;
  border: 1px solid #eee;
  border-top: 0;
  border-bottom: 0;
  background: #fff;
  right: 0;
  top: 42px;
}

.guide .subinfo .rcode img {
  padding: 0 13px;
  height: 118px;
  width: 118px;
}

.guide .subinfo .rcode .txt {
  text-align: center;
  padding: 0 5px 5px 5px;
  line-height: 18px;
  color: #aaa;
}

.guide .maininfo {
  width: auto;
}

.guide .maininfo dt {
  background: #f4f4f4;
  line-height: 40px;
  height: 40px;
  display: block;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  padding-left: 15px;
  font-weight: bold;
}

.guide .maininfo dt {
  font-size: 14px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
}

.guide .maininfo dt strong {
  font-weight: normal;
}

.guide .maininfo dt img {
  vertical-align: middle;
}

.guide .maininfo dd {
  background: #fff;
  display: block;
  line-height: 24px;
  padding: 10px 20px;
}

.guide .maininfo dd table td {
  background: #fff;
  border: 1px solid #e5e5e5;
  font-family: "宋体";
  font-size: 12px;
  text-align: left;
  padding: 5px 10px;
}

.guide .ytip.warning {
  border-bottom: 1px solid #e5e5e5;
  color: #999;
  line-height: 24px;
  padding: 10px 10px 10px 20px;
}

.guide .warntip {
  border: 0;
  border-bottom: 1px solid #e5e5e5;
  margin: 0;
  padding: 14px 10px 14px 40px;
}

.guide .warntip i.warn {
  top: 10px;
  left: 10px;
}

.guide .maininfo dd.simagelist {
  padding: 0;
}

.simagelist a {
  border-right: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  display: block;
  float: left;
  width: 385px;
  padding: 5px;
}

.simagelist a.nbr {
  border-right: 0;
  width: 386px;
}

.simagelist a.nbb {
  border-bottom: 0;
}

.simagelist a img {
  height: 300px;
  vertical-align: middle;
  width: 300px;
  padding: 0 45px;
}

.ov-v {
  overflow: visible !important;
}

.bb0 {
  border-bottom: 0 !important;
}

.bt0 {
  border-top: 0 !important;
}

.goods2 {
  border-left: 1px solid #e5e5e5;
}

.goods2 li {
  display: block;
  padding: 10px 15px;
  border-right: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  float: left;
  height: 230px;
  width: 158px;
}

.goods2 li.nr {
  width: 162px;
}

.goods2 li a {
  display: block;
  width: 156px;
  height: 156px;
}

.goods2 li .photo img {
  height: 156px;
  width: 156px;
  transition: transform 0.2s linear 0s;
}

.goods2 li .photo img:hover {
  transform: translateX(-8px);
}

.goods2 li .price {
  text-align: left;
  margin: 8px 0;
}

.goods2 li .price .money {
  font-size: 14px;
}

.goods2 li .price del {
  color: #999;
  margin-left: 10px;
  font-size: 12px;
}

.goods2 li a.txt {
  display: block;
  height: 20px;
  line-height: 18px;
  margin-top: 5px;
  overflow: hidden;
}

.goods2 li .st {
  color: #999;
  display: block;
  height: 20px;
  line-height: 20px;
  margin: 2px 0;
  overflow: hidden;
}

.goods2.b6 li {
  width: 157px;
  height: 235px;
  padding: 10px 20px;
}

.goods2.b6 li .photo img {
  width: 155px;
  height: 155px;
}

.goods2.b6 li.nr {
  width: 158px;
}

.goods2.b5 li {
  width: 148px;
  height: 235px;
  padding: 10px 20px;
}

.goods2.b5 li .photo img {
  width: 150px;
  height: 150px;
}

.goods2.b5 li.nr {
  width: 152px;
}

.goods3 li {
  display: block;
  padding: 10px;
  border: 1px solid #e5e5e5;
  float: left;
  height: 230px;
  width: 156px;
  margin: 20px 15px 0 0;
  background: #fff;
}

.goods3 li.last {
  margin-right: 0;
}

.goods3 li a {
  display: block;
  text-align: center;
}

.goods3 li .photo img {
  height: 152px;
  width: 152px;
  transition: transform 0.2s linear 0s;
}

.goods3 li img:hover {
  transform: translateX(-8px);
}

.goods3 li .price {
  text-align: left;
  margin: 8px 0;
}

.goods3 li .price .money {
  font-size: 14px;
}

.goods3 li .price del {
  color: #999;
  margin-left: 10px;
  font-size: 12px;
}

.goods3 li a.txt {
  display: block;
  height: 20px;
  line-height: 18px;
  margin-top: 5px;
  overflow: hidden;
  text-align: left;
}

.goods3 li .st {
  color: #999;
  display: block;
  height: 20px;
  line-height: 20px;
  margin: 2px 0;
  overflow: hidden;
}

.ipp {
  margin: 20px 0;
  border: 1px solid #e5e5e5;
}

.ipp li {
  float: left;
  padding: 18px;
}

.ipp li a {
  display: block;
  width: 160px;
  height: 80px;
  border-right: 1px dotted #e5e5e5;
}

.ipp li.last a {
  border-right: 0;
}

.ipp li a img {
  width: 160px;
  height: 80px;
}

.for404 {
  width: 492px;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 50px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
}

.for404 .img {
  background-image: lo("/common/images/404.png");
  background-repeat: no-repeat;
  width: 492px;
  height: 215px;
}

.for404 .info {
  padding-left: 70px;
}

.for404 h1 {
  font-size: 30px;
  font-weight: normal;
  margin-top: 50px;
  text-align: center;
  color: #666;
}

.for404 .info p {
  font-size: 16px;
  color: #999;
  line-height: 30px;
}

.for404 .info a {
  color: #0cb95f;
}

.error {
  width: 492px;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 50px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  position: relative;
  padding-left: 100px;
}

.error .img {
  position: absolute;
  top: 30px;
  left: 0;
  width: 65px;
  height: 60px;
  background-image: lo("/common/images/icons.png");
  background-position: -5px -196px;
}

.error h1 {
  font-size: 24px;
  font-weight: normal;
  margin-top: 50px;
  color: #e16070;
}

.error .info p {
  font-size: 16px;
  color: #999;
  line-height: 50px;
}

.error .info a.green {
  color: #0cb95f;
  text-decoration: underline;
  font-size: 14px;
}

.error .info a.btn3 {
  margin-top: 10px;
  font-size: 14px;
}

.error .textarea {
  background: #fff none repeat scroll 0 0;
  border: 1px solid #e5e5e5;
  color: #666;
  font-size: 12px;
  height: 100px;
  line-height: 24px;
  margin: 3px 0;
  overflow: auto;
  padding: 12px;
  vertical-align: middle;
  width: 400px;
}

.bnav {
  margin: 20px 0;
}

.bnav li {
  width: 150px;
  height: 140px;
  margin-right: 10px;
  float: left;
  background: #f4f4f4;
  padding: 15px 20px;
}

.bnav li.last {
  margin-right: 0;
}

.bnav li.hover {
  background: #0cb95f;
}

.bnav li.hover a {
  color: #fff;
}

.bnav li h3 {
  margin-bottom: 5px;
  font-family: "宋体";
}
.catlist .maincat i,
.catlist s {
  background-image: url(../assets/icons.png);
  _background-image: url(/common/images/icons.jpg);
  display: block;
  position: absolute;
}
.bnav li h3 a {
  font-weight: bold;
  font-size: 12px;
  color: #666;
}

.bnav li .subct a {
  display: block;
  float: left;
  width: 75px;
  padding: 5px 0;
  color: #666;
}

.bnav li.hover .subct a {
  color: #fff;
}

.links {
  border: 1px solid #e5e5e5;
  margin: 20px 0;
}

.links .lnav {
  border-bottom: 1px solid #e5e5e5;
  line-height: 40px;
  height: 40px;
  background: #f4f4f4;
}

.links .hnav li {
  float: left;
  background: #f4f4f4;
  width: 137px;
}

.links .hnav li a {
  font-family: "\5FAE\8F6F\96C5\9ED1";
  font-size: 14px;
  display: block;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #333;
  text-decoration: none;
}

.links .hnav li a.cur {
  background: #fff;
  border-bottom: 1px solid #fff;
  height: 41px;
  border-right: 1px solid #e5e5e5;
}

.links .hnav li:first-child a {
  border-right: 0;
}

.links .hnav li + li a {
  border-left: 1px solid #e5e5e5;
}

.links .linkimg {
  padding: 10px 15px;
}

.links .linkimg a {
  display: block;
  float: left;
  border: 1px solid #eaeaea;
  margin: 15px 15px 15px 15px;
  width: 160px;
  height: 60px;
  text-align: center;
}

.links .linkimg a img {
  height: 30px;
  margin: 15px 0;
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: gray;
  opacity: 0.5;
}

.links .linktxt {
  display: block;
  padding: 20px 35px;
  overflow: hidden;
}

.links .linktxt a {
  display: block;
  float: left;
  margin: 10px 0;
  width: 110px;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.links .linktxt a:hover {
  color: #0cb95f;
}

.sslist li {
  border-top: 1px dotted #e5e5e5;
  padding: 20px 20px 20px 0;
  position: relative;
}

.sslist li.first {
  border-top: 0;
}

.sslist .img {
  float: left;
  width: 185px;
  height: 120px;
}

.sslist .img .con img {
  border: 1px solid #e5e5e5;
  height: 80px;
  width: 160px;
  padding: 10px;
}

.sslist .img .addr {
  text-align: center;
  padding: 10px 0;
  color: #666;
}

.sslist .info {
  float: left;
  width: 630px;
  margin-left: 20px;
  color: #999;
}

.sslist .info strong {
  margin-bottom: 10px;
  font-weight: normal;
  display: block;
}

.sslist .info strong a {
  font-size: 18px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  display: block;
  float: left;
}

.sslist .info strong a .h {
  color: red;
}

.sslist .info strong i {
  background: #e16070;
  border-radius: 10px;
  color: #fff;
  display: block;
  float: left;
  font-style: normal;
  height: 16px;
  padding: 2px 9px;
  text-align: center;
  margin: 6px 0 0 5px;
}

.sslist .info strong i.y {
  background: #fff;
  border: 1px solid #f90;
  border-radius: 14px;
  color: #f90;
  display: block;
  float: left;
  font-style: normal;
  height: 16px;
  margin: 2px 0 0 10px;
  padding: 4px 12px;
  text-align: center;
}

.sslist .info strong i.z {
  background: #fff;
  border: 1px solid #0cb95f;
  border-radius: 14px;
  color: #0cb95f;
  display: block;
  float: left;
  font-style: normal;
  height: 16px;
  margin: 2px 0 0 10px;
  padding: 4px 12px;
  text-align: center;
}

.sslist .info p {
  line-height: 30px;
  clear: both;
}

.sslist .info p.pf span.star {
  margin-top: -3px;
}

.sslist li .spec {
  position: absolute;
  right: 20px;
  top: 22px;
}

.slidenav {
  position: fixed;
  right: 2px;
  top: 233px;
  background: #fff;
  width: 52px;
  z-index: 9997;
  display: none;
  -webkit-transform: translateZ(0);
}

.slidenav .i {
  display: block;
  height: 30px;
  width: 30px;
  background-image: lo("/common/images/icons.png");
  _background-image: lo("/common/images/icons.jpg");
  border: 1px solid #e5e5e5;
  border-bottom: 0;
  padding: 10px;
  text-decoration: none;
  position: relative;
}

.slidenav .i.last {
  border-bottom: 1px solid #e5e5e5;
}

.slidenav .i i {
  display: none;
  width: 20px;
  height: 20px;
  line-height: 20px;
  background: #e50000;
  color: #fff;
  text-align: center;
  border-radius: 20px;
  position: absolute;
  right: 5px;
  top: 5px;
  font-style: normal;
  font-size: 12px;
  font-family: Arial;
  opacity: 0.8;
}

.slidenav .i.hover i {
  opacity: 0;
}

.slidenav .i.i1 {
  background-position: -91px -308px;
  background-color: #0cb95f;
  border-color: #0cb95f;
}

.slidenav .i.i2 {
  background-position: -138px -307px;
}

.slidenav .i.i3 {
  background-position: -188px -307px;
}

.slidenav .i.i4 {
  background-position: -236px -307px;
}

.slidenav .i.i5 {
  background-position: -284px -307px;
  display: none;
}

.slidenav .i.i6 {
  background-position: -335px -307px;
}

.slidenav .i.i6.hover {
  border-top: 1px solid #fff;
}

.slidenav .i .contact {
  position: absolute;
  right: 51px;
  top: -1px;
  display: none;
  font-size: 0;
  padding-right: 10px;
}

.slidenav .i .contact .qqcon {
  background: #0cb95f;
  padding: 8px;
  width: 126px;
}

.slidenav .i .contact .qqcon p {
  color: #fff;
  line-height: 1;
  font-size: 12px;
  position: relative;
}

.slidenav .i .contact .qqcon .js {
  height: 35px;
  background: #fff;
  padding: 10px 0;
  text-align: center;
  margin-top: 8px;
}

.slidenav .i .contact .qqcon .js a {
  display: block;
}

.slidenav .i .contact .qqcon .js a img {
  width: 110px;
  height: 34px;
  vertical-align: top;
}

.slidenav .i .contact .qqcon p img {
  position: absolute;
  top: -4px;
  right: 2px;
  cursor: pointer;
  height: 20px;
  width: 20px;
}

.slidenav .i .contact .qqcon .js + img {
  height: 90px;
  width: 126px;
}

.slidenav .i .gzwm {
  position: absolute;
  right: 51px;
  top: -103px;
  background: #fff;
  padding: 15px 20px;
  border: 1px solid #e5e5e5;
  color: #333;
  border-right: 0;
  white-space: nowrap;
  line-height: 24px;
  width: 155px;
  display: block;
  height: 198px;
  width: 90px;
  text-align: center;
  display: none;
}

.slidenav .i .gzwm .wxsbg {
  background-image: lo("/common/images/wxsmall.png");
  width: 80px;
  height: 80px;
  margin-bottom: 5px;
}

.slidenav .i .gzwm .wbsbg {
  background-image: lo("/common/images/icons.png");
  _background-image: lo("/common/images/icons.jpg");
  width: 28px;
  height: 24px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-position: -364px -234px;
}

.slidenav .i .gzwm .gzwb {
  background: #ee7076;
  color: #fff;
  width: 66px;
  display: block;
}

.slidenav .i.i3.hover .gzwm {
  display: block;
}

.slidenav .i.i7 {
  background-position: -121px -358px;
}

.slidenav .i .app {
  position: absolute;
  right: 51px;
  top: -103px;
  background: #fff;
  padding: 15px 20px;
  padding-top: 32px;
  border: 1px solid #e5e5e5;
  color: #333;
  border-right: 0;
  white-space: nowrap;
  line-height: 24px;
  width: 155px;
  display: block;
  height: 156px;
  width: 90px;
  text-align: center;
  display: none;
}

.slidenav .i .app .appbg {
  background-image: lo("/common/images/app80right.png");
  width: 80px;
  height: 80px;
  margin-bottom: 5px;
}

.slidenav .i .app .gzwb {
  background: #0cb95f;
  color: #fff;
  width: 75px;
  display: block;
  margin-top: 5px;
}

.slidenav .i.i7.hover .app {
  display: block;
}

.slidenav .i .t {
  display: none;
  height: 30px;
  width: 30px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}

.slidenav .i.hover {
  background-color: #0cb95f;
  color: #fff;
  border-color: #0cb95f;
}

.slidenav .i.hover .t {
  display: block;
  background: #0cb95f;
  color: #fff;
  border-color: #0cb95f;
}

.slidenav-left {
  position: fixed;
  left: 5px;
  top: 234px;
  width: 118px;
  z-index: 99999;
  display: none;
  height: 238px;
}

.slidenav-left .c {
  position: absolute;
  right: 8px;
  top: 24px;
  background-image: lo("/common/images/icons.png");
  background-position: -357px -14px;
  display: block;
  height: 14px;
  width: 14px;
}

.links2 {
  border: 1px solid #e5e5e5;
  margin: 20px 0;
}

.links2 .lnav {
  border-bottom: 1px solid #e5e5e5;
  line-height: 40px;
  height: 40px;
  background: #f4f4f4;
}

.links2 .hnav li {
  float: left;
  background: #f4f4f4;
  width: 137px;
}

.links2 .hnav li a {
  font-family: "\5FAE\8F6F\96C5\9ED1";
  font-size: 14px;
  display: block;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #333;
  text-decoration: none;
  border-right: 1px solid #e5e5e5;
}

.links2 .hnav li a.cur {
  background: #fff;
  border-bottom: 1px solid #fff;
  height: 41px;
}

.links2 .linkimg {
  padding: 10px 15px;
}

.links2 .linkimg a {
  display: block;
  float: left;
  border: 1px solid #eaeaea;
  margin: 15px 15px 15px 15px;
  width: 160px;
  height: 60px;
  text-align: center;
}

.links2 .linkimg a img {
  height: 30px;
  margin: 15px 0;
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: gray;
  opacity: 0.5;
}

.links2 .linktxt {
  display: block;
  padding: 5px 35px;
  border-bottom: 1px dashed #eee;
}

.links2 .linktxt.last {
  border-bottom: 0;
}

.links2 .linktxt a {
  display: block;
  float: left;
  margin: 10px 0;
  width: 110px;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.links2 .linktxt a.first {
  font-weight: bold;
  width: 110px;
  pointer-events: none;
}

.links2 .linktxt a:hover {
  color: #0cb95f;
}

.bigwrap {
  overflow: hidden;
}

.bigwrap td img {
  display: block;
}

.tagdesc {
  border: 1px solid #ddd;
  padding: 10px 20px;
}

.tagdesc .title {
  color: #cba831;
  font-size: 16px;
  font-weight: bold;
  margin-right: 0.5em;
}

.tagdesc p {
  color: #bbb;
  line-height: 20px;
  padding-right: 20px;
  max-height: 40px;
  overflow: hidden;
}

.tagdesc p a.more {
  color: #0cb95f;
}

.tagdesc p a.more:hover {
  color: #080;
}

.footermask {
  opacity: 0.5;
  background: #e5e5e5;
}

.bad {
  margin: 20px 0;
  width: 100%;
}

.im-chat-tips {
  background-color: #d4d4d4;
  line-height: 20px;
  font-size: 12px;
  text-align: center;
  padding: 0 15px;
  color: #fff;
  display: inline-block;
  *display: inline;
  border-radius: 10px;
  margin-top: 8px;
}
.im-chat-tips:hover {
  cursor: default;
}
.im-chat-icon {
  width: 24px;
  height: 24px;
  display: inline-block;
  *display: inline;
  vertical-align: text-bottom;
  margin: 0 3px;
  -webkit-user-select: auto;
  -moz-user-select: auto;
  -ms-user-select: auto;
  user-select: auto;
}
.im-side-content {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  height: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.im-side-content .im-chat-icon {
  width: 16px;
  height: 16px;
  margin: 0;
}
.im-side-content .im-input-pic {
  max-width: 24px;
  max-height: 24px;
  margin-right: 5px;
}
.im-dragbar {
  width: 100%;
  padding: 2px 0;
  position: relative;
}
.im-dragbar:before {
  content: "";
  position: absolute;
  width: 100%;
  border-top: 1px solid #e7e7e7;
  left: 0;
  top: 1px;
}
.im-dragbar:hover {
  cursor: n-resize;
}
.im-input {
  background-color: #fff;
  width: 526px;
  float: left;
  overflow: hidden;
}
.uprecord {
  color: #666;
  margin-top: 10px;
}
.uprecord span {
  font-size: 12px;
}
.instantOn {
  cursor: pointer;
  color: #0cb95f !important;
  margin-left: 10px;
}
.csnoPading {
  padding: 10px 0 !important;
  padding-bottom: 0 !important;
}
.cfvHight {
  height: 32px;
  line-height: 32px !important;
}
.cfvkgTop {
  top: 3px !important;
}
.wzLeft {
  color: #999;
  padding-left: 12px !important;
}
.wzRight {
  text-align: right !important;
  padding-right: 40px !important;
  color: #999;
}
.wzRight_mony {
  color: #e50000;
  margin-left: 10px;
  position: relative;
}
.wzRight_mony i {
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #e50000;
  left: 50%;
  margin-left: -50%;
  top: 50%;
  margin-top: -0.5px;
}
.onFz img,
.onScfz img {
  float: right;
}
.onFz_none,
.zxwNone,
.onScfz_none {
  display: none !important;
}
.links {
  padding: 0 1px;
}
.onScfz {
  margin-top: 10px;
  padding-right: 13px;
}
.cartQr2App {
  position: absolute;
  bottom: 100%;
  right: 0;
  width: 342px;
  height: 406px;
  background-color: #fff;
  border: solid 1px #ddd;
  text-align: center;
}
.cartQr2App__header {
  position: relative;
  height: 68px;
  line-height: 1;
  background-color: #f8f8f8;
  overflow: hidden;
}
.cartQr2App__header .title {
  margin-top: 18px;
  font-size: 16px;
  color: #333;
  font-weight: bold;
}
.cartQr2App__header .text {
  margin-top: 6px;
  font-size: 14px;
  color: #666;
}
.cartQr2App__header .close {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 48px;
  color: #999;
  z-index: 2;
  line-height: 0.8em;
  text-decoration: none;
}
.cartQr2App__qr {
  position: relative;
  margin-top: 10px;
  width: 278px;
  height: 278px;
}
.cartQr2App__qr > img {
  display: block;
  width: 100%;
  height: 100%;
}
.cartQr2App__side {
  position: absolute;
  margin-top: -114px;
  left: 100%;
}
.cartQr2App__main .tips {
  margin-top: 0.5em;
  font-size: 14px;
  color: #666;
}
.popOut {
  background-color: #fff;
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.dialog_relative {
  position: relative;
}
.dialog_zt {
  font-size: 16px;
  font-family: MicrosoftYaHei;
}
.popOut_title {
  padding: 15px 8px;
  background-color: #f8f8f8;
}
.popOut_title div:nth-of-type(1) {
  margin-left: 0;
}
.popOut_title div:nth-of-type(2) {
  margin-right: 0;
  cursor: pointer;
}
.pb_tle {
  width: 100%;
  text-align: center;
  color: #0cb95f;
  margin-top: 16px;
  margin-bottom: 10px;
}
.pb_img,
.pb_yp,
.pb_yf {
  display: inline-block;
  width: 28%;
  vertical-align: top;
}
.pb_yp div,
.pb_yf div {
  font-size: 12px;
  color: #999;
  line-height: 29px;
}
.pb_yp .pb_ypOne {
  font-size: 15px;
  color: #000;
}
.pb_yf .pb_yfOne {
  font-size: 16px;
  color: #e50000;
}
.pb_img {
  border: 1px solid #f5f5f5;
}
.pb_yp,
.pb_img,
.pb_yf {
  margin-left: 14px;
}
.pb_img img {
  width: 100px;
  height: 100px;
  margin: 10px;
}
.pb_btn {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
}
.pb_btn div {
  font-size: 12px;
  border: 1px solid #0cb95f;
  padding: 6px 29px;
  display: inline-block;
  font-family: MicrosoftYaHei;
  cursor: pointer;
}
.pb_btn .pb_replace:hover {
  opacity: 0.8;
}
.pb_btn .pb_replace:active {
  opacity: 1;
}
.pb_btn .pb_cancel {
  margin-right: 6px;
  color: #0cb95f;
}
.pb_btn .pb_replace {
  margin-left: 6px;
  background-color: #0cb95f;
  color: #fff;
}
.pop_waring div {
  display: inline-block;
  vertical-align: middle;
  font-size: 12px;
  color: #262626;
}
.pop_th,
.pop_waring {
  width: 100%;
}
.pop_waring img {
  width: 20px;
}
.pop_lc {
  justify-content: center;
  -webkit-justify-conten: center;
  text-align: center;
}
.pop_waring,
.pop_th {
  margin-top: 60px;
}
.pop_th {
  margin-bottom: 24px;
  font-size: 12px;
  color: #fff;
  background-color: #0cb95f;
  padding: 10px 36px;
  width: auto !important;
  cursor: pointer;
}
.pop_th:hover {
  opacity: 0.8;
}
.pop_th:active {
  opacity: 1;
}
.tablefix_tel {
  width: 115px !important;
  text-align: center !important;
}
.pb_dh img,
.pb_dh text {
  display: inline-block;
  vertical-align: middle;
}
.pb_dh img {
  margin-right: 6px;
}
.dzw1 {
  text-align: left;
  padding-left: 15px !important;
  color: #f0b404;
}
.lc_hint {
  color: #f2b305;
  float: left;
  margin-left: 20px;
}
.fixed__contact {
  position: fixed;
  top: 338px;
  right: 0;
  z-index: 2;
}
.fixed__contact .small {
  width: 30px;
  height: 184px;
  background-color: #0cb95f;
  color: #fff;
  cursor: pointer;
  overflow: hidden;
}
.fixed__contact .small .icon-arrow_left {
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  transform: rotate(180deg);
  width: 7px;
  height: 13px;
  background-image: lo("/common/images/icons.png");
  background-position: -19px -24px;
  cursor: pointer;
}
.fixed__contact .small img {
  display: block;
  margin: 0 auto;
  margin-top: 16px;
}
.fixed__contact .small .text {
  display: block;
  width: 1em;
  margin: 0 auto;
  margin-top: 10px;
  font-size: 16px;
}
.fixed__contact .big {
  position: absolute;
  top: 0;
  left: 100%;
  width: 126px;
  height: 168px;
  padding: 8px;
  background-color: #0cb95f;
  transition: transform 0.4s;
}
.fixed__contact.on .big {
  transform: translate(-100%, 0);
}
.fixed__contact .header {
  color: #fff;
  padding-bottom: 6px;
}
.fixed__contact .header .text {
  float: left;
}
.fixed__contact .header .icon-arrow_right {
  float: right;
  width: 7px;
  height: 13px;
  background-image: lo("/common/images/icons.png");
  background-position: -19px -24px;
  cursor: pointer;
}
.fixed__contact .main {
  height: 148px;
  background-color: #fafafa;
  overflow: hidden;
}
.fixed__contact .main .btn {
  display: block;
  margin: 12px 8px;
  height: 34px;
  line-height: 34px;
  background-image: linear-gradient(180deg, #0cb95f 7%, #0b9e51 100%),
    linear-gradient(#fafafa, #fafafa);
  border-radius: 5px;
}
.fixed__contact .main .btn img {
  display: inline-block;
  width: 24px;
  height: 24px;
  vertical-align: -7px;
}
.fixed__contact .main .section {
  position: relative;
  margin-left: 6px;
  margin-right: 6px;
  color: #0cb95f;
  text-align: right;
}
.fixed__contact .main .section img {
  position: absolute;
  top: 0;
  left: 0;
}
.fixed__contact .main .section .tel {
  font-size: 16px;
  font-family: Impact;
  font-style: italic;
}
.fixed__contact .main .tips {
  color: #666;
  margin-top: 9px;
  height: 44px;
  line-height: 44px;
  font-size: 14px;
  background-color: #eee;
  text-align: center;
}
.dialog__fillFreightFree {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 836px;
  background-color: #fff;
}
.dialog__fillFreightFree.on {
  animation: dialogrightin 1s backwards;
}
@keyframes dialogrightin {
  0% {
    left: 100%;
    transform: translate(0, -50%);
  }
  100% {
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.dialog__fillFreightFree .header {
  height: 50px;
  padding: 0 16px;
  background-color: #e7e7e7;
}
.dialog__fillFreightFree .header span {
  line-height: 50px;
}
.dialog__fillFreightFree .main {
  background-color: #fff;
  padding: 0 20px;
}
.dialog__fillFreightFree .main .sort a {
  float: left;
  width: 156px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-bottom: 2px solid #f4f4f4;
  text-decoration: none;
}
.dialog__fillFreightFree .main .sort a.on {
  border-bottom-color: #0cba5e;
  color: #0cba5e;
}
.dialog__fillFreightFree .main .box {
  display: none;
  height: 350px;
}
.dialog__fillFreightFree .main .box.on {
  display: block;
}
.dialog__fillFreightFree .main .box .empty {
  padding-top: 100px;
  text-align: center;
  color: #999;
  font-size: 14px;
}
.dialog__fillFreightFree .main .box .empty img {
  vertical-align: -24px;
  margin-left: 10px;
}
.dialog__fillFreightFree .main .column {
  position: relative;
  padding: 0 32px;
  height: 324px;
  display: none;
}
.dialog__fillFreightFree .main .column.on {
  display: block;
}
.dialog__fillFreightFree .main .save {
  position: relative;
}
.dialog__fillFreightFree .main .save:nth-child(odd) {
  float: left;
}
.dialog__fillFreightFree .main .save:nth-child(even) {
  float: right;
}
.dialog__fillFreightFree .main .item {
  float: left;
  width: 330px;
  padding-top: 26px;
  padding-bottom: 10px;
  border-bottom: 2px dashed #e5e5e5;
  background-color: #fff;
}
.dialog__fillFreightFree .main .goods {
  margin-top: 26px;
  position: fixed;
  pointer-events: none;
  z-index: 2;
}
.dialog__fillFreightFree .main .goods img {
  display: block;
  width: 68px;
  height: 68px;
  border: 1px solid #f7f7f7;
}
.dialog__fillFreightFree .main .goods.on1 {
  animation: gotocart1 1.5s forwards;
}
.dialog__fillFreightFree .main .goods.on2 {
  animation: gotocart2 1.5s forwards;
}
.dialog__fillFreightFree .main .goods.on3 {
  animation: gotocart3 1.5s forwards;
}
.dialog__fillFreightFree .main .goods.on4 {
  animation: gotocart4 1.5s forwards;
}
.dialog__fillFreightFree .main .goods.on5 {
  animation: gotocart5 1.5s forwards;
}
.dialog__fillFreightFree .main .goods.on6 {
  animation: gotocart6 1.5s forwards;
}
@keyframes gotocart1 {
  0% {
    transform: translate(0, 0) scale(1, 1);
  }
  100% {
    transform: translate(590px, 340px) scale(0, 0);
  }
}
@keyframes gotocart2 {
  0% {
    transform: translate(0, 0) scale(1, 1);
  }
  100% {
    transform: translate(190px, 340px) scale(0, 0);
  }
}
@keyframes gotocart3 {
  0% {
    transform: translate(0, 0) scale(1, 1);
  }
  100% {
    transform: translate(590px, 240px) scale(0, 0);
  }
}
@keyframes gotocart4 {
  0% {
    transform: translate(0, 0) scale(1, 1);
  }
  100% {
    transform: translate(190px, 240px) scale(0, 0);
  }
}
@keyframes gotocart5 {
  0% {
    transform: translate(0, 0) scale(1, 1);
  }
  100% {
    transform: translate(600px, 140px) scale(0, 0);
  }
}
@keyframes gotocart6 {
  0% {
    transform: translate(0, 0) scale(1, 1);
  }
  100% {
    transform: translate(190px, 140px) scale(0, 0);
  }
}
.dialog__fillFreightFree .main .item .img {
  float: left;
  width: 68px;
  height: 68px;
  border: 1px solid #f7f7f7;
}
.dialog__fillFreightFree .main .item .img img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.dialog__fillFreightFree .main .item .section {
  margin-left: 82px;
}
.dialog__fillFreightFree .main .item .title {
  font-size: 16px;
}
.dialog__fillFreightFree .main .item .title a {
  color: #666;
}
.dialog__fillFreightFree .main .item .text {
  color: #999;
}
.dialog__fillFreightFree .main .item .discount {
  display: inline-block;
  color: #fff;
  background-color: #f00;
  padding: 0 6px;
  border-radius: 4px;
}
.dialog__fillFreightFree .main .item .price {
  margin-top: 1em;
  color: #f00;
}

.dialog__fillFreightFree .main .map {
  padding-top: 12px;
  padding-bottom: 16px;
  text-align: center;
}
.dialog__fillFreightFree .main .map a {
  display: inline-block;
  margin: 0 3px;
  width: 38px;
  height: 38px;
  line-height: 38px;
  background-color: #fcfcfc;
  border: 1px solid #f0f0f0;
  color: #999;
}
.dialog__fillFreightFree .main .map a.on {
  color: #fff;
  border-color: #0cba5e;
  background-color: #0cba5e;
}
.dialog__fillFreightFree .bottom {
  margin-top: 30px;
  padding: 0 22px;
  height: 60px;
  line-height: 60px;
  background-color: #e7e7e7;
}
.dialog__fillFreightFree .bottom .submit {
  display: inline-block;
  margin: 0 16px;
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: #e50000;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
}
.dialog__fillFreightFree .bottom .amount {
  position: relative;
}
.dialog__fillFreightFree .bottom .amount .num {
  position: absolute;
  left: 100%;
  bottom: 100%;
  background-color: #f00;
  color: #fff;
  padding: 0 4px;
  border-radius: 1000px;
  line-height: 1;
  transform: translate(-50%, 50%);
}
.maininfo .info .mobile img {
  padding: 21px;
  width: 75px;
  height: 75px;
  border: 1px solid #e5e5e5;
}
.zoomOverlay {
  position: absolute;
  left: 0;
  top: 0;
  background: #fff;
  z-index: 5000;
  width: 100%;
  height: 100%;
  display: none;
  z-index: 101;
}
.zoomWindow {
  position: absolute;
  left: 110%;
  top: 40px;
  background: #fff;
  height: auto;
  z-index: 11000;
}
.zoomWrapper {
  position: relative;
  border: 1px solid #eee;
  z-index: 110;
}
.zoomWrapperTitle {
  display: block;
  background: #999;
  color: #fff;
  height: 18px;
  line-height: 18px;
  width: 100%;
  overflow: hidden;
  text-align: center;
  font-size: 10px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 120;
  -moz-opacity: 0.6;
  opacity: 0.6;
  filter: alpha(opacity=60);
}
.zoomWrapperImage {
  display: block;
  position: relative;
  overflow: hidden;
  z-index: 110;
}
.zoomWrapperImage img {
  border: 0;
  display: block;
  position: absolute;
  z-index: 101;
}
.zoomIframe {
  z-index: -1;
  filter: alpha(opacity=0);
  -moz-opacity: 0.8;
  opacity: 0.8;
  position: absolute;
  display: block;
}
</style>

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
