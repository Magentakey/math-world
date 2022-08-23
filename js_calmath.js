////////////////////////////////////////////////////////////////
// box 5
var inputa_box5 = document.getElementById("inputa_box5");
var inputb_box5 = document.getElementById("inputb_box5");
var inputc_box5 = document.getElementById("inputc_box5");
var hasil_box5 = document.getElementById("hasil_box5");

// perhitungan rumus!
function show_hasil_box5(){
let a = Number(inputa_box5.value)
let b = Number(inputb_box5.value)
let c = Number(inputc_box5.value)

// variabel x1 dan x2 , y , x-simetri , titik-puncak
let akar_diskriminan =  Math.sqrt((b ** 2) + (-4 * a * c));
let diskriminan = (b ** 2) + (-4 * a * c);

let titik_sumbu_x1 = (-b + akar_diskriminan) / (2 * a);
let titik_sumbu_x2 = (-b - akar_diskriminan) / (2 * a);
let titik_sumbu_y = c;
let sumbu_simetri = (-b) / (2 * a);
let titik_puncak = (-diskriminan) / (4 * a);

function pemfaktoran_di_langkah1_box5(){
let pemfaktoran_akalic = a * c;
	if (pemfaktoran_akalic < 0) {
    for (let x1 = pemfaktoran_akalic; x1 <= -pemfaktoran_akalic + 1; x1++) {
 		var x2 =  pemfaktoran_akalic / x1;
    	if (pemfaktoran_akalic / x1 == x2 && x2 + x1 == b) {
			return  `\\( (${x1}) + (${x2}) = ${b} \\)<br>\\( (${x1}) x (${x2}) = ${c} \\)<br>\\( (x + (${x1}))(x + (${x2})) = 0 \\)<br>\\( x = ${-x1} || x = ${-x2} \\)<br>\\( (${-x1}, 0) (${-x2}, 0) \\)`
    	} else if (x1 == -pemfaktoran_akalic + 1) {
		alert("pemfaktoran gagal")	
	}
	    
    }
    }
    if (pemfaktoran_akalic > 0) {
    for (let x1 = -pemfaktoran_akalic; x1 <= pemfaktoran_akalic + 1; x1++) {
 		let x2 =  pemfaktoran_akalic / x1;
    	if (pemfaktoran_akalic / x1 == x2 && x2 + x1 == b) {
			return  `\\( (${x1}) + (${x2}) = ${b} \\)<br>\\( (${x1}) x (${x2}) = ${c} \\)<br>\\( (x + (${x1}))(x + (${x2})) = 0 \\)<br>\\( x = ${-x1} || x = ${-x2} \\)<br>\\( (${-x1}, 0) (${-x2}, 0) \\)`
    	} else if (x1 == pemfaktoran_akalic + 1) {
		alert("pemfaktoran gagal")
	}
    }
    }
    if (pemfaktoran_akalic == 0) {
    	let x1 = b;
    	let x2 = 0;
			return  `\\( (${x1}) + (${x2}) = ${b} \\)<br>\\( (${x1}) x (${x2}) = ${c} \\)<br>\\( (x + (${x1}))(x + (${x2})) = 0 \\)<br>\\( x = ${-x1} || x = ${-x2} \\)<br>\\( (${-x1}, 0) (${-x2}, 0) \\)`
    }
}

hasil_box5.innerHTML =
`
\\( f(x) = ax^2 + bx + c \\)<br>
\\( y = ${a}x^2 + (${b})x + (${c}) \\)<br><br>
1) titik sumbu x,y=0<br>
\\( y = ${a}x^2 + (${b})x + (${c}) \\)<br>
\\( ${a}x^2 + (${b})x + (${c}) = 0 \\)<br>
${pemfaktoran_di_langkah1_box5()}<br><br>
2) titik sumbu y,x=0<br>
\\( y = ${a}x^2 + (${b})x + (${c}) \\)<br>
\\( y = (${a})(0)^2 + (${b})(0) + (${c}) \\)<br>
\\( y = ${c} \\)<br>
\\( (0, ${c}) \\)<br><br>
3) sumbu simetri<br>
\\( x = \\frac{-b}{2a} \\)<br>
\\( x = \\frac{-(${b})}{2(${a})} \\)<br>
\\( x = \\frac{${-b}}{${2 * a}}) \\)<br>
\\( x = ${(-b) / (2 * a)} \\)<br><br>
4) titik puncah<br>
\\( p(\\frac{-b}{2a}, \\frac{-d}{4a}) \\)<br>
\\( p(${sumbu_simetri}, \\frac{-(${diskriminan})}{4(${a})}) \\)<br>
\\( p(${sumbu_simetri}, \\frac{${-diskriminan}}{${4 * a}}) \\)<br>
\\( p(${sumbu_simetri}, ${(-diskriminan) / (4 * a)}) \\)<br>

\\( d = b^2 - 4ac \\)<br>
\\( d = (${b})^2 - 4(${a})(${c}) \\)<br>
\\( d = ${b ** 2} + (${-4 * a * c}) \\)<br>
\\( d = ${(b ** 2) + (-4 * a * c)} \\)
`;
MathJax.typeset();
}


