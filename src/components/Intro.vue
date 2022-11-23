<template>
  <div class="intro">

    <div class="loading-box">
      <img src="../assets/about/about.png" alt="introphoto">

      <div id="circle"></div>
    </div>

    
  </div>
</template>

<script>
export default {
  name: 'Intro',

  data() {
    return {
      isShow: false
    };
  },

  mounted() {
    this.circleAni();
    this.homeMove();
    this.hidden();
  },

  methods: {

    // 홈으로 이동함수
    homeMove(){
      setTimeout(() => {
        this.$router.push('/home')
      }, 3000)
    },


    // 프로그래스 함수
    circleAni(){
       $('#circle').circleProgress({
        value: 1,
        size: 80,
        fill: '#6BC9F2',
        thickness: 3,
        animation: { duration:3000 }
      });
    },

    // Intro Header hidden 함수
    hidden(){
      $('.header').hide();
    }
    
  },
};
</script>

<style lang="scss" scoped>
  .intro{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .loading-box{
      width: 90px;
      height: 90px;
      position: relative;

      img, #circle{
        position: absolute;
      }

      img{
        width: 70px;
        height: 70px;

      }

      #circle{
        width: 80px;
        height: 80px;
        left: 2px; top: 4px;
      }
    }

  }
</style>