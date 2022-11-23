<template>
  <div class="about">

    <!-- Contents -->
    <div class="contents">
      <div class="container">

        <div class="infor">

          <div class="bar"></div>

          <h2>ABOUT ME</h2>


          <img src="../assets/about/about.png" alt="Photo1">

          <p>안녕하세요! 책임 있는 자세로 목표를 달성하는 웹 퍼블리셔 <span>윤정빈</span> 입니다. 저의 강점인 <span>긍정적인 성격</span>과 <span>소통능력</span> 그리고 맡은일은 최선을 다해 끝까지 완료하는 <span>책임감</span>있는 모습 행동으로 보여드리겠습니다.</p>

          <ul>
            <li>&nbsp;Name : 윤 정빈</li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Birth : 1996. 02. 24</li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Address : 경기도 안산시</li>
          </ul>
          

        </div>

        <div class="strength">

          <div class="bar"></div>

          <h3>My strength</h3>

          <div class="s1 clearfix">

            <img src="../assets/about/strength1w.png" alt="strength1">

            <h4>긍정적인 성격</h4>

            <p>긍정적인 성격은 스스로에게 힘을 주고, 주변 사람들에게도 에너지를 주는 저의 최대 강점이라 생각합니다.</p>

          </div>

          <div class="s1 clearfix">

            <img src="../assets/about/strength2w.png" alt="strength2">

            <h4>소통 능력</h4>

            <p>저의 소통능력은 다른사람의 의도를 파악하고 글과 말을통해 정확하게 표현할 수 있습니다. 그리하여 동료들과의 협업이 수월한게 강점이라 생각합니다.</p>

          </div>

          <div class="s1 clearfix">

            <img src="../assets/about/strength3w.png" alt="strength3">

            <h4>책임감</h4>

            <p>어려서부터 스스로 결정하고 책임지도록 교육받아, 무슨 일이든 시작을 하면 최선을 다해 그 책임을 다했습니다.</p>

          </div>

        </div>

      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'About',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
  @import '../sass/_variable.scss';

  .about{
    // Contents
    .contents{
      padding: 50px 0;

      .container{
        width: 100%;
        height: auto;
        margin: 30px auto;

        .infor{
          width: 100%;
          height: auto;
          padding: 10px 0 20px 0;
          margin-bottom: 30px;
          background-color: $secondary;
          border-radius: 20px;
      
          .bar{
            display: block;
            content:'';
            width: 18px;
            height: 4px;
            background-color: $primary;
            position: relative; top: 15px; left: 19px;
          }
          h2{
            margin-top: 30px;
            padding-left: 20px;
            font: bold 2.3rem 'GmarketSans';
            color: $color6;
          }
      
          img{
            width: 70%;
          }
      
          p{
            margin: 40px auto;
            padding: 10px 15px;
            font: 500 1.4rem 'NexonLv1Gothic';
            line-height: 21px;
            text-align: center;
            color: #333;
            position: relative;
            span{
              font-weight: 700;
              color: $primary;
            }
          }
          ul{
            font: 700 1.5rem 'NexonLv1Gohtic';
            margin-top: -10px;
            text-align: center;
            li{
              position: relative; right: 7%;
              margin-bottom: 10px;
            }
          }
        }
        .strength{
          width: 100%;
          height: auto;
          background-color: $secondary;
          border-radius: 20px;
          padding: 20px 0;
            .bar{
              display: block;
              content:'';
              width: 18px;
              height: 4px;
              background-color: $primary;
              position: relative;
              top: 5px; left: 20px;
            }
      
            h3{
            margin-bottom: 40px;
            padding-top: 20px;
            padding-left: 20px;
            font: bold 2rem 'GmarketSans';
            color: $color6;
            }
            .s1{
              width: 100%;
              height: 100%;
              position: relative;
              margin-bottom: 30px;
              img{
                width: 31%;
                height: auto;
                margin: 20px 25px 15px 20px;
                float: left;
              }
              h4{
                width: 33%;
                float: left;
                padding-top: 20px;
                font: 700 1.6rem 'NexonLv1Gohthic';
              }
              p{
                width: 55%;
                display: block;
                float: left;
                font: 400 1.4rem 'NexonLv1Gothic';
                text-align: left;
                line-height: 21px;
                margin-top: 10px;
                padding-right: 10px;
              }
            }
        }

      }
    }

  }
</style>