var canvas = document.getElementById("myCanvas_box5");
canvas.hidden = true;

function show_grafik_box5(){
let a = Number(inputa_box5.value)
let b = Number(inputb_box5.value)
let c = Number(inputc_box5.value)

// variabel x1 dan x2 , y , x-simetri , titik-puncak
let akar_diskriminan =  Math.sqrt((b ** 2) + (-4 * a * c));
let diskriminan = (b ** 2) + (-4 * a * c);

let titik_sumbu_x1 = (-b + akar_diskriminan) / (2 * a);
let titik_sumbu_x2 = (-b - akar_diskriminan) / (2 * a);
let titik_sumbu_y = c;
let sumbu_simetri = (-b) / (2 * a);
let titik_puncak = (-diskriminan) / (4 * a);

var ctx = canvas.getContext("2d");
canvas.hidden = false;
ctx.clearRect(0, 0, canvas.width, canvas.height);

// canvas grafik!
ctx.beginPath();
ctx.moveTo(250, 90);
ctx.lineTo(250, 410);
ctx.strokeStyle = "black";
ctx.stroke();
ctx.beginPath();
ctx.moveTo(90, 250);
ctx.lineTo(410, 250);
ctx.stroke();

let x_xpositif = 260;
for(let i = 1;i<=15;i++){
ctx.beginPath();
ctx.moveTo(x_xpositif, 250);
ctx.lineTo(x_xpositif, 253);
ctx.stroke();
x_xpositif += 10;
}
ctx.font = "10px arial";
ctx.fillText("x",410,250);

let x_xnegatif = 240;
for(let i = 1;i<=15;i++){
ctx.beginPath();
ctx.moveTo(x_xnegatif, 250);
ctx.lineTo(x_xnegatif, 253);
ctx.stroke();
x_xnegatif -= 10;
}
ctx.font = "10px arial";
ctx.fillText("-x",80,250);

let y_ypositif = 240;
for(let i = 1;i<=15;i++){
ctx.beginPath();
ctx.moveTo(250, y_ypositif);
ctx.lineTo(253, y_ypositif);
ctx.stroke();
y_ypositif -= 10;
}
ctx.font = "10px arial";
ctx.fillText("y",250,90);

let y_ynegatif = 260;
for(let i = 1;i<=15;i++){
ctx.beginPath();
ctx.moveTo(250, y_ynegatif);
ctx.lineTo(253, y_ynegatif);
ctx.stroke();
y_ynegatif += 10;
}
ctx.font = "10px arial";
ctx.fillText("-y",250,420);

// titik-titik grafik
// titik x1
ctx.beginPath();
ctx.arc(250 + (titik_sumbu_x1 * 10), 250, 2, 0, 2 * Math.PI);
ctx.strokeStyle = "blue";
ctx.stroke();
// titik x2
ctx.beginPath();
ctx.arc(250 + (titik_sumbu_x2 * 10), 250, 2, 0, 2 * Math.PI);
ctx.stroke();
// titik y
ctx.beginPath();
ctx.arc(250, 250 - (titik_sumbu_y * 10), 2, 0, 2 * Math.PI);
ctx.stroke();
// titik puncak
ctx.beginPath();
ctx.arc(250 + (sumbu_simetri * 10), 250 - (titik_puncak * 10), 2, 0, 2 * Math.PI);
ctx.stroke();

// garis bantu ke puncak
ctx.beginPath();
ctx.moveTo(250 + (sumbu_simetri * 10), 250);
ctx.lineTo(250 + (sumbu_simetri * 10), 250 - (titik_puncak * 10));
ctx.strokeStyle = "gray";
ctx.stroke();
ctx.beginPath();
ctx.moveTo(250, 250 - (titik_puncak * 10));
ctx.lineTo(250 + (sumbu_simetri * 10), 250 - (titik_puncak * 10));
ctx.stroke();

// grafik
if (titik_sumbu_x2 > 0 && titik_sumbu_x1 > 0) {
	ctx.beginPath();
	ctx.moveTo(250, 250 - (titik_sumbu_y * 10));
	ctx.quadraticCurveTo(250 + (sumbu_simetri * 10), 250 - ((titik_puncak * 20) + (-titik_sumbu_y * 10)), 250 + ((titik_sumbu_x1 + titik_sumbu_x2) * 10), 250 - (titik_sumbu_y * 10));
	// 20 untuk beda 1,10 untuk beda 1/2,5 untuk beda 1/4
	ctx.strokeStyle = "red";
	ctx.stroke();
	ctx.font = "10px arial";
	ctx.fillText(`P(${sumbu_simetri} , ${titik_puncak})`,(250 + (sumbu_simetri * 10)) + 20, 250 - (titik_puncak * 10));

	// titik akhir
	ctx.beginPath();
	ctx.arc( 250 + ((titik_sumbu_x1 + titik_sumbu_x2) * 10), 250 - (titik_sumbu_y * 10), 2, 0, 2 * Math.PI);
	ctx.strokeStyle = "blue";
	ctx.stroke();
} else if(titik_sumbu_x2 < 0 && titik_sumbu_x1 < 0){
	ctx.beginPath();
	ctx.moveTo(250 + ((titik_sumbu_x1 + titik_sumbu_x2) * 10), 250 - (titik_sumbu_y * 10));
	ctx.quadraticCurveTo(250 + (sumbu_simetri * 10), 250 - ((titik_puncak * 20) + (-titik_sumbu_y * 10)), 250, 250 - (titik_sumbu_y * 10));
	// 20 untuk beda 1,10 untuk beda 1/2,5 untuk beda 1/4
	ctx.strokeStyle = "red";
	ctx.stroke();
	ctx.font = "10px arial";
	ctx.fillText(`P(${sumbu_simetri} , ${titik_puncak})`,(250 + (sumbu_simetri * 10)) + 20, 250 - (titik_puncak * 10));

	// titik awal
	ctx.beginPath();
	ctx.arc( 250 + ((titik_sumbu_x1 + titik_sumbu_x2) * 10), 250 - (titik_sumbu_y * 10), 2, 0, 2 * Math.PI);
	ctx.strokeStyle = "blue";
	ctx.stroke();
} else{
	ctx.beginPath();
	ctx.moveTo(250 + (titik_sumbu_x2 * 10), 250);
	ctx.quadraticCurveTo(250 + (sumbu_simetri * 10), 250 - (titik_puncak * 20), 250 + (titik_sumbu_x1 * 10), 250);
	// 20 untuk beda 1,10 untuk beda 1/2,5 untuk beda 1/4
	ctx.strokeStyle = "red";
	ctx.stroke();
	ctx.font = "10px arial";
	ctx.fillText(`P(${sumbu_simetri} , ${titik_puncak})`,(250 + (sumbu_simetri * 10)) + 20, 250 - (titik_puncak * 10));
}
}
////////////////////////////////////////////////////////////////
// box 4
var hasil_box4 = document.getElementById("hasil_box4");
// default
var x1_box4 = document.getElementById("inputx1_box4");
var x2_box4 = document.getElementById("inputx2_box4");
var btn_box4 = document.getElementById("btn_box4");
var btn2_box4 = document.getElementById("btn2_box4");
// 1 pecahan
var x1_box4_pecahan1 = document.getElementById("inputx1_box4_pecahan1");
var x2_box4_pecahan1_pembilang = document.getElementById("inputx2_box4_pecahan1_pembilang");
var x2_box4_pecahan1_penyebut = document.getElementById("inputx2_box4_pecahan1_penyebut");
var btn_box4_pecahan1 = document.getElementById("btn_box4_pecahan1");
var btn2_box4_pecahan1 = document.getElementById("btn2_box4_pecahan1");
var per_nya_pecahan1_box4 = document.getElementById("per_nya_pecahan1_box4");
// 2 pecahan
var x1_box4_pecahan2_pembilang = document.getElementById("inputx1_box4_pecahan2_pembilang");
var x1_box4_pecahan2_penyebut = document.getElementById("inputx1_box4_pecahan2_penyebut");
var x2_box4_pecahan2_pembilang = document.getElementById("inputx2_box4_pecahan2_pembilang");
var x2_box4_pecahan2_penyebut = document.getElementById("inputx2_box4_pecahan2_penyebut");
var btn_box4_pecahan2 = document.getElementById("btn_box4_pecahan2");
var btn2_box4_pecahan2 = document.getElementById("btn2_box4_pecahan2");
var per_nya_pecahan2_box4 = document.getElementById("per_nya_pecahan2_box4");
var per2_nya_pecahan2_box4 = document.getElementById("per2_nya_pecahan2_box4");
// default
x1_box4.hidden = false;
x2_box4.hidden = false;
btn_box4.hidden = false;
btn2_box4.hidden = false;
x1_box4_pecahan1.hidden = true;
x2_box4_pecahan1_pembilang.hidden = true;
x2_box4_pecahan1_penyebut.hidden = true;
btn_box4_pecahan1.hidden = true;
btn2_box4_pecahan1.hidden = true;
per_nya_pecahan1_box4.hidden = true;
x1_box4_pecahan2_pembilang.hidden = true;
x1_box4_pecahan2_penyebut.hidden = true;
x2_box4_pecahan2_pembilang.hidden = true;
x2_box4_pecahan2_penyebut.hidden = true;
btn_box4_pecahan2.hidden = true;
btn2_box4_pecahan2.hidden = true;
per_nya_pecahan2_box4.hidden = true;
per2_nya_pecahan2_box4.hidden = true;

