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
const resultParties = document.getElementById("resultParties");

/*
* this is to start the whole thing
*/
start.addEventListener ("click", function() {
    show(container);
    titel.innerHTML = subjects[currentSubject].title;
    statement.innerHTML = subjects[currentSubject].statement;
    hide(startContainer);
  });

/*
* this is to skip questions
*/
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

/*
* this is to go to the previous question but also to the starting screen
*/
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

/*
* this is to agree
*/
agree.addEventListener ("click", function() {
  setAnswer("pro");
});

/*
* this is to be neutral
*/
neither.addEventListener ("click", function() {
  setAnswer("none");
});

/*
* this is to disagree
*/
disagree.addEventListener ("click", function() {
  setAnswer("contra");
});

/*
* this is to add you answer to the array
*/
function fillChoice(insert) {
  choices[currentSubject] = insert;
  console.log(choices);
}

/*
* makes things visible
*/
function show(element) {
  element.classList.remove("hidden");
}

/*
* makes things invisible
*/
function hide(element) {
  element.classList.add("hidden");
}

/*
* this is to add points to the right parties who have the same answers but also which important questions you chose
*/
function checkQuestion() {
  var counter = 0;
  for (var i = 0; i < subjects.length; i++){
    if (choices[i] === "") {
      counter++;
    }
  }
  if (counter != 0){
    alert(counter);
  } else {

     for (var k = 0; k < choices.length; k++) {
      for (var l = 0; l < subjects[k].parties.length; l++) {  
       if (choices[k] == subjects[k].parties[l].position) {   
        for (var p = 0; p < choicePoints.length; p++) {
          if (choicePoints[p].name == subjects[k].parties[l].name) {
            if (choices[k] != "") {
              choicePoints[p].points++;
              console.log(choicePoints);
              if (questImportant[k] != NaN) {
              choicePoints[p].points++;
              }
            } 
            console.log(choicePoints);
          }
        }
       }     
      }
     }
  }
}

/*
* this is to show at the end which party is the closest to your own answers
*/
function displayResult() {
  for (var o = 0; o < choicePoints.length; o++) {
    if (chosenParties[o] == false) {
      choicePoints.splice(o, 1);
      // remove the party
    }
  }
  console.log(choicePoints);

  choicePoints.sort((a, b) => b.points - a.points);

    for (var i = 0; i < choicePoints.length; i++) {
      var li = document.createElement("li");
      li.innerHTML = choicePoints[i].name + ": " + choicePoints[i].points;
      document.getElementById("resultParties").appendChild(li);
    }
}

/*
* this is to make the checkboxes for the important questions
*/
function displayImportant() {
  for (var g = 0; g < parties.length; g++) {
    choicePoints.push({name: parties[g].name, points: 0, secular: parties[g].secular, size: parties[g].size});
  }

  for (i = 0; i < subjects.length; i++) {
    console.log(subjects[i].title);
    var label = document.createElement("label");
    var li = document.createElement("li");
    li.appendChild(label);

    var input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("id", i.toString());
    li.appendChild(input);

    label.innerHTML = subjects[i].title;
    document.getElementById("important").appendChild(li);
  }
}

/*
* this is to make the checkboxes for the parties but also to make the checkboxes that can check multiple checkboxes
*/
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
      input.setAttribute("class", "secular big");
    } else if (choicePoints[i].size >= 10) {
      input.setAttribute("class", "big");
    } else if (choicePoints[i].secular == true) {
      input.setAttribute("class", "secular");
    }

    li.appendChild(input);
    label.innerHTML = choicePoints[i].name;
    document.getElementById("allParties").appendChild(li);
  }
}

/*
* this is to hide the first checkbox, so you won't see overlapping stuff
*/
submitPrevious.addEventListener ("click", function() {
  hide(submit);
  show(container);
});

/*
* here everytime you click agree, disagree or neither it will go to the next question but if the end is reached it will show the important questions
* also might be a bit confusing but the fillchoice actually fills the array and this function just changes the question
*/
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

/*
* this gives the array a number which is basicly useless and could be better, but it sends it to checkQuestion so it can be used right
*/
function checkCheckboxImportant() {
  submit.onsubmit = function(e) {
    e.preventDefault();
    for (f = 0; f < checkboxes.length; f++) {
      if (checkboxes[f].checked == true) {
        id = checkboxes[f].id;
        var place = parseInt(id, 10);
        questImportant[f] = place;
        console.log(place);
        console.log(questImportant);
      }
    } 
    hide(submit);
    show(partySubmit);
    checkQuestion();
  };
}

/*
* this gives the array a boolean so that the displayResult can display it right
*/
function checkCheckboxParty() {
  partySubmit.onsubmit = function(e) {
    e.preventDefault();
    for (f = 0; f < choicePoints.length; f++){
      if (partyCheckboxes[f].checked == true) {
        chosenParties[f] = true;
        console.log(chosenParties);
      } else {
        chosenParties[f] = false;
        console.log(chosenParties);
      }
    } 
    hide(partySubmit);
    show(resultParties);
   displayResult();
  };
}

//after the parties are chosen I need to display them from most points to least points

var choicePoints = [];

var choices = []; 

var questImportant = [];

var chosenParties = [];

displayImportant();

var checkboxes = document.querySelectorAll("#important input");
console.log(checkboxes);

checkCheckboxImportant();

displayParties();

var partyCheckboxes = document.querySelectorAll("#allParties input");
console.log(partyCheckboxes);

checkCheckboxParty();


//if array in array do array[0].array1[0].name
// document.getElementsByClassName("secular")[0].checked = true