import { refs } from "./refs";

const addLeadingZero = (value) => String(value).padStart(2, "0");

const updateTime = (deadline, timeId) => {
  const time = Date.parse(deadline) - Date.parse(new Date());
  const min = addLeadingZero(Math.floor((time / 1000 / 60) % 60));
  const sec = addLeadingZero(Math.floor((time / 1000) % 60));
  refs.timerMinutes.textContent = min + ":" + sec;
  if (time <= 0 || refs.finishPage.classList.contains("hidden")) {
    clearInterval(timeId);
  }
};

export const timer = () => {
  const minutes = 10;
  const currentTime = Date.parse(new Date());
  const deadline = new Date(currentTime + minutes * 60 * 1000);

  const timeId = setInterval(() => {
    updateTime(deadline, timeId);
  }, 1000);
  updateTime(deadline, timeId);
};
