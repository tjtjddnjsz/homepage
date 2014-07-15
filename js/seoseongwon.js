$(document).ready(function() {

    // page moving

     $(".aboutpage").click(function(event){            
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });

     $(".visionpage").click(function(event){            
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });

     $(".designedbyswpage").click(function(event){            
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });


     $(".contactpage").click(function(event){            
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });

     $(".sidebar").click(function(event){            
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });

     $(".backtotop").click(function(event){            
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });

    // contact 

     $('#contact1').mouseenter(function() {
       $(this).animate({
         height: '+=10px'
       });
     });
     $('#contact1').mouseleave(function() {
       $(this).animate({
         height: '-=10px'
       }); 
     });

     $('#contact2').mouseenter(function() {
       $(this).animate({
         height: '+=10px'
       });
     });
     $('#contact2').mouseleave(function() {
       $(this).animate({
         height: '-=10px'
       }); 
     });

     $('#contact3').mouseenter(function() {
       $(this).animate({
         height: '+=10px'
       });
     });
     $('#contact3').mouseleave(function() {
       $(this).animate({
         height: '-=10px'
       }); 
     });
     
      var top = $('#adside').offset().top - parseFloat($('#adside').css('marginTop').replace(/auto/, 0));
      $(window).scroll(function (event) {
      var y = $(this).scrollTop();
      if (y >= top) {
      $('#adside').addClass('fixed');
      } else {
      $('#adside').removeClass('fixed');
      }
      });

     //
     $("#testbanner").scrollFollow({
                speed : 800,   
                offset : 200    
            }); 

});

