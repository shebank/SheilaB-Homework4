$(document).ready(function(){
    //The colored boxes
       $('.changeBtn1').on('click',function() {
           $('.redBox').css('background-color', 'green');
   });
        $('.changeBtn2').on('click',function() {
           $('.blueBox').css('background-color', 'brown');
        });
      $('.changeBtn3').on('click',function() {
          $('.greenBox').css('background-color', 'purple');
    });
        $('.changeBtnAll').on('click',function() {
            $('.greenBox, .blueBox, .redBox').css('background-color', 'black');
        });
    //Hide boxes
    $('.hideBtn1').on('click',function() {
        $('.redBox').hide();
    });
    $('.hideBtn2').on('click',function() {
        $('.blueBox').hide();
    });
    $('.hideBtn3').on('click',function() {
        $('.greenBox').hide();
    });
    $('.hideBtnAll').on('click',function() {
        $('.redBox, .blueBox, .greenBox').hide();
    });
    // Reset Colors
    $('.resetcol').on('click',function() {
        $('.redBox').css('background-color', 'red');
        $('.blueBox').css('background-color', 'blue');
        $('.greenBox').css('background-color', 'lime');
    });
    })
    //Show All
    $('.showall').on('click',function() {
        $('.redBox, .blueBox, .greenBox').show();
    });



$(document).ready(function(){
    //The colored boxes
       $('.changeBtn1').on('click',function() {
           $('.redBox').css('background-color', 'green');
   });
        $('.changeBtn2').on('click',function() {
           $('.blueBox').css('background-color', 'brown');
        });
      $('.changeBtn3').on('click',function() {
          $('.greenBox').css('background-color', 'purple');
    });
        $('.changeBtnAll').on('click',function() {
            $('.greenBox, .blueBox, .redBox').css('background-color', 'black');
        });
    //Hide boxes
    $('.hideBtn1').on('click',function() {
        $('.redBox').hide();
    });
    $('.hideBtn2').on('click',function() {
        $('.blueBox').hide();
    });
    $('.hideBtn3').on('click',function() {
        $('.greenBox').hide();
    });
    $('.hideBtnAll').on('click',function() {
        $('.redBox, .blueBox, .greenBox').hide();
    });
    // Reset Colors
    $('.resetcol').on('click',function() {
        $('.redBox').css('background-color', 'red');
        $('.blueBox').css('background-color', 'blue');
        $('.greenBox').css('background-color', 'lime');
    });
    })
    //Show All
    $('.showall').on('click',function() {
        $('.redBox, .blueBox, .greenBox').show();
    });


