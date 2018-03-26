var img = new Image();
var div = document.getElementById('img');


function test() {
  var her = document.getElementById('er').value;
  var his = document.getElementById('is').value;
  var herL = her.toLowerCase();
  var hisR = his.toLowerCase();
  if(herL === "rayann"  & hisR === "aidan") {
    var laranja = "100%";
    div.appendChild(img);
    img.src = 'img/cat.jpg';
  } else {
    var laranja = "no chance holmes";
    div.appendChild(img);
    img.src = 'img/renato.png';
  }
  document.getElementById('result').innerHTML = laranja;
}
