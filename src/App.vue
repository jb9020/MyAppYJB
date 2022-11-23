<template>
  <div id="app">

    <!-- Header -->
    <AppHeader></AppHeader>

    <!-- Router View -->
    <router-view></router-view>

    <!-- Side Navigation -->
    <div id="slide-out" class="sidenav">


      <div class="close-btn sidenav-close">
        <i class="xi-close"></i>
      </div>

      <div class="gnb">
        <ul>
          <li>
            <router-link to="/home">
            <i class="xi-home"><span>HOME</span></i>
            </router-link>
          </li>

          <li>
            <router-link to="/about">
            <i class="xi-user"><span>ABOUT</span></i>
            </router-link>
          </li>

          <li>
            <router-link to="/skills">
            <i class="xi-chart-bar"><span>SKILLS</span></i>
            </router-link>
          </li>

          <li>
            <router-link to="/portfolio"><i class="xi-business"><span>PORTFOLIO</span></i>
            </router-link>
          </li>

          <li>
            <router-link to="/contact"><i class="xi-mail"><span>CONTACT</span></i></router-link>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',

  data() {
    return {
      
      };
  },

  mounted() {
    this.sideNavi();
    this.darkmode();
  },

  methods: {
    sideNavi(){
      $('.sidenav').sidenav({
        edge: 'right'
      });
      $('.sidenav li').click(() => {
        $('.sidenav').sidenav('close');
      })
    },

    darkmode(){
      var body = $('body');
      var modeIcon = $('.container p a i');
      var checkNum = 1;
     
      modeIcon.click(function(){
        if(checkNum == 1){
          body.addClass('dark-mode');

          $(this).attr({
            'class': 'xi-brightness'
          });

          checkNum = 0;
        }else{
          body.removeClass('dark-mode');

          $(this).attr({
            'class': 'xi-moon'
          });

          checkNum = 1;
        }
      });
    },
  },
  
};
</script>

<style lang="scss">
  @import './sass/default.scss';
 
 #app{
  height: 100%;

  // Side Navigation
  .sidenav{
    width: 80%;
    padding: 50% 13%;
    li{
      width: 100%;
      margin: 10px auto;
      text-decoration: none;
        i{
          font-size: 1.8rem;
          &:hover{
            color: $primary;
          }
          span{
            padding-left: 40px;
            font-size: 1.8rem;
            font-style: italic;
            font-weight: 400;
          }
        }
    }

    .close-btn{
      font-size: 2rem;
      position: absolute; right: 10px; top: 10px;
      cursor: pointer;

      &:hover{
        color: $tertiary;
      }
    }

  }
 }

</style>