function default_box4(){
	x1_box4.hidden = false;
	x2_box4.hidden = false;
	btn_box4.hidden = false;
	btn2_box4.hidden = false;
	x1_box4_pecahan1.hidden = true;
	x2_box4_pecahan1_pembilang.hidden = true;
	x2_box4_pecahan1_penyebut.hidden = true;
	btn_box4_pecahan1.hidden = true;
	btn2_box4_pecahan1.hidden = true;
	per_nya_pecahan1_box4.hidden = true;
	x1_box4_pecahan2_pembilang.hidden = true;
	x1_box4_pecahan2_penyebut.hidden = true;
	x2_box4_pecahan2_pembilang.hidden = true;
	x2_box4_pecahan2_penyebut.hidden = true;
	btn_box4_pecahan2.hidden = true;
	btn2_box4_pecahan2.hidden = true;
	per_nya_pecahan2_box4.hidden = true;
	per2_nya_pecahan2_box4.hidden = true;
	hasil_box4.innerHTML = "";
}
function pecahan1_box4(){
	x1_box4.hidden = true;
	x2_box4.hidden = true;
	btn_box4.hidden = true;
	btn2_box4.hidden = true;
	x1_box4_pecahan1.hidden = false;
	x2_box4_pecahan1_pembilang.hidden = false;
	x2_box4_pecahan1_penyebut.hidden = false;
	btn_box4_pecahan1.hidden = false;
	btn2_box4_pecahan1.hidden = false;
	per_nya_pecahan1_box4.hidden = false;
	x1_box4_pecahan2_pembilang.hidden = true;
	x1_box4_pecahan2_penyebut.hidden = true;
	x2_box4_pecahan2_pembilang.hidden = true;
	x2_box4_pecahan2_penyebut.hidden = true;
	btn_box4_pecahan2.hidden = true;
	btn2_box4_pecahan2.hidden = true;
	per_nya_pecahan2_box4.hidden = true;
	per2_nya_pecahan2_box4.hidden = true;
	hasil_box4.innerHTML = "";
}
function pecahan2_box4(){
	x1_box4.hidden = true;
	x2_box4.hidden = true;
	btn_box4.hidden = true;
	btn2_box4.hidden = true;
	x1_box4_pecahan1.hidden = true;
	x2_box4_pecahan1_pembilang.hidden = true;
	x2_box4_pecahan1_penyebut.hidden = true;
	btn_box4_pecahan1.hidden = true;
	btn2_box4_pecahan1.hidden = true;
	per_nya_pecahan1_box4.hidden = true;
	x1_box4_pecahan2_pembilang.hidden = false;
	x1_box4_pecahan2_penyebut.hidden = false;
	x2_box4_pecahan2_pembilang.hidden = false;
	x2_box4_pecahan2_penyebut.hidden = false;
	btn_box4_pecahan2.hidden = false;
	btn2_box4_pecahan2.hidden = false;
	per_nya_pecahan2_box4.hidden = false;
	per2_nya_pecahan2_box4.hidden = false;
	hasil_box4.innerHTML = "";
}

