import { getElem, getAllElems } from "./utils.js";

export const refs = {
  homePage: getElem(".home-page"),
  buttonToTop: getElem(".icon-bg"),
  quizBtn: getAllElems(".quiz-btn"),
  menuBtn: getElem(".menu-btn"),
  burgerMenu: getElem(".burger-menu"),
  closeBtn: getElem(".close-btn"),
  menu: getElem(".menu"),
  itemHome: getAllElems(".item-home"),
  itemAbout: getAllElems(".item-about"),
  itemQuiz: getAllElems(".item-quiz"),

  quizPage: getElem(".quiz-page"),
  header: getElem(".quiz-header"),
  headerText: getElem(".header-text"),
  quizWrapper: getElem(".quiz-box"),
  questionText: getElem(".question-text"),
  questionImg: getElem(".question-img"),
  questionImgGeometric: getElem(".question-img-geometric"),
  questionImgStar: getElem(".question-img-star"),
  list: getElem(".quiz-list"),
  buttonWrapper: getElem(".button-box"),
  button: getElem(".btn-quiz"),
  range: getElem(".range-progress"),

  loadingPage: getElem(".loading-page"),
  finishPage: getElem(".finish-page"),
  timerMinutes: getElem(".timer-minutes"),
  buttonCall: getElem(".button-call"),

  resultPage: getElem(".result-page"),

  footer: getElem(".footer"),
  footerText: getElem(".copyright"),
};
