<template>
  <div>
    <!-- t顶部   -->
    <div class="header_top">
      <div class="container1">
        <ul class="left">
          <li class="n">
            <i class="icons fav"></i>
            <a title="收藏牛站系统，下次访问更方便！" id="addFav" href="javascript:void(0);">收藏牛站系统</a>
            <s></s>
          </li>
          <li id="weixin">
            <i class="icons wx"></i>
            <a title="关注牛站系统微信公众账号，随时随地查药价！" href rel="nofollow">微信查价</a>
            <s></s>
            <div class="wxbig" style="display: none;">
              <div class="pic">
                <img src="@/assets/erweima12.jpg" alt />
              </div>
              <div class="txt">扫一扫,送试用</div>
            </div>
          </li>
        </ul>
        <ul class="right" id="TopNav">
          <li class="entry_btn">
            <a href="javascript:void(0)" @click="ruzhu">商家入驻</a>
          </li>
          <li class="daohang">
            <a href="javascript:void(0);" class="disa" style="text-decoration:none;">网站导航</a>
            <i class="icons dorpdown"></i>
            <div class="line"></div>
          </li>

          <li id="nav_postion">
            <a href="javascript:void(0)" class="disa">收藏夹</a>
            <s></s>
          </li>
          <li class="n">
            <a href="#/shopenter" class="disa" rel="nofollow">企业中心</a>
          </li>
          <li class="person" id="user">
            <a href="#/persional" class="fl disa" rel="nofollow">个人中心</a>
            <!-- <i class="icons dorpdown"></i> -->
            <s></s>
            <div class="line"></div>
            <div class="menu_list" style="display: none;">
              <a href="//www.yaofangwang.com/manage/order/list" rel="nofollow">订单管理</a>
              <a href="//www.yaofangwang.com/manage/address/list" rel="nofollow">地址管理</a>
              <a href="//www.yaofangwang.com/manage/advisoryandreply/list" rel="nofollow">我的咨询</a>
              <a href="//www.yaofangwang.com/ask/MyQuestion" rel="nofollow">我的问答</a>
              <a href="//www.yaofangwang.com/scan/list" rel="nofollow">最近浏览</a>
            </div>
          </li>
          <li class="cart" id="cart">
            <i class="icons cart"></i>
            <a href="javascript:void(0)" class="hi nline disa" rel="nofollow">
              购物车（
              <label id="CartNum">0</label>）
            </a>
            <div class="line"></div>
            <div class="cart_box" style="display: none;">
              <div class="cart_box" style="display: none;">
                您的购物车目前没有任何商品，建议您
                <a class="green" href="#/login">[登录]</a>
                查看
              </div>
            </div>
          </li>
          <!-- <li class="fix" v-if="!this.$cookies.get('username')">
            <a href="#/login" id="a_Referer" rel="nofollow">登录</a>
            /
            <a href="#/register" id="a_Referer_register" rel="nofollow">免费注册</a>
          </li>-->
          <!-- <li class="fix" v-if="this.$cookies.get('username')">
            <a href="javascript:void(0)" id="a_Referer" @click="outlogin" rel="nofollow">退出</a>
            /
            <a href="javascript:void(0)" id="a_Referer_register" rel="nofollow">{{ this.$cookies.get("username") }}
            </a>
          </li>-->
        </ul>
      </div>
    </div>
    <!-- 搜索 -->
    <div class="header">
      <div class="container1">
        <div class="logo">
          <a href="/" class="name" title="牛站系统  ">
            <img src="@/assets/logo.png" alt=" " />
          </a>
        </div>
        <div class="search">
          <form method="get" action=" " id="search" class="search_input" onsubmit="return false">
            <ul class="opt_list">
              <li class="current">
                <a href="javascript:void(0);" rel="search_Yao">商品</a>
                <i></i>
              </li>
            </ul>
            <input
              type="text"
              placeholder="请输入关键词或者商家名称"
              v-model="keyword"
              maxlength="60"
              autocomplete="off"
              id="keyword"
              class="txt"
            />
            <button type="button" class="submit" id="btn_submit" @click.enter="search">搜索</button>
            <div class="suggest" id="result" style="display: none;"></div>
          </form>
        </div>
        <div class="promise">
          <a href="javascript:void(0)" title>400-8524-668</a>
        </div>
      </div>
    </div>
    <div class="nav2">
      <div class="container1" style="width:1200px;margin:0 auto;position:relative">
        <ul class="mainnav clearfix">
          <li class="category">
            <a href="javascript:void(0);">全部商品分类</a>
          </li>
          <li class="home">
            <a id="home" href="/">首页</a>
          </li>
          <li>
            <a id="yao" href="#/shopdetails" title="超市">牛站</a>
          </li>
          <li>
            <a id="yaodian" href="#/shopdata" title="品牌中心">品牌中心</a>
          </li>
          <li>
            <a id="yiyuan" href="#/cityshop" title="大全">大全</a>
          </li>
          <!-- <li><a id="zhaoshang" href="//zhaoshang.yaofangwang.com/">医药招商</a></li> -->
          <li>
            <a id="news" href="#/newpage" title="资讯">资讯</a>
          </li>
          <!-- <li>
            <a id="ask" href="#/dangpage" title="用药问答">用药问答</a>
          </li>-->
          <li>
            <a id="joinin" href="#/shopinput" title="商家入驻">商家入驻</a>
          </li>
        </ul>
        <div class="catlist">
          <ul
            class="maincat b classss"
            ref="koui"
            @mouseleave="moves1"
            @mouseover.capture="addstyle"
          >
            <li
              class="zxyp"
              id="zxyp1"
              v-for="(ele, ind) in this.fenlei"
              :key="ind"
              @mousemove="getdatass($event, ele.list)"
            >
              <h2>
                <a href="javascript:void(0)" title>{{ ele.title }}</a>
              </h2>

              <i>
                <img :src="ele.img|msgFormat" alt />
              </i>
            </li>
          </ul>
          <!-- -->
          <div
            class="subcat clearfix"
            ref="subcat"
            @mouseover="mouse"
            @mouseleave="moves"
            style="display: none;"
          >
            <ul class="sitems">
              <li v-for="(ele, ind) in this.datalist" :key="ind">
                <div style="height:46px">
                  <a class="bit" href="javascript:void(0)" target="_blank" :title="ele.title">
                    {{ ele.title }}
                    <label>
                      <i></i>
                    </label>
                  </a>
                </div>

                <router-link
                  :to="{
                    path: '/shopdetails',
                    query: { oneid: ele.id, twoid: eles.id, vals: eles.title }
                  }"
                  :title="eles.title"
                  v-for="(eles, inds) in ele.list"
                  :key="inds"
                >{{ eles.title }}</router-link>
              </li>
            </ul>
          </div>
        </div>
        <a href="#/shopinput" target="_blank" class="header-img classss" ref="koui1" title="商家入住">
          <img src="@/assets/uie.jpg" width="180" height="330" alt="商家入住" />
          <div class="tad" style="opacity: 0.9;">
            <a href="#/shopinput" target="_blank">
              <img src="@/assets/12.jpg" />
            </a>
            <a href="#/shopinput" target="_blank">
              <img src="@/assets/2232.jpg" />
            </a>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// import $ from "jquery";