function cara1_box4(){
	let x1 = Number(x1_box4.value)
	let x2 = Number(x2_box4.value)

	hasil_box4.innerHTML =
	`
	\\( (x-x1)(x-x2) = 0 \\)<br>
	\\( (x-(${x1}))(x-(${x2})) = 0 \\)<br>
	\\( x^2+(${-x2})x+(${-x1})x+(${-x1 * -x2}) = 0 \\)<br>
	\\( x^2+(${-x2 + -x1})+(${-x1 * -x2}) = 0 \\)
	`
	MathJax.typeset();
}

function cara2_box4(){
	let x1 = Number(x1_box4.value)
	let x2 = Number(x2_box4.value)

	hasil_box4.innerHTML =
	`
	\\( x^2-(x1+x2)x+x1.x2 = 0 \\)<br>
	\\( x^2-((${x1})+(${x2}))x+(${x1}).(${x2}) = 0 \\)<br>
	\\( x^2+(${-(x1 + x2)})x+(${x1 * x2}) = 0 \\)
	`
	MathJax.typeset();
}

function cara1_box4_1pecahan(){
	let x1 = Number(x1_box4_pecahan1.value)
	let x2_pembilang = Number(x2_box4_pecahan1_pembilang.value) 
	let x2_penyebut = Number(x2_box4_pecahan1_penyebut.value)

	hasil_box4.innerHTML =
	`
	\\( (x-x1)(x-x2) = 0 \\)<br>
	\\( (x-(${x1}))(x-( \\frac{${x2_pembilang}}{${x2_penyebut}})) = 0 \\)<br>
	\\( (x+(${-x1}))(x+( \\frac{${-x2_pembilang}}{${x2_penyebut}})) = 0 \\)<br>
	\\( x^2+( \\frac{${-x2_pembilang}}{${x2_penyebut}})x+(${-x1})x+( \\frac{${-x2_pembilang * -x1}}{${x2_penyebut}}) = 0 \\)<br>
	\\( x^2+( \\frac{${-x2_pembilang}}{${x2_penyebut}} + \\frac{${-x1}}{1})x+( \\frac{${-x2_pembilang * -x1}}{${x2_penyebut}}) = 0 \\)<br>
	\\( x^2+( \\frac{${-x2_pembilang}}{${x2_penyebut}} + \\frac{${-x1 * x2_penyebut}}{${x2_penyebut}})x+( \\frac{${-x2_pembilang * -x1}}{${x2_penyebut}}) = 0 \\)<br>
	\\( x^2+( \\frac{${-x2_pembilang + (-x1 * x2_penyebut)}}{${x2_penyebut}})x+( \\frac{${-x2_pembilang * -x1}}{${x2_penyebut}}) = 0 \\)<br>
	\\( ${x2_penyebut}x^2+(${-x2_pembilang + (-x1 * x2_penyebut)})x+(${-x2_pembilang * -x1}) = 0 \\)
	`
	MathJax.typeset();
}

