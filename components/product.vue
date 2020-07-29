<template>
  <div>
    <div class="xsqg">
      <div class="h2">
        <i class="ic ic-xs"></i>
        <span class="tit">限时购</span>
      </div>
      <div class="cont">
        <div class="swiper-container123">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(ele, inds) in this.message" :key="inds">
              <router-link :to="{
                  path: '/shopCvs',
                  query: { id: ele.uid, uid: ele.id }
                }" class="img js-flash-item" target="_blank" data-id="13653060">
                <img :src="ele.logo | msgFormat" :alt="ele.merchant" style="width:80%" />
              </router-link>
              <div style="margin:15px 0"></div>
              <router-link :to="{
                  path: '/shopCvs',
                  query: { id: ele.uid, uid: ele.id }
                }" class="name" target="_blank">
                {{ ele.brief }}
              </router-link>
              <!-- <div class="st">{{ ele.address }}</div> -->
            </div>
          </div>
          <!-- <div class="swiper-pagination"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Swiper from "swiper";
export default {
  name: "",
  data () {
    return {};
  },
  props: ["message"],
  methods: {
    swipers () {
      new Swiper(".swiper-container123", {
        // pagination: ".swiper-pagination",
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 0,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        autoplay: 3000
      });
    }
  },
  mounted () {
    // this.swipers();
  }
};
</script>

<style scoped>
.swiper-container123 {
  height: 100%;
}
.swiper-slide{
	border: 1px solid #eee;
	box-sizing: border-box;
}
.goods li {
  display: block;
  padding: 10px 20px;
  border-bottom: 1px solid #e5e5e5;
}
.cont {
  overflow: hidden;
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
  font-family: '\534E\6587\7EC6\9ED1', Arial;
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
  font-family: '\534E\6587\7EC6\9ED1', Arial;
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
  font-family: '\534E\6587\7EC6\9ED1', Arial;
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
.xsqg {
  font-size: 0;
  font-family: '\5FAE\8F6F\96C5\9ED1';
  margin-bottom: 20px;
}
.xsqg .h2 {
  margin-bottom: 10px;
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
.xsqg .cont .name {
  font-size: 14px;
  color: #000;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 28px;
  display: block;
  letter-spacing: 1px;
  text-align: center;
}
.xsqg .cont .name,
.xsqg .cont .price {
  margin: 0 18px;
}
a {
  color: #333;
  text-decoration: none;
}
.xsqg .cont .st {
  color: #999;
  display: block;
  height: 20px;
  line-height: 20px;
  overflow: hidden;
  font-size: 12px;
  margin: 0 18px 5px;
  letter-spacing: 5px;
  text-align: center;
}
.xsqg .cont .item .price {
  color: #e50000;
  font-size: 16px;
}
.xsqg .cont {
  border: 1px solid #e4e4e4;
  height: 302px;
  letter-spacing: -4px;
  text-align: left;
}
.xsqg .cont .img img:hover {
  transform: scale(1);
}
.xsqg .cont .img img {
  /* width: 100%; */
  height: 100%;
  vertical-align: top;
  transform: scale(0.9);
  transition: all 0.4s ease;
}
.xsqg .cont .img {
  display: block;
  height: 190px;
  /* width: 190px; */
  margin-top: 18px;
  position: relative;
  display: flex;
  justify-content: center;
}
.xsqg .cont .item .ewm {
  text-align: center;
  margin-top: 18px;
  transition: all 0.4s ease;
  padding: 20px 0 0 0;
  position: absolute;
  left: -220px;
  top: 0;
  opacity: 0;
  width: 100%;
  background-color: #fff;
}
.xsqg .cont .item .name,
.xsqg .cont .item .price {
  margin: 0 18px;
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
</style>
