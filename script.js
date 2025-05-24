const startDate = new Date("2023-05-24T00:00:00");

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  document.getElementById("timer").textContent =
    `${days} днів ${hours} годин ${minutes} хвилин ${seconds < 10 ? '0' : ''}${seconds} секунд`;
}

setInterval(updateTimer, 1000);
updateTimer();
