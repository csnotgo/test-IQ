export const getElem = (query) => document.querySelector(query);
export const getAllElems = (query) => document.querySelectorAll(query);

export const hide = (element) => element?.classList.add("hidden");
export const show = (element) => element?.classList.remove("hidden");
