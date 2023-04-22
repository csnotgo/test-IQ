import { refs } from "./js/refs";
import { hide, show } from "./js/utils";
import { createMarkup, resetMarkup, createResultPageMarkup } from "./js/markup";

refs.buttonToTop.addEventListener("click", () => window.scrollTo(top));
refs.menuBtn.addEventListener("click", showBurgerMenu);
refs.closeBtn.addEventListener("click", hideBurgerMenu);
refs.menu.addEventListener("click", hideBurgerMenu);
refs.itemHome.addEventListener("click", showHomePage);
refs.itemAbout.addEventListener("click", showHomePage);
refs.itemQuiz.addEventListener("click", showQuizPage);
refs.quizBtn.forEach((elem) => elem.addEventListener("click", showQuizPage));
refs.list.addEventListener("click", onItemsClick);
refs.button.addEventListener("click", onButtonClick);
refs.buttonCall.addEventListener("click", createResultPageMarkup);

let progress = 0;
let questionIndex = 0;

function showBurgerMenu() {
  show(refs.burgerMenu);
  document.body.style.overflowY = "hidden";
}

function hideBurgerMenu() {
  hide(refs.burgerMenu);
  document.body.style.overflowY = "unset";
}

function showHomePage() {
  hideBurgerMenu();
  show(refs.homePage);
  show(refs.footer);
  hide(refs.quizPage);
  hide(refs.header);
}

function showQuizPage() {
  questionIndex = 0;
  progress = 0;
  refs.range.style.width = 0;
  hideBurgerMenu();
  show(refs.quizPage);
  resetMarkup();
  createMarkup(questionIndex);
  show(refs.header);
  hide(refs.footer);
  hide(refs.homePage);
  hide(refs.resultPage);
  hide(refs.finishPage);
  hide(refs.loadingPage);
}

function onItemsClick(e) {
  const answers = refs.list.children;
  refs.button.classList.add("disabled");
  refs.button.disabled = true;

  for (const answer of answers) {
    const classes = answer.classList;

    if ((e.target !== answer && classes.contains("item-checked")) || classes.contains("colors-bar-active")) {
      if (classes.contains("item")) classes.remove("item-checked");
      if (classes.contains("colors-bar")) classes.remove("colors-bar-active");
      if (classes.contains("img-question")) classes.remove("colors-bar-active");
    } else if (e.target === answer) {
      if (classes.contains("item")) classes.add("item-checked");
      if (classes.contains("colors-bar")) classes.add("colors-bar-active");
      if (classes.contains("img-question")) classes.add("colors-bar-active");

      refs.button.classList.remove("disabled");
      refs.button.disabled = false;
    }
  }
}

function onButtonClick() {
  questionIndex += 1;
  resetMarkup();
  createMarkup(questionIndex);
  const score = (progress += 9.09);

  refs.range.style.width = score + "%";
}

createMarkup(questionIndex);
