let date = new Date();
const today = document.getElementById("Today");
const month = document.getElementById("current_month");
const dayRow = document.querySelector(".day_row");
const timeSelect = document.querySelector(".times");
const dayPage = document.getElementById("date_selected")

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

let getYear = date.getFullYear();
let getMonth = date.getMonth();

function getDaysInMonth(year, month) {
    console.log(new Date(year, month + 1, 0).getDate());
    return new Date(year, month + 1, 0).getDate();
}
getDaysInMonth(getYear, getMonth);

const scheduleEvent = (dayOfMonth) => {
    date.setDate(dayOfMonth);
    let showDate = new Intl.DateTimeFormat('en-US', {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    }).format(date);
    dayPage.textContent = `${showDate}`;
    timeSelect.appendChild(dayPage);
    
}

const day = [];

for (let i = 1; i <= getDaysInMonth(getYear, getMonth); i++) {
    day.push([`${i}`, 'day', () => scheduleEvent(i)]);
}

let row;
day.forEach((btn, i) => {
    if (i % 7 ===0) {
        row = document.createElement('div');
        row.className = 'row';
        dayRow.appendChild(row);
    }

    const button = document.createElement('button');
    button.textContent = btn[0];
    button.className = `button_${btn[1]}`;
    button.onclick = btn[2];
    row.appendChild(button);
})
