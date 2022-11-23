<template>
  <div class="skills">
    
    <!-- Contents -->
    <div class="contents">
      <div class="container">
        
        <div class="whatido">

          <div class="bar"></div>

          <h2>SKILLS</h2>

          <h3>What I Do</h3>

          <div class="w1">
            <img src="../assets/skills/graphic.png" alt="Graphic Design">

            <h4>그래픽 디자인</h4>

            <p>디자인 툴 XD Photoshop 등 여러 툴을 이용해 시안을 제작할 수 있습니다. 기본적인 이미지 편집이 가능하며, 로고, 배너, 컨텐츠 제작 등 다양한 디자인을 구현할 수 있습니다.</p>
          </div>

          <div class="w1">
            <img src="../assets/skills/webdesign.png" alt="Web Design">

            <h4>웹 디자인</h4>

            <p>웹사이트의 목적과 컨셉에 따라서 기획을 하고,사용자의 니즈를 파악하여 주제에 맞는 디자인을 할 수 있습니다. 다양한 리뉴얼 경험을 통해 최신 트렌드에 맞는 웹사이트 제작이 가능합니다.</p>
          </div>

          <div class="w1">
            <img src="../assets/skills/responsive.png" alt="Responsive Web">

            <h4>반응형 웹 제작</h4>

            <p>현대의 다양한 모바일 환경(디바이스) 속에서 최신 트렌드의 디자인 접목과 함께 다양한 기기에 대응 가능한 반응형 웹사이트 제작이 가능합니다.</p>
          </div>
        </div>

        <div class="skill-box">
          <h4>Design Skills</h4>

          <div class="skill">
            <p>PHOTOSHOP</p>
            <div class="skill-bar skill3 wow slideInLeft animated" data-wow-delay="0.5s">
              <span class="skill-count"></span>
            </div>
          </div>

          <div class="skill">
            <p>ILLUSTRATE</p>
            <div class="skill-bar skill2 wow slideInLeft animated" data-wow-delay="0.6s">
              <span class="skill-count"></span>
            </div>
          </div>
        
          <div class="skill">
            <p>XD</p>
            <div class="skill-bar skill1 wow slideInLeft animated" data-wow-delay="0.7s">
              <span class="skill-count"></span>
            </div>
          </div>

          <h4>Coding Skills</h4>

          <div class="skill">
            <p>HTML</p>
            <div class="skill-bar skill1 wow slideInLeft animated" data-wow-delay="0.8s">
              <span class="skill-count"></span>
            </div>
          </div>
        
          <div class="skill">
            <p>CSS</p>
            <div class="skill-bar skill2 wow slideInLeft animated" data-wow-delay="0.9s">
              <span class="skill-count"></span>
            </div>
          </div>

          <div class="skill">
            <p>JAVASCRIPT</p>
            <div class="skill-bar skill3 wow slideInLeft animated" data-wow-delay="1s">
              <span class="skill-count" ></span>
            </div>
          </div>

          <div class="skill">
            <p>JQUERY</p>
            <div class="skill-bar skill3 wow slideInLeft animated" data-wow-delay="1.1s">
              <span class="skill-count"></span>
            </div>
          </div>

        </div>

      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Skills',

  data() {
    return {
      
      };
  },

  mounted() {
    (function($){
        new WOW().init();
    })(jQuery);
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
  @import '../sass/_variable.scss';

  .skills{
    // Contents
    .contents{
      padding: 50px 0;

      .container{
        width: 100%;
        height: auto;
        margin: 30px auto;

        .whatido{
          width: 100%;
          height: auto;
          background-color: $secondary;
          border-radius: 20px;
          margin-bottom: 30px;
          padding: 10px 20px;

          .bar{
            display: block;
            content:'';
            width: 18px;
            height: 4px;
            background-color: $primary;
            position: relative; top: 15px;
          }

          h2{
            margin-top: 30px;
            font: 700 2.3rem 'GmarketSans';
            color: $color6
          }
            
          h3{
            margin-top: 40px;
            margin-bottom: 30px;
            font: 700 2rem 'GmarketSans';
          }

          .w1{
            width: 100%;
            height: auto;
            border-radius: 15px;
            background-color: #f2f2f2;
            text-align: center;
            padding: 10px 20px;
            margin-bottom: 20px;
            box-shadow: 0px 3px 3px rgba(0,0,0,0.5);

            
            img{
              width: 100px;
              height: auto;
              margin: 30px auto;
            }

            h4{
              font: bold 1.8rem 'NexonLv1Gothic';
            }

            p{
              font: 400 1.4rem/21px 'NexonLv1Gothic';
              margin: 30px auto;
            }
          }

        }

        .skill-box{
          width: 100%;
          height: auto;
          background-color: $secondary;
          border-radius: 20px;
          padding: 30px 20px;

          h4{
            font: bold 1.8rem 'NexonLv1Gothic';
            margin-bottom: 30px;
          }


          .skill{
            margin-bottom: 20px;
            position: relative;
            overflow-x:hidden;
            &:nth-child(4){
              margin-bottom: 40px;
            }
        
            p{
              font: 400 1.4rem 'NexonLv1Gothic';
              color: #333;
              margin-bottom: 10px;
            }
            &:before{
              width: 100%;
              height: 10px;
              border-radius: 10px;
              content: "";
              display: block;
              position: absolute;
              background: #959595;
              bottom: 0;
            }
            .skill-bar{
              width: 100%;
              height: 10px;
              border-radius: 10px;
              background: $primary;
              display: block;
              position: relative;
            }

            /* SKILL 1 */
            .skill1{
              width: 95%;
            }
            .skill-bar span{
              position: absolute;
              border-top: 5px solid #f4392f;
              top: -30px;
              padding: 0;
              font-size: 18px;
              padding: 3px 0;
              font-weight: 500;
            } 
            
            .skill-count {
              right: 0;
            }

            /* SKILL 2 */
            .skill2{
              width: 85%;
            }

            /* SKILL 3 */
            .skill3{
              width: 75%;
            }

            /* SKILL 4 */
            .skill4{
              width: 65%;
            }

          }

        }
      } 
    }
  }



</style>