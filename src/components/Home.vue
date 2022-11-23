<template>
  <div class="home">
    
    <!-- Contents -->
    <div class="contents">

      <h2>Yun Jung Bin</h2>

      <h3>I'm a <span class="type-it"></span></h3>

      <div class="sns-group">
        <a href="https://www.facebook.com/profile.php?id=100003418618785" target="_blank"><i class="xi-facebook xi-3x"></i></a>
        <a href="https://www.twitter.com" target="_blank"><i class="xi-twitter xi-3x"></i></a>
        <a href="https://www.instagram.com/yunjungbin1004/" target="_blank"><i class="xi-instagram xi-3x"></i></a>
        <a href="https://www.youtube.com/channel/UCAa7miFDoi_6bLEUFrAa8zQ" target="_blank"><i class="xi-google-plus xi-3x"></i></a>
      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: 'Home',

  data() {
    return {
      
    };
  },

  mounted() {
    this.typeEffect();
    this.show();
  },

  methods: {
    typeEffect(){
      $('.type-it').typeIt({
        strings: ['DESIGNER', 'PUBLISHER'],
        loop: true,
        breakLines: false,
        cursor: false,
        speed: 100
      });
    },
    show(){  
      $('.header').show();
    }
  },
};
</script>

<style lang="scss" scoped>
  @import '../sass/_variable.scss';

  .home{
    // Contents
    .contents{
      padding: 250px 0;
      text-align: center;
      
      h2{
        height: 40px;
        font: bold 3rem/40px 'GmarketSans';
        margin-bottom: 40px;
        color: $primary;
      }
      h3{
        height: 24px;
        font: 500 2.4rem/40px 'GmarketSans';
        font-style: italic;
        margin-bottom: 300px;
        color: $color6;

        span{
          font-weight: 700;
        }
      }
      .sns-group{ 
        width: 100%;
        height: auto;
        margin: auto;
        color: $color6;
      
        i{
          font-size: 2.3rem;
          padding: 7px;
          
          &:hover{
            color: $tertiary;
            border-color: $tertiary;
          }
        }
      }
    }
  }



</style>