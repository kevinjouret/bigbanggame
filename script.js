const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const lizard = document.querySelector('.lizard');
const spock = document.querySelector('.spock');

const Pimg = document.querySelector('.Pimg');
const Cimg = document.querySelector('.Cimg');

const PscoreSpan = document.querySelector('.Pscore');
const CscoreSpan = document.querySelector('.Cscore');
let pScore = 0;
let cScore = 0;

const images_opt = ['rock','paper','scissors','lizard','spock'];

const Pchoice = (i) =>{
    Pimg.src = 'images/'+images_opt[i]+'.png'
    Pimg.value = images_opt[i]
    compare()
}
const Cchoice = (i) =>{
    Cimg.src = 'images/'+images_opt[i]+'.png'
    Cimg.value = images_opt[i]
}

rock.addEventListener('click', () =>{
   Cchoice(Math.floor(Math.random() * 5))
   Pchoice(0) 
})

paper.addEventListener('click', () =>{
    Cchoice(Math.floor(Math.random() * 5))
    Pchoice(1) 
})

scissors.addEventListener('click', () =>{
    Cchoice(Math.floor(Math.random() * 5))
    Pchoice(2) 
})

lizard.addEventListener('click', () =>{
    Cchoice(Math.floor(Math.random() * 5))
    Pchoice(3) 
})

spock.addEventListener('click', () =>{
    Cchoice(Math.floor(Math.random() * 5))
    Pchoice(4) 
})

const compare = () =>{
    if(Pimg.value == 'rock'){
        if((Cimg.value == 'paper') || (Cimg.value == 'spock')){
            cScore++;
        }
        else if((Cimg.value == 'scissors') || (Cimg.value == 'lizard')){
            pScore++;
        }
        else if(Cimg.value == 'rock'){

        }
    }
    else if(Pimg.value == 'paper'){
        if((Cimg.value == 'scissors') || (Cimg.value == 'lizard')){
            cScore++;
        }
        else if((Cimg.value == 'rock') || (Cimg.value ==  'spock')){
            pScore++;1
        }
        else if(Cimg.value == 'paper'){

        }
    }
    else if(Pimg.value == 'scissors'){
        if((Cimg.value == 'rock') || (Cimg.value == 'spock')){
            cScore++;
        }
        else if((Cimg.value == 'paper') || (Cimg.value == 'lizard')){
            pScore++;
        }
        else if(Cimg.value == 'scissors'){

        }
    }
    else if(Pimg.value == 'lizard'){
        if((Cimg.value == 'rock') || (Cimg.value == 'scissors')){
            cScore++;
        }
        else if((Cimg.value == 'paper') || (Cimg.value == 'spock')){
            pScore++;
        }
        else if(Cimg.value == 'lizard'){

        }
    }
    else if(Pimg.value == 'spock'){
        if((Cimg.value == 'lizard') || (Cimg.value == 'paper')){
            cScore++;
        }
        else if((Cimg.value == 'rock') || (Cimg.value == 'scissors')){
            pScore++;
        }
        else if(Cimg.value == 'spock'){

        }
    }
    PscoreSpan.textContent = pScore
    CscoreSpan.textContent = cScore
    
    if(pScore == 10){
        alert("Vous avez gagné !")
    }
    else if(cScore == 10){
        alert("Vous avez perdu !")
    }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}