// import { logins, usernew, indexdata } from "@/api2";
// import { setTimeout } from "timers";

export default {
  name: "",
  data() {
    return {
      userinfo: [],
      userz: {},
      states: false,
      userns: [],
      news: "",
      obj: {},
      fenlei: [],
      nums: 1,
      datalist: [],
      hover: false,
      keyword: "",
    };
  },
  // inject: ["reloads"],
  methods: {
    ruzhu() {
      this.$router.push({
        path: "/shopenter",
      });
    },
    outlogin() {
      this.$cookies.remove("usernameid");
      this.$cookies.remove("shopid");
      this.$cookies.remove("username");
      // this.reloads();
    },
    leave() {
      document.querySelector(".tabPanel").style.display = "none";
      $(".bigtype").removeClass("background");
    },
    search(e) {
      e.preventDefault();
      let val = this.keyword;
      if (!val) {
        this.$message({
          message: "请输入搜索内容",
          type: "warning",
        });
        return;
      }
      if (window.location.href.indexOf("shopdetails") < 0) {
        this.$router.push({
          path: "/shopdetails",
          query: {
            vals: val,
          },
        });
      } else {
        this.$router.push({ query: { vals: val } });
      }
    },
    login() {
      logins(this.obj)
        .then((val) => {
          if (val.data.status == 1) {
            this.$cookies.set("usernameid", val.data.info.info.id, 0);
            this.userz = val.data.info.info;
            this.$store.dispatch("dass", val.data.info.info.nickname);
            // this.reloads();
            this.$cookies.set("user-name", val.data.info.info.nickname, "2min");
            this.states = true;
            // this.$refs.top_header.style.display = "none";
            this.usernews();
          } else {
            this.$message({
              message: val.data.message,
              type: "warning",
            });
            // alert(val.data.message)
          }
        })
        .catch((err) => {
          throw err;
        });
    },
    getdatass(e, list) {
      this.$refs.subcat.style.display = "block";
      this.datalist = list;
    },
    moves(e) {
      e.target.style.display = "none";
      this.hover = false;
    },
    moves1() {
      setTimeout(() => {
        if (this.hover) {
          this.$refs.subcat.style.opacity = "1";
          this.$refs.subcat.style.display = "block";
        } else {
          this.$refs.subcat.style.display = "none";
          this.$refs.subcat.style.opacity = "0";
        }
      }, 1000);
    },
    newsz() {
      let uid = this.$cookies.get("usernameid");
      if (!uid) {
        // this.$refs.top_header.style.display = "block";
      }
    },
    mouse() {
      this.hover = true;
    },
    register() {
      this.$router.push({
        path: "/shopinput",
      });
    },
    // 首页分类菜单不在首页隐藏调
    geturl() {
      if (window.location.href.slice(-2) != "#/") {
        document.querySelector(".catlist").style.display = "none";
      } else {
        document.querySelector(".catlist").style.display = "block";
      }
    },
    usernews() {
      let uid = { uid: "" };
      uid.uid = this.$cookies.get("usernameid");
      usernew(uid)
        .then((val) => {
          val;
          // console.log(val)
        })
        .catch((err) => {
          throw err;
        });
    },
    ownss() {
      // console.log(555)
      this.$cookies.remove("usernameid");
      this.states = false;
      // this.reloads();
    },
    judge() {
      if (this.$cookies.get("usernameid")) {
        document.querySelector(".nicknamess").style.display = "none";
      } else {
        document.querySelector(".nicknamess").style.display = "block";
      }
      // this.$cookies.get('usernameid') ? document.querySelector('.nicknamess').style.display = 'block' : document.querySelector('.nicknamess').style.display = "none"
    },
    usesrname() {
      this.news = this.$cookies.get("user-name");
    },
    // 导航栏加颜色
    navcolor(event, val) {
      // console.log(val);
      this.$cookies.set("sumnum", val, 0);
      this.nums = val;
      $(event.currentTarget).addClass("actives");
      $(event.currentTarget).siblings().removeClass("actives");
    },
    addstyle(e) {
      this.$refs.subcat.style.opacity = "1";
      if (e.target.localName == "li") {
        $(e.target).addClass("hover").siblings().removeClass("hover");
        // $('.catlist .subcat ').eq($(e.target).index())[0].style.display="block"
        $(".catlist .subcat")
          .eq($(e.target).index())
          .addClass("block")
          .siblings()
          .removeClass("block");
      }
    },
    getDatas() {
      // this.$cookies.set("sumnum", 0, 0);
      indexdata()
        .then((val) => {
          this.fenlei = val.data.list;
        })
        .catch((err) => {
          throw err;
        });
    },
    // 分类信息
    fenleinew(event) {
      // console.log(event.currentTarget.children[1])
      event.currentTarget.children[1].style.display = "block";
    },
    fenleinews(event) {
      event.currentTarget.children[1].style.display = "none";
    },
    // sao () {

    // }
  },
  created() {},
  mounted() {
    // this.geturl();
    // this.getDatas();
    // let afters = window.location.href.indexOf("#");
    // let urls = window.location.href.substr(afters);
    // if (urls == "#/") {
    //   this.$refs.koui.className = "maincat  b";
    //   this.$refs.koui1.className = "header-img";
    // }
    // // 获取分类信息
    // if (this.$cookies.get("sumnum")) {
    //   document.querySelectorAll(".nav a")[
    //     this.$cookies.get("sumnum")
    //   ].className = "navList  actives";
    // } else {
    //   document.querySelectorAll(".nav a")[0].className = "navList  actives";
    // }
    // setTimeout()
    // this.newsz();
    // this.judge()
    // this.usesrname();
  },
  destroyed() {
    // this.$cookies.remove("sumnum");
  },
};
</script>
<style scoped>
.block {
  display: block;
}
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.header {
  /* overflow: hidden; */
}
.catlist .subcat .rmpp .pp a.last {
  margin-right: 0;
}
.icons {
  background-image: url("../assets/icons.png");
  background-repeat: no-repeat;
}

