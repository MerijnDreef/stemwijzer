let currentSubject = 0;

const startContainer = document.getElementById("startContainer");
const start = document.getElementById("start");
const eens = document.getElementById("eens");
const gvb = document.getElementById("gvb");
const oneens = document.getElementById("oneens");
const titel = document.getElementById("titel");
const statement = document.getElementById("uitspraak");
const next = document.getElementById("overslaan");
const previous = document.getElementById("vorige");
const container = document.getElementById("container");

start.addEventListener ("click", function() {
    show(container);
    titel.innerHTML = subjects[currentSubject].title;
    statement.innerHTML = subjects[currentSubject].statement;
    hide(startContainer);
  });

next.addEventListener ("click", function() {
  vulKeus("");
  console.log(subjects);
  if ( (subjects.length -1) == currentSubject) {
    //stop
    currentSubject--;
  } else {
    currentSubject++;
    titel.innerHTML = subjects[currentSubject].title;
    statement.innerHTML = subjects[currentSubject].statement;
  }
  console.log(currentSubject);
});

previous.addEventListener ("click", function() {
  if (currentSubject == 0){
    //don't  
    hide(container);
    titel.innerHTML = subjects[currentSubject].title;
    statement.innerHTML = subjects[currentSubject].statement;
    show(startContainer);
  } else {
    currentSubject--;
    titel.innerHTML = subjects[currentSubject].title;
    statement.innerHTML = subjects[currentSubject].statement;
  }
  console.log(currentSubject);
});

eens.addEventListener ("click", function() {
  vulKeus("pro");
  if ( (subjects.length -1) == currentSubject) {
    //no entry
    currentSubject--;
  } else {
    currentSubject++;
    titel.innerHTML = subjects[currentSubject].title;
    statement.innerHTML = subjects[currentSubject].statement;
  }
  console.log(currentSubject);
});

gvb.addEventListener ("click", function() {
  vulKeus("none");
  if ( (subjects.length -1) == currentSubject) {
    //no further
    currentSubject--;
  } else {
    currentSubject++;
    titel.innerHTML = subjects[currentSubject].title;
    statement.innerHTML = subjects[currentSubject].statement;
  }
  console.log(currentSubject);
});

oneens.addEventListener ("click", function() {
  vulKeus("contra");
  if ( (subjects.length -1) == currentSubject) {
    //you shall not pass
    currentSubject--;
  } else {
    currentSubject++;
    titel.innerHTML = subjects[currentSubject].title;
    statement.innerHTML = subjects[currentSubject].statement;
  }
  console.log(currentSubject);
});

function vulKeus(insert) {
  keus[currentSubject] = insert;
  console.log(keus);
}

function show(element) {
  element.classList.remove("hidden");
}

function hide(element) {
  element.classList.add("hidden");
}

var keus = []; 
