/** Sticky Navigation */

let navbar = $(".navbar");

$(window).scroll(function(){
  let oTop = $(".section-2").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
      navbar.addClass("sticky");
  } else {
      navbar.removeClass("sticky");
  }
  
}); 

/** Counter Animation */

let nCount = function(selector){
    $(selector).each(function(){
        $(this).animate({
            Counter: $(this).text()
         }, 
         {
            duration: 4000,
            easing: "swing",
            step: function(value) {
                $(this).text(Math.ceil(value));
            }
         }
        );


    });
};

let a = 0;
$(window).scroll(function(){
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if (a==0 && $(window).scrollTop() >= oTop){
        a++;
        nCount(".rect > h1");
    }
})

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}