.header_top .left li a {
  white-space: nowrap;
  height: 40px;
  line-height: 40px;
  float: left;
  display: block;
}
.header .container1 {
  position: relative;
  margin: 0 auto 0;
  width: 1190px;
  height: 140px;
}
a {
  color: #333;
  text-decoration: none;
}
.xsqg .cont .item .img {
  display: block;
  height: 190px;
  width: 190px;
  margin-top: 18px;
  position: relative;
}
.header_top {
  height: 40px;
  border-bottom: 1px solid #e5e5e5;
  background: #f4f4f4;
  color: #666;
  line-height: 40px;
  _overflow: hidden;
  min-width: 1190px;
  position: relative;
  z-index: 400;
}
.header_top li s {
  float: left;
  display: block;
  margin: 10px 10px 10px 10px;
  width: 1px;
  height: 20px;
  border-right: 1px solid #e5e5e5;
  font-size: 0;
  overflow: hidden;
}
.header_top .container1 {
  position: relative;
  margin: 0 auto 0;
  width: 1190px !important;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 12px;
}
.header_top .right .daohang .other {
  background: #fff;
  border: 1px solid #ccc;
  position: absolute;
  right: -1px;
  top: 40px;
  z-index: 2;
  width: 450px;
  padding: 10px 0;
  line-height: 1.5;
  display: none;
}

.header .logo {
  position: absolute;
  top: 32px;
  left: 10px;
  width: 330px;
  _width: 336px;
}

.header .search {
  position: absolute;
  top: 39px;
  left: 340px;
  width: 550px;
}
.header {
  position: relative;
  z-index: 300;
}
.header .container {
  position: relative;
  margin: 0 auto 0;
  width: 1190px;
  height: 140px;
}

.header_top .right li.cart {
  width: 110px;
  padding-left: 15px;
}
.header_top .right li.person {
  width: 95px;
  padding-left: 15px;
}
.header_top .left {
  float: left;
  width: 418px;
}
.header_top li {
  position: relative;
  float: left;
  border-right: 1px solid transparent;
  border-left: 1px solid transparent;
  z-index: 9997;
}
.header_top .icons.fav {
  background-position: -2px -4px;
}
#weixin:hover .wxbig {
  display: block !important;
}
.header_top li i {
  float: left;
  display: block;
  margin: 10px 5px 10px 0;
  width: 20px;
  height: 20px;
}
.search_input {
  position: relative;
}
.header .promise a {
  float: right;
  width: 175px;
  height: 40px;
  /* background-image: url(../assets/icons.png); */
  background-position: -88px -262px;
  display: block;
  margin-right: 10px;
  line-height: 40px;
  height: 40px;
  font-size: 28px;
  font-weight: 600;
}
.icons {
  background-image: url(../assets/icons.png);
  background-repeat: no-repeat;
}
.header_top .right {
  float: right;
  width: 766px;
}
.header_top li .wxbig {
  position: absolute;
  top: 40px;
  left: -80px;
  /* display: none; */
}
.wxbig {
  z-index: 99999;
  border: 1px solid #e5e5e5;
  background: #fff;
}
.header_top .icons.app {
  background-position: -68px -3px;
}
.header_top li .appbig {
  position: absolute;
  top: 40px;
  left: -80px;
  display: none;
}
.appbig {
  z-index: 99999;
  border: 1px solid #e5e5e5;
  background: #fff;

  display: none;
}
#app1:hover .appbig {
  display: block;
}
.header_top .right li {
  float: right;
  width: 80px;
  box-sizing: content-box;
}
.xcxbig {
  display: none;
}
.header_top li .xcxbig {
  position: absolute;
  top: 40px;
  left: -80px;
  display: none;
}
.header_top .icons.cart {
  background-position: -88px -3px;
}
.header_top .right li.fix {
  width: 196px;
  text-align: right;
}
.header_top li {
  position: relative;
  float: left;
  border-right: 1px solid transparent;
  border-left: 1px solid transparent;
  z-index: 9997;
}
.header_top .right li.entry_btn a {
  background-color: #046ad6;
  display: block;
  width: 69px;
  height: 22px;
  border-radius: 1px;
  line-height: 22px;
  text-align: center;
  color: #fff;
  margin-top: 9px;
  margin-right: 0;
}
.header_top .right .daohang {
  position: relative;
  padding-left: 20px;
  margin-left: -20px;
}
.header_top .right li {
  float: right;
  width: 80px;
}
.header_top li {
  position: relative;
  float: left;
  border-right: 1px solid transparent;
  border-left: 1px solid transparent;
  z-index: 9997;
}

