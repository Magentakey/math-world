var hasil =  document.getElementById('hasilapoekrpwoarkpa');
var inputa =  document.getElementById('inputa');
var inputb =  document.getElementById('inputb');
var inputc =  document.getElementById('inputc');


function hasilfaktor(){
	a = Number(inputa.value);	
	b = Number(inputb.value);	
	c = Number(inputc.value);	
	var hasilaxc = a * c;		

	if (hasilaxc < 0) {
    for (var x1 = hasilaxc; x1 <= -hasilaxc + 1; x1++) {
 		var x2 =  hasilaxc / x1;
    	if (hasilaxc / x1 == x2 && x2 + x1 == b) {
			return hasil.innerHTML = 
			`ax^2 + bx + c = 0 <br>
			a = ${a} , b = ${b} , c = ${c}<br>
			*rumus pemfaktoran =<br>
			 x1 + x2 = b<br>
			 x1 x x2 = ac<br>
			 (x + x1)(x + x2) = 0<br><br>
			 ${x2} + ${x1} = ${b}<br>
			 ${x2} x ${x1} = ${hasilaxc}<br>
			 (x + (${x2}))(x + (${x1})) = 0<br>
			 x + (${x2}) = 0 ||| x + (${x1}) = 0<br>
			 x = ${-x2} ||| x = ${-x1}`
    	} else if (x1 == -hasilaxc + 1) {
		alert("perhitungan tidak ditemukan, gunakan rumus ABC!")	
	}
	    
    }
    }
    if (hasilaxc > 0) {
    for (var x1 = -hasilaxc; x1 <= hasilaxc + 1; x1++) {
 		var x2 =  hasilaxc / x1;
    	if (hasilaxc / x1 == x2 && x2 + x1 == b) {
			return hasil.innerHTML = 
			`ax^2 + bx + c = 0<br>
			a = ${a} , b = ${b} , c = ${c}<br>
			*rumus pemfaktoran =<br>
			 x1 + x2 = b<br>
			 x1 x x2 = ac<br>
			 (x + x1)(x + x2) = 0<br><br>
			 ${x2} + ${x1} = ${b}<br>
			 ${x2} x ${x1} = ${hasilaxc}<br>
			 (x + (${x2}))(x + (${x1})) = 0<br>
			 x + (${x2}) = 0 ||| x + (${x1}) = 0<br>
			 x = ${-x2} ||| x = ${-x1}`
    	} else if (x1 == hasilaxc + 1) {
		alert("perhitungan tidak ditemukan, gunakan rumus ABC!")
	}
    }
    }
    if (hasilaxc == 0) {
    	var x1 = b;
    	var x2 = 0;
    	return hasil.innerHTML = 
			`ax^2 + bx + c = 0<br>
			a = ${a} , b = ${b} , c = ${c}<br>
			*rumus pemfaktoran =<br>
			 x1 + x2 = b<br>
			 x1 x x2 = ac<br>
			 (x + x1)(x + x2) = 0<br><br>
			 ${x2} + ${x1} = ${b}<br>
			 ${x2} x ${x1} = ${hasilaxc}<br>
			 (x + (${x2}))(x + (${x1})) = 0<br>
			 x + (${x2}) = 0 ||| x + (${x1}) = 0<br>
			 x = ${-x2} ||| x = ${-x1}`
    }
}
