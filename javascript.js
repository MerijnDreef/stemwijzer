let currentSubject = 0;

const start = document.getElementById("start");
const eens = document.getElementById("eens");
const gvb = document.getElementById("gvb");
const oneens = document.getElementById("oneens");
const title = document.getElementById("title");
const statement = document.getElementById("statement");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const container = document.getElementById("container");

start.addEventListener ("click", function() {
    alert("did something");
    show(container);
  });

function show(element) {
  element.classlist.remove("hidden");
}

function hide(element) {
  element.classlist.add("hidden");
}