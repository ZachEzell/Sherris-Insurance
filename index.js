var questionOne = false;
var questionTwo = false;
var questionThree = false;

var failurePageShown = false;
var successPageShown = false;
// SHOW SUCCESS BOX
function onSuccess() {
  $('#qualify-form').addClass('animated slideOutLeft');
  $('#status').html('SUCCESS');
  $('#status').css('background', 'green');
  setTimeout(function() {
    $('#qualify-form').hide();
    $('#success').show();
    $('#success').addClass('animated slideInRight');
  }, 1200);
  successPageShown = true;
}
function onFailure() {
  console.log('failure page shown');
  $('#qualify-form').addClass('animated slideOutLeft');
  $('#status').html('DID NOT QUALIFY');
  $('#status').css('background', 'red');
  setTimeout(function() {
    $('#qualify-form').hide();
    $('#failure').show();
    $('#failure').addClass('animated slideInRight');
  }, 1200);
  failurePageShown = true;
}
function fetchInfoBox() {
  if (successPageShown) {
    $('#success').addClass('animated slideOutLeft');
    setTimeout(function() {
      $('#success').hide();
      $('#email-us').show();
      $('#email-us').addClass('animated slideInRight');
    }, 1200);
  } else if (failurePageShown) {
    console.log('kicked off');
    $('#failure').removeClass('animated slideInRight');
    $('#failure').addClass('animated slideOutLeft');

    setTimeout(function() {
      $('#failure').hide();
      $('#email-us').show();
      $('#email-us').addClass('animated slideInRight');
    }, 1200);
  }
}

$(() => {
  $('.button-collapse').sideNav();
  new WOW().init();
  $('.carousel.carousel-slider').carousel({ fullWidth: true });
});
$(() => {
  $(document).ready(function() {
    $('input#input_text, textarea#textarea1').characterCounter();
  });
  $('#qualify-form').hide();
  $('#email-us').hide();
  $('#success').hide();
  $('#failure').hide();
  $('#find-out-btn').click(() => {
    $('#qualifications').addClass('animated slideOutLeft');
    setTimeout(function() {
      $('#qualifications').hide();
      $('#qualify-form').show();
      $('#qualify-form').addClass('animated slideInRight');
    }, 1200);
  });

  $('#submit-btn').click(() => {
    if (questionOne && questionTwo) {
      onSuccess();
    } else if (questionOne && questionTwo && questionThree) {
      onSuccess();
    } else if (questionTwo && questionThree) {
      onSuccess();
    } else {
      onFailure();
    }
  });

  $('#call-us-btn').click(() => {
    fetchInfoBox();
  });
  $('#call-us-btn-2').click(() => {
    fetchInfoBox();
  });
});
$(function() {
  $('a.smooth-scroll').click(function(event) {
    event.preventDefault();

    var section = $(this).attr('href');
    $('html,body').animate({
      scrollTop: $(section).offset().top
    });
  });
});

// REFACTOR THIS CODE INTO A SINGLE FUNCTION
$('#test1').on('click', () => {
  questionOne = true;
  console.log('test one was checked');
  console.log(questionOne);
});
$('#test2').on('click', () => {
  questionOne = false;
  console.log('test one was checked');
});
$('#test3').on('click', () => {
  questionTwo = true;
  console.log(questionTwo);
  console.log('test Two was checked');
});
$('#test4').on('click', () => {
  questionTwo = false;
  console.log('test Two was checked');
});
$('#test5').on('click', () => {
  questionThree = true;
  console.log('test Three was checked');
});
$('#test6').on('click', () => {
  questionThree = false;
  console.log('test Three was checked');
});

// NAVBAR

$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() < 60) {
      $('#addFixed').removeClass('navbar-fixed');
      $('.nav-wrapper').css('padding', ' 3em 3em 5em 0 ');
      $('#web-logo').css('width', '150px');
      $('#web-logo').css('height', '150px');
      $('#web-logo').css('margin-top', '-47px');
      $('#back-to-top').fadeOut();
      $('#web-logo').attr('src', './images/logo.png');
    } else {
      $('#addFixed').addClass('navbar-fixed');

      $('#web-logo').css('width', '80px');
      $('#web-logo').css('height', '80px');
      $('#web-logo').css('margin-top', '-20px');
      $('#web-logo').css('margin-left', '20px');
      $('#back-to-top').fadeIn();
      $('.nav-wrapper').css('padding', ' 2em 3em 4em 0 ');
      $('#web-logo').attr('src', './images/logo-short.png');
    }
  });
});
