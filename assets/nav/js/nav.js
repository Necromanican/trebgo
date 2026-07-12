

  $('.tempmobilemenu-1 input[type="checkbox"]').click(function(){
    if($(this).is(":checked")) {
        $(".mobile-show-red").slideDown();
        $("body").addClass('body-control');
        $(".bg-cover-rs").addClass('showbg');
        $(".shin-bg").removeClass('shinglass');
       /* $(".zoomout").css("overflow", "hidden") ;*/

       $(".mb-apt-1").addClass('mbslide-1');
       $(".mb-apt-2").addClass('mbslide-2');
       $(".mb-apt-3").addClass('mbslide-3');
       $(".mb-apt-4").addClass('mbslide-4');
       $(".mb-apt-5").addClass('mbslide-5');
       $(".mb-apt-6").addClass('mbslide-6');


/*
       setTimeout(function () { 
        $(".product-ul").slideUp(200);
        $(".prodarrow-tgr").removeClass("open");
        $(".prodmini-nav-shadow").fadeOut('fast');
        $(".prodmini-nav-shadow").removeClass("downlock");
        $("body").removeClass("body-lock");

      }, 300);
       
*/




        
    } else {
        $(".mobile-show-red").slideUp();
        $("body").removeClass('body-control');
        $(".bg-cover-rs").removeClass('showbg');
       /* $(".zoomout").css("overflow", "") ;*/
       
       setTimeout(function () { 
        $(".mb-apt-1").removeClass('mbslide-1');
        $(".mb-apt-2").removeClass('mbslide-2');
        $(".mb-apt-3").removeClass('mbslide-3');
        $(".mb-apt-4").removeClass('mbslide-4');
        $(".mb-apt-5").removeClass('mbslide-5');
        $(".mb-apt-6").removeClass('mbslide-6');
      }, 250);

     
      
    }
});





  $('.shinmb-link').click(function(){
        $(".mobile-show-red").slideUp();
        $("body").removeClass('body-control');
        $(".bg-cover-rs").removeClass('showbg');
        $('.tempmobilemenu-1 input[type="checkbox"]').prop('checked', false);
       /* $(".zoomout").css("overflow", "") ;*/
       
       setTimeout(function () { 
        $(".mb-apt-1").removeClass('mbslide-1');
        $(".mb-apt-2").removeClass('mbslide-2');
        $(".mb-apt-3").removeClass('mbslide-3');
        $(".mb-apt-4").removeClass('mbslide-4');
        $(".mb-apt-5").removeClass('mbslide-5');
        $(".mb-apt-6").removeClass('mbslide-6');
      }, 250);

    
});









$(function() {
  //caches a jQuery object containing the header element
  /*var header = $(".temp-mainnav-logo");*/
  var glassmorph = $(".shin-bg");
  
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll > 0) {
          /*header.addClass('small');*/
          glassmorph.addClass('shinglass');
      } else {
         /* header.removeClass("small");*/
          glassmorph.removeClass("shinglass");
      }
  });


  $(".zoomout").scroll(function() {
    var scroll = $(this).scrollTop();

    if (scroll > 0) {
   
        glassmorph.addClass('shinglass');
    } else {

        glassmorph.removeClass("shinglass");
    }
});


});