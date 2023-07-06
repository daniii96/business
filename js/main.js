const newYear = document.querySelector('.date');
console.log(newYear);
let date = new Date();
let date_year = date.getFullYear();
console.log(date_year);

newYear.innerHTML = date_year;