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
const submitPrevious = document.getElementById("submitVorige");
const submit = document.getElementById("form1");
const partySubmit = document.getElementById("form2");

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
    answerBackground();
   
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

    answerBackground();
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
            if (choices[k] != "") {
              choicePoints[p].points++;
              console.log(choicePoints);
              if (questImportant[k] != NaN) {
              // give points to the right parties
              choicePoints[p].points++;
              }
            } 
            // if (questImportant[k] == integer) {
            // give points to the right parties
            // }
            console.log(choicePoints);
          }
        }
       }     
      }
     }
  }
}

function displayImportant() {
  for (var g = 0; g < parties.length; g++) {
    choicePoints.push({name: parties[g].name, points: 0, secular: parties[g].secular, size: parties[g].size});
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
    // input.myId = i;
    input.addEventListener ("click", function(){
      this.classList.toggle("checked");
    });
    input.setAttribute("id", i.toString());
    li.appendChild(input);
    label.innerHTML = subjects[i].title;
    document.getElementById("important").appendChild(li);
  }
}

function displayParties() {
  // this is for secular
  var secularLabel = document.createElement("label");
  var secularLi = document.createElement("li");
  secularLi.appendChild(secularLabel);
  var secularInput = document.createElement("input");
  secularInput.setAttribute("type", "checkbox");
  secularLabel.innerHTML = "seculiere partijen";
  secularInput.addEventListener ("click", function(){
    var secularParties = document.getElementsByClassName("secular");
    console.log(secularParties);
    for (j = 0; j < secularParties.length; j++) {
      secularParties[j].checked = true
    }
  });
  secularLi.appendChild(secularInput);
  document.getElementById("manyCheck").appendChild(secularLi);

  // this is for big
  var bigLabel = document.createElement("label");
  var bigLi = document.createElement("li");
  bigLi.appendChild(bigLabel);
  var bigInput = document.createElement("input");
  bigInput.setAttribute("type", "checkbox");
  bigLabel.innerHTML = "grote partijen";
  bigInput.addEventListener ("click", function(){
    var bigParties = document.getElementsByClassName("big");
    console.log(bigParties);
    for (j = 0; j < bigParties.length; j++) {
      bigParties[j].checked = true
    }
  });
  bigLi.appendChild(bigInput);
  document.getElementById("manyCheck").appendChild(bigLi);

  // this is to make the parties checkbox
  for (i = 0; i < choicePoints.length; i++) {
    console.log(parties[i].name);
    var label = document.createElement("label");
    var li = document.createElement("li");
    li.appendChild(label);
    var input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    if (choicePoints[i].secular == true && choicePoints[i].size >= 10) {
      // input.myId = "secular big";
      input.setAttribute("class", "secular big");
    } else if (choicePoints[i].size >= 10) {
      // input.myId = "big";
      input.setAttribute("class", "big");
    } else if (choicePoints[i].secular == true) {
      // input.myId = "secular";
      input.setAttribute("class", "secular");
    }
    input.addEventListener ("click", function(){
      this.classList.toggle("checked");
    });
    // input.setAttribute("id", i.toString());
    li.appendChild(input);
    label.innerHTML = choicePoints[i].name;
    document.getElementById("allParties").appendChild(li);
  }
}

submitPrevious.addEventListener ("click", function() {
  hide(submit);
  show(container);
});

function setAnswer(answer) {
  fillChoice(answer);
  if ( (subjects.length -1) != currentSubject) {
    //no entry
    currentSubject++;
    titel.innerHTML = subjects[currentSubject].title;
    statement.innerHTML = subjects[currentSubject].statement;
    answerBackground();
  } else {
    // checkQuestion();
    show(submit);
    hide(container);
  }
  console.log(currentSubject);
}

/*
* sets background for agree, disagree and neither but also removes background if nothing is chosen (apart from skip that doesn't count)
*/
function answerBackground() {
  if (choices[currentSubject] == "pro") {
    agree.classList.add("chosen");
    disagree.classList.remove("chosen");
    neither.classList.remove("chosen");
  } else if (choices[currentSubject] == "contra") {
    disagree.classList.add("chosen");
    agree.classList.remove("chosen");
    neither.classList.remove("chosen");
  } else if (choices[currentSubject] == "none") {
    neither.classList.add("chosen");
    agree.classList.remove("chosen");
    disagree.classList.remove("chosen");
  } else {
    agree.classList.remove("chosen");
    disagree.classList.remove("chosen");
    neither.classList.remove("chosen");
  }
}

function checkCheckboxImportant() {
  submit.onsubmit = function(e) {
    e.preventDefault();
    for (f = 0; f < checkboxes.length; f++) {
      if (checkboxes[f].className == "checked") {
        id = checkboxes[f].id;
        var place = parseInt(id, 10);
        questImportant[f] = place;
        console.log(place);
        console.log(questImportant);
        // what I need to do is find a way to give extra points to the right parties, the question is where I should put this code, still unsure probably not here
      }
    } 
    checkQuestion();
  };
}
function checkCheckboxParty() {
  partySubmit.onsubmit = function(e) {
    e.preventDefault();
    for (f = 0; f < choicePoints.length; f++){
      if (checkboxes[f].classname == "checked") {
      //  you could do it with true or false in array
      }
    } 
   
  };
}

//after important question get checkboxes that when checked they will show the parties at the result, if secular and/or big check everything that involves it

var choicePoints = [];

var choices = []; 

var questImportant = [];

displayImportant();

var checkboxes = document.querySelectorAll("#important input");
console.log(checkboxes);


checkCheckboxImportant();

displayParties();

//if array in array do array[0].array1[0].name
// document.getElementsByClassName("secular")[0].checked = true