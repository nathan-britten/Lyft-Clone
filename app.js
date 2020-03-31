function slide () {
  if(counter >= carouselImages.length-1) return
  carouselSlide.style.transition = `transform 0.4s ease-in-out`;
  counter++;
  // console.log(counter)
  carouselSlide.style.transform = 'translateX(' +(-size * counter) +'px)';
  checkCounterAndChangeInfo(counter)
}

function stopCarousel(){
  clearInterval(idCarousel)
}


function showPhoneNumberError(){

  console.log($('#terms').is(":checked"))


  if($("#phone-number").val().length < 1){


    $(".error-holder-a").append("<div class='error-message'><img class='error-icon' src='https://cdn.lyft.com/brochure/error-icon.0331f70e.png'>Please enter a valid phone number</div>") 
                  
  } 

   if(!$('#terms').is(":checked")){

    $(".error-holder-b").append("<div class='error-message'><img class='error-icon' src='https://cdn.lyft.com/brochure/error-icon.0331f70e.png'>You must agree to the terms</div>") 



} 

}



function checkCounterAndChangeInfo(counter){

  if(counter === 5 || counter === 1) {

    $(".step-info").html("STEP 1");
    $(".description-info").html("Open the app and turn on driver mode.");
    $(".black-buttons-item").css({
      "background-color": "white"
    })
    $(".black-buttons-item:nth-child(1)").css({
      "background-color": "black"
    })
  }
  if(counter === 2) {

    $(".step-info").html("STEP 2");
    $(".description-info").html("Accept a ride request.");
    $(".black-buttons-item").css({
      "background-color": "white"
    })
    $(".black-buttons-item:nth-child(2)").css({
      "background-color": "black"
    })
  }
  if(counter === 3) {

    $(".step-info").html( "STEP 3");
    $(".description-info").html("Pick up your passenger");
    $(".black-buttons-item").css({
      "background-color": "white"
    })
    $(".black-buttons-item:nth-child(3)").css({
      "background-color": "black"
    })
  }
  if(counter === 4 || counter === 0 ) {

    $(".step-info").html( "STEP 4");
    $(".description-info").html("Once the ride ends, the app processes pay from the passenger’s saved credit card.");
    $(".black-buttons-item").css({
      "background-color": "white"
    })
    $(".black-buttons-item:nth-child(4)").css({
      "background-color": "black"
    })
  }
}


$(document).ready(function(){

  $(".info").animate({
    opacity: "1",
  marginLeft:"0"
  },1500)

  $(".info-two").animate({
    top:"0px"
  },1500)

  $(".info-three").animate({
    left:"0px"
  },2000)

})

  let activelyHidden = false;

$(document).scroll(function(){

    let fromTop = document.querySelector(".icon-heavy").getBoundingClientRect().top

    if(fromTop < 175){

      let allIcons = document.querySelectorAll(".main-info-iten");
      allIcons.forEach(function(icon, index){
        icon.style.animation = `iconAnimation 0.5s ease forwards ${index/2.5}s`; 
      })

      document.querySelector(".extra-info").classList.add("slideleft")

    }

    let phoneFromTop = document.querySelector(".phone").getBoundingClientRect().top
    if(phoneFromTop < 0 && activelyHidden === false){


      $(".fixed").show()

    } else {
      $(".fixed").hide()
    } 

    })

    $("button").on("click", ()=> {
    $(".fixed").hide()
    activelyHidden = true;

    })


$(".next-button").click(function(){
  
  $(".next-button").css({
  
    marginTop:"50px"
  })

  if($(".error-message").length){


  } else {
    showPhoneNumberError()
    $(".error-message").animate({
      opacity: "1"
    }, 1000)
  }
})


$("#terms").click(function(){

  if($('#terms').is(":checked")){
    $(".error-holder-b").css({
      opacity:"0"
    })
  } else {
    $(".error-holder-b").css({
      opacity:"1"
    })

  }
})

$("#phone-number").keyup(function(){

  var phoneNumber = $("#phone-number").val()
  let regex = /[0-9]/g;

 let test = regex.test(phoneNumber)

  if($("#phone-number").val().length > 7 && test === true)

  $(".error-holder-a").css({
    opacity:"0"
  })


});

const carouselSlide = document.querySelector(".img-container")
// console.log(carouselSlide)
const carouselImages = $(".img-container img")
// console.log(carouselImages)

//buttons


$("#nextButton").click(function(){
  if(counter >= carouselImages.length-1) return
  carouselSlide.style.transition = `transform 0.4s ease-in-out`;
  counter++;
  console.log(counter)
  carouselSlide.style.transform = 'translateX(' +(-size * counter) +'px)';
  checkCounterAndChangeInfo(counter)
})

$("#previousButton").click(function(){
  if(counter <= 0 ) return
  carouselSlide.style.transition = `transform 0.4s ease-in-out`;
  counter--;
  console.log(counter)
  carouselSlide.style.transform = 'translateX(' +(-size * counter) +'px)';
  checkCounterAndChangeInfo(counter)

})

$(".img-container").on('transitionend webkitTransitionEnd oTransitionEnd', function () {
// console.log("fired")

if($(".img-container img")[counter].id === "lastClone"){
  carouselSlide.style.transition = `none`;
  counter = carouselImages.length-2;
  carouselSlide.style.transform = 'translateX(' +(-size * counter) +'px)';
}

if($(".img-container img")[counter].id === "firstClone"){
  carouselSlide.style.transition = `none`;
  counter = carouselImages.length-counter;
  carouselSlide.style.transform = 'translateX(' +(-size * counter) +'px)';
}

});








$(".black-buttons-item:nth-child(1)").css({
  "background-color": "black"
})

$(".phone").hover(function(){

  stopCarousel()
}, function(){
  idCarousel = setInterval(() => {
    slide()
  },3500)
})

$("#previousButton").hover(function(){
  console.log("In")
  $(this).css({
    opacity:"1"
  })
},function(){
  $(this).css({
    opacity:"0.8"
  })
})

$("#nextButton").hover(function(){
  console.log("In")
  $(this).css({
    opacity:"1"
  })
},function(){
  $(this).css({
    opacity:"0.8"
  })
})

//counter
let counter = 1;
const size = carouselImages[0].clientWidth
console.log(size)

carouselSlide.style.transform = 'translateX(' +(-size * counter) +'px)';

let idCarousel = setInterval(() => {
  slide()
},3500)

//show hide

$(".visible").on("click", function(){

  $(this).next().slideToggle(200)

  if($(this).find("i").attr("class") === "fas fa-plus icon-change"){
    $(this).find("i").attr("class", "fas fa-minus")
    console.log("yes")
  } else {
    $(this).find("i").attr("class", "fas fa-plus icon-change")

  }

  console.log($(this).find("i").attr("class"))
})



$(".icon-change").on("click", function(){
  // $(this).next().slideToggle(200)

})

$(".drop-down").slideUp()