.header_top .right li a.disa {
  display: block;
  float: left;
}
.header_top .icons.dorpdown {
  background-position: -121px 1px;
  margin-right: 0;
}
.header_top li i {
  float: left;
  display: block;
  margin: 10px 5px 10px 0;
  width: 20px;
  height: 20px;
}
.header_top .right li .line {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10000;
  display: none;
  width: 100%;
  height: 1px;
  border-top: 0;
  border-bottom: 1px solid #fff;
}
.header_top .icons.wx {
  background-position: -49px -3px;
}
.header_top .left li a {
  white-space: nowrap;
  height: 40px;
  line-height: 40px;
  float: left;
  display: block;
}

html {
  height: 100%;
}

* {
  margin: 0 auto;
  padding: 0;
}

body {
  background: #fff;
  color: #333;
  font-size: 12px;
  font-family: Arial, "宋体", Tahoma, Verdana, sans-serif, simsun;
}

article,
aside,
dialog,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

fieldset {
  border: 0;
  border-style: none;
}

div {
  height: auto;
}

ul,
li {
  list-style: none;
}

img {
  border: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 14px;
}

h1,
h2,
h3 {
  font-weight: normal;
  font-family: "\5FAE\8F6F\96C5\9ED1";
}

a {
  color: #333;
  text-decoration: none;
}

a:hover,
a:active {
  color: #046ad6;
  text-decoration: underline;
}

a:focus {
  outline: 0;
  -moz-outline: 0;
}

a img {
  border: 0;
}

img {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

input,
button,
select {
  vertical-align: middle;
  font-size: 12px;
}

input {
  outline: 0;
  -moz-outline: 0;
}

*:focus {
  outline: 0;
}

input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
  background-color: #fff;
  background-image: none;
  color: #333;
}

textarea {
  padding: 5px;
  color: #333;
}

input.input {
  padding: 6px;
  border: 1px solid #e5e5e5;
  color: #333;
  font-size: 12px;
}

input.input.hui {
  color: #999;
}

table {
  border: 0;
  border-collapse: collapse;
  border-spacing: 0;
}

em {
  font-style: normal;
}

body.sf_time {
  /* background: #fff lo(/ common/images/banner_sf.jpg) no-repeat center 41px; */
  background-size: 1920px 800px;
}

body.sf_time .banner .pics li {
  background: none !important;
}

.v-mid {
  vertical-align: middle;
}

.fb_red {
  color: #e50000 !important;
  border-color: #e50000 !important;
}

.default_cursor {
  cursor: default !important;
}

.clear {
  clear: both;
  width: 100%;
  height: 1px;
  font-size: 1px;
  line-height: 1px;
}

.clearfix:after {
  clear: both;
  display: block;
  visibility: hidden;
  height: 0;
  content: " ";
  font-size: 0;
}

.clearfix {
  clear: both;
  zoom: 1;
  overflow: hidden;
}

.money {
  color: #e50000;
  font-style: normal;
  font-family: Arial;
}

.money.big {
  font-family: "\534E\6587\7EC6\9ED1", Arial;
}

.money2 {
  color: #333;
  font-style: normal;
  font-family: Arial;
}

.money2.big {
  font-family: "\534E\6587\7EC6\9ED1", Arial;
}

.fyahei {
  font-family: "\5FAE\8F6F\96C5\9ED1";
}

.green {
  color: #046ad6;
}

.org_red {
  color: #f50;
}

.fa {
  font-family: Arial;
}

.fbold {
  font-weight: bold;
}

.funder {
  text-decoration: underline;
}

.hui {
  color: #999;
}

