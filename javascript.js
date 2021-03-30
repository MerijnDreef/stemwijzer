let currentSubject = 0;

const startContainer = document.getElementById("startContainer");
const start = document.getElementById("start");
const agree = document.getElementById("eens");
const neither = document.getElementById("gvb");
const disagree = document.getElementById("oneens");
const titel = document.getElementById("titel");
const statement = document.getElementById("uitspraak");
const skip = document.getElementById("overslaan");
const previous = document.getElementById("vorige");
const container = document.getElementById("container");

start.addEventListener ("click", function() {
    show(container);
    titel.innerHTML = subjects[currentSubject].title;
    statement.innerHTML = subjects[currentSubject].statement;
    hide(startContainer);
  });

skip.addEventListener ("click", function() {
  fillChoice("");
  console.log(subjects);
  if ( (subjects.length -1) != currentSubject) {
    //stop
    currentSubject++;
    titel.innerHTML = subjects[currentSubject].title;
    statement.innerHTML = subjects[currentSubject].statement;
    agree.style.backgroundColor = "rgb(44, 218, 44)";
    disagree.style.backgroundColor = "red";
    neither.style.backgroundColor = "honeydew";
   
    // currentSubject--;
  } else {
    checkQuestion();
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

      if (choices[currentSubject] == "pro") {
        agree.style.backgroundColor = "blue";
        disagree.style.backgroundColor = "red";
        neither.style.backgroundColor = "honeydew";
      } else if (choices[currentSubject] == "contra") {
        disagree.style.backgroundColor = "blue";
        agree.style.backgroundColor = "rgb(44, 218, 44)";
        neither.style.backgroundColor = "honeydew";
      } else if (choices[currentSubject] == "none") {
        neither.style.backgroundColor = "blue";
        disagree.style.backgroundColor = "red";
        agree.style.backgroundColor = "rgb(44, 218, 44)";
      } else {
        eens.style.backgroundColor = "rgb(44, 218, 44)";
        disagree.style.backgroundColor = "red";
        neither.style.backgroundColor = "honeydew";
      }
  }
  console.log(currentSubject);
});

agree.addEventListener ("click", function() {
  setAnswer("pro");
});

neither.addEventListener ("click", function() {
  setAnswer("none");
});

disagree.addEventListener ("click", function() {
  setAnswer("contra");
});

function fillChoice(insert) {
  choices[currentSubject] = insert;
  console.log(choices);
}

function show(element) {
  element.classList.remove("hidden");
}

function hide(element) {
  element.classList.add("hidden");
}

function checkQuestion() {
  //checked of vragen niet beantwoord zijn
  var counter = 0;
  for (var i = 0; i < subjects.length; i++){
    if (choices[i] === "") {
      //effe tellen
      counter++;
    }
  }
  if (counter != 0){
    alert(counter);
  } else {

     for (var k = 0; k < choices.length; k++) {
      for (var l = 0; l < subjects[k].parties.length; l++) {  
        //probeer eens nou die vragen gewicht te geven, misschien kan je tenminste iets doen
        
       if (choices[k] == subjects[k].parties[l].position) {   
        //pro, contra, none
        for (var p = 0; p < choicePoints.length; p++) {
          if (choicePoints[p].name == subjects[k].parties[l].name) {
            if (choices[k] == "pro") {
              choicePoints[p].points++;
              console.log(choicePoints);
            } else if (choices[k] == "none") {
              choicePoints[p].points++;
              console.log(choicePoints);
            } else if (choices[k] == "contra") {
              choicePoints[p].points++;
              console.log(choicePoints);
            }
          }
        }
       }     
      }
     }
  }
}

function displayImportant() {
  for (var g = 0; g < parties.length; g++) {
    choicePoints.push({name: parties[g].name, points: 0});
  }
  //per stelling blok maken met een vinkje en een stelling titel aan container
  //hoe maak ik element in een bestaand element
  for (i = 0; i < subjects.length; i++) {
    console.log(subjects[i].title);
    var label = document.createElement("label");
    var li = document.createElement("li");
    li.appendChild(label);
    var input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.myId = i;
    input.addEventListener ("click", function(){
      this.classList.toggle("checked");
    });
    input.setAttribute("id", i.toString());
    li.appendChild(input);
    label.innerHTML = subjects[i].title;
    document.getElementById("important").appendChild(li);
  }
}



function setAnswer(answer) {
  fillChoice(answer);
  if ( (subjects.length -1) != currentSubject) {
    //no entry
    currentSubject++;
    titel.innerHTML = subjects[currentSubject].title;
    statement.innerHTML = subjects[currentSubject].statement;
    agree.style.backgroundColor = "rgb(44, 218, 44)";
    disagree.style.backgroundColor = "red";
    neither.style.backgroundColor = "honeydew";
  } else {
    checkQuestion();
  }
  console.log(currentSubject);
}

function checkboxCheck() {
  submit = document.getElementById("form1");
  submit.onsubmit = function(e) {
    e.preventDefault();
    for (f = 0; f < checkboxes.length; f++){
      if (checkboxes[f].className == "checked"){
        id = checkboxes[f].id;
        var place = parseInt(id, 10);
        questImportant[f] = place;
        console.log(place);
        console.log(questImportant);
        // what I need to do is find a way to give extra points to the right parties, the question is where I should put this code, still unsure probably not here
      }
    } 
  };

//  if (checkbox.checked == true){
//    var place = parseInt(id, 10); //to convert Id to integer then +1 the stuff that have same answer as user (this will happen after the submit)
//    for (y = 0; y < subjects[place].parties.length; y++) {
//       for(l = 0; l < choicePoints.length; l++) {
//         if (choices[place] == subjects[place].parties[y].position) {
//           choicePoints[l].points++;
//         }
//       }
//    }
//  } else{
// //  probably going to remove this part, I think there is no use here (I'm talking about the else)
//  }
}

var choicePoints = [];

var choices = []; 

var questImportant = [];

displayImportant();

var checkboxes = document.querySelectorAll("#important input");
console.log(checkboxes);


checkboxCheck();

//if array in array do array[0].array1[0].name
