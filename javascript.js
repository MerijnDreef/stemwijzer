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
    checkVraag();
    // currentSubject--;
  } else {
    currentSubject++;
    titel.innerHTML = subjects[currentSubject].title;
    statement.innerHTML = subjects[currentSubject].statement;
    document.getElementById("eens").style.backgroundColor = "rgb(44, 218, 44)";
    document.getElementById("oneens").style.backgroundColor = "red";
    document.getElementById("gvb").style.backgroundColor = "honeydew";
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

      if (keuzes[currentSubject] == "pro") {
        document.getElementById("eens").style.backgroundColor = "blue";
        document.getElementById("oneens").style.backgroundColor = "red";
        document.getElementById("gvb").style.backgroundColor = "honeydew";
      } else if (keuzes[currentSubject] == "contra") {
        document.getElementById("oneens").style.backgroundColor = "blue";
        document.getElementById("eens").style.backgroundColor = "rgb(44, 218, 44)";
        document.getElementById("gvb").style.backgroundColor = "honeydew";
      } else if (keuzes[currentSubject] == "none") {
        document.getElementById("gvb").style.backgroundColor = "blue";
        document.getElementById("oneens").style.backgroundColor = "red";
        document.getElementById("eens").style.backgroundColor = "rgb(44, 218, 44)";
      } else {
        document.getElementById("eens").style.backgroundColor = "rgb(44, 218, 44)";
        document.getElementById("oneens").style.backgroundColor = "red";
        document.getElementById("gvb").style.backgroundColor = "honeydew";
      }
  }
  console.log(currentSubject);
});

eens.addEventListener ("click", function() {
  vulKeus("pro");
  if ( (subjects.length -1) == currentSubject) {
    //no entry
    checkVraag();
    currentSubject--;
  } else {
    currentSubject++;
    titel.innerHTML = subjects[currentSubject].title;
    statement.innerHTML = subjects[currentSubject].statement;
    document.getElementById("eens").style.backgroundColor = "rgb(44, 218, 44)";
    document.getElementById("oneens").style.backgroundColor = "red";
    document.getElementById("gvb").style.backgroundColor = "honeydew";
  }
  console.log(currentSubject);
});

gvb.addEventListener ("click", function() {
  vulKeus("none");
  if ( (subjects.length -1) == currentSubject) {
    //no further
    checkVraag();
    currentSubject--;
  } else {
    currentSubject++;
    titel.innerHTML = subjects[currentSubject].title;
    statement.innerHTML = subjects[currentSubject].statement;
    document.getElementById("eens").style.backgroundColor = "rgb(44, 218, 44)";
    document.getElementById("oneens").style.backgroundColor = "red";
    document.getElementById("gvb").style.backgroundColor = "honeydew";
  }
  console.log(currentSubject);
});

oneens.addEventListener ("click", function() {
  vulKeus("contra");
  if ( (subjects.length -1) == currentSubject) {
    //you shall not pass
    checkVraag();
    currentSubject--;
  } else {
    currentSubject++;
    titel.innerHTML = subjects[currentSubject].title;
    statement.innerHTML = subjects[currentSubject].statement;
    document.getElementById("eens").style.backgroundColor = "rgb(44, 218, 44)";
    document.getElementById("oneens").style.backgroundColor = "red";
    document.getElementById("gvb").style.backgroundColor = "honeydew";
  }
  console.log(currentSubject);
});

function vulKeus(insert) {
  keuzes[currentSubject] = insert;
  console.log(keuzes);
}

function show(element) {
  element.classList.remove("hidden");
}

function hide(element) {
  element.classList.add("hidden");
}

function checkVraag(){
  //checked of vragen niet beantwoord zijn
  var teller = 0;
  for (var i = 0; i < subjects.length; i++){
    if (keuzes[i] === "") {
      //effe tellen
      teller++;
    }
  }
  if (teller != 0){
    alert(teller);
  } else {
     for (var k = 0; k < keuzes.length; k++) {
      for (var l = 0; l < subjects[k].parties.length; l++) {

       if (keuzes[k] == subjects[k].parties[l].position) {   
      //pro, contra, none
        if (keuzes[k] == "pro") {
          partijPunten[k].pro++;
          console.log(partijPunten);
        } else if (keuzes[k] == "none") {
          partijPunten[k].none++;
          console.log(partijPunten);
        } else {
          partijPunten[k].contra++;
          console.log(partijPunten);
        }
       }
        
      }
     }
  }

}

var partijPunten = [{
  "pro": 0,
  "none": 0,
  "contra": 0,
}]

var keuzes = []; 

//if array in array do array[0].array1[0].name
