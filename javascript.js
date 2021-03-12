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
    eens.style.backgroundColor = "rgb(44, 218, 44)";
    oneens.style.backgroundColor = "red";
    gvb.style.backgroundColor = "honeydew";
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
        eens.style.backgroundColor = "blue";
        oneens.style.backgroundColor = "red";
        gvb.style.backgroundColor = "honeydew";
      } else if (keuzes[currentSubject] == "contra") {
        oneens.style.backgroundColor = "blue";
        eens.style.backgroundColor = "rgb(44, 218, 44)";
        gvb.style.backgroundColor = "honeydew";
      } else if (keuzes[currentSubject] == "none") {
        gvb.style.backgroundColor = "blue";
        oneens.style.backgroundColor = "red";
        eens.style.backgroundColor = "rgb(44, 218, 44)";
      } else {
        eens.style.backgroundColor = "rgb(44, 218, 44)";
        oneens.style.backgroundColor = "red";
        gvb.style.backgroundColor = "honeydew";
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
    eens.style.backgroundColor = "rgb(44, 218, 44)";
    oneens.style.backgroundColor = "red";
    gvb.style.backgroundColor = "honeydew";
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
    eens.style.backgroundColor = "rgb(44, 218, 44)";
    oneens.style.backgroundColor = "red";
    gvb.style.backgroundColor = "honeydew";
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
    eens.style.backgroundColor = "rgb(44, 218, 44)";
    oneens.style.backgroundColor = "red";
    gvb.style.backgroundColor = "honeydew";
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

function checkVraag() {
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

    for (var g = 0; g < parties.length; g++) {
      partijPunten.push({name: parties[g].name, points: 0});
    }

     for (var k = 0; k < keuzes.length; k++) {
      for (var l = 0; l < subjects[k].parties.length; l++) {  
        //probeer eens nou die vragen gewicht te geven, misschien kan je tenminste iets doen
        

       if (keuzes[k] == subjects[k].parties[l].position) {   
        //pro, contra, none
        for (var p = 0; p < partijPunten.length; p++) {
          if (partijPunten[p].name == subjects[k].parties[l].name) {
            if (keuzes[k] == "pro") {
              partijPunten[p].points++;
              console.log(partijPunten);
            } else if (keuzes[k] == "none") {
              partijPunten[p].points++;
              console.log(partijPunten);
            } else if (keuzes[k] == "contra") {
              partijPunten[p].points++;
              console.log(partijPunten);
            }
          }
        }
       }
        
      }
     }
  }

}


var partijPunten = [];

var keuzes = []; 

//if array in array do array[0].array1[0].name
