$(function() {

  'use strict';
  $('html').niceScroll({
    cursorcolor: '#f7600e',
    cursorwidth: 10,
    cursorborderradius: 0,
    cursorborder: '1px solid #f7600e'

  });

  $('.header').height($(window).height());


  // scroll to features

  $('.header .arrow i').click( function() {
    $('html, body').animate({
      scrollTop: $('.features').offset().top
    },1000);
  } );

  $('.hire-us').click(function() {
    $('html, body').animate({
      scrollTop: $('.our-team').offset().top
    },1000);
  });

  $('.our-work-btn').click(function() {
    $('html, body').animate({
      scrollTop: $('.our-work').offset().top
    },1000);
  });

  


    // show button
  
  $('.show-more').click(function(){
    $('.our-work .hidden').slideDown(1000);
  });





  
});


function sub() {

  let em = $('#validation').val();


  if(em == '' ){


    $('#validation').css('border','2px solid red');
    
    $('#_text').text('please enter your data');
  }else{

  $('#validation').css('border','1px solid #fff');
  $('#_text').text('Submitting...');
    
  
  }
}



    
//  Check Testmonial

let leftArrow  = $('.testm .fa-chevron-left');  
    rightArrow = $('.testm .fa-chevron-right');

function client(){
  if($('.client:first').hasClass('active')){
  leftArrow.fadeOut();
  }else{
  leftArrow.fadeIn();
  }

  if($('.client:last').hasClass('active')){
    rightArrow.fadeOut();
    }else{
    rightArrow.fadeIn();
    }


  // $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
  // $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
}

// $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn(); e5tsar le IF 

client();

$('.testm i').click(function(){
  if($(this).hasClass('fa-chevron-right')){
    $('.testm .active').fadeOut(100, function(){
      $(this).removeClass('active').next('.client').addClass('active').fadeIn();
      client();
    });
  }else{
    $('.testm .active').fadeOut(100, function(){
      $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
      client();
    });
  }



});


// Contact validation

function validation() {

    let e = $('#inp1').val();
        t = $('#inp2').val();

    if(e == '' && t == ''){

        // $('#inp1').addClass('validation-border');
        // $('#v').html('You must enter your name..');

        $('#inp1').css('border','1px solid red');
        $('#inp2').css('border','1px solid red');
        $('#validation-text').text('please enter your data');
    }else if(e == ''){
      $('#inp1').css('border','1px solid red');
      $('#inp2').css('border','1px solid #fff');
    }
    else if(t == ''){
      $('#inp2').css('border','1px solid red');
      $('#inp1').css('border','1px solid #fff');
    }else{

      $('#inp1').css('border','1px solid #fff');
      $('#inp2').css('border','1px solid #fff');
      $('#validation-text').text('Submitting...');
        
       
    }
}
