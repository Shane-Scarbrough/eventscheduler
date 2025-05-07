let date = new Date();
const today = document.getElementById("Today");
const month = document.getElementById("current_month");
const dayRow = document.getElementById("day_row");

let currentDay = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
}).format(date);
today.innerHTML = `${currentDay}`;

let currentMonth = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric"
}).format(date);
month.innerHTML = `${currentMonth}`;

const day = [
    ['1', 'day', () => scheduleEvent(1)],
    ['2', 'day', () => scheduleEvent()],
    ['3', 'day', () => scheduleEvent()],
    ['4', 'day', () => scheduleEvent()],
    ['5', 'day', () => scheduleEvent()],
    ['6', 'day', () => scheduleEvent()],
    ['7', 'day', () => scheduleEvent()],
];

day.forEach((btn, i) => {
    const button = document.createElement('button');
    button.textContent = btn[0];
    button.className = `button${btn[1]}`;
    button.onclick = btn[2];
    dayRow.appendChild(button);
})


const scheduleEvent = (dayOfMonth) => {
    const dayPage = document.createElement('h3');
    date.setDate(dayOfMonth);
    let showDate = new Intl.DateTimeFormat('en-US', {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    }).format(date);
    dayPage.textContent = `${showDate}`;
    
}