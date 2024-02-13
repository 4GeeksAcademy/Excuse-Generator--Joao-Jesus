document.getElementById("excuse").addEventListener("click");

window.onload = function() {
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let who = ["The dog", "My grandma", "His turtle", "My bird"];

  //write your code here
  let randomWho = Math.floor(Math.random() * who.length);
  let randomAction = Math.floor(Math.random() * action.length);
  let randomWhat = Math.floor(Math.random() * what.length);
  let randomWhen = Math.floor(Math.random() * when.length);
  let randomGenerator =
    who[randomWho] +
    " " +
    action[randomAction] +
    " " +
    what[randomWhat] +
    " " +
    when[randomWhen];

  document.getElementById("excuse").innerHTML = randomGenerator;
};

// Whenever the document is ready call the function

document.onload;
