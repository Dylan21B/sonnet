let content = document.getElementById("sonnet").innerHTML;

console.log(content);

var word = "orphans";

var wordfind = content.indexOf("orphans");

console.log(wordfind);

var lenght = content.length;

console.log(lenght);

var rep = document.getElementById("sonnet").innerHTML.replace("winter", "yuletide");

console.log(rep);

var rep2 = document.getElementById("sonnet").innerHTML.replace(/the /g, "a large");

console.log(rep2);

document.getElementById("sonnet").innerHTML = rep2;

