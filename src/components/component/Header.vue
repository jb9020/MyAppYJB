<template>
  <div class="header">
    <div class="container">

      <!-- Logo -->
      <h1>
        <router-link to="/">YJB</router-link>
      </h1>

      <!-- Mobile Button -->
      <a href="#" id="mobile-btn" data-target="slide-out" class="sidenav-trigger">
        <i class="xi-bars"></i>
      </a>

      <!-- BGC Change -->
      <p>
        <a href="#">
          <i class="xi-moon"></i>
        </a>
      </p>      

    </div>

  </div>

  
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      
    };
  },

  mounted() {
    this.darkmode();
  },

  methods: {
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

<style lang="scss" scoped>
@import '../../sass/_variable.scss';



  

</style>