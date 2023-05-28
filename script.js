const months = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avgust",
  "Sentyabr",
  "Oktyabr",
  "Noyabr",
  "Dekabr",
];

const weekDays = [
  "Dushanba",
  "Seshanba",
  "Chorshanba",
  "Payshanba",
  "Juma",
  "Shanba",
  "Yakshanba",
];

const deadline = document.querySelector(".deadline");
const deadlineDigits = document.querySelectorAll(".deadline-format h4");

const eidDate = new Date(2023, 5, 29, 0, 0, 0);
const eidTime = eidDate.getTime();

const setRemainingTime = () => {
  const currentDate = new Date();
  const currentTIme = currentDate.getTime();

  const remainingTime = eidTime - currentTIme;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(remainingTime / oneDay);
  let hours = Math.floor((remainingTime % oneDay) / oneHour);
  let minutes = Math.floor((remainingTime % oneHour) / oneMinute);
  let seconds = Math.floor((remainingTime % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  const formatDate = (date) => {
    if (date < 10) {
      return `0${date}`;
    } else {
      return date;
    }
  };

  deadlineDigits.forEach((item, index) => {
    item.innerHTML = formatDate(values[index]);
  });
  if (remainingTime < 0) {
    clearInterval(countdown);
    deadline.style.display = "none";
  }
};

let countdown = setInterval(setRemainingTime, 1000);
