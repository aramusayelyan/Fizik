
function openWindow(){
    var unknown = document.getElementById("unknown").value;
    if (unknown == "road"){
        window.open("Ճանապարհ.html","_blank");
    }
    if (unknown == "speed"){
        window.open("Արագություն.html","_blank");
    }
    if (unknown == "time"){
        window.open("Ժամանակ.html","_blank");
    }
    if (unknown == "t1"){
      window.open("Ժամանակ1.html","_blank");
    }
    if (unknown == "t"){
        window.open("t.html","_blank");
    }
    if (unknown == "a"){
        window.open("Արագացում.html","_blank");
    }
    if (unknown == "I"){
        window.open("Հոսանք.html","_blank");
    }
    if (unknown == "q"){
      window.open("լիցք.html","_blank");
  }
  if (unknown == "u"){
    window.open("լարում.html","_blank");
}
    
}
function calculate() {
    var unknown = document.getElementById("unknown").value;
    var known1 = document.getElementById("known1").value;
    var known2 = document.getElementById("known2").value;
    
    if (unknown == "road") {
      if (known1 && known2) {
        var speed = known1;
        var time = known2;
        var road = speed * time;
        alert("Ճանապարհ = " + road);
      } else {
        alert("Խնդրում եմ լրացրեք 2 վանդակները");
      }
    } else if (unknown == "speed") {
      if (known1 && known2) {
        var road = known1;
        var time = known2;
        var speed = road / time;
        alert("Արագություն = " + speed);
      } else {
        alert("Խնդրում եմ լրացրեք 2 վանդակները");
      }
    } else if (unknown == "time") {
      if (known1 && known2) {
        var road = known1;
        var speed = known2;
        var time = road / speed;
        alert("Ժամանակ = " + time);
      } else {
        alert("Խնդրում եմ լրացրեք 2 վանդակները");
      }
    } else if (unknown == "a") {
        if (known1 && known2) {
          var speed = known1;
          var time = known2;
          var a = speed / time;
          alert("Արագացում = " + a);
        } else {
          alert("Խնդրում եմ լրացրեք 2 վանդակները");
        }
      } else if (unknown == "I") {
        if (known1 && known2) {
          var q = known1;
          var T = known2;
          var I = q / T;
          alert("Հոսանք = " + I);
        } else {
          alert("Խնդրում եմ լրացրեք 2 վանդակները");
        }
      } else if (unknown == "t1") {
        if (known1 && known2) {
          var q = known1;
          var I = known2;
          var t1 = q / I;
          alert("Ժամանակ = " + t1);
        } else {
          alert("Խնդրում եմ լրացրեք 2 վանդակները");
        }
      } else if (unknown == "q") {
        if (known1 && known2) {
          var t = known1;
          var I = known2;
          var q = t * I;
          alert("Ժամանակ = " + q);
        } else {
          alert("Խնդրում եմ լրացրեք 2 վանդակները");
        }
      } else if (unknown == "u") {
        if (known1 && known2) {
          var A = known1;
          var q = known2;
          var u = A * q;
          alert("Լարում = " + u);
        } else {
          alert("Խնդրում եմ լրացրեք 2 վանդակները");
        }
      } 
  }


