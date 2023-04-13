function openWindow(){
      var unknown = document.getElementById("unknown").value;
      if (unknown == "road"){
          window.open("Ճանապարհ.html","_self");
      }
      if (unknown == "speed"){
          window.open("Արագություն.html","_self");
      }
      if (unknown == "time"){
          window.open("Ժամանակ.html","_self");
      }
      if (unknown == "t1"){
        window.open("Ժամանակ1.html","_self");
      }
      if (unknown == "t"){
          window.open("t.html","_self");
      }
      if (unknown == "a"){
          window.open("Արագացում.html","_self");
      }
      if (unknown == "I"){
          window.open("Հոսանք.html","_self");
      }
      if (unknown == "q"){
        window.open("լիցք.html","_self");
    }
    if (unknown == "u"){
      window.open("լարում.html","_self");
  }
  if (unknown == "sped"){
    window.open("v.html","_self");
  }
  if (unknown == "v1"){
    window.open("Արագություն 1.html","_self");
  }
  if (unknown == "v2"){
    window.open("Արագություն2.html","_self");
  }
  if (unknown == "m"){
    window.open("m.html","_self");
  }
  if (unknown == "m1"){
    window.open("Զանգաված1.html","_self");
  }
  if (unknown == "m2"){
    window.open("Զանգված2.html","_self");
  }
  if (unknown == "m3"){
    window.open("Զանգված3.html","_self");
  }
      
  }
  function calculate() {
      var unknown = document.getElementById("unknown")? document.getElementById("unknown").value:"";
      var unknown1 = document.getElementById("unknown1")?unknown1 = document.getElementById("unknown1").value:"";
      var unknown2 = document.getElementById("unknown2")?document.getElementById("unknown2").value:"";
      var known1 = document.getElementById("known1")?document.getElementById("known1").value:"";
      var known2 = document.getElementById("known2")?document.getElementById("known2").value:"";
      switch (unknown){
        case "road":
          var speed = unknown1 == "km" ? known1 * 0.277777778 : known1;
          var time =unknown2 == "J"? known2 * 3600 : known2
          if (speed && time){
            var road = speed * time;
            alert("Ճանապարհ = " + road);
            break
          }else {
          alert("Խնդրում եմ լրացրեք 2 վանդակները");
          break
        }
      
        case "speed":
        var road = unknown1 == "km" ? known1 /1000: known1;
        var time = unknown2 == "J" ? known2 * 3600: known2;
        if (road && time) {
            var speed = road / time;
            alert("Արագություն = " + speed);
            break
            } else { 
               alert("Խնդրում եմ լրացրեք 2 վանդակները");
               break
                }
        case "time":
        var road = unknown1 == "km" ? known1 *1000: known1;
        var speed = unknown2== "J" ? known2 *0.277777778: known2
          if (road && time) {
            var time = road / speed;
            alert("Ժամանակ = " + time);
            break
          } else {
            alert("Խնդրում եմ լրացրեք 2 վանդակները");
            break
          }
          case "a":
            var speed= unknown1 =="km"? known1 *0.277777778: known1;
            var time = unknown2 =="J"? known2 * 3600: known2;
            if (speed && time) {
              var a = speed / time;
              alert("Արագացում = " + a);
              break
            } else {
              alert("Խնդրում եմ լրացրեք 2 վանդակները");
              break
            }
          case "I":
              var q = known1;
              var T =known2
            if (q && T) {
              var I = q / T;
              alert("Հոսանք = " + I);
              break
            } else {
              alert("Խնդրում եմ լրացրեք 2 վանդակները");
              break
            }
          case "t1":
            var q = known1;
            var I = known2;
          if (q && I) {
            var t1 = q / I;
            alert("Ժամանակ = " + t1);
            break
          } else {
            alert("Խնդրում եմ լրացրեք 2 վանդակները");
            break
          }
          case "q":
            var t = known1;
            var I = known2;
          if (t && I) {
            var q = t * I;
            alert("Լիցք = " + q);
            break
          } else {
            alert("Խնդրում եմ լրացրեք 2 վանդակները");
            break
          }
          case "u":
            var A = known1;
            var q = known2;          
          if (A && q) {
            var u = A * q;
            alert("Լարում = " + u);
            break
          } else {
            alert("Խնդրում եմ լրացրեք 2 վանդակները");
            break
          }
          case "v1":
            var a = unknown1 =="km"? known1 / 1000: known1;
            var t = unknown2 =="J"? known2 * 3600: known2;
            if (a && t) {
              var v1 = a * t;
              alert("Արագություն = " + v1);
              break
            } else {
              alert("Խնդրում եմ լրացրեք 2 վանդակները");
              break
            }
          case "v2":
            var E = known1;
            var m = known2;  
          if (E && m) {
            var v2 = Math.sqrt( 2*E / m);
            alert("Արագություն = " + v2);
            break
          } else {
            alert("Խնդրում եմ լրացրեք 2 վանդակները");
            break
          }
          case "m1":
            var f = known1;
            var a = known2;
          if (f && a) {
            var m1 =  f / a;
            alert("Զանգված = " +m1 );
            break
          } else {
            alert("Խնդրում եմ լրացրեք 2 վանդակները");
            break
          }
          case "m2":
            var E = known1;
            var v = known2;
          if (E && v) {
            var m2 =  2*E / v**2;
            alert("Զանգված = " +m2 );
            break
          } else {
            alert("Խնդրում եմ լրացրեք 2 վանդակները");
            break
          }
          case "m3":
            var v = known1;
            var R = known2;
          if (v && R) {
            var m3 = R* v;
            alert("Զանգված = " +m3 );
            break
          } else {
            alert("Խնդրում եմ լրացրեք 2 վանդակները");
            break
          }
        } 
    }
