let bottleBloc=document.getElementById("bottle");
let bottlePosition="right";
let activeTest;

function bottleMovement(){
    bottleBloc.addEventListener("click",function(){
        activeTest=setInterval(testIfBottleOnSpan,17);
        console.log(activeTest);
        if(bottlePosition=="right"){
            resetBottleClasses();
            bottleBloc.classList.add("startGoToLeft");
            setTimeout(function(){
                bottleBloc.classList.add("bottle__position--left");
                clearInterval(activeTest);
                resetLetterClasses();
            },1200);
            bottlePosition="left";
        }
        else{
            bottleBloc.classList.add("startGoToRight");
            bottlePosition="right";
            setTimeout(function(){
                clearInterval(activeTest);
                resetLetterClasses();

            },1200);
        }
    });
}

function resetBottleClasses(){
    bottleBloc.classList.remove("startGoToLeft");
    bottleBloc.classList.remove("startGoToRight");
    bottleBloc.classList.remove("bottle__position--left");
}

let adjectives=document.getElementById("adjectives").querySelectorAll("span");
let adjectivesLength=adjectives.length;


let infoBottleBloc;
let infoLetter;

function testIfBottleOnSpan(){
    infoBottleBloc=bottleBloc.getBoundingClientRect();
console.log(infoBottleBloc)
    for (let i = 0; i < adjectivesLength; i++) {
      //  console.log(adjectives[i]);
        infoLetter=adjectives[i].getBoundingClientRect();
        if((infoLetter["left"]>infoBottleBloc["left"])&&(infoLetter["right"]<infoBottleBloc["right"])&&(infoLetter["top"]>infoBottleBloc["top"])&&(infoLetter["bottom"]<infoBottleBloc["bottom"])){

            if (adjectives[i].className=="") {
 
                adjectives[i].classList.add("bottle__letter");
                adjectives[i].classList.add("noDelete");
            }
            else if(!(adjectives[i].className.includes("noDelete"))){
                console.log(!(adjectives[i].className.includes("noDelete")))
                adjectives[i].classList.remove("bottle__letter")
                adjectives[i].classList.add("noAdd");
            }
        }
    }
}

function resetLetterClasses(){
    for (let i = 0; i < adjectivesLength; i++) {
        adjectives[i].classList.remove("noAdd");
        adjectives[i].classList.remove("noDelete");
    }
}
console.log("rezrez".includes("rez"));


bottleMovement();

