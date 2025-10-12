// ========== SLIDESHOW ========== //
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("destination-slides");
  let dots = document.getElementsByClassName("destination-dot");

  if (slides.length === 0) return; // Không có slide thì thoát

  // Ẩn tất cả slide
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Tăng chỉ số slide
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Xóa active khỏi tất cả dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-destination-dot", "");
  }

  // Hiển thị slide hiện tại + đánh dấu dot
  slides[slideIndex - 1].style.display = "block";
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].className += " active-destination-dot";
  }

  // Auto đổi sau 4s
  setTimeout(showSlides, 4000);
}

// ========== BACK TO TOP BUTTON ========== //
document.addEventListener("DOMContentLoaded", function () {
  // Tìm hoặc tạo nút back-to-top
  let backBtn = document.getElementById("backToTop");
  if (!backBtn) {
    backBtn = document.createElement("button");
    backBtn.id = "backToTop";
    backBtn.title = "Go to top";
    backBtn.innerHTML = "↑";
    document.body.appendChild(backBtn);
  }

  // Ẩn ban đầu
  backBtn.classList.remove("show");

  // Click → cuộn lên
  backBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Hiện khi cuộn quá 300px
  function toggleBackToTop() {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop || 0;
    if (scrolled > 300) {
      backBtn.classList.add("show");
    } else {
      backBtn.classList.remove("show");
    }
  }

  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  toggleBackToTop(); // Gọi khi load xong
});

// ========== MOBILE NAV TOGGLE ==========
function myFunction() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");
}