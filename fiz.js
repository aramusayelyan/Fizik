function openWindow(){
  var unknown = document.getElementById("unknown").value;
  switch (unknown){
    case "road":
      window.open("Ճանապարհ.html","_self");
      break
    case "time":
      window.open("Ժամանակ.html","_self");
      break
    case "t1":
      window.open("Ժամանակ1.html","_self");
      break
    case "t":
       window.open("t.html","_self");
       break
    case "a":
       window.open("Արագացում.html","_self");
       break
    case "I":
      window.open("Հոսանք.html","_self");
      break
    case "q":
      window.open("լիցք.html","_self");
      break
    case "u":
      window.open("լարում.html","_self");
      break
    case "sped":
     window.open("v.html","_self");
     break
    case"v1":
      window.open("Արագություն 1.html","_self");
      break
    case "v2":
      window.open("Արագություն2.html","_self");
      break
    case "m": 
      window.open("m.html","_self");
      break
    case "m1":
      window.open("Զանգաված1.html","_self");
      break
    case "m2":
    window.open("Զանգված2.html","_self");
    break
    case"m3":
    window.open("Զանգված3.html","_self");
    break
    case"f":
      window.open("power.html","_self"); 
      break
    case "powerr":
      window.open("powerr.html","_self");
      break
    case"powerar":
      window.open("powerar.html","_self"); 
      break
    case"powerr":
      window.open("powerr.html","_self"); 
      break
    case"R":
      window.open("xt.html","_self"); 
      break

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
          case "powerar":
            var v = known1;
            var R = known2;
          if (v && R) {
            var powerar = R *v *10;
            alert("Արքիմեդյան ուժ = " +powerar );
            break
          } else {
            alert("Խնդրում եմ լրացրեք 2 վանդակները");
            break
          }
          case "powerr":
            var m = unknown2 =="kg"? known1 * 1000: known1;
            var g = known2;
          if (m && g) {
            var powerr = m *g;
            alert("Ծանրության ուժ = " +powerr );
            break
          } else {
            alert("Խնդրում եմ լրացրեք 2 վանդակները");
            break
          }
          case "R":
            var m = unknown2 =="kg"? known2 * 1000: known2;
            var g = known1;
          if (m && g) {
            var powerr = m *g;
            alert("Ծանրության ուժ = " +powerr );
            break
          } else {
            alert("Խնդրում եմ լրացրեք 2 վանդակները");
            break
          }
        } 
    }
