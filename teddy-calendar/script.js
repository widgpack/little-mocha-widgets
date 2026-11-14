
const calendarDays = document.getElementById('calendar-days');
const monthLabel = document.getElementById('month-label');
const todayLabel = document.getElementById('today-label');

const today = new Date();

let currentMonth = new Date(
  today.getFullYear(),
  today.getMonth(),
  1
);

function renderCalendar() {
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const offset = (firstDay + 6) % 7;
  const totalDays = new Date(year, month + 1, 0).getDate();

  const monthName = currentMonth.toLocaleDateString(
    'en-US',
    { month: 'long', year: 'numeric' }
  );

  // Update month heading
  monthLabel.textContent = monthName;

  // Clear previous calendar
  calendarDays.innerHTML = '';

  // Add empty spaces before the first day
  for (let i = 0; i < offset; i++) {
    const empty = document.createElement('div');
    empty.className = 'day empty';
    calendarDays.appendChild(empty);
  }

  // Create calendar dates
  for (let day = 1; day <= totalDays; day++) {
    const cell = document.createElement('div');
    cell.className = 'day';

    const number = document.createElement('span');
    number.textContent = day;
    cell.appendChild(number);

    // Highlight today's date
    if (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      cell.classList.add('today');
    }

    calendarDays.appendChild(cell);
  }

  // Update footer
  todayLabel.textContent =
    `Today is ${today.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })}`;
}

// Previous month
document.getElementById('prev').onclick = () => {
  currentMonth.setMonth(currentMonth.getMonth() - 1);
  renderCalendar();
};

// Next month
document.getElementById('next').onclick = () => {
  currentMonth.setMonth(currentMonth.getMonth() + 1);
  renderCalendar();
};

// Initial calendar
renderCalendar();
