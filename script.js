document.addEventListener("DOMContentLoaded", function () {
  function updateTimer() {
    const destructionDate = new Date(70, 7, 30); // תאריך חורבן הבית השני: 30/07/70
    destructionDate.setFullYear(70);
    const now = new Date();
    const diff = now - destructionDate;

    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor((diff / (1000 * 60 * 60 * 24)) % 365.25);
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

    document.getElementById("years").innerHTML = String(years)
      .padStart(3, "0")
      .split("")
      .map((digit) => `<span class="bthn-digit">${digit}</span>`)
      .join("");
    document.getElementById("days").innerHTML = String(days)
      .padStart(3, "0")
      .split("")
      .map((digit) => `<span class="bthn-digit">${digit}</span>`)
      .join("");
    document.getElementById("hours").innerHTML = String(hours)
      .padStart(2, "0")
      .split("")
      .map((digit) => `<span class="bthn-digit">${digit}</span>`)
      .join("");
    document.getElementById("minutes").innerHTML = String(minutes)
      .padStart(2, "0")
      .split("")
      .map((digit) => `<span class="bthn-digit">${digit}</span>`)
      .join("");
    document.getElementById("seconds").innerHTML = String(seconds)
      .padStart(2, "0")
      .split("")
      .map((digit) => `<span class="bthn-digit">${digit}</span>`)
      .join("");
  }

  updateTimer();
  setInterval(updateTimer, 1000);
});
