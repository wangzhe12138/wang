<template>
  <div class="banner" :style="{ background: colors.background }">
    <div style="width: 793px;
    margin: 0px auto;
    position: relative;
    left: 24px;">
      <el-carousel trigger="click" :interval="6000" height="390px" @change="indexssss">
        <el-carousel-item v-for="(ele, ind) in this.banner" :key="ind">
          <img :src="ele.url | msgFormat" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- <div class="banner">
      <div class="swiper-container" style="width:100%;height:100%">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            style="background:rgb(232, 68, 75)"
            v-for="(ele, ind) in this.banner"
            :key="ind"
          >
            <img :src="ele.url | msgFormat" alt="" />
          </div>
        </div> 
      </div>
      width: 780px; height: 100%;
    </div> -->
  </div>
</template>

<script>
// import { sitedetails } from "@/api2";
// import Swiper from "swiper";
export default {
  name: "",
  data () {
    return {
      banner: [],
      colors: {
        background: "#ec9862"
      }
    };
  },
  methods: {
    swipe () {
      new Swiper(".swiper-container", {
        pagination: ".swiper-pagination",
        paginationClickable: ".swiper-pagination",
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        effect: "fade",
        autoplay: 3000
      });

      sitedetails()
        .then(val => {
          this.banner = val.data.list;
        })
        .catch(err => {
          throw err;
        });
    },
    indexssss (val) {
      switch (val) {
        case 0:
          this.colors.background = "#ec9862";
          break;
        case 1:
          this.colors.background = "#312201";
          break;
        case 2:
          this.colors.background = "#314055";
          break;
      }
    }
  },
  mounted () {
    // this.swipe();
  }
};
</script>

<style>
.banner img {
  /* width: 780px; */
  width: 100%;
  height: 100%;
  /* position: relative;
  left: 48px; */
}
.banner {
  height: 390px;
  position: relative;
  margin-bottom: 20px;
  overflow: hidden;
  z-index: 200;
}
.el-carousel__arrow--left {
  left: 56px;
}
</style>
