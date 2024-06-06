console.log("Hello :)");

// Form Submit Script

const form = document.getElementById("form");
form.addEventListener("submit", formSubmit);

function formSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch("https://getform.io/f/qaloknnb", {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json",
        },
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}


// Form toggle Script

$(document).ready(function() {


  $(".closeForm").click(function(){
    $(".contactForm").addClass("displayNone")
  })

    $(".openForm").click(function(){
        $(".contactForm").removeClass("displayNone")
    })
    $(".formButton").click(function(){
        $(".contactForm").addClass("displayNone")
    })
});



// Image Slider
// $(".slide").hover(function(){
//     $(".content").css('opacity' == 1)
// })



// // Slide Hover Dots Scripting
// 
$(".slide1").mouseenter(function(){
    $(".outerDot1").css({
        'border': '2px solid #FF3147'
    })
    $(".innerDot1").css({
        'background-color' : '#FF3147',
        'height': '10px',
        'width' : '10px'
    })
})

$(".slide1").mouseleave(function(){
    $(".outerDot1").css({
       'border': 'none'
    })
    $(".innerDot1").css({
        'background-color' : 'black'
    })
})



$(".slide2").mouseenter(function(){
    $(".outerDot2").css({
        'border': '2px solid #FF3147'
    })
    $(".innerDot2").css({
        'background-color' : '#FF3147',
         'height': '10px',
        'width' : '10px'
    })
})

$(".slide2").mouseleave(function(){
    $(".outerDot2").css({
       'border': 'none'
    })
    $(".innerDot2").css({
        'background-color' : 'black'
    })
})
$(".slide3").mouseenter(function(){
    $(".outerDot3").css({
        'border': '2px solid #FF3147'
    })
    $(".innerDot3").css({
        'background-color' : '#FF3147',
         'height': '10px',
        'width' : '10px'
    })
})

$(".slide3").mouseleave(function(){
    $(".outerDot3").css({
       'border': 'none'
    })
    $(".innerDot3").css({
        'background-color' : 'black'
    })
})
$(".slide4").mouseenter(function(){
    $(".outerDot4").css({
        'border': '2px solid #FF3147'
    })
    $(".innerDot4").css({
        'background-color' : '#FF3147',
         'height': '10px',
        'width' : '10px'
    })
})

$(".slide4").mouseleave(function(){
    $(".outerDot4").css({
       'border': 'none'
    })
    $(".innerDot4").css({
        'background-color' : 'black'
    })
})
$(".slide5").mouseenter(function(){
    $(".outerDot5").css({
        'border': '2px solid #FF3147'
    })
    $(".innerDot5").css({
        'background-color' : '#FF3147',
         'height': '10px',
        'width' : '10px'
    })
})

$(".slide5").mouseleave(function(){
    $(".outerDot5").css({
       'border': 'none'
    })
    $(".innerDot5").css({
        'background-color' : 'black'
    })
})


// Project Image Sections
$(".projectImg1").hide()
$(".projectImg3").hide()

$(".projectDiv1").click(function(){
    $(".projectImg1").show()
    $(".projectImg2").hide()
    $(".projectImg3").hide()

    $(".projectDiv1").addClass("activeProject")
    $(".projectDiv2").removeClass("activeProject")
    $(".projectDiv3").removeClass("activeProject")
})
$(".projectDiv2").click(function(){
    $(".projectImg1").hide()
    $(".projectImg2").show()
    $(".projectImg3").hide()

    $(".projectDiv1").removeClass("activeProject")
    $(".projectDiv2").addClass("activeProject")
    $(".projectDiv3").removeClass("activeProject")
})
$(".projectDiv3").click(function(){
    $(".projectImg1").hide()
    $(".projectImg2").hide()
    $(".projectImg3").show()

    $(".projectDiv1").removeClass("activeProject")
    $(".projectDiv2").removeClass("activeProject")
    $(".projectDiv3").addClass("activeProject")  
});

