
function updateClock() {
  const now = new Date();

  const time = now.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit'
  });

  const date = now.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  document.getElementById('clock').textContent = time;

  document.getElementById('date').textContent = date;
}

// Display the clock immediately
updateClock();

// Update every second
setInterval(updateClock, 1000);