.hei {
  color: #000;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

.tc {
  text-align: center;
}

.tl {
  text-align: left;
}

.tr {
  text-align: right;
}

.pr0 {
  padding-right: 0 !important;
}

.pl0 {
  padding-left: 0 !important;
}

.pt0 {
  padding-top: 0 !important;
}

.pb0 {
  padding-bottom: 0 !important;
}

.relative {
  position: relative;
}

.disno {
  display: none;
}

.nodisp {
  display: inline;
}

.disp {
  display: none;
}

a.nline {
  text-decoration: none;
}

a.green {
  color: #046ad6;
}

a.green:hover {
  text-decoration: underline;
}

.mt0 {
  margin-top: 0;
}

.mt20 {
  margin-top: 20px;
}

.mb20 {
  margin-bottom: 20px;
}

.mb10 {
  margin-bottom: 10px;
}

.mb15 {
  margin-bottom: 15px;
}

.mb20 {
  margin-bottom: 20px;
}

.fsize12 {
  font-size: 12px;
}

.fsize14 {
  font-size: 14px;
}

.fsize16 {
  font-size: 16px;
}

.fsize18 {
  font-size: 18px;
}

.fsize20 {
  font-size: 20px;
}

.fsize22 {
  font-size: 22px;
}

.fsize24 {
  font-size: 24px;
}

.fsize28 {
  font-size: 28px;
}

.fsize30 {
  font-size: 30px;
}

.fsize32 {
  font-size: 32px;
}

.padding5px {
  padding: 5px;
}

.padding10px {
  padding: 10px;
}

.padding15px {
  padding: 15px;
}

.padding20px {
  padding: 20px;
}

.padding25px {
  padding: 25px;
}

.padding30px {
  padding: 30px;
}

.padding35px {
  padding: 35px;
}

.pl10 {
  padding-left: 10px;
}

.mr5 {
  margin-right: 5px;
}

.mr10 {
  margin-right: 10px;
}

.mr20 {
  margin-right: 20px;
}

.mrl10 {
  margin-right: 10px;
  margin-left: 10px;
}

.txt-center {
  text-align: center !important;
}

.text-overflow {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.b10px {
  clear: both;
  height: 10px;
  font-size: 1px;
  line-height: 1px;
}

.b15px {
  clear: both;
  height: 15px;
  font-size: 1px;
  line-height: 1px;
}

.header_top {
  height: 40px;
  border-bottom: 1px solid #e5e5e5;
  background: #f4f4f4;
  color: #666;
  line-height: 40px;
  _overflow: hidden;
  min-width: 1190px;
  position: relative;
  z-index: 400;
}

.header_top .container {
  position: relative;
  margin: 0 auto 0;
  width: 1190px;
  height: 40px;
  text-align: center;
  line-height: 40px;
}

.header_top .left {
  float: left;
  width: 418px;
}

.header_top .right {
  float: right;
  width: 766px;
}

.header_top.small .container {
  position: relative;
  margin: 0 auto 0;
  width: 990px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  _overflow: hidden;
}

.header_top.small .container .left {
  float: left;
  width: 250px;
}

.header_top.small .container .right {
  float: right;
  width: 735px;
}

.header_top li {
  position: relative;
  float: left;
  border-right: 1px solid transparent;
  border-left: 1px solid transparent;
  z-index: 9997;
}

.header_top li .appbig {
  position: absolute;
  top: 40px;
  left: -80px;
  display: none;
}

.header_top li .wxbig {
  position: absolute;
  top: 40px;
  left: -80px;
  display: none;
}

.header_top li .xcxbig {
  position: absolute;
  top: 40px;
  left: -80px;
  display: none;
}

.header_top li.n {
  padding-left: 0;
}

.header_top li i {
  float: left;
  display: block;
  margin: 10px 5px 10px 0;
  width: 20px;
  height: 20px;
}

.header_top li s {
  float: left;
  display: block;
  margin: 10px 10px 10px 10px;
  width: 1px;
  height: 20px;
  border-right: 1px solid #e5e5e5;
  font-size: 0;
  overflow: hidden;
}

.header_top li.fix a {
  float: none;
  display: inline-block;
}

.header_top li label {
  color: #333;
}

.header_top .left li a {
  white-space: nowrap;
  height: 40px;
  line-height: 40px;
  float: left;
  display: block;
}

.header_top .icons.fav {
  background-position: -2px -4px;
}

.header_top .icons.sina {
  background-position: -26px -4px;
}

.header_top .icons.wx {
  background-position: -49px -3px;
}

.header_top .icons.app {
  background-position: -68px -3px;
}

.header_top .icons.cart {
  background-position: -88px -3px;
}

.header_top .right li {
  float: right;
  width: 80px;
}

.header_top .right li.n {
  padding-right: 0;
}

.header_top .right li.person {
  width: 95px;
  padding-left: 15px;
}

.header_top .right li.cart {
  width: 110px;
  padding-left: 15px;
}

.header_top .right li.fix {
  width: 196px;
  text-align: right;
}

.header_top .right li a.disa {
  display: block;
  float: left;
}

.header_top .right li.hover {
  height: 41px;
  border-right: 1px solid #ccc;
  border-bottom: 0;
  border-left: 1px solid #ccc;
  background: #fff;
}

.header_top .right li.hover.person {
  width: 95px;
}

.header_top .right li.hover.person a {
  color: #046ad6;
}

.header_top .right li.hover.cart a.hi {
  color: #e50000;
}

.header_top .right li.hover.cart a.hi label {
  color: #e50000;
}

.header_top .right li .line {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10000;
  display: none;
  width: 100%;
  height: 1px;
  border-top: 0;
  border-bottom: 1px solid #fff;
}

.header_top .right li.hover .line {
  display: block;
}

.header_top .right li.cart {
  margin: 0;
}

.header_top .right li.hover s {
  display: none;
}

.header_top .right .menu_list {
  position: absolute;
  top: 40px;
  left: -1px;
  z-index: 999;
  display: none;
  overflow: hidden;
  width: 96px;
  min-width: 100%;
  border: 1px solid #ccc;
  background: #fff;
}

.header_top .right .menu_list a {
  display: block;
  width: 100%;
  height: 30px;
  text-align: left;
  text-indent: 15px;
  line-height: 30px;
}

.header_top .right .menu_list a:hover {
  background: #f4f4f4;
}

.header_top .right li.hover .menu_list a {
  color: #333;
}

.header_top .right li.hover .menu_list a:hover {
  color: #046ad6;
}

.header_top .right .cart_box {
  position: absolute;
  top: 40px;
  left: -1px;
  z-index: 9999;
  display: none;
  overflow: hidden;
  padding: 15px;
  width: 325px;
  border: 1px solid #ccc;
  background: #fff;
  text-align: left;
  line-height: 25px;
}

.header_top .right .cart_box .title {
  border-bottom: 1px dashed #f0f0f0;
}

.header_top .right li.hover.cart a.green {
  float: none;
  display: inline;
  color: #046ad6;
}

.header_top .right li.entry_btn a {
  background-color: #046ad6;
  display: block;
  width: 69px;
  height: 22px;
  border-radius: 1px;
  line-height: 22px;
  text-align: center;
  color: #fff;
  margin-top: 9px;
  margin-right: 0;
}

.header_top .right li.entry_btn a:hover {
  text-decoration: none;
}

.header_top .right .cart_list dl {
  clear: both;
  overflow: hidden;
  margin-right: 5px;
  padding: 8px 0;
  max-height: 62px;
  border-bottom: 1px dashed #f0f0f0;
  line-height: 20px;
}

.header_top .right .cart_list dl dt {
  float: left;
  clear: both;
  width: 240px;
  text-align: left;
  line-height: 23px;
}
.catlist .subcat .sitems li .bit {
  background: #046ad6;
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
}
.header_top .right .cart_list dl dt img {
  float: left;
  margin: 0 12px 0 0;
  width: 50px;
  height: 50px;
  border: 1px solid #eee;
}

.header_top .right .cart_list dl dt a {
  display: block;
}

.header_top .right .cart_list dl dd {
  float: right;
  padding-top: 5px;
  height: 40px;
  color: #999;
  text-align: right;
}

.header_top .right .cart_list dl dd a {
  float: none;
  color: #999;
  text-decoration: underline;
}

.header_top .right .cart_list dl dd a:hover {
  color: #e50000;
}

.header_top .right .cart_total {
  margin: 10px 0;
  height: 30px;
  text-align: right;
  line-height: 30px;
}

.header_top .right .cart-submit {
  margin: 8px 0;
  height: 24px;
}

.header_top .right .daohang {
  position: relative;
  padding-left: 20px;
  margin-left: -20px;
}

.header_top .right .daohang .other {
  background: #fff;
  border: 1px solid #ccc;
  position: absolute;
  right: -1px;
  top: 40px;
  z-index: 2;
  width: 450px;
  padding: 10px 0;
  line-height: 1.5;
  display: none;
}

.header_top .right .daohang .other .item {
  display: inline-block;
  *zoom: 1;
  *display: inline;
  width: 44%;
  vertical-align: top;
  text-align: left;
}

.header_top .right .daohang .other .item .h1 {
  color: #046ad6;
  font-size: 14px;
  padding: 0 0 5px 5px;
}

.header_top .right .daohang .other .item > a {
  display: inline-block;
  *display: inline;
  vertical-align: top;
  padding: 2px 5px;
  color: #333;
}

.header_top .right .daohang .other .item + .item {
  border-left: 1px solid #ccc;
  padding-left: 20px;
}

.header_top .right .daohang:hover {
  background: #fff;
  border-left-color: #ccc;
  border-right-color: #ccc;
}

.header_top .right .daohang:hover > a {
  color: #046ad6;
}

.header_top .right .daohang:hover .other {
  display: block;
}

.header_top .right .daohang:hover .icons.dorpdown {
  background-position: -137px 1px;
}

.header_top .right .daohang:hover .line {
  display: block;
  bottom: -1px;
}

.header_top .icons.dorpdown {
  background-position: -121px 1px;
  margin-right: 0;
}

.header_top .hover .icons.dorpdown {
  background-position: -137px 1px;
}

.header {
  position: relative;
  z-index: 300;
}

.header .container {
  position: relative;
  margin: 0 auto 0;
  width: 1190px;
  height: 140px;
}

.header .logo {
  position: absolute;
  top: 32px;
  left: 10px;
  width: 330px;
  _width: 336px;
}

.header .logo a {
  float: left;
  display: block;
  height: 70px;
}

.header .logo a.name {
  width: 210px;
  height: 70px;
  display: block;
}

.header .logo a img {
  width: 210px;
  /* height: 70px; */
}

.header .logo .sub {
  float: left;
  margin: 10px;
  padding-left: 15px;
  height: 55px;
  border-left: 1px solid #e5e5e5;
  font-weight: bold;
  font-size: 24px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  line-height: 55px;
}

.header .logo .sub_name {
  color: #666;
  white-space: nowrap;
}

.header .step {
  background-image: lo("/common/images/step.png");
  height: 70px;
  position: absolute;
  right: 0;
  text-align: right;
  top: 32px;
  width: 425px;
  _width: 425px;
  display: none;
  background-position: -29px -14px;
}

.header .step.s1 {
  background-position: -29px -14px;
}

.header .step.s2 {
  background-position: -29px -84px;
}

.header .step.s3 {
  background-position: -29px -154px;
}

.header .step.s4 {
  background-position: -29px -224px;
}

.header .step.s5 {
  background-position: -29px -294px;
}

.header .search {
  position: absolute;
  top: 39px;
  left: 340px;
  width: 550px;
}

.search_input {
  position: relative;
  width: 546px;
  height: 36px;
  border: 2px solid #046ad6;
  line-height: 36px;
  overflow: hidden;
}

.search_input .opt {
  position: relative;
  float: left;
  padding: 0 10px 0 25px;
  width: 45px;
  height: 37px;
  border: 1px solid #e5e5e5;
  border-bottom: 0;
  background: #f4f4f4;
  cursor: pointer;
}

.search_input .opt i {
  position: absolute;
  top: 12px;
  right: 10px;
  width: 15px;
  height: 15px;
  background-position: -109px 1px;
}

.search_input .opt_list {
  position: absolute;
  left: 0;
  z-index: 998;
  overflow: hidden;
  width: 80px;
  height: 35px;
  border: 1px solid #e5e5e5;
  border-bottom: 0;
  background: #fff;
  background: #fff;
}

.search_input .opt_list.hover {
  height: auto;
  border-bottom: 1px solid #e5e5e5;
}

.search_input .opt_list li {
  height: 36px;
  line-height: 36px;
}

.search_input .opt_list li a {
  display: block;
  padding: 0 10px 0 25px;
}

.search_input .opt_list li i {
  position: absolute;
  top: 11px;
  right: 8px;
  display: none;
  width: 15px;
  height: 15px;
  background-image: lo("/common/images/icons.png");
  background-position: -109px 1px;
}

.search_input .opt_list li.current i {
  display: block;
}

.search_input .opt_list li a:hover {
  background: #f4f4f4;
}

.search_input .txt {
  float: left;
  margin-left: 82px;
  padding: 5px 10px;
  width: 350px;
  height: 26px;
  border: 0;
  line-height: 26px;
  box-sizing: content-box;
}

.search_input .txt.hui {
  color: #bbb;
}

.search_input .submit {
  float: right;
  width: 90px;
  height:32px;
  border: 0;
  background: #046ad6;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  line-height: 32px;
}

.search_input .suggest {
  position: absolute;
  top: 38px;
  left: 80px;
  z-index: 1001;
  display: none;
  width: 370px;
  border: 1px solid #e5e5e5;
  background: #fff;
  color: #333;
}

.search_input .suggest .his {
  position: relative;
  padding: 0 10px;
  height: 30px;
  border-bottom: 1px dashed #eee;
  color: #999;
  line-height: 30px;
}

.search_input .suggest .his a {
  position: absolute;
  right: 10px;
  color: #999;
}

.search_input .suggest .his a:hover {
  color: #046ad6;
}

.search_input .suggest p {
  padding: 0 10px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
}

.search_input .suggest p.cur {
  background: #f4f4f4;
}

.search_input .suggest p label {
  color: #333;
  font-weight: bold;
}

.header .search .hot_search {
  margin-top: 10px;
  margin-left: -1px;
}

.header .search .hot_search li {
  float: left;
  display: block;
  padding: 0 12px;
  height: 14px;
  border-left: 1px solid #ccc;
}

.header .search .hot_search li.noborder {
  border-left: 0;
}

.header .search .hot_search li.highlight a {
  color: #e50000;
}

.header .search .slogo {
  display: none;
}

.header .search .hot_search li a {
  color: #999;
}

.header .search .hot_search li a:hover {
  color: #046ad6;
}

.header .promise {
  position: absolute;
  top: 39px;
  right: 0;
  z-index: 0;
  width: 300px;
}

.header .promise a {
  float: right;
  width: 175px;
  height: 40px;
  /* background-image: url('../assets/icons.png'); */
  background-position: -88px -262px;
  display: block;
  margin-right: 10px;
}

.header.small {
  margin-top: 0;
}
.container {
  width: 1190px;
}
.header.small .container {
  width: 990px;
  height: 120px;
}

.header.small .logo.small {
  width: 260px;
}

.header.small .logo {
  top: 24px;
}

.header.small .search {
  left: 260px;
  width: 460px;
}

.header.small .search_input {
  width: 451px;
}

.header.small .search_input .txt {
  width: 260px;
}

.header.shop .container {
  height: 86px;
}

.header.shop .logo {
  top: 8px;
}

.header.shop .search {
  top: 21px;
}

.header.shop .promise {
  top: 22px;
}

.fixtop {
  width: 100%;
  height: 60px;
  background: #000;
  opacity: 0.8;
  position: fixed;
  top: 0;
  display: none;
  z-index: 99999;
  -webkit-transform: translateZ(0);
}

.fixtop2 {
  width: 100%;
  height: 60px;
  background: 0;
  position: fixed;
  top: 0;
  z-index: 999;
  display: none;
  z-index: 100000;
  -webkit-transform: translateZ(0);
}

.fixtop2 .inner {
  width: 1190px;
  margin: 0 auto;
  position: relative;
}

.fixtop2 .inner .slogo {
  background-image: lo("/common/images/logo2.png");
  width: 160px;
  height: 40px;
  display: block;
  position: absolute;
  left: 10px;
  top: 7px;
}

.fixtop2 .inner .search_input {
  position: absolute;
  width: 690px;
  top: 10px;
  left: 300px;
}

.fixtop2 .inner .search_input .txt {
  width: 498px;
}

.fixtop2 .inner .search_input .suggest {
  width: 518px;
}

.fixbottom {
  width: 100%;
  height: 125px;
  position: fixed;
  bottom: 0;
  display: none;
  z-index: 100000;
}

.fixbottom .inner {
  width: 1190px;
  margin: 0 auto;
  position: relative;
  top: -25px;
  height: 144px;
  z-index: 9999;
}

.fixbottom .innerMask {
  height: 125px;
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 9996;
  opacity: 0.8;
  filter: alpha(opacity=80);
  background: #000;
}

.sbanner {
  height: 90px;
  background-image: lo("/common/images/shopbanner.png");
}

.sbanner .container {
  width: 1190px;
  margin: 0 auto;
  height: 90px;
  position: relative;
}

.sbanner .container .logobg {
  background-image: lo("/common/images/icons.png");
  background-position: -416px -305px;
  height: 38px;
  left: 5px;
  position: absolute;
  top: 28px;
  width: 38px;
}

.sbanner h2 {
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  height: 90px;
  line-height: 90px;
  padding-left: 55px;
  width: 625px;
  text-align: left;
  float: left;
  overflow: hidden;
  position: absolute;
}

.sbanner .zzicons {
  position: absolute;
  right: 0;
  top: 28px;
}

.nav {
  background: #046ad6;
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
  color: #046ad6;
}

.nav2 .mainnav li.home {
  padding: 0 50px 0 50px;
}

.nav2 .mainnav li.category {
  padding: 0;
  padding-left: 20px;
  width: 210px;
  background: #046ad6;
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
  color: #046ad6;
}

.catlist {
  height: 390px;
  width: 228px;
  position: absolute;
  left: 0;
  top: 50px;
  z-index: 1000;
}

.catlist .maincat {
  background: #fff;
  z-index: 1001;
  position: absolute;
  left: 0;
  top: 0;
  width: 230px;
  opacity: 0.9;
  padding: 5px 0;
}

.catlist .maincat li {
  height: 33px;
  line-height: 33px;
  padding: 0px 0 0px 50px;
  border-bottom: 1px dashed #e5e5e5;
  position: relative;
  margin-left: 0;
  border-top: 0;
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  text-align: left;
}

.catlist .maincat li .line {
  border-right: 1px solid #f4f4f4;
  display: none;
  height: 63px;
  position: absolute;
  top: 0;
  right: -1px;
}

.catlist .maincat li.hover .line {
  display: block;
}

.ya_hei {
  font-family: "MicrosoftYaHei";
}

.catlist .maincat li.white {
  border-bottom: 1px dashed #fff;
}

.catlist .maincat li.hover {
  background: #f4f4f4;
  border-right: 1px solid #f4f4f4;
  width: 179px;
  border-bottom: 1px solid #e5e5e5;
  border-top: 1px solid #e5e5e5;
  margin-top: -1px;
}

.catlist .maincat li.hover:first-child {
  margin-top: 0;
  border-top: 0;
}

.catlist .maincat li.nb {
  border-bottom: 0;
  height: 46px;
}

.catlist .maincat h2 {
  font-family: "\5FAE\8F6F\96C5\9ED1";
  display: block;
  /* margin-bottom: 4px; */
  margin: 5px 0;
}

.catlist .maincat h2 a {
  font-size: 14px;
}

.catlist .maincat .sub a {
  display: block;
  float: left;
  color: #999;
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  margin-right: 10px;
}

.catlist .maincat .sub a:hover {
  color: #046ad6;
}

.catlist .maincat .sub a.n {
  margin-right: 0;
}

.catlist .maincat i,
.catlist s {
  /* background-image: url('../assets/icons.png'); */
  display: block;
  position: absolute;
}

.catlist s {
  background-image: url("../assets/icons.png");
}
.catlist .maincat i {
  width: 15px;
  height: 15px;
  left: 16px;
  top: 0;
}
.catlist .maincat i img {
  width: 100%;
}
.catlist .maincat s {
  width: 9px;
  height: 13px;
  right: -2px;
  top: 22px;
  background-position: -484px -190px;
  display: none;
}

.catlist .maincat li.hover s {
  display: block;
}

.catlist .maincat .zxyp i {
  background-position: -132px -154px;
}

.catlist .maincat .ylqx i {
  background-position: -156px -154px;
}

.catlist .maincat .ysbj i {
  background-position: -180px -154px;
}

.catlist .maincat .jsyp i {
  background-position: -204px -154px;
}

.catlist .maincat .mrhf i {
  background-position: -228px -154px;
}

.catlist .maincat .zyyp i {
  background-position: -252px -154px;
}

.catlist .subcat {
  width: 769px;
  position: absolute;
  left: 229px;
  top: 0;
  z-index: 1000;
  background: #f4f4f4;
  border: 1px solid #e5e5e5;
  min-height: 389px;
  padding: 0 10px;
  /* display: none; */
}

.catlist .subcat .sitems {
  padding: 0 45px 0 10px;
  /* width: 520px; */
  float: left;
}

.catlist .subcat .sitems li {
  border-bottom: 1px dotted #e1e1e1;
  overflow: hidden;
  /* padding: 25px 0 10px 95px; */
  position: relative;
  float: left;
  width: 50%;
  height: 95px;
}

.catlist .subcat .sitems li.last {
  border-bottom: 0;
  height: 25px;
}

.catlist .subcat .sitems li .bit {
  background: #046ad6;
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

.catlist .subcat .sitems li .bit:hover {
  color: #fff;
  text-decoration: none;
}

.catlist .subcat .sitems li .bit label {
  background-color: #046ad6;
  display: block;
  height: 20px;
  width: 20px;
  position: absolute;
  right: 0;
  top: 0;
}

.catlist .subcat .sitems li .bit i {
  background-image: url("../assets/icons.png");
  background-position: -14px -21px;
  right: 3px;
  top: 0;
  position: absolute;
  height: 20px;
  width: 14px;
}

.catlist .subcat .sitems li.last .bit {
  left: 432px;
  margin: 0;
}

.catlist .subcat .sitems li .bit2 {
  background: #ccc;
  color: #fff;
  float: none;
  height: 20px;
  line-height: 20px;
  left: 0;
  padding: 0;
  position: absolute;
  top: 15px;
  width: 73px;
  padding-left: 5px;
}

.catlist .subcat .sitems li .bit2 label {
  background-color: #bbb;
  display: block;
  height: 20px;
  width: 20px;
  position: absolute;
  right: 0;
  top: 0;
}

.catlist .subcat .sitems li .bit2 i {
  background-image: lo("/common/images/icons.png");
  _background-image: lo("/common/images/icons.jpg");
  background-position: -14px -21px;
  right: 3px;
  top: 0;
  position: absolute;
  height: 20px;
  width: 14px;
}

.catlist .subcat .sitems li.last .bit2 {
  left: 432px;
  margin: 0;
  text-align: left;
}

.catlist .subcat .sitems li a {
  float: left;
  margin: 5px 8px;
  overflow: hidden;
  height: 14px;
  white-space: nowrap;
  color: #666;
}

.catlist .subcat .sitems li a:hover {
  color: #046ad6;
}

.catlist .subcat .rmpp {
  padding: 15px 0 0 10px;
  width: 169px;
  float: left;
}

.catlist .subcat .rmpp .pp a {
  display: block;
  float: left;
  height: 40px;
  width: 80px;
  margin: 0 4px 4px 0;
  border: 1px solid #eaeaea;
}
.header-img {
  display: block !important;
}

.header-img {
  position: absolute;
  right: 0;
  top: 50px;
  width: 180px;
  height: 330px;
  font-size: 0;
}
.classss {
  display: none !important;
}
</style>
