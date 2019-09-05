function plus() {
  var x  = parseFloat(document.getElementById('eerste-getal').value);
    var y  = parseFloat(document.getElementById('tweede-getal').value);

    var ans =  x + y;
    if(isNaN(ans)) {
      alert("het eerste veld en het tweede veld moeten door getallen worden ingevuld");
      return;
    }
    document.getElementById('answer').innerHTML = ans;
}

function min() {
  var x  = parseFloat(document.getElementById('eerste-getal').value);
    var y  = parseFloat(document.getElementById('tweede-getal').value);

    var ans =  x - y;
    if(isNaN(ans)) {
      alert("het eerste veld en het tweede veld moeten door getallen worden ingevuld");
      return;
    }
    document.getElementById('answer').innerHTML = ans;
}

function keer() {
  var x  = parseFloat(document.getElementById('eerste-getal').value);
    var y  = parseFloat(document.getElementById('tweede-getal').value);

    var ans =  x * y;
    if(isNaN(ans)) {
      alert("het eerste veld en het tweede veld moeten door getallen worden ingevuld");
      return;
    }
    document.getElementById('answer').innerHTML = ans;
}

function delen() {
    var x  = parseFloat(document.getElementById('eerste-getal').value);
    var y  = parseFloat(document.getElementById('tweede-getal').value);

    var ans =  x / y;
    console.log(ans);
    if(isNaN(ans)) {
        alert("het eerste veld en het tweede veldmoeten door getallen worden ingevuld");
        return;
    }
    if (!isFinite(ans)) {
        document.getElementById('answer').innerHTML = 'Kan niet door 0 delen';
    }
    else {
        document.getElementById('answer').innerHTML = ans;
    }
}

function kwadraat() {
  var x  = parseFloat(document.getElementById('eerste-getal').value);
  var y = document.getElementById('tweede-getal').value;

    var ans =  Math.pow(x, 2);
    if(isNaN(ans)) {
        alert("Het eerste veld moet een getal zijn");
        return;
    }
    if (y != '') {
        alert("Het tweede veld hoeft niet ingevuld te worden");
    } else {
        document.getElementById('answer').innerHTML = ans;
    }
}

function macht() {
  var x  = parseFloat(document.getElementById('eerste-getal').value);
    var y  = parseFloat(document.getElementById('tweede-getal').value);

    var ans =  Math.pow(x, y);
    if(isNaN(ans)) {
      alert("het eerste veld en het tweede veld moeten door getallen worden ingevuld");
      return;
    }
    document.getElementById('answer').innerHTML = ans;
}

function wortel() {
  var x  = parseFloat(document.getElementById('eerste-getal').value);
  var y  = parseFloat(document.getElementById('tweede-getal').value);


    var ans =  Math.sqrt(x);
    if(isNaN(ans)) {
      alert("Het eerste veld moet een getal zijn");
      return;
  }
  if (y = '') {
      alert("Het tweede veld hoeft niet ingevuld te worden");
  }
  else {
    document.getElementById('answer').innerHTML = ans;
    }
}

function tafel() {
  var x = parseFloat(document.getElementById('eerste-getal').value);
if(isNaN(x)){
  alert("Het eerste veld moet een getal zijn");
  return;
}
  var start = 1;
  var end = 11;
  var ans = "";

  for(start; start < end; start++){
    ans = ans + x + " x " + start + " = " + start * x + "<br>";
  }
  document.getElementById('answer').innerHTML = ans;
}
