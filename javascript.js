var start = document.createElement("button");
start.innerHTML = "start";

var body = document.getElementsByTagName("body")[0];
body.appendChild(start);

start.addEventListener ("click", function() {
    alert("did something");
  });