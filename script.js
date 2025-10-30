let slide = document.querySelectorAll(".slideCard");
let cards = document.querySelectorAll(".card");
let hideCard = document.querySelector(".hideCard");
let cardDetails = document.querySelector(".cardDetails");

let count = 0;
slide.forEach((slides, index) => {
  slides.style.left = `${index * 100}%`;
});

function moveToSlide() {
  slide.forEach((currCard) => {
    currCard.style.transform = `translateX(-${count * 100}%)`;
  });
}

setInterval(() => {
  count++;
  if (count == slide.length) {
    count = 0;
  }

  moveToSlide();
}, 2000);

// cards details
cards.forEach((curCard) => {
  curCard.addEventListener("click", () => {
    let imgSrc = curCard.querySelector("img").src;
    document.querySelector(".container").style.display = "none";
    hideCard.style.display = "block";
    cardDetails.innerHTML = `
      <img src="${imgSrc}" alt="" />
      <div class="cardText">
        <h2>Top Trending Wear</h2>
        <h2>Upto 30% off Harry...</h2>
        <p>Lorem ipsum dolor sit amet...</p>
        <p>Lorem ipsum dolor sit amet...</p>
        <p>Lorem ipsum dolor sit amet...</p>
        <p>Lorem ipsum dolor sit amet...</p>
        <button>Buy Now</button>
        <button>Add To Cart</button>
        <a href="#" class="backBtn">Back</a>
      </div>
    `;

    const backBtn = cardDetails.querySelector(".backBtn");
    backBtn.addEventListener("click", (e) => {
      e.preventDefault();
      hideCard.style.display = "none";
      document.querySelector(".container").style.display = "block";
    });
  });
});
