var cardClick;
console.log("Hi");
var score=0;
$(".card").click(function(){
  console.log("Hi");
  var cardID = $(this).attr('id');
  console.log("Card ID" + cardID);
  if(!cardClick){
    $(cardID).css("border","solid 10px white");
    cardClick = cardID;
  } else {
    if(cardClick === "fC1" && "cC1" === cardID) {
      score+=1;
      alert("Correct! the Camp fire was caused by PG&E's wires that short circuited.");
      $("#fC1").fadeOut();
      $("#cC1").fadeOut();
          if (score == 4){
        window.location.href = "/page-two.html";
      }
    } else if(cardClick === "fC2" && "cC2" === cardID){
      score+=1;
      alert("Correct! the Butte fire was caused by a kitchen explosion. So always make sure to turn off anything that has a running flame.");
      $("#fC2").fadeOut();
      $("#cC2").fadeOut();
    if (score == 4){
        window.location.href = "/page-two.html";
      }
    } else if(cardClick === "fC3" && "cC3" === cardID){
      score+=1;
      alert("Correct! the Mendocino Complex fire was caused by a cigarette. The lesson learned? Always put out your cigarettes when you are done smoking.");
      $("#fC3").fadeOut();
      $("#cC3").fadeOut();
      if (score == 4){
        window.location.href = "/page-two.html";
      }
    } else if(cardClick === "fC4" && "cC4" === cardID){
      score+=1;
      alert("Correct! The Carr fire was caused by sparks from a car on asphalt speeding. Lesson learned? Don't speed! You will most likely get a ticket also.");
      $("#fC4").fadeOut();
      $("#cC4").fadeOut();
      if (score == 4){
        window.location.href = "/page-two.html";
      }
    } else {
      alert("Incorrect! That was not the cause of the fire.");
    }
    $(".scoreOne").text(score);
    cardClick = undefined;
  }

});

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("gif");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1;}
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 1500);
}


// var scoreOne;
// scoreOne=0;

// var freeThrow;
// freeThrow=1;

// updateTeams();
// var scoreOne;
// var teamOneName;
// var freeThrow;
// $(".one").click(function(){
//     var team;
//     team = $(this).attr("team");
    
//     var points;
//     points = $(this).attr("class");
    
//     updateScore(team, points);
// });

// function updateScore(myTeam, myPoints){
//     if(myTeam === "one"){
//         if(myPoints === "freeThrow"){
//             scoreOne -= freeThrow;
//         }
//         $(".scoreOne").text(scoreOne);
//         } else if(myPoints === "freeThrow"){
//             scoreTwo -= freeThrow;
//         }
// }
  /*
$(".card").click(function(){
  var cardID = $(this).attr('id');
  console.log("Card ID" + cardID);
  if(!cardClick1){
    $(cardID).css("border","solid 10px white");
    cardClick1 = cardID;
  } else {
    if(cardClick1 === "fC1" && "cC1" === cardID){
      alert("Correct");
    }
    cardClick1 = undefined;
  }

});
*/

