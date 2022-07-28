
////////////////////////////////////////////////////////////////
var hasil_box2 = document.getElementById("hasil_box2");
var inputa_box2 = document.getElementById("inputa_box2");
var inputb_box2 = document.getElementById("inputb_box2");
var inputc_box2 = document.getElementById("inputc_box2");

function hasilfaktor_box2(){
	a_box2 = Number(inputa_box2.value);
	b_box2 = Number(inputb_box2.value);
	c_box2 = Number(inputc_box2.value);
	diskriminan = (b_box2 ** 2) + (-4 * a_box2 * c_box2);
	akar_diskriminan =  Math.sqrt((b_box2 ** 2) + (-4 * a_box2 * c_box2));
    khususmin_akar_diskriminan = Math.sqrt(-((b_box2 ** 2) + (-4 * a_box2 * c_box2)));

if (diskriminan > 0) {
	return hasil_box2.innerHTML = 
`
x<sub>1,2</sub> = (-b &#177; &#8730; (b<sup>2</sup> - 4ac)) / 2a<br>
x<sub>1,2</sub> = (-(${b_box2}) &#177; &#8730; ((${b_box2})<sup>2</sup> - 4.(${a_box2}).(${c_box2}))) / 2.(${a_box2})<br>
x<sub>1,2</sub> = (${-b_box2} &#177; &#8730; (${b_box2 ** 2}) + (${-4 * a_box2 * c_box2}))) / ${2 * a_box2}<br>
x<sub>1,2</sub> = (${-b_box2} &#177; &#8730; (${(b_box2 ** 2) + (-4 * a_box2 * c_box2)})) / ${2 * a_box2}<br>
x<sub>1,2</sub> = (${-b_box2} &#177; ${akar_diskriminan}) / ${2 * a_box2}<br>
<br>
x<sub>1</sub> = (${-b_box2} + ${akar_diskriminan}) / ${2 * a_box2}<br>
x<sub>1</sub> = ${-b_box2 + akar_diskriminan} / ${2 * a_box2}<br>
x<sub>1</sub> = ${(-b_box2 + akar_diskriminan) / (2 * a_box2)}<br>
<br>
x<sub>2</sub> = (${-b_box2} - ${akar_diskriminan}) / ${2 * a_box2}<br>
x<sub>2</sub> = ${-b_box2 - akar_diskriminan} / ${2 * a_box2}<br>
x<sub>2</sub> = ${(-b_box2 - akar_diskriminan) / (2 * a_box2)}<br>
`
}else if (diskriminan == 0){
	return hasil_box2.innerHTML = 
`
x<sub>1,2</sub> = (-b &#177; &#8730; (b<sup>2</sup> - 4ac)) / 2a<br>
x<sub>1,2</sub> = (-(${b_box2}) &#177; &#8730; ((${b_box2})<sup>2</sup> - 4.(${a_box2}).(${c_box2}))) / 2.(${a_box2})<br>
x<sub>1,2</sub> = (${-b_box2} &#177; &#8730; (${b_box2 ** 2} + (${-4 * a_box2 * c_box2}))) / ${2 * a_box2}<br>
x<sub>1,2</sub> = (${-b_box2} &#177; &#8730; (${(b_box2 ** 2) + (-4 * a_box2 * c_box2)})) / ${2 * a_box2}<br>
x<sub>1,2</sub> = (${-b_box2} &#177; ${akar_diskriminan}) / ${2 * a_box2}   <<<  hanya memiliki 1 nilai<br>
x = ${-b_box2} / ${2 * a_box2}<br>
x = ${-b_box2 / (2 * a_box2)}<br>
`
}else if (diskriminan < 0){
	return hasil_box2.innerHTML = 
`
x<sub>1,2</sub> = (-b &#177; &#8730; (b<sup>2</sup> - 4ac)) / 2a<br>
x<sub>1,2</sub> = (-(${b_box2}) &#177; &#8730; ((${b_box2})<sup>2</sup> - 4.(${a_box2}).(${c_box2}))) / 2.(${a_box2})<br>
x<sub>1,2</sub> = (${-b_box2} &#177; &#8730; (${b_box2 ** 2} + (${-4 * a_box2 * c_box2}))) / ${2 * a_box2}<br>
x<sub>1,2</sub> = (${-b_box2} &#177; &#8730; (${(b_box2 ** 2) + (-4 * a_box2 * c_box2)})) / ${2 * a_box2}<br>
x<sub>1,2</sub> = (${-b_box2} &#177; ${khususmin_akar_diskriminan}i) / ${2 * a_box2} <<< tidak ada penyelesaian<br>
`}}
// }else if (diskriminan % akar_diskriminan.toFixed() != 0) {
// 	return hasil_box2.innerHTML = 
// `
// x<sub>1,2</sub> = (-b &#177; &#8730; (b<sup>2</sup> - 4ac)) / 2a<br>
// x<sub>1,2</sub> = (-(${b_box2}) &#177; &#8730; ((${b_box2})<sup>2</sup> - 4.(${a_box2}).(${c_box2}))) / 2.(${a_box2})<br>
// x<sub>1,2</sub> = (${-b_box2} &#177; &#8730; (${b_box2 ** 2} + (${-4 * a_box2 * c_box2}))) / ${2 * a_box2}<br>
// x<sub>1,2</sub> = (${-b_box2} &#177; &#8730; (${(b_box2 ** 2) + (-4 * a_box2 * c_box2)})) / ${2 * a_box2}<br>
// <br>
// x<sub>1</sub> = (${-b_box2} + &#8730; (${(b_box2 ** 2) + (-4 * a_box2 * c_box2)})) / ${2 * a_box2}<br>
// <br>
// x<sub>2</sub> = (${-b_box2} - &#8730; (${(b_box2 ** 2) + (-4 * a_box2 * c_box2)})) / ${2 * a_box2}<br>
// `
// }
// }

// ongoing
////////////////////////////////////////////////////////////////

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
