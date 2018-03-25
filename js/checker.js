function test() {
  var her = document.getElementById('er').value;
  var his = document.getElementById('is').value;
  var herL = her.toLowerCase();
  var hisR = his.toLowerCase();
  if(herL === "rayann" & hisR === "aidan") {
    var laranja = "99.99999%";
  } else {
    var laranja = "no chance holmes";
  }
  document.getElementById('result').innerHTML = laranja;
}
