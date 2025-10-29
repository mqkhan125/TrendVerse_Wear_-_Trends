let slide = document.querySelectorAll('.slideCard');
let cards = document.querySelectorAll('.card')
let hideCard = document.querySelector('.hideCard');
let cardDetails = document.querySelector(".cardDetails");

let count = 0;
slide.forEach((slides, index) => {
    slides.style.left = `${index * 100}%`;

})

function moveToSlide(){
    slide.forEach((currCard) => {
        currCard.style.transform = `translateX(-${count * 100}%)`
    })
}

setInterval(()=>{
    count++;
    if(count == slide.length){
        count=0;
    }
    
    moveToSlide();
},2000)


