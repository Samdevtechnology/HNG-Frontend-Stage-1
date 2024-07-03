const timeText = document.querySelector('[data-testid="currentTimeUTC"]');
const dayText = document.querySelector('[data-testid="currentDay"]');

function updateDateTime() {
  const now = new Date();

  // Format the time in UTC
  const hours = now.getUTCHours().toString().padStart(2, "0");
  const minutes = now.getUTCMinutes().toString().padStart(2, "0");
  const currentTimeUTC = `${hours}:${minutes}`;

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDay = daysOfWeek[now.getUTCDay()];

  timeText.textContent = currentTimeUTC;
  dayText.textContent = currentDay;
}
updateDateTime();

// Update the time every minute
setInterval(updateDateTime, 60000);
