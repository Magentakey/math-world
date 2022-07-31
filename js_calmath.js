////////////////////////////////////////////////////////////////
// box3
var hasil_box3 = document.getElementById('hasil_box3');
var a_box3 = document.getElementById("inputa_box3");
var b_box3 = document.getElementById("inputb_box3");
var c_box3 = document.getElementById("inputc_box3");


function hasil_satu_box3(){
let a = Number(inputa_box3.value)
let b = Number(inputb_box3.value)
let c = Number(inputc_box3.value)

	hasil_box3.innerHTML = 
	`
	ax<sup>2</sup> + bx + c = 0<br>
	a = ${a} , b = ${b} , c = ${c}<br><br>
	x1+x2 = -b/a <br>
	x1+x2 = -(${b}/${a})<br>
	x1+x2 = ${-(b/a)}
	`;
}

function hasil_dua_box3(){
let a = Number(inputa_box3.value)
let b = Number(inputb_box3.value)
let c = Number(inputc_box3.value)

	hasil_box3.innerHTML = 
	`
	ax<sup>2</sup> + bx + c = 0<br>
	a = ${a} , b = ${b} , c = ${c}<br><br>
	x1.x2 = c/a <br>
	x1.x2 = ${c}/${a}<br>
	x1.x2 = ${c/a}
	`;
}

function hasil_tiga_box3(){
let a = Number(inputa_box3.value)
let b = Number(inputb_box3.value)
let c = Number(inputc_box3.value)

	hasil_box3.innerHTML = 
	`
	ax<sup>2</sup> + bx + c = 0<br>
	a = ${a} , b = ${b} , c = ${c}<br><br>
	x1<sup>2</sup>+x2<sup>2</sup> = (x1+x2)<sup>2</sup> - 2(x1.x2) <br>
	x1<sup>2</sup>+x2<sup>2</sup> = ${-(b/a)}<sup>2</sup> - 2.${c/a}<br>
	x1<sup>2</sup>+x2<sup>2</sup> = ${(-(b/a)) ** 2} + ${-2*c/a}<br>
	x1<sup>2</sup>+x2<sup>2</sup> = ${((-(b/a)) ** 2) + (-2*c/a)}
	`;
}

function hasil_empat_box3(){
let a = Number(inputa_box3.value)
let b = Number(inputb_box3.value)
let c = Number(inputc_box3.value)

	hasil_box3.innerHTML = 
	`
	ax<sup>2</sup> + bx + c = 0<br>
	a = ${a} , b = ${b} , c = ${c}<br><br>
	(1/x1)+(1/x2) = (x1+x2)/(x1.x2) <br>
	(1/x1)+(1/x2) = ${-(b/a)}/${c/a}<br>
	(1/x1)+(1/x2) = ${(-(b/a))/(c/a)}
	`;
}

function hasil_lima_box3(){
let a = Number(inputa_box3.value)
let b = Number(inputb_box3.value)
let c = Number(inputc_box3.value)

	hasil_box3.innerHTML = 
	`
	ax<sup>2</sup> + bx + c = 0<br>
	a = ${a} , b = ${b} , c = ${c}<br><br>
	(x1/x2)+(x2/x1) = (x1<sup>2</sup>+x2<sup>2</sup>)/(x1.x2) <br>
	(x1/x2)+(x2/x1) = ${((-(b/a)) ** 2) + (-2*c/a)}/${c/a}<br>
	(x1/x2)+(x2/x1) = ${(((-(b/a)) ** 2) + (-2*c/a))/(c/a)}
	`;
}
////////////////////////////////////////////////////////////////
// box2
var hasil_box2 = document.getElementById("hasil_box2");
var inputa_box2 = document.getElementById("inputa_box2");
var inputb_box2 = document.getElementById("inputb_box2");
var inputc_box2 = document.getElementById("inputc_box2");

