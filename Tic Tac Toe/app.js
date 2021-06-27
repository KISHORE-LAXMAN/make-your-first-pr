
var cnt = 0;

var lst = [
  [5,5,5],
  [5,5,5],
  [5,5,5]
]

function assign(img,cnt) {
  if(img.src == "file:///Users/kishorelaxman/Documents/assets/x.png"){
    lst[Math.floor(cnt/3)][cnt%3] = 1;
  }
  else if(img.src == "file:///Users/kishorelaxman/Documents/assets/o.png"){
    lst[Math.floor(cnt/3)][cnt%3] = 0;
  }
}

function isOver(cnt) {
  var f1 = 0;
  var f2 = 0;
  var f3 = 0;
  var f4 = 0;
  var f5 = 0;
  var f6 = 0;
  var f7 = 0;
  var f8 = 0;

  for (var i = 0; i < 3; i++) {
    f1 += lst[0][i]
    f2 += lst[1][i]
    f3 += lst[2][i]
    f4 += lst[i][0]
    f5 += lst[i][1]
    f6 += lst[i][2]
    f7 += lst[i][i]
    f8 += lst[2-i][i]
  }

  if(f1 == 3 || f2 == 3 || f3 == 3 || f4 == 3 || f5 == 3 || f6 == 3 || f7 == 3 || f8 == 3){
    console.log("White Wins");
    for (var i = 0; i < 9; i++) {
      var btn = document.getElementById("btn"+i);
      if(btn){
        btn.remove();

        var td = document.getElementById(i);

        var div = document.createElement("div");
        div.setAttribute("id", "div"+i);
        div.style.backgroundColor = "lightblue";
        div.style.margin = "3px";
        div.style.border = "3px solid lightblue";
        div.style.borderRadius = "10px";
        div.style.width = "143px";
        div.style.height = "143px";

        td.appendChild(div);
      }
    }
  }
  else if (f1 == 0 || f2 == 0 || f3 == 0 || f4 == 0 || f5 == 0 || f6 == 0 || f7 == 0 || f8 == 0){
    console.log("Black Wins");
    for (var i = 0; i < 9; i++) {
      var btn = document.getElementById("btn"+i);
      if(btn){
        btn.remove();

        var td = document.getElementById(i);

        var div = document.createElement("div");
        div.setAttribute("id", "div"+i);
        div.style.backgroundColor = "lightblue";
        div.style.margin = "3px";
        div.style.border = "3px solid lightblue";
        div.style.borderRadius = "10px";
        div.style.width = "143px";
        div.style.height = "143px";

        td.appendChild(div);
      }
    }
  }
  else if (cnt >= 8){
    console.log("Draws");
  }
  else {
    return -1;
  }
}

function ifClicked(i) {
  var btn = document.getElementById("btn"+i);
  btn.remove();

  var td = document.getElementById(i);

  var div = document.createElement("div");
  div.setAttribute("id", "div"+i);
  div.style.backgroundColor = "lightblue";
  div.style.margin = "3px";
  div.style.border = "3px solid lightblue";
  div.style.borderRadius = "10px";

  var img = document.createElement("img");
  img.setAttribute("id","img"+i);
  if(cnt%2 == 0){
    img.src = "assets/x.png";
  }
  else{
    img.src = "assets/o.png";
  }

  div.appendChild(img);
  td.appendChild(div);

  assign(img,i);
  isOver(cnt);
  cnt++;

  if ((cnt%2 != 0) &&(isOver(cnt) == -1)) {
      computer();
  }
}

function computer() {
  do {
    var num = Math.floor(Math.random() * 9);
  } while (!document.getElementById("btn"+num));
  ifClicked(num);
}

function restart() {
  cnt = 0;

  for (var i = 0; i < 9; i++) {
    lst[Math.floor(i/3)][i%3] = 5

    var div = document.getElementById("div"+i);

    if (div) {
      div.remove();

      var btn = document.createElement("button");
      btn.setAttribute("id", "btn"+i);
      btn.setAttribute("onclick", "ifClicked("+i+")");

      var td = document.getElementById(i);
      td.appendChild(btn);
    }

  }
}
