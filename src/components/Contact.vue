<template>
  <div class="contact">
    
    <!-- Contents -->
    <div class="contents">

      <div class="info">
        
        <div class="bar"></div>

        <h2>CONTACT</h2>

        <h3>Info</h3>

        <!-- Map -->
        <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25379.470868556116!2d126.85340900268497!3d37.332236059898065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b68ac7e971041%3A0x4eeae281936d4f1!2z6rK96riw64-EIOyViOyCsOyLnCDsg4HroZ3qtawg67aA6rOh64-Z!5e0!3m2!1sko!2skr!4v1661015457388!5m2!1sko!2skr" width="450" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

          <div class="user">
            <p>Phone<span>&nbsp;&nbsp;010-8359-2636</span></p>
            <p>Email<span>&nbsp;&nbsp;&nbsp;&nbsp;jb9020@naver.com</span></p>
            <p>Address<span>경기도 안산시 부곡동</span></p>
          </div>

      </div>

      <!-- Form -->
      <div class="talk">

        <h3>Let's Talk</h3>

        <div class="bar"></div>

        <form action="">      
          <input name="name" type="text" class="feedback-input" placeholder="Name" />

          <input name="email" type="text" class="feedback-input" placeholder="Email" />

          <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
          
          <input type="submit" value="Send Message"/>
        </form>
        
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
    
  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>
  @import '../sass/_variable.scss';

  .contact{
    padding: 50px 20px;

    // Contents
    .contents{
      width: 100%;
      height: auto;
      margin: 30px auto;

      .info{
        width: 100%;
        height: auto;
        background-color: $secondary;
        border-radius: 20px;
        margin-bottom: 30px;
        padding: 10px 20px 20px 20px;

        .bar{
          display: block;
          content:'';
          width: 18px;
          height: 4px;
          background-color: $primary;
          position: relative; top: 15px
        }
        // Map
        .map{
          margin-bottom: 30px;
          
          iframe{
            width: 100%;
            border-radius: 15px;
          }
        }
        h2{
          margin-top: 30px;
          font: 700 2.3rem 'GmarketSans';
          color: $color6;
        }
        h3{
          margin-top: 40px;
          margin-bottom: 30px;
          font: 700 2rem 'GmarketSans';
        }
      
        p{
          font: 400 1.6rem 'NexonLv1Gothic';
          position: relative;
          margin-bottom: 15px;
          span{
            position: relative; left: 20px;
            margin-left: 15px;
            font: 400 1.4rem 'NexonLv1Gothic';
          }
        }
      }

      .talk{
        width: 100%;
        height: auto;
        background-color: $secondary;
        padding: 10px 20px;
        border-radius: 20px;

        .bar{
          display: block;
          content:'';
          width: 16px;
          height: 4px;
          background-color: $primary;
          position: relative; top: -40px; left: -5px;
        }

        h3{
          padding-top: 30px;
          font: 700 2rem 'GmarketSans';
        }

        @import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);

        form {
          width: 100%;
          height: auto;
          margin: 20px auto;
        }

        .feedback-input {
          color: #333;
          font-family: Helvetica, Arial, sans-serif;
          font-weight:500;
          font-size: 18px;
          border-radius: 5px;
          line-height: 22px;
          background-color: transparent;
          border:2px solid $primary;
          transition: all 0.3s;
          padding: 13px;
          margin-bottom: 15px;
          width:100%;
          box-sizing: border-box;
          outline:0;
        }

        .feedback-input:focus {
          border:2px solid $tertiary;
          }

        textarea {
          height: 150px;
          line-height: 150%;
          resize:vertical;
        }

        [type="submit"] {
          font-family: 'Montserrat', Arial, Helvetica, sans-serif;
          width: 100%;
          background-color: transparent;
          border-radius:5px;
          border: 2px solid $primary;
          cursor:pointer;
          color: #707070;
          font-size: 15px;
          padding-top: 10px;
          padding-bottom:10px;
          transition: all 0.3s;
          margin-top:-4px;
          font-weight:700;
        }
        
        [type="submit"]:hover {
          background-color: $tertiary;
          color: #fff;
          }



      }

    }
  }



</style>