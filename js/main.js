
$('.side-nav').css('left', -$('.side-inner').innerWidth());
$('.side-nav p').click(function(){
    const menu = $('.side-inner').innerWidth();
    if($('.side-nav').css('left') !== '0px') {
        $('.side-nav').animate({left: '0px'}, 500) 
    }
})

$('.closebtn').click(function(){
    if($('.side-nav').css('left') === '0px') {
        $('.side-nav').animate({'left' : -$('.side-inner').innerWidth()}, 500);
    }
})

$('a[href^="#"]').click(function(e){
    const sectionTop = $(e.target.getAttribute('href')).offset().top

    $('html, body').animate({'scrollTop' : sectionTop}, 500)
})

$('.toggle').click(function(){
    $('.item').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
})


window.onload = function() {
   
    countDownToTime("25 november 2024 9:56:00");
  }

  function countDownToTime(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate - now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }


  let maxLength = 100;
  $('textarea').keyup(function() {
    let length = $(this).val().length;
    let AmountLeft = maxLength - length;
    if ( AmountLeft <= 0 )
              {
                   $("#chars").text("your available character finished");
                  
              }
          else{
          
          $("#chars").text(AmountLeft);
          }
  });