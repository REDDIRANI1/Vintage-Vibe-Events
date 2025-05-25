document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("successMessage").style.display = "block";
  this.reset();
});

// Toggle service details on click
document.addEventListener("DOMContentLoaded", function () {
  const services = document.querySelectorAll(".service");

  services.forEach((service) => {
    service.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
});

let selectedRating = 0;

// Handle star click
document.querySelectorAll(".stars i").forEach((star) => {
  star.addEventListener("click", function () {
    selectedRating = this.getAttribute("data-value");
    document
      .querySelectorAll(".stars i")
      .forEach((s) => s.classList.remove("selected"));
    for (let i = 0; i < selectedRating; i++) {
      document.querySelectorAll(".stars i")[i].classList.add("selected");
    }
  });
});

// Handle form submit
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = this.querySelector("input").value.trim();
    const message = this.querySelector("textarea").value.trim();

    if (!selectedRating) {
      alert("Please select a rating.");
      return;
    }

    const reviewHTML = `
    <div class="review">
      <strong>${name}</strong>
      <p>${message}</p>
      <div class="stars">${"★".repeat(selectedRating)}${"☆".repeat(
      5 - selectedRating
    )}</div>
    </div>
  `;

    document
      .getElementById("reviewsList")
      .insertAdjacentHTML("afterbegin", reviewHTML);
    this.reset();
    selectedRating = 0;
    document
      .querySelectorAll(".stars i")
      .forEach((s) => s.classList.remove("selected"));
  });

document.addEventListener("DOMContentLoaded", () => {
  const newsletterForm = document.getElementById("newsletterForm");
  const successMessage = document.getElementById("newsletterSuccess");

  newsletterForm?.addEventListener("submit", function (e) {
    e.preventDefault();
    successMessage.style.display = "block";
    this.reset();

    // Optionally store emails locally (not for production use)
    // const email = this.querySelector("input").value;
    // let emails = JSON.parse(localStorage.getItem("subscribers")) || [];
    // emails.push(email);
    // localStorage.setItem("subscribers", JSON.stringify(emails));
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const calendarEl = document.getElementById("eventCalendar");

  if (calendarEl) {
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: "dayGridMonth",
      height: 600,
      events: [
        {
          title: "Wedding - Johnson Family",
          start: "2025-06-15",
        },
        {
          title: "Corporate Gala",
          start: "2025-06-22",
        },
        {
          title: "Private Party",
          start: "2025-06-28",
        },
      ],
    });

    calendar.render();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Set your offer end date
  const endDate = new Date("2025-06-15T23:59:59").getTime();

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    if (timeLeft < 0) {
      clearInterval(timer);
      const countdown = document.getElementById("countdown-timer");
      if (countdown) countdown.innerHTML = "Offer Expired";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }, 1000);
});

document.addEventListener("DOMContentLoaded", () => {
  const bookBtn = document.getElementById("bookNowBtn");
  const modal = document.getElementById("bookingModal");
  const closeModal = document.getElementById("closeModal");

  bookBtn?.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  closeModal?.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target == modal) modal.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    })
    .catch((error) => console.error("Failed to load footer:", error));
});