function cara2_box4_1pecahan(){
	let x1 = Number(x1_box4_pecahan1.value)
	let x2_pembilang = Number(x2_box4_pecahan1_pembilang.value) 
	let x2_penyebut = Number(x2_box4_pecahan1_penyebut.value)

	hasil_box4.innerHTML =
	`
	\\( x^2-(x1+x2)x+x1.x2 = 0 \\)<br>
	\\( x^2-(${x1}+\\frac{${x2_pembilang}}{${x2_penyebut}})x+(${x1}).(\\frac{${x2_pembilang}}{${x2_penyebut}}) = 0 \\)<br>
	\\( x^2-(\\frac{${x1}}{1}+\\frac{${x2_pembilang}}{${x2_penyebut}})x+(\\frac{${x2_pembilang * x1}}{${x2_penyebut}}) = 0 \\)<br>
	\\( x^2-(\\frac{${x1 * x2_penyebut}}{${x2_penyebut}}+\\frac{${x2_pembilang}}{${x2_penyebut}})x+(\\frac{${x2_pembilang * x1}}{${x2_penyebut}}) = 0 \\)<br>
	\\( x^2-(\\frac{${(x1 * x2_penyebut) + x2_pembilang}}{${x2_penyebut}})x+(\\frac{${x2_pembilang * x1}}{${x2_penyebut}}) \\)<br>
	\\( x^2+(\\frac{${-((x1 * x2_penyebut) + x2_pembilang)}}{${x2_penyebut}})x+(\\frac{${x2_pembilang * x1}}{${x2_penyebut}}) \\)<br>
	\\( ${x2_penyebut}x^2+(${-((x1 * x2_penyebut) + x2_pembilang)})x+(${x2_pembilang * x1}) = 0 \\)
	`
	MathJax.typeset();	
}
function cara1_box4_2pecahan(){
	let x1_pembilang = Number(x1_box4_pecahan2_pembilang.value)
	let x1_penyebut = Number(x1_box4_pecahan2_penyebut.value)
	let x2_pembilang = Number(x2_box4_pecahan2_pembilang.value)
	let x2_penyebut = Number(x2_box4_pecahan2_penyebut.value)

	hasil_box4.innerHTML =
	`
	\\( (x-x1)(x-x2)=0 \\)<br>
	\\( (x-(\\frac{${x1_pembilang}}{${x1_penyebut}}))(x-(\\frac{${x2_pembilang}}{${x2_penyebut}}))=0 \\)<br>
	\\( x^2+(\\frac{${-x2_pembilang}}{${x2_penyebut}})x+(\\frac{${-x1_pembilang}}{${x1_penyebut}})x+(\\frac{${-x2_pembilang * -x1_pembilang}}{${x2_penyebut * x1_penyebut}})=0 \\)<br>
	\\( x^2+(\\frac{${((x2_penyebut * x1_penyebut) / x2_penyebut) * -x2_pembilang}}{${x2_penyebut * x1_penyebut}})x+(\\frac{${((x2_penyebut * x1_penyebut) / x1_penyebut) * -x1_pembilang}}{${x2_penyebut * x1_penyebut}})x+(\\frac{${-x2_pembilang * -x1_pembilang}}{${x2_penyebut * x1_penyebut}})=0 \\)<br>
	\\( x^2+(\\frac{${(((x2_penyebut * x1_penyebut) / x2_penyebut) * -x2_pembilang) + (((x2_penyebut * x1_penyebut) / x1_penyebut) * -x1_pembilang)}}{${x2_penyebut * x1_penyebut}})x+(\\frac{${-x2_pembilang * -x1_pembilang}}{${x2_penyebut * x1_penyebut}}) =0 \\)<br>
	\\( ${x2_penyebut * x1_penyebut}x^2+(${(((x2_penyebut * x1_penyebut) / x2_penyebut) * -x2_pembilang) + (((x2_penyebut * x1_penyebut) / x1_penyebut) * -x1_pembilang)})x+(${-x2_pembilang * -x1_pembilang})=0 \\)	
	`
	MathJax.typeset();
}
function cara2_box4_2pecahan(){
	let x1_pembilang = Number(x1_box4_pecahan2_pembilang.value)
	let x1_penyebut = Number(x1_box4_pecahan2_penyebut.value)
	let x2_pembilang = Number(x2_box4_pecahan2_pembilang.value)
	let x2_penyebut = Number(x2_box4_pecahan2_penyebut.value)

	hasil_box4.innerHTML =
	`
	\\( x^2-(x1+x2)x+x1.x2=0 \\)<br>
	\\( x^2-((\\frac{${x1_pembilang}}{${x1_penyebut}})+(\\frac{${x2_pembilang}}{${x2_penyebut}}))x+(\\frac{${x1_pembilang}}{${x1_penyebut}}).(\\frac{${x2_pembilang}}{${x2_penyebut}})=0 \\)<br>
	\\( x^2-(\\frac{${((x1_penyebut * x2_penyebut) / x1_penyebut) * x1_pembilang}+${((x1_penyebut * x2_penyebut) / x2_penyebut) * x2_pembilang}}{${x1_penyebut * x2_penyebut}})x+(\\frac{${x1_pembilang * x2_pembilang}}{${x1_penyebut * x2_penyebut}})=0 \\)<br>
	\\( x^2+(\\frac{${-((((x1_penyebut * x2_penyebut) / x1_penyebut) * x1_pembilang) + (((x1_penyebut * x2_penyebut) / x2_penyebut) * x2_pembilang))}}{${x1_penyebut * x2_penyebut}})x+(\\frac{${x1_pembilang * x2_pembilang}}{${x1_penyebut * x2_penyebut}})=0 \\)<br>
	\\( ${x1_penyebut * x2_penyebut}x^2+(${-((((x1_penyebut * x2_penyebut) / x1_penyebut) * x1_pembilang) + (((x1_penyebut * x2_penyebut) / x2_penyebut) * x2_pembilang))})x+(${x1_pembilang * x2_pembilang})=0 \\)
	`
	MathJax.typeset();	
}



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
	\\( x1+x2 \\) = \\( \\frac{-b}{a} \\) <br>
	\\( x1+x2 \\) = \\( \\frac{${-b}}{${a}} \\)<br>
	\\( x1+x2 \\) = \\( ${-b/a} \\)
	`;
	MathJax.typeset();
}

function hasil_dua_box3(){
let a = Number(inputa_box3.value)
let b = Number(inputb_box3.value)
let c = Number(inputc_box3.value)

	hasil_box3.innerHTML = 
	`
	ax<sup>2</sup> + bx + c = 0<br>
	a = ${a} , b = ${b} , c = ${c}<br><br>
	\\( x1.x2 \\) = \\( \\frac{c}{a} \\)<br>
	\\( x1.x2 \\) = \\( \\frac{${c}}{${a}} \\)<br>
	\\( x1.x2 \\) = \\( ${c/a} \\)
	`;
	MathJax.typeset();
}

function hasil_tiga_box3(){
let a = Number(inputa_box3.value)
let b = Number(inputb_box3.value)
let c = Number(inputc_box3.value)

	hasil_box3.innerHTML = 
	`
	ax<sup>2</sup> + bx + c = 0<br>
	a = ${a} , b = ${b} , c = ${c}<br><br>
	\\( x1^2+x2^2 \\) = \\( (x1+x2)^2 - 2(x1.x2) \\)<br>
	\\( x1^2+x2^2 \\) = \\( ${-b/a}^2 - 2.${c/a} \\)<br>
	\\( x1^2+x2^2 \\) = \\( ${(-b/a) ** 2} + ${-2*c/a} \\)<br>
	\\( x1^2+x2^2 \\) = \\(${((-(b/a)) ** 2) + (-2*c/a)} \\)
	`;
	MathJax.typeset();
}

function hasil_empat_box3(){
let a = Number(inputa_box3.value)
let b = Number(inputb_box3.value)
let c = Number(inputc_box3.value)

	hasil_box3.innerHTML = 
	`
	ax<sup>2</sup> + bx + c = 0<br>
	a = ${a} , b = ${b} , c = ${c}<br><br>
	\\( \\frac{1}{x1} + \\frac{1}{x2} \\) = \\( \\frac{x1+x2}{x1.x2} \\)<br>
	\\( \\frac{1}{x1} + \\frac{1}{x2} \\) = \\( \\frac{${-(b/a)}}{${c/a}} \\)<br>
	\\( \\frac{1}{x1} + \\frac{1}{x2} \\) = \\(${(-(b/a))/(c/a)} \\)
	`;
	MathJax.typeset();
}

function hasil_lima_box3(){
let a = Number(inputa_box3.value)
let b = Number(inputb_box3.value)
let c = Number(inputc_box3.value)

	hasil_box3.innerHTML = 
	`
	ax<sup>2</sup> + bx + c = 0<br>
	a = ${a} , b = ${b} , c = ${c}<br><br>
	\\( \\frac{x1}{x2}+\\frac{x2}{x1} \\) = \\( \\frac{x1^2+x2^2}{x1.x2} \\)<br>
	\\( \\frac{x1}{x2}+\\frac{x2}{x1} \\) = \\( \\frac{${((-(b/a)) ** 2) + (-2*c/a)}}{${c/a}} \\)<br>
	\\( \\frac{x1}{x2}+\\frac{x2}{x1} \\) = \\(${(((-(b/a)) ** 2) + (-2*c/a))/(c/a)} \\)
	`;
	MathJax.typeset();
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
		hasil_box2.innerHTML = 
	`
	x<sub>1,2</sub> = \\( \\frac{-b \\pm \\sqrt{b^2- 4ac}}{2a} \\) <br>
	x<sub>1,2</sub> = \\( \\frac{-(${b_box2}) \\pm \\sqrt{(${b_box2})^2 - 4.(${a_box2}).(${c_box2})}}{2.(${a_box2})} \\)<br>
	x<sub>1,2</sub> = \\( \\frac{${-b_box2} \\pm \\sqrt{(${b_box2 ** 2}) + (${-4 * a_box2 * c_box2})}}{${2 * a_box2}} \\) <br>
	x<sub>1,2</sub> = \\( \\frac{${-b_box2} \\pm \\sqrt{(${(b_box2 ** 2) + (-4 * a_box2 * c_box2)})}}{${2 * a_box2}} \\)<br>
	x<sub>1,2</sub> = \\( \\frac{${-b_box2} \\pm ${akar_diskriminan}}{${2 * a_box2}} \\) <br>
	<br>
	x<sub>1</sub> = \\( \\frac{${-b_box2} + ${akar_diskriminan}}{${2 * a_box2}} \\) <br>
	x<sub>1</sub> = ${-b_box2 + akar_diskriminan} / ${2 * a_box2}<br>
	x<sub>1</sub> = \\( \\frac{${-b_box2 + akar_diskriminan}}{${2 * a_box2}} \\)<br>
	x<sub>1</sub> = \\( ${(-b_box2 + akar_diskriminan) / (2 * a_box2)} \\)<br>
	<br>
	x<sub>2</sub> = \\( \\frac{${-b_box2} - ${akar_diskriminan}}{${2 * a_box2}} \\)<br>
	x<sub>2</sub> = \\( \\frac{${-b_box2 - akar_diskriminan}}{${2 * a_box2}} \\)<br>
	x<sub>2</sub> = \\( ${(-b_box2 - akar_diskriminan) / (2 * a_box2)} \\)<br>
	`
	MathJax.typeset();
	}
	else if (diskriminan % akar_diskriminan != 0) {
			hasil_box2.innerHTML = 
	`
	x<sub>1,2</sub> = \\( \\frac{-b \\pm \\sqrt{(b^2 - 4ac))}}{2a} \\)<br>
	x<sub>1,2</sub> = \\( \\frac{-(${b_box2}) \\pm \\sqrt{(${b_box2})^2 - 4.(${a_box2}).(${c_box2})}}{2.(${a_box2})} \\)<br>
	x<sub>1,2</sub> = \\( \\frac{${-b_box2} \\pm \\sqrt{${b_box2 ** 2} + (${-4 * a_box2 * c_box2})}}{${2 * a_box2}} \\)<br>
	x<sub>1,2</sub> = \\( \\frac{${-b_box2} \\pm \\sqrt{(${(b_box2 ** 2) + (-4 * a_box2 * c_box2)})}}{${2 * a_box2}} \\)<br>
	<br>
	x<sub>1</sub> = \\( \\frac{${-b_box2} + \\sqrt{(${(b_box2 ** 2) + (-4 * a_box2 * c_box2)})}}{${2 * a_box2}} \\)<br>
	<br>
	x<sub>2</sub> = \\( \\frac{${-b_box2} - \\sqrt{(${(b_box2 ** 2) + (-4 * a_box2 * c_box2)})}}{${2 * a_box2}} \\)<br>
	`
	MathJax.typeset();
	}
}
else if (diskriminan == 0){
		hasil_box2.innerHTML = 
	`
	x<sub>1,2</sub> = \\( \\frac{-b \\pm \\sqrt{(b^2 - 4ac))}}{2a} \\)<br>
	x<sub>1,2</sub> = \\( \\frac{-(${b_box2}) \\pm \\sqrt{(${b_box2})^2 - 4.(${a_box2}).(${c_box2})}}{2.(${a_box2})} \\)<br>
	x<sub>1,2</sub> = \\( \\frac{${-b_box2} \\pm \\sqrt{${b_box2 ** 2} + (${-4 * a_box2 * c_box2})}}{${2 * a_box2}} \\)<br>
	x<sub>1,2</sub> = \\( \\frac{${-b_box2} \\pm \\sqrt{(${(b_box2 ** 2) + (-4 * a_box2 * c_box2)})}}{${2 * a_box2}} \\)<br>
	x<sub>1,2</sub> = \\( \\frac{${-b_box2} \\pm ${akar_diskriminan}}{${2 * a_box2}} \\)   <<<  hanya memiliki 1 nilai<br>
	x = \\( \\frac{${-b_box2}}{${2 * a_box2}} \\)<br>
	x = ${-b_box2 / (2 * a_box2)}<br>
	`
	MathJax.typeset();
}
else if (diskriminan < 0){
	if (khususmin_diskriminan % khususmin_akar_diskriminan == 0) {
		hasil_box2.innerHTML = 
	`
	x<sub>1,2</sub> = \\( \\frac{-b \\pm \\sqrt{(b^2 - 4ac))}}{2a} \\)<br>
	x<sub>1,2</sub> = \\( \\frac{-(${b_box2}) \\pm \\sqrt{(${b_box2})^2 - 4.(${a_box2}).(${c_box2})}}{2.(${a_box2})} \\)<br>
	x<sub>1,2</sub> = \\( \\frac{${-b_box2} \\pm \\sqrt{${b_box2 ** 2} + (${-4 * a_box2 * c_box2})}}{${2 * a_box2}} \\)<br>
	x<sub>1,2</sub> = \\( \\frac{${-b_box2} \\pm \\sqrt{${(b_box2 ** 2) + (-4 * a_box2 * c_box2)}}}{${2 * a_box2}} \\) <<< tidak ada penyelesaian,karena nilai akar selalu positif <br>
	x<sub>1,2</sub> = \\( \\frac{${-b_box2} \\pm ${khususmin_akar_diskriminan}i}{${2 * a_box2}} \\) <<< jika ingin dilanjutkan menggunakan bilangan imajiner<br>
	<br>
	x<sub>1</sub> = \\( \\frac{${-b_box2} + ${khususmin_akar_diskriminan}i}{${2 * a_box2}} \\) <br>
	x<sub>1</sub> = \\( ${-b_box2 / (2 * a_box2)} + ${khususmin_akar_diskriminan / (2 * a_box2)}i \\) 
	<br><br>
	x<sub>2</sub> = \\( \\frac{${-b_box2} - ${khususmin_akar_diskriminan}i}{${2 * a_box2}} \\)<br>
	x<sub>2</sub> = \\( ${(-b_box2 / (2 * a_box2))} + ${(-khususmin_akar_diskriminan / (2 * a_box2))}i \\)
	`
	MathJax.typeset();
	}
	else if(khususmin_diskriminan % khususmin_akar_diskriminan != 0 ){
			hasil_box2.innerHTML = 
	`
	x<sub>1,2</sub> = \\( \\frac{-b \\pm \\sqrt{(b^2 - 4ac))}}{2a} \\)<br>
	x<sub>1,2</sub> = \\( \\frac{-(${b_box2}) \\pm \\sqrt{(${b_box2})^2 - 4.(${a_box2}).(${c_box2})}}{2.(${a_box2})} \\)<br>
	x<sub>1,2</sub> = \\( \\frac{${-b_box2} \\pm \\sqrt{${b_box2 ** 2} + (${-4 * a_box2 * c_box2})}}{${2 * a_box2}} \\)<br>
	x<sub>1,2</sub> = \\( \\frac{${-b_box2} \\pm \\sqrt{${diskriminan}}}{${2 * a_box2}} \\) <<< tidak ada penyelesaian,karna nilai akar selalu positif<br>
	x<sub>1,2</sub> = \\( \\frac{${-b_box2} \\pm \\sqrt{${diskriminan}}}{${2 * a_box2}} \\) <<< jika tetap ingin dilanjutkan
	<br><br>
	x<sub>1</sub> = \\( \\frac{${-b_box2} + \\sqrt{${diskriminan}}}{${2 * a_box2}} \\)
	<br><br>
	x<sub>2</sub> = \\( \\frac{${-b_box2} - \\sqrt{${diskriminan}}}{${2 * a_box2}} \\)
	`
	MathJax.typeset();
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
