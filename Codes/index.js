const paginationContent = [
  {
    "id": 1,
    "title": "Sharing best practices",
    "description": "We’re able to provide insights that help local authorities make their cities more connected and liveable."
  },
  {
    "id": 2,
    "title": "One app, many ways to move",
    "description": "With multiple transport services inside a single app, getting around safely, in a more sustainable way, has never been easier."
  },
  {
    "id": 3,
    "title": "Less is more",
    "description": "Shared transport can transform our cities by lowering emissions, reducing congestion, and the demand for parking spaces."
  }
]

const prevBtn = document.querySelector(".setup-buttons .prev-btn");
const nextBtn = document.querySelector(".setup-buttons .next-btn");

const paginationTitle = document.querySelector(".pagination-box .pagination-title")
const paginationDescription = document.querySelector(".pagination-box .pagination-description")

const circleBars = document.querySelectorAll(".pagination-bar .bar-circle");

let currentPag = 0;
function renderPagination() {
  const item = paginationContent[currentPag];

  paginationTitle.textContent = item.title;
  paginationDescription.textContent = item.description;
}

function circleBar() {
  for (let i = 0; i < 3; i++) {
    circleBars[i].style.backgroundColor = "#323A36";
  }
  circleBars[currentPag].style.backgroundColor = "#74EFAA";

}
prevBtn.addEventListener("click", () => {
  currentPag--;
  if (currentPag === 0) {
    prevBtn.classList.toggle("disabled")
  }
  if (currentPag < 2) {
    nextBtn.classList.remove("disabled")
  }
  renderPagination()
  circleBar()

})
nextBtn.addEventListener("click", () => {
  currentPag++;
  if (currentPag === 2) {
    nextBtn.classList.toggle("disabled")
  }
  if (currentPag > 0) {
    prevBtn.classList.remove("disabled")
  }
  renderPagination()
  circleBar()

})

renderPagination()
circleBar()



// Read and Delivery Swap


const rideSpan = document.querySelector(".small-navbar span.rides");
const deliverySpan = document.querySelector(".small-navbar span.delivery")

const navbarTitle = document.querySelector(".description-part .navbar-title");

const belowLines = document.querySelectorAll(".small-navbar .lines .line")


rideSpan.addEventListener("click", () => {
document.querySelector(".latest-features-content .download-our-apps").classList.toggle("status")

navbarTitle.innerText = "The fast, affordable way to ride.";
belowLines[0].style.borderBottomColor = "#229c65"
belowLines[1].style.borderBottomColor = "#232725"
deliverySpan.style.color = " rgba(243, 255, 250, 0.66)"
rideSpan.style.color = "#ECEEE7"
})



deliverySpan.addEventListener("click", () => {
document.querySelector(".latest-features-content .download-our-apps").classList.toggle("status")
navbarTitle.innerText = "The food you love, delivered fast!";
belowLines[0].style.borderBottomColor = "#232725"
belowLines[1].style.borderBottomColor = "#229c65"
rideSpan.style.color = " rgba(243, 255, 250, 0.66)"
deliverySpan.style.color = "#ECEEE7"
})
