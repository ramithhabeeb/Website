// Select elements
const timerElement = document.getElementById("timer");
const previewButton = document.getElementById("preview");

// Countdown Timer Function
function startCountdown() {
  const newYear = new Date("January 1, 2025 00:00:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = newYear - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    timerElement.textContent = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;

    // Display "Happy New Year!" when countdown ends
    if (timeLeft < 0) {
      clearInterval();
      timerElement.textContent = "🎉 Happy New Year! 🎉";
    }
  }, 1000);
}

// Preview Button Event
previewButton.addEventListener("click", () => {
  alert("🎉 Happy New Year in advance! 🎉");
});

// Start the countdown on page load
startCountdown();
