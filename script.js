document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  let cartCount = 0;
  const cartBadge = document.getElementById("cartCount");
  const addCartBtns = document.querySelectorAll(".add-cart-btn");

  addCartBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      cartCount++;
      cartBadge.textContent = cartCount;

      btn.style.backgroundColor = "var(--primary)";
      btn.style.color = "var(--white)";
      setTimeout(() => {
        btn.style.backgroundColor = "";
        btn.style.color = "";
      }, 500);
    });
  });

  const modal = document.getElementById("productModal");
  const closeModalBtn = document.getElementById("closeModal");
  const quickViewBtns = document.querySelectorAll(".quick-view-btn");

  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalPrice = document.getElementById("modalPrice");

  quickViewBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = e.target.closest(".card");
      if (!card) return;

      const title = card.dataset.title || "Product Item";
      const price = card.dataset.price ? `$${card.dataset.price}` : "$49.99";
      const imgSrc = card.querySelector("img").src;

      modalTitle.textContent = title;
      modalPrice.textContent = price;
      modalImage.src = imgSrc;

      modal.classList.add("active");
    });
  });

  const closeModal = () => {
    modal.classList.remove("active");
  };

  if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // 4. Horizontal Slider Navigation
  const sliderTrack = document.getElementById("sliderTrack");
  const prevSlide = document.getElementById("prevSlide");
  const nextSlide = document.getElementById("nextSlide");

  if (sliderTrack && prevSlide && nextSlide) {
    prevSlide.addEventListener("click", () => {
      sliderTrack.scrollBy({ left: -300, behavior: "smooth" });
    });

    nextSlide.addEventListener("click", () => {
      sliderTrack.scrollBy({ left: 300, behavior: "smooth" });
    });
  }
});