function hasilfaktor_box2(){
	let a_box2 = Number(inputa_box2.value);
	let b_box2 = Number(inputb_box2.value);
	let c_box2 = Number(inputc_box2.value);
	let diskriminan = (b_box2 ** 2) + (-4 * a_box2 * c_box2);
	let khususmin_diskriminan = -((b_box2 ** 2) + (-4 * a_box2 * c_box2));
	let akar_diskriminan =  Math.sqrt((b_box2 ** 2) + (-4 * a_box2 * c_box2));
    let khususmin_akar_diskriminan = Math.sqrt(-((b_box2 ** 2) + (-4 * a_box2 * c_box2)));

if (diskriminan > 0) {
	if (diskriminan % akar_diskriminan == 0){
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
	`}
	else if (diskriminan % akar_diskriminan != 0) {
			return hasil_box2.innerHTML = 
	`
	x<sub>1,2</sub> = (-b &#177; &#8730; (b<sup>2</sup> - 4ac)) / 2a<br>
	x<sub>1,2</sub> = (-(${b_box2}) &#177; &#8730; ((${b_box2})<sup>2</sup> - 4.(${a_box2}).(${c_box2}))) / 2.(${a_box2})<br>
	x<sub>1,2</sub> = (${-b_box2} &#177; &#8730; (${b_box2 ** 2} + (${-4 * a_box2 * c_box2}))) / ${2 * a_box2}<br>
	x<sub>1,2</sub> = (${-b_box2} &#177; &#8730; (${(b_box2 ** 2) + (-4 * a_box2 * c_box2)})) / ${2 * a_box2}<br>
	<br>
	x<sub>1</sub> = (${-b_box2} + &#8730; (${(b_box2 ** 2) + (-4 * a_box2 * c_box2)})) / ${2 * a_box2}<br>
	<br>
	x<sub>2</sub> = (${-b_box2} - &#8730; (${(b_box2 ** 2) + (-4 * a_box2 * c_box2)})) / ${2 * a_box2}<br>
	`
	}
}
else if (diskriminan == 0){
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
}
else if (diskriminan < 0){
	if (khususmin_diskriminan % khususmin_akar_diskriminan == 0) {
		return hasil_box2.innerHTML = 
	`
	x<sub>1,2</sub> = (-b &#177; &#8730; (b<sup>2</sup> - 4ac)) / 2a<br>
	x<sub>1,2</sub> = (-(${b_box2}) &#177; &#8730; ((${b_box2})<sup>2</sup> - 4.(${a_box2}).(${c_box2}))) / 2.(${a_box2})<br>
	x<sub>1,2</sub> = (${-b_box2} &#177; &#8730; (${b_box2 ** 2} + (${-4 * a_box2 * c_box2}))) / ${2 * a_box2}<br>
	x<sub>1,2</sub> = (${-b_box2} &#177; &#8730; (${(b_box2 ** 2) + (-4 * a_box2 * c_box2)})) / ${2 * a_box2}<br>
	x<sub>1,2</sub> = (${-b_box2} &#177; ${khususmin_akar_diskriminan}i) / ${2 * a_box2} <<< tidak ada penyelesaian<br>
	`}
	else if(khususmin_diskriminan % khususmin_akar_diskriminan != 0 ){
			return hasil_box2.innerHTML = 
	`
	x<sub>1,2</sub> = (-b &#177; &#8730; (b<sup>2</sup> - 4ac)) / 2a<br>
	x<sub>1,2</sub> = (-(${b_box2}) &#177; &#8730; ((${b_box2})<sup>2</sup> - 4.(${a_box2}).(${c_box2}))) / 2.(${a_box2})<br>
	x<sub>1,2</sub> = (${-b_box2} &#177; &#8730; (${b_box2 ** 2} + (${-4 * a_box2 * c_box2}))) / ${2 * a_box2}<br>
	x<sub>1,2</sub> = (${-b_box2} &#177; &#8730; (${diskriminan})) / ${2 * a_box2} <<< tidak ada penyelesaian<br>
	`
	}
}}
////////////////////////////////////////////////////////////////
// box1
var hasil =  document.getElementById('hasilapoekrpwoarkpa');
var inputa =  document.getElementById('inputa');
var inputb =  document.getElementById('inputb');
var inputc =  document.getElementById('inputc');


function hasilfaktor(){
	let a = Number(inputa.value);	
	let b = Number(inputb.value);	
	let c = Number(inputc.value);	
	let hasilaxc = a * c;		

	if (hasilaxc < 0) {
    for (let x1 = hasilaxc; x1 <= -hasilaxc + 1; x1++) {
 		let x2 =  hasilaxc / x1;
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
    for (let x1 = -hasilaxc; x1 <= hasilaxc + 1; x1++) {
 		let x2 =  hasilaxc / x1;
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
    	let x1 = b;
    	let x2 = 0;
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
