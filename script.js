let bday = document.getElementById("day"),
  bmonth = document.getElementById("month"),
  byear = document.getElementById("year"),
  btn = document.getElementById("submit"),
  warning = document.getElementsByClassName("warning"),
  label = document.getElementsByClassName("grey"),
  input = document.getElementsByClassName("num");

let ayear = document.getElementById("ayear"),
  aday = document.getElementById("aday"),
  amonth = document.getElementById("amonth");

btn.addEventListener("click", function () {
  let day = parseInt(bday.value),
    month = parseInt(bmonth.value),
    year = parseInt(byear.value);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  if (bday.value === "" || bmonth.value === "" || byear.value === "") {
    for (let i = 0; i < warning.length; i++) {
      warning[i].innerHTML = "This field is required";
    }
    for (let i = 0; i < label.length; i++) {
      label[i].style.color = "red";
    }
    for (let i = 0; i < input.length; i++) {
      input[i].classList.add("active");
    }
  } else {
    if (month < 1 || month > 12) {
      warning[1].innerHTML = "Must be a valid Month";
      for (let i = 0; i < label.length; i++) {
        label[i].style.color = "red";
      }
      for (let i = 0; i < input.length; i++) {
        input[i].classList.add("active");
      }
      return;
    }

    let maxDay = 31;
    if (month == 2) {
      maxDay = year % 4 == 0 && (year % 100 != 0 || year % 400 == 0) ? 29 : 28;
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
      maxDay = 30;
    }

    if (day < 1 || day > maxDay) {
      warning[0].innerHTML = "Must be a valid Day";
      for (let i = 0; i < label.length; i++) {
        label[i].style.color = "red";
      }
      for (let i = 0; i < input.length; i++) {
        input[i].classList.add("active");
      }
      return;
    }

    if (year > currentYear || (year == currentYear && month > currentMonth) || (year == currentYear && month == currentMonth && day > currentDay)) {
      warning[2].innerHTML = "Must be in Past";
      for (let i = 0; i < label.length; i++) {
        label[i].style.color = "red";
      }
      for (let i = 0; i < input.length; i++) {
        input[i].classList.add("active");
      }
      return;
    }

    let yearDiff = currentYear - year;
    let monthDiff = currentMonth - month;
    let dayDiff = currentDay - day;

    if (dayDiff < 0) {
      monthDiff -= 1;
      dayDiff += maxDay;
    }

    if (monthDiff < 0) {
      yearDiff -= 1;
      monthDiff += 12;
    }

    ayear.innerHTML = yearDiff;
    amonth.innerHTML = monthDiff;
    aday.innerHTML = dayDiff;
  }
});
