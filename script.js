function updateTime() {
  const timeEl = document.getElementById("user-time");
  if (timeEl) timeEl.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000); // Update every second
