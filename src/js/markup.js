import { refs } from "./refs.js";
import { hide, show } from "./utils.js";
import { timer } from "./timer.js";
import quiz from "../../quiz.json";

export const resetMarkup = () => {
  refs.list.innerHTML = "";
  refs.questionText.innerHTML = "";
};

export const createMarkup = (questionIndex) => {
  const test = quiz[questionIndex];
  show(refs.quizWrapper);
  show(refs.buttonWrapper);
  hide(refs.questionImg);
  hide(refs.questionImgGeometric);
  hide(refs.questionImgStar);
  refs.list.classList.remove("colors-list");
  refs.list.classList.remove("numbers-list");
  refs.list.style.borderTop = "none";
  refs.headerText.textContent = "тест на определение IQ";
  refs.headerText.style.fontSize = "12px";
  refs.footerText.textContent = "&#169; 2019";

  refs.questionText.textContent = test?.question;

  if (questionIndex === 4 || questionIndex === 5) {
    refs.list.classList.add("colors-list");
  } else if (questionIndex === 7) {
    show(refs.questionImg);
    refs.list.classList.add("numbers-list");
  } else if (questionIndex === 9) {
    show(refs.questionImgGeometric);
  } else if (questionIndex === 10) {
    show(refs.questionImgStar);
    refs.list.classList.add("numbers-list");
    refs.list.style.borderTop = "4px solid rgba(242, 243, 243, 0.15)";
  } else if (questionIndex > 10) {
    show(refs.loadingPage);
    hide(refs.quizWrapper);
    hide(refs.buttonWrapper);
    setTimeout(() => {
      hide(refs.quizPage);
      show(refs.finishPage);
      show(refs.footer);
      refs.headerText.textContent = "ГОТОВО!";
      refs.headerText.style.fontSize = "20px";
      refs.footerText.textContent =
        "TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI";
      timer();
    }, 2000);
  }

  const answers = test?.answers
    .map((val) => {
      if (questionIndex === 4 || questionIndex === 5) {
        return `<li class="colors-bar" style="background-color: ${val};">
    </li>`;
      } else if (questionIndex === 7 || questionIndex === 10) {
        return `<li class="img-question">
        ${val}
    </li>`;
      }

      return `<li class="item">
      <div style="pointer-events: none;">
    <span class="radio"></span>
    </div>
    <p class="variant">${val}</p>
    </li>`;
    })
    .join(" ");

  refs.list.innerHTML = answers;

  refs.button.disabled = true;
  refs.button.classList.add("disabled");
};

export const createResultPageMarkup = async () => {
  show(refs.resultPage);
  hide(refs.finishPage);
  hide(refs.quizPage);
  hide(refs.footer);
  refs.resultPage.innerHTML = `<span class="loader"></span>`;
  try {
    const data = await (await fetch("https://swapi.dev/api/people/1")).json();
    const home = await (await fetch("https://swapi.dev/api/planets/1/")).json();

    refs.resultPage.innerHTML = `<h2 class="result-title">Поздравляем!</h2>
    <ul class='result-list'>
    <li><p>Имя: <span  class="result-span">${data.name}</span></p></li>
    <li><p>Год рождения: <span class="result-span">${data.birth_year}</span></p></li>
    <li><p>Пол: <span class="result-span">${data.gender}</span></p></li>
    <li><p>Рост: <span class="result-span">${data.height}</span></p></li>
    <li><p>Вес: <span class="result-span">${data.mass}</span></p></li>
    <li><p>Цвет глаз: <span class="result-span">${data.eye_color}</span></p></li>
    <li><p>Цвет волос: <span class="result-span">${data.hair_color}</span></p></li>
    <li><p>Раса: <span class="result-span">${data.skin_color}</span></p></li>
    <li><p>Планета: <span class="result-span">${home.name}</span></p></li>
    </ul>`;
  } catch (error) {
    console.log(error);
  }
};
