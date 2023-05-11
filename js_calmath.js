const hasil_box8 = document.getElementById('hasil_box8');
const banyakDataStatiska_box8 = document.getElementById("banyakDataStatiska_box8");
const kelas_box8 = document.getElementById("kelas_box8");
const panjang_box8 = document.getElementById("panjang_box8");

// make me global
let arrData_box8 = "";
let arrDataString_box8 = "";
let arrDataStringPlus_box8 = "";
let nilaiTerkecil_box8 = "";
let nilaiTerbesar_box8 = "";

function banyakData_box8(){
	let banyakData_box8 = Number(banyakDataStatiska_box8.value);

	arrData_box8 = [];
	while(banyakData_box8 > 0){
		let data_box8 = Number(prompt(`masukan data ke = ${banyakData_box8}`));
		if(data_box8 == ""){
			
		}else{
			arrData_box8.push(data_box8);
			banyakData_box8--;
		}
	}
	console.log(arrData_box8);

	arrDataString_box8 = "";
	for(let i = 0; i < arrData_box8.length; i++){
		arrDataString_box8 += arrData_box8[i];
		if((arrData_box8.length - 1) == i){

		}else{
			arrDataString_box8 += ", ";
		}
	}

	nilaiTerkecil_box8 = arrData_box8[0];
	for(let j = 1 ; j < arrData_box8.length ; j++){
		if(nilaiTerkecil_box8 > arrData_box8[j]){
			nilaiTerkecil_box8 = arrData_box8[j];
		}
	}
	nilaiTerbesar_box8 = arrData_box8[0];
	for(let j = 1 ; j < arrData_box8.length ; j++){
		if(nilaiTerbesar_box8 < arrData_box8[j]){
			nilaiTerbesar_box8 = arrData_box8[j];
		}
	}
	perhitungan = 
	`
	\\( Data = ${arrDataString_box8} \\)<br>
	\\( nilai terbesar = ${nilaiTerbesar_box8} \\)<br>
	\\( nilai terkecil = ${nilaiTerkecil_box8} \\)<br>

	`;
	perhitungan_replace = perhitungan.replace(/[+] -/g, "- ").replace(/- [+]/g, "- ").replace(/- -/g, "+ ").replace(/ 1x/g, "x").replace(/ -1x/g, "-x").replace(/ 0x [+]/g, "").replace(/ 0x -/g, "").replace(/ 0x<sup>2<[/]sup> [+]/g, "").replace(/ 0x<sup>2<[/]sup> -/g, "").replace(/ 1a/g, "a").replace(/ -1a/g, "-a").replace(/ 0a [+]/g, "").replace(/ 0a -/g, "").replace(/ 1b/g, "b").replace(/ -1b/g, "-b").replace(/ 0b [+]/g, "").replace(/ 0b -/g, "").replace(/ 1c/g, "c").replace(/ -1c/g, "-c").replace(/ 0c [+]/g, "").replace(/ 0c -/g, "").replace(/[+] 0 /g, "").replace(/- 0 /g, "");
	hasil_box8.innerHTML = perhitungan_replace;
	MathJax.typeset();
}
function run_box8(){
	let banyakData_box8 = Number(banyakDataStatiska_box8.value);
	let panjangInt_box8 = Number(panjang_box8.value);

	let arrayFrekuensi = [];
	for(let i = nilaiTerkecil_box8 ; i < nilaiTerbesar_box8 ; i += panjangInt_box8){
		let banyakFrekuensi = 0;
		for(let j = 0 ; j < arrData_box8.length ; j++){
			if(arrData_box8[j] >= i && arrData_box8[j] <= (i + (panjangInt_box8 - 1))){
				banyakFrekuensi++;
			}
		}
		arrayFrekuensi.push(banyakFrekuensi);
	}
	console.log(arrData_box8 + "qweqw");
	console.log(nilaiTerbesar_box8);
	console.log(nilaiTerkecil_box8);
	console.log(arrayFrekuensi);
	arrFrekuensiString_box8 = "";
	for(let i = 0; i < arrayFrekuensi.length; i++){
		arrFrekuensiString_box8 += arrayFrekuensi[i];
		if((arrayFrekuensi.length - 1) == i){

		}else{
			arrFrekuensiString_box8 += ", ";
		}
	}
	perhitungan = 
	`
	\\( Data frekuensi = ${arrFrekuensiString_box8} \\)<br>

	`;
	perhitungan_replace = perhitungan.replace(/[+] -/g, "- ").replace(/- [+]/g, "- ").replace(/- -/g, "+ ").replace(/ 1x/g, "x").replace(/ -1x/g, "-x").replace(/ 0x [+]/g, "").replace(/ 0x -/g, "").replace(/ 0x<sup>2<[/]sup> [+]/g, "").replace(/ 0x<sup>2<[/]sup> -/g, "").replace(/ 1a/g, "a").replace(/ -1a/g, "-a").replace(/ 0a [+]/g, "").replace(/ 0a -/g, "").replace(/ 1b/g, "b").replace(/ -1b/g, "-b").replace(/ 0b [+]/g, "").replace(/ 0b -/g, "").replace(/ 1c/g, "c").replace(/ -1c/g, "-c").replace(/ 0c [+]/g, "").replace(/ 0c -/g, "").replace(/[+] 0 /g, "").replace(/- 0 /g, "");
	hasil_box8.innerHTML += perhitungan_replace;
	MathJax.typeset();
}
////////////////////////////////////////////////////////////////////////////////////////////
const hasil_box7 = document.getElementById('hasil_box7');
const banyakDataStatiska_box7 = document.getElementById("banyakDataStatiska");

// make me global
let arrData_box7 = "";
let arrDataString_box7 = "";
let arrDataStringPlus_box7 = "";

function banyakData_box7(){
	let banyakData_box7 = Number(banyakDataStatiska_box7.value);

	arrData_box7 = [];
	while(banyakData_box7 > 0){
		let data_box7 = Number(prompt(`masukan data ke = ${banyakData_box7}`));
		if(data_box7 == ""){
			
		}else{
			arrData_box7.push(data_box7);
			banyakData_box7--;
		}
	}
	console.log(arrData_box7);

	arrDataString_box7 = "";
	for(let i = 0; i < arrData_box7.length; i++){
		arrDataString_box7 += arrData_box7[i];
		if((arrData_box7.length - 1) == i){

		}else{
			arrDataString_box7 += ", ";
		}
	}

	let nilaiTerkecil_box7 = arrData_box7[0];
	for(let j = 1 ; j < arrData_box7.length ; j++){
		if(nilaiTerkecil_box7 > arrData_box7[j]){
			nilaiTerkecil_box7 = arrData_box7[j];
		}
	}
	let nilaiTerbesar_box7 = arrData_box7[0];
	for(let j = 1 ; j < arrData_box7.length ; j++){
		if(nilaiTerbesar_box7 < arrData_box7[j]){
			nilaiTerbesar_box7 = arrData_box7[j];
		}
	}
	perhitungan = 
	`
	\\( Data = ${arrDataString_box7} \\)<br>
	\\( nilai terbesar = ${nilaiTerbesar_box7} \\)<br>
	\\( nilai terkecil = ${nilaiTerkecil_box7} \\)<br>

	`;
	perhitungan_replace = perhitungan.replace(/[+] -/g, "- ").replace(/- [+]/g, "- ").replace(/- -/g, "+ ").replace(/ 1x/g, "x").replace(/ -1x/g, "-x").replace(/ 0x [+]/g, "").replace(/ 0x -/g, "").replace(/ 0x<sup>2<[/]sup> [+]/g, "").replace(/ 0x<sup>2<[/]sup> -/g, "").replace(/ 1a/g, "a").replace(/ -1a/g, "-a").replace(/ 0a [+]/g, "").replace(/ 0a -/g, "").replace(/ 1b/g, "b").replace(/ -1b/g, "-b").replace(/ 0b [+]/g, "").replace(/ 0b -/g, "").replace(/ 1c/g, "c").replace(/ -1c/g, "-c").replace(/ 0c [+]/g, "").replace(/ 0c -/g, "").replace(/[+] 0 /g, "").replace(/- 0 /g, "");
	hasil_box7.innerHTML = perhitungan_replace;
	MathJax.typeset();
}
function mean_box7(){
	console.log(arrData_box7);
	console.log(arrDataString_box7);

	let arrData2_box7 = arrData_box7.reduce( (t, v) => { return t + v;});
	console.log(arrData2_box7);

	for(let i = 0; i < arrData_box7.length; i++){
		arrDataStringPlus_box7 += arrData_box7[i];
		if((arrData_box7.length - 1) == i){

		}else{
			arrDataStringPlus_box7 += " + ";
		}
	}

	perhitungan = 
	`
	\\( mean = \\frac{${arrDataStringPlus_box7}}{${arrData_box7.length}} \\)<br>
	\\( mean = \\frac{${arrData2_box7}}{${arrData_box7.length}} \\)<br>
	\\( mean = ${arrData2_box7 / arrData_box7.length} \\)<br>
	`;
	perhitungan_replace = perhitungan.replace(/[+] -/g, "- ").replace(/- [+]/g, "- ").replace(/- -/g, "+ ").replace(/ 1x/g, "x").replace(/ -1x/g, "-x").replace(/ 0x [+]/g, "").replace(/ 0x -/g, "").replace(/ 0x<sup>2<[/]sup> [+]/g, "").replace(/ 0x<sup>2<[/]sup> -/g, "").replace(/ 1a/g, "a").replace(/ -1a/g, "-a").replace(/ 0a [+]/g, "").replace(/ 0a -/g, "").replace(/ 1b/g, "b").replace(/ -1b/g, "-b").replace(/ 0b [+]/g, "").replace(/ 0b -/g, "").replace(/ 1c/g, "c").replace(/ -1c/g, "-c").replace(/ 0c [+]/g, "").replace(/ 0c -/g, "").replace(/[+] 0 /g, "").replace(/- 0 /g, "");
	hasil_box7.innerHTML += perhitungan_replace;
	MathJax.typeset();
}
function median_box7(){
	console.log(arrData_box7);
	console.log(arrDataString_box7);

	let arrData2_box7 = arrData_box7;
	arrData2_box7.sort(function(a, b){return a - b});
	console.log(arrData2_box7);

	let nilaiTengah_box7 = "";
	let median_box7 = "";
	if(arrData2_box7.length % 2 == 0){
		let temp1_box7 = arrData2_box7.length / 2;
		let temp2_box7 = (arrData2_box7.length / 2 ) - 1;
		let nilaiMedian_box7 = (arrData2_box7[temp1_box7] + arrData2_box7[temp2_box7]) / 2;
		console.log(temp1_box7);
		console.log(temp2_box7);
		console.log(nilaiMedian_box7);
		nilaiTengah_box7 += `${temp1_box7 + 1} and ${temp2_box7 + 1}`;
		median_box7 = nilaiMedian_box7;
	}else{
		let temp1_box7 = (arrData2_box7.length + 1) / 2 ;
		let temp2arr_box7 = arrData2_box7[temp1_box7 - 1];
		console.log(temp1_box7);
		console.log(temp2arr_box7);
		nilaiTengah_box7 += `${temp1_box7}`;
		median_box7 = temp2arr_box7;
	}

	perhitungan = 
	`
	\\( median = ${arrData2_box7} \\)<br>
	\\( *nilai tengah = ${nilaiTengah_box7} \\)<br>
	\\( median = ${median_box7} \\)<br>
	`;
	perhitungan_replace = perhitungan.replace(/[+] -/g, "- ").replace(/- [+]/g, "- ").replace(/- -/g, "+ ").replace(/ 1x/g, "x").replace(/ -1x/g, "-x").replace(/ 0x [+]/g, "").replace(/ 0x -/g, "").replace(/ 0x<sup>2<[/]sup> [+]/g, "").replace(/ 0x<sup>2<[/]sup> -/g, "").replace(/ 1a/g, "a").replace(/ -1a/g, "-a").replace(/ 0a [+]/g, "").replace(/ 0a -/g, "").replace(/ 1b/g, "b").replace(/ -1b/g, "-b").replace(/ 0b [+]/g, "").replace(/ 0b -/g, "").replace(/ 1c/g, "c").replace(/ -1c/g, "-c").replace(/ 0c [+]/g, "").replace(/ 0c -/g, "").replace(/[+] 0 /g, "").replace(/- 0 /g, "");
	hasil_box7.innerHTML += perhitungan_replace;
	MathJax.typeset();
}
function modus_box7(){
	console.log(arrData_box7);
	console.log(arrDataString_box7);

	let arrData2_box7 = arrData_box7;
	arrData2_box7.sort(function(a, b){return a - b});
	console.log(arrData2_box7);

	let banyakKemunculanModusArr_box7 = [];
	let udhPernahMuncul_box7 = new Set([]);

	for (let i = 0; i < arrData2_box7.length; i++) {
		let banyakKemunculan_box7 = 0;
		if(udhPernahMuncul_box7.has(arrData2_box7[i])){

		}else{
			for (let j = 0; j < arrData2_box7.length; j++) {
				if (arrData2_box7[i] === arrData2_box7[j]) {
					banyakKemunculan_box7++;
					udhPernahMuncul_box7.add(arrData2_box7[j]);
					// arrModus.push(arr[i]);
				} else {
			
				}
			}
			banyakKemunculanModusArr_box7.push(banyakKemunculan_box7);
		}
	}
	// 2,4,4,3,5
	let text_box7 = "";
	let counter_box7 = 0;
	for (const x of udhPernahMuncul_box7.values()) {
		text_box7 += `${x} = ${banyakKemunculanModusArr_box7[counter_box7]}, `;
		counter_box7++;
	}
	
	let nilaiModusTerbanyak_box7 = banyakKemunculanModusArr_box7[0];
	for(let i = 1 ; i < banyakKemunculanModusArr_box7 ; i++){
		if(banyakKemunculanModusArr_box7[i] > nilaiModusTerbanyak_box7){
			nilaiModusTerbanyak_box7 = banyakKemunculanModusArr_box7[i];
		}
	}

	perhitungan = 
	`
	\\( modus = ${text_box7} \\)<br>
	`;
	perhitungan_replace = perhitungan.replace(/[+] -/g, "- ").replace(/- [+]/g, "- ").replace(/- -/g, "+ ").replace(/ 1x/g, "x").replace(/ -1x/g, "-x").replace(/ 0x [+]/g, "").replace(/ 0x -/g, "").replace(/ 0x<sup>2<[/]sup> [+]/g, "").replace(/ 0x<sup>2<[/]sup> -/g, "").replace(/ 1a/g, "a").replace(/ -1a/g, "-a").replace(/ 0a [+]/g, "").replace(/ 0a -/g, "").replace(/ 1b/g, "b").replace(/ -1b/g, "-b").replace(/ 0b [+]/g, "").replace(/ 0b -/g, "").replace(/ 1c/g, "c").replace(/ -1c/g, "-c").replace(/ 0c [+]/g, "").replace(/ 0c -/g, "").replace(/[+] 0 /g, "").replace(/- 0 /g, "");
	hasil_box7.innerHTML += perhitungan_replace;
	MathJax.typeset();
}
////////////////////////////////////////////////////////////////
const hasil_box6 = document.getElementById('hasil_box6');
// 3 titik
const x1_3titik_box_box6 = document.getElementById("input_x1_box_titik3_box6");
const fx1_3titik_box_box6 = document.getElementById("input_fx1_box_titik3_box6");
const x2_3titik_box_box6 = document.getElementById("input_x2_box_titik3_box6");
const fx2_3titik_box_box6 = document.getElementById("input_fx2_box_titik3_box6");
const x3_3titik_box_box6 = document.getElementById("input_x3_box_titik3_box6");
const fx3_3titik_box_box6 = document.getElementById("input_fx3_box_titik3_box6");
// 2 sumbu x dan  1 lainya
const x1_box_box6 = document.getElementById("input_x1_box6");
const x1_0_box_box6 = document.getElementById("input_x1_0_box6");
const x2_box_box6 = document.getElementById("input_x2_box6");
const x2_0_box_box6 = document.getElementById("input_x2_0_box6");
const x_box_box6 = document.getElementById("input_x_box6");
const y_box_box6 = document.getElementById("input_y_box6");
// titik puncak
const x_puncak_box_box6 = document.getElementById("input_x_puncak_box6");
const y_puncak_box_box6 = document.getElementById("input_y_puncak_box6");
const xp_puncak_box_box6 = document.getElementById("input_xp_puncak_box6");
const yp_puncak_box_box6 = document.getElementById("input_yp_puncak_box6");

// kotak show/hidden box
const div_titik3_box6 = document.getElementById("titik3_div_box6");
const div_2sumbu_box6 = document.getElementById("titik_2sumbu_x_dan_1titik_lainya_box6");
const div_puncak_box6 = document.getElementById("titik_puncak_dan_1titik_lainya_box6");
//default
div_titik3_box6.hidden = false;
div_2sumbu_box6.hidden = true;
div_puncak_box6.hidden = true;

function titik3_box6(){
	div_titik3_box6.hidden = false;
	div_2sumbu_box6.hidden = true;
	div_puncak_box6.hidden = true;
	hasil_box6.innerHTML = "";
}
function titik2x_box6(){
	div_titik3_box6.hidden = true
	div_2sumbu_box6.hidden = false;
	div_puncak_box6.hidden = true;
	hasil_box6.innerHTML = "";
}
function titikpuncak_box6(){
	div_titik3_box6.hidden = true;
	div_2sumbu_box6.hidden = true;
	div_puncak_box6.hidden = false;	
	hasil_box6.innerHTML = "";
}

function showhasil_3titik_box6(){
	let x1 = Number(x1_3titik_box_box6.value);
	let fx1 = Number(fx1_3titik_box_box6.value);
	let x2 = Number(x2_3titik_box_box6.value);
	let fx2 = Number(fx2_3titik_box_box6.value);
	let x3 = Number(x3_3titik_box_box6.value);
	let fx3 = Number(fx3_3titik_box_box6.value);

	if (isNaN(x1) || isNaN(fx1) || isNaN(x2) || isNaN(fx2) || isNaN(x3) || isNaN(fx3)) {
		hasil_box6.innerHTML = "angka!";
		return;
	}

	if (x1 == 0 && x2 == 0 || x1 == 0 && x3 == 0 || x2 == 0 && x3 == 0 || x1 == 0 && x2 == 0 && x3 == 0) {
		hasil_box6.innerHTML = "yang berpotongan dengan sumbu y tidak mungkin ada 2 atau lebih!";
		return;
	}else if (fx1 == 0 && fx2 == 0 && fx3 == 0){
		hasil_box6.innerHTML = "yang berpotongan dengan sumbu x tidak mungkin ada 3!"
		return;
	}
// 
	b_atas = Math.abs((x2) + (-x1));
	b_bawah = Math.abs(x3 + (-x1));
	if ( Math.abs(b_atas) > 0) {
		for (let i = 2; i <= Math.abs(b_atas); i++) {
			if (b_atas % i == 0 && b_bawah % i == 0) {
				b_atas /= i;
				b_bawah /= i;
				i = 1;
			}
		}
	}
	if (b_atas % b_bawah == 0 && b_bawah % b_atas == 0) {
		b_atas = 1;
		b_bawah = 1;
	}
	a = (((fx2 - fx1) * b_bawah) - ((fx3 - fx1) * b_atas)) / ((((x2 ** 2) + (-(x1 ** 2))) * b_bawah) - (((x3 ** 2) + (-(x1 ** 2))) * b_atas));
	b = ((fx2 - fx1) - (((x2 ** 2) + (-(x1 ** 2))) * a)) / ((x2) + (-x1));
	if ((((x2) + (-x1)) * b_bawah) - ((x3 + (-x1)) * b_atas) != 0) {
		a = (((fx2 - fx1) * b_bawah) + ((fx3 - fx1) * b_atas)) / ((((x2 ** 2) + (-(x1 ** 2))) * b_bawah) + (((x3 ** 2) + (-(x1 ** 2))) * b_atas));
		b = ((fx2 - fx1) - (((x2 ** 2) + (-(x1 ** 2))) * a)) / ((x2) + (-x1));
	}
	c = fx1 - (((x1 ** 2) * a) + (x1 * b));
		//variabel *jika* puncak 
		d = ((b ** 2) - (4 * a * c));
		px = (-b / (2 * a));
		py = (-d / (4 * a));
	function proses_eliminasi_box6_bagian_3titik(){
		if ((((x2) + (-x1)) * b_bawah) - ((x3 + (-x1)) * b_atas) == 0) {
			return `\\( ${(((x2 ** 2) + (-(x1 ** 2))) * b_bawah) - (((x3 ** 2) + (-(x1 ** 2))) * b_atas)}a = ${((fx2 - fx1) * b_bawah) - ((fx3 - fx1) * b_atas)} \\)<br>
			\\( a = ${(((fx2 - fx1) * b_bawah) - ((fx3 - fx1) * b_atas)) / ((((x2 ** 2) + (-(x1 ** 2))) * b_bawah) - (((x3 ** 2) + (-(x1 ** 2))) * b_atas))} \\)<br>
			`;
		}else{
			return `\\( ${(((x2 ** 2) + (-(x1 ** 2))) * b_bawah) + (((x3 ** 2) + (-(x1 ** 2))) * b_atas)}a = ${((fx2 - fx1) * b_bawah) + ((fx3 - fx1) * b_atas)} \\)<br>
			\\( a = ${(((fx2 - fx1) * b_bawah) + ((fx3 - fx1) * b_atas)) / ((((x2 ** 2) + (-(x1 ** 2))) * b_bawah) + (((x3 ** 2) + (-(x1 ** 2))) * b_atas))} \\)<br>
			`;
		}
	}

	perhitungan = 
	`
	\\( f(x) = ax^2 + bx + c = 0 \\)<br>
	\\( f(${x1}) = a(${x1})^2 + b(${x1}) + c = ${fx1} \\)<br>
	\\( // ${x1 ** 2}a + ${x1}b + c = ${fx1} \\)<br>
	\\( f(${x2}) = a(${x2})^2 + b(${x2}) + c = ${fx2} \\)<br>
	\\( // ${x2 ** 2}a + ${x2}b + c = ${fx2} \\)<br>
	\\( f(${x3}) = a(${x3})^2 + b(${x3}) + c = ${fx3} \\)<br>
	\\( // ${x3 ** 2}a + ${x3}b + c = ${fx3} \\)<br><br>
	\\( ${x1 ** 2}a + ${x1}b + c = ${fx1} <<< persamaan-(1)\\)<br>
	\\( ${x2 ** 2}a + ${x2}b + c = ${fx2} <<< persamaan-(2)\\)<br>
	\\( ${x3 ** 2}a + ${x3}b + c = ${fx3} <<< persamaan-(3)\\)<br><br>
	subtitusi persamaan (1) a ke persamaan (2)<br>
	\\( ${x1 ** 2}a + ${x1}b + c = ${fx1} \\)<br>
	\\( c = ${fx1} + ${-(x1 ** 2)}a + ${-x1}b \\)<br>	
	\\( ${x2 ** 2}a + ${x2}b + c = ${fx2} \\)<br>
	\\( ${x2 ** 2}a + ${x2}b + (${fx1} + ${-(x1 ** 2)}a + ${-x1}b) = ${fx2} \\)<br>	
	\\( ${x2 ** 2}a + ${x2}b + ${fx1} + ${-(x1 ** 2)}a + ${-x1}b = ${fx2} \\)<br>	
	\\( ${(x2 ** 2) + (-(x1 ** 2))}a + ${(x2) + (-x1)}b = ${fx2 - fx1} <<< persamaan-(4) \\)<br>	
	subtitusi persamaan (1) a ke persamaan (3)<br>
	\\( ${x1 ** 2}a + ${x1}b + c = ${fx1} \\)<br>
	\\( c = ${fx1} + ${-(x1 ** 2)}a + ${-x1}b \\)<br>
	\\( ${x3 ** 2}a + ${x3}b + c = ${fx3} \\)<br>
	\\( ${x3 ** 2}a + ${x3}b + (${fx1} + ${-(x1 ** 2)}a + ${-x1}b) = ${fx3} \\)<br>
	\\( ${x3 ** 2}a + ${x3}b + ${fx1} + ${-(x1 ** 2)}a + ${-x1}b = ${fx3} \\)<br>
	\\( ${(x3 ** 2) + (-(x1 ** 2))}a + ${x3 + -x1}b = ${fx3 - fx1} <<< persamaan-(5) \\)<br>
	eliminasi persamaan (4) dan persamaan (5)<br>
	\\( ${(x2 ** 2) + (-(x1 ** 2))}a + ${x2 + (-x1)}b = ${fx2 - fx1} |x ${b_bawah}| ${((x2 ** 2) + (-(x1 ** 2))) * b_bawah}a + ${((x2) + (-x1)) * b_bawah}b = ${(fx2 - fx1) * b_bawah} \\)<br>
	\\( ${(x3 ** 2) + (-(x1 ** 2))}a + ${x3 + (-x1)}b = ${fx3 - fx1} |x ${b_atas}| ${((x3 ** 2) + (-(x1 ** 2))) * b_atas}a + ${(x3 + (-x1)) * b_atas}b = ${(fx3 - fx1) * b_atas}  \\)<br>
	\\( ${((x2 ** 2) + (-(x1 ** 2))) * b_bawah}a + ${((x2) + (-x1)) * b_bawah}b = ${(fx2 - fx1) * b_bawah} \\)<br>
	\\( ${((x3 ** 2) + (-(x1 ** 2))) * b_atas}a + ${(x3 + (-x1)) * b_atas}b = ${(fx3 - fx1) * b_atas} \\)<br>
	${proses_eliminasi_box6_bagian_3titik()}
	subtitusi a = ${a} ke persamaan (4)<br>
	\\( ${(x2 ** 2) + (-(x1 ** 2))}(${a}) + ${(x2) + (-x1)}b = ${fx2 - fx1} \\)<br>
	\\( ${((x2 ** 2) + (-(x1 ** 2))) * a} + ${(x2) + (-x1)}b = ${fx2 - fx1} \\)<br>
	\\( ${(x2) + (-x1)}b = ${(fx2 - fx1) - (((x2 ** 2) + (-(x1 ** 2))) * a)} \\)<br>
	\\( b = ${((fx2 - fx1) - (((x2 ** 2) + (-(x1 ** 2))) * a)) / ((x2) + (-x1))} \\)<br>
	subtitusi a = ${a} dan b = ${b} ke persamaan (1)<br>
	\\( ${x1 ** 2}a + ${x1}b + c = ${fx1} \\)<br>
	\\( ${x1 ** 2}(${a}) + ${x1}(${b}) + c = ${fx1} \\)<br>
	\\( ${(x1 ** 2) * a} + ${x1 * b} + c = ${fx1} \\)<br>
	\\( ${((x1 ** 2) * a) + (x1 * b)} + c = ${fx1} \\)<br>
	\\( c = ${fx1 - (((x1 ** 2) * a) + (x1 * b))} \\)<br>
	jadi, persamaan fungsi kuadratnya adalah f(x) = ${a}x<sup>2</sup> + ${b}x + ${c} 
	`;
	perhitungan_replace = perhitungan.replace(/[+] -/g, "- ").replace(/- [+]/g, "- ").replace(/- -/g, "+ ").replace(/ 1x/g, "x").replace(/ -1x/g, "-x").replace(/ 0x [+]/g, "").replace(/ 0x -/g, "").replace(/ 0x<sup>2<[/]sup> [+]/g, "").replace(/ 0x<sup>2<[/]sup> -/g, "").replace(/ 1a/g, "a").replace(/ -1a/g, "-a").replace(/ 0a [+]/g, "").replace(/ 0a -/g, "").replace(/ 1b/g, "b").replace(/ -1b/g, "-b").replace(/ 0b [+]/g, "").replace(/ 0b -/g, "").replace(/ 1c/g, "c").replace(/ -1c/g, "-c").replace(/ 0c [+]/g, "").replace(/ 0c -/g, "").replace(/[+] 0 /g, "").replace(/- 0 /g, "");
	hasil_box6.innerHTML = perhitungan_replace;
	MathJax.typeset();

}

function showhasil_2titikx_dan_1titik_lainya_box6(){
	let x1 = Number(x1_box_box6.value);
	let x1_0 = Number(x1_0_box_box6.value);
	let x2 = Number(x2_box_box6.value);
	let x2_0 = Number(x2_0_box_box6.value);
	let x = Number(x_box_box6.value);
	let y = Number(y_box_box6.value);
	let a = y/((x-x1)*(x-x2));

	if (isNaN(x1) || isNaN(x1_0) || isNaN(x2) || isNaN(x2_0) || isNaN(x) || isNaN(y)) {
		hasil_box6.innerHTML = "angka!";
		return;
	}
	if (x1_0 != 0 || x2_0 != 0) {
		alert(`keduanya,harus nol bukan (${x1_0}) atau (${x2_0})`);
		hasil_box6.innerHTML = "";
		return;
	}
	if (y % ((x-x1)*(x-x2)) == 0) {
		perhitungan = 
		`
		\\( (x1, 0) , (x2, 0) , (x, y) \\)<br>
		\\( (${x1}, ${x1_0}) , (${x2}, ${x2_0}) , (${x}, ${y}) \\)<br><br>
		\\( y = a(x - x1)(x - x2) \\)<br>
		\\( ${y} = a(${x} - ${x1})(${x} - ${x2}) \\)<br>
		\\( ${y} = a(${x - x1})(${x - x2}) \\)<br>
		\\( ${y} = ${(x - x1) * (x - x2)}a \\)<br>
		\\( a = \\frac{${y}}{${(x - x1) * (x - x2)}} \\)<br>
		\\( a = ${y / ((x - x1) * (x - x2))} \\)<br><br>
		\\( y = a(x - x1)(x - x2) \\)<br>
		\\( y = ${a}(x + ${-x1})(x + ${-x2}) \\)<br>
		\\( y = ${a}(x^2 + ${-x2}x + ${-x1}x + ${-x1 * -x2}) \\)<br>
		\\( y = ${a}(x^2 + ${-x2 + -x1}x + ${-x1 * -x2}) \\)<br>
		\\( y = ${a}x^2 + ${a * (-x2 + - x1)}x + ${a * (-x1 * -x2)} \\)
		`;
		perhitungan_replace = perhitungan.replace(/[+] -/g, "- ").replace(/- [+]/g, "- ").replace(/- -/g, "+ ").replace(/ 1x/g, "x").replace(/ -1x/g, "-x").replace(/ 0x [+]/g, "").replace(/ 0x -/g, "").replace(/ 0x<sup>2<[/]sup> [+]/g, "").replace(/ 0x<sup>2<[/]sup> -/g, "").replace(/ 1a/g, "a").replace(/ -1a/g, "-a").replace(/ 0a [+]/g, "").replace(/ 0a -/g, "").replace(/ 1b/g, "b").replace(/ -1b/g, "-b").replace(/ 0b [+]/g, "").replace(/ 0b -/g, "").replace(/ 1c/g, "c").replace(/ -1c/g, "-c").replace(/ 0c [+]/g, "").replace(/ 0c -/g, "").replace(/[+] 0 /g, "").replace(/- 0 /g, "");
		hasil_box6.innerHTML = perhitungan_replace;
		MathJax.typeset();
	}else{
		a_atas = y;
		a_bawah = ((x-x1)*(x-x2));
		if (Math.abs(a_atas) > 0) {
			for (let i = 2; i <= Math.abs(a_atas); i++) {
				if (a_atas % i == 0 && a_bawah % i == 0) {
					a_atas /= i;
					a_bawah /= i;
					i = 1;
				}
			}
		}
		let a = `\\frac{${a_atas}}{${a_bawah}}`;
		perhitungan = 
		`
		\\( (x1, 0) , (x2, 0) , (x, y) \\)<br>
		\\( (${x1}, ${x1_0}) , (${x2}, ${x2_0}) , (${x}, ${y}) \\)<br><br>
		\\( y = a(x - x1)(x - x2) \\)<br>
		\\( ${y} = a(${x} - ${x1})(${x} - ${x2}) \\)<br>
		\\( ${y} = a(${x - x1})(${x - x2}) \\)<br>
		\\( ${y} = ${(x - x1) * (x - x2)}a \\)<br>
		\\( a = \\frac{${y}}{${(x - x1) * (x - x2)}} \\)<br>
		\\( a = ${a} \\)<br><br>
		\\( y = a(x - x1)(x - x2) \\)<br>
		\\( y = ${a}(x + ${-x1})(x + ${-x2}) \\)<br>
		\\( y = ${a}(x^2 + ${-x2}x + ${-x1}x + ${-x1 * -x2}) \\)<br>
		\\( y = ${a}(x^2 + ${(-x2) + (-x1)}x + ${-x1 * -x2}) \\)<br>
		\\( y = ${a}x^2 + \\frac{${a_atas * (-x2 + -x1)}}{${a_bawah}}x + \\frac{${a_atas * (-x1 * -x2)}}{${a_bawah}} \\)<br>
		\\( y = ${a_atas}x^2 + ${a_atas * (-x2 + -x1)}x + ${a_atas * (-x1 * -x2)} \\)
		`;
		perhitungan_replace = perhitungan.replace(/[+] -/g, "- ").replace(/- [+]/g, "- ").replace(/- -/g, "+ ").replace(/ 1x/g, "x").replace(/ -1x/g, "-x").replace(/ 0x [+]/g, "").replace(/ 0x -/g, "").replace(/ 0x<sup>2<[/]sup> [+]/g, "").replace(/ 0x<sup>2<[/]sup> -/g, "").replace(/ 1a/g, "a").replace(/ -1a/g, "-a").replace(/ 0a [+]/g, "").replace(/ 0a -/g, "").replace(/ 1b/g, "b").replace(/ -1b/g, "-b").replace(/ 0b [+]/g, "").replace(/ 0b -/g, "").replace(/ 1c/g, "c").replace(/ -1c/g, "-c").replace(/ 0c [+]/g, "").replace(/ 0c -/g, "").replace(/[+] 0 /g, "").replace(/- 0 /g, "");
		hasil_box6.innerHTML = perhitungan_replace;
		MathJax.typeset();
	}
}

function showhasil_titik_puncak_box6(){
	let x = Number(x_puncak_box_box6.value);
	let y = Number(y_puncak_box_box6.value);
	let xp = Number(xp_puncak_box_box6.value);
	let yp = Number(yp_puncak_box_box6.value);

	if (isNaN(x) || isNaN(y) || isNaN(xp) || isNaN(yp)) {
		hasil_box6.innerHTML = "angka!";
		return;
	}

	let a_atas = (y-yp);
	let a_bawah = ((x-xp) ** 2);

	if (a_atas % a_bawah != 0) {
		if (Math.abs(a_atas) > 0) {
			for (let i = 2; i <= Math.abs(a_atas); i++) {
				if (a_atas % i == 0 && a_bawah % i == 0) {
					a_atas /= i;
					a_bawah /= i;
					i = 1;
				}
			}
		}
		let a =`\\frac{${a_atas}}{${a_bawah}}`;

		perhitungan =
		`
		\\( (x, y),(xp, yp) \\)<br>
		\\( (${x}, ${y}),(${xp}, ${yp}) \\)<br>
		\\( y = a(x - xp)^2 + yp \\)<br>
		\\( ${y} = a(${x} - ${xp})^2 + ${yp} \\)<br>
		\\( ${y} = a(${x - xp})^2 + ${yp} \\)<br>
		\\( ${y} = a${(x - xp) ** 2} + ${yp} \\)<br>
		\\( ${(x-xp) ** 2} a = ${y-yp} \\)<br>
		\\( a = \\frac{${y-yp}}{${(x-xp) ** 2}} \\)<br>
		\\( a = ${a} \\)<br><br>
		\\( y = a(x-xp)^2 + yp \\)<br>
		\\( y = ${a}(x - ${xp})^2 + ${yp} \\)<br>
		\\( y = ${a}(x - ${xp})(x - ${xp}) + ${yp} \\)<br>
		\\( y = ${a}(x^2 + ${-xp}x + ${-xp}x + ${-xp * -xp}) + ${yp} \\)<br>
		\\( y = ${a}(x^2 + ${(-xp) + (-xp)}x + ${-xp * -xp}) + ${yp} \\)<br>
		\\( y = ${a}x^2 + \\frac{${a_atas * ((-xp)+(-xp))}}{${a_bawah}}x + \\frac{${a_atas * (-xp * -xp)}}{${a_bawah}} + ${yp} \\)<br>
		\\( y = ${a}x^2 + \\frac{${a_atas * ((-xp)+(-xp))}}{${a_bawah}}x + \\frac{${a_atas * (-xp * -xp)}}{${a_bawah}} + \\frac{${yp}}{1} \\)<br>
		\\( y = ${a}x^2 + \\frac{${a_atas * ((-xp)+(-xp))}}{${a_bawah}}x + \\frac{${a_atas * (-xp * -xp)}}{${a_bawah}} + \\frac{${yp * (a_bawah)}}{${a_bawah}} \\)<br>
		\\( y = ${a}x^2 + \\frac{${a_atas * ((-xp)+(-xp))}}{${a_bawah}}x + \\frac{${(a_atas * (-xp * -xp)) + (yp * (a_bawah))}}{${a_bawah}} \\)<br>
		\\( y = ${a_atas}x^2 + ${a_atas * ((-xp)+(-xp))}x + ${(a_atas * (-xp * -xp)) + (yp * (a_bawah))} \\)
		`;
		perhitungan_replace = perhitungan.replace(/[+] -/g, "- ").replace(/- [+]/g, "- ").replace(/- -/g, "+ ").replace(/ 1x/g, "x").replace(/ -1x/g, "-x").replace(/ 0x [+]/g, "").replace(/ 0x -/g, "").replace(/ 0x<sup>2<[/]sup> [+]/g, "").replace(/ 0x<sup>2<[/]sup> -/g, "").replace(/ 1a/g, "a").replace(/ -1a/g, "-a").replace(/ 0a [+]/g, "").replace(/ 0a -/g, "").replace(/ 1b/g, "b").replace(/ -1b/g, "-b").replace(/ 0b [+]/g, "").replace(/ 0b -/g, "").replace(/ 1c/g, "c").replace(/ -1c/g, "-c").replace(/ 0c [+]/g, "").replace(/ 0c -/g, "").replace(/[+] 0 /g, "").replace(/- 0 /g, "");
		hasil_box6.innerHTML = perhitungan_replace;
		MathJax.typeset();	
	}else{
		let a = (a_atas / a_bawah);

		perhitungan =
		`
		\\( (x, y),(xp, yp) \\)<br>
		\\( (${x}, ${y}),(${xp}, ${yp}) \\)<br>
		\\( y = a(x - xp)^2 + yp \\)<br>
		\\( ${y} = a(${x} - ${xp})^2 + ${yp} \\)<br>
		\\( ${y} = a(${x - xp})^2 + ${yp} \\)<br>
		\\( ${y} = a${(x - xp) ** 2} + ${yp} \\)<br>
		\\( ${(x-xp) ** 2}a = ${y-yp} \\)<br>
		\\( a = \\frac{${y - yp}}{${(x - xp) ** 2}} \\)<br>
		\\( a = ${a} \\)<br><br>
		\\( y = a(x - xp)^2 + yp \\)<br>
		\\( y = ${a}(x - ${xp})^2+${yp} \\)<br>
		\\( y = ${a}(x - ${xp})(x - ${xp}) + ${yp} \\)<br>
		\\( y = ${a}(x^2 + ${-xp}x + ${-xp}x + ${-xp * -xp}) + ${yp} \\)<br>
		\\( y = ${a}(x^2 + ${(-xp) + (-xp)}x + ${-xp * -xp}) + ${yp} \\)<br>
		\\( y = ${a}x^2 + ${a * ((-xp) + (-xp))}x + ${a * ((-xp * -xp))} + ${yp} \\)<br>
		\\( y = ${a}x^2 + ${a * ((-xp) + (-xp))}x + ${(a * ((-xp) * -xp)) + yp} \\)<br>
		`;
		perhitungan_replace = perhitungan.replace(/[+] -/g, "- ").replace(/- [+]/g, "- ").replace(/- -/g, "+ ").replace(/ 1x/g, "x").replace(/ -1x/g, "-x").replace(/ 0x [+]/g, "").replace(/ 0x -/g, "").replace(/ 0x<sup>2<[/]sup> [+]/g, "").replace(/ 0x<sup>2<[/]sup> -/g, "").replace(/ 1a/g, "a").replace(/ -1a/g, "-a").replace(/ 0a [+]/g, "").replace(/ 0a -/g, "").replace(/ 1b/g, "b").replace(/ -1b/g, "-b").replace(/ 0b [+]/g, "").replace(/ 0b -/g, "").replace(/ 1c/g, "c").replace(/ -1c/g, "-c").replace(/ 0c [+]/g, "").replace(/ 0c -/g, "").replace(/[+] 0 /g, "").replace(/- 0 /g, "");
		hasil_box6.innerHTML = perhitungan_replace;
		MathJax.typeset();	
	}
}
function clear_box_box6(){
	hasil_box6.innerHTML = "";
}
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
	if (isNaN(a) || isNaN(b) || isNaN(c)) {
		return hasil_box5.innerHTML = "angka!";
	}

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
			return  `\\( ${x1} + ${x2} = ${b} \\)<br>
			\\( ${x1} x ${x2} = ${pemfaktoran_akalic} \\)<br>
			\\( (x + ${x1})(x + ${x2}) = 0 \\)<br>
			\\( ${a}x = ${-x1} ||| ${a}x = ${-x2} \\)<br>
			\\( (${-x1 / a}, 0) (${-x2 / a}, 0) \\)`
    	} else if (x1 == -pemfaktoran_akalic + 1) {
		alert("pemfaktoran gagal")	
	}
	    
    }
    }
    if (pemfaktoran_akalic > 0) {
    for (let x1 = -pemfaktoran_akalic; x1 <= pemfaktoran_akalic + 1; x1++) {
 		let x2 =  pemfaktoran_akalic / x1;
    	if (pemfaktoran_akalic / x1 == x2 && x2 + x1 == b) {
			return  `\\( ${x1} + ${x2} = ${b} \\)<br>
			\\( ${x1} x ${x2} = ${pemfaktoran_akalic} \\)<br>
			\\( (x + ${x1})(x + ${x2}) = 0 \\)<br>
			\\( ${a}x = ${-x1} ||| ${a}x = ${-x2} \\)<br>
			\\( (${-x1 / a}, 0) (${-x2 / a}, 0) \\)`
    	} else if (x1 == pemfaktoran_akalic + 1) {
		alert("pemfaktoran gagal")
	}
    }
    }
    if (pemfaktoran_akalic == 0) {
    	let x1 = b;
    	let x2 = 0;
			return  `\\( ${x1} + ${x2} = ${b} \\)<br>
			\\( ${x1} x ${x2} = ${pemfaktoran_akalic} \\)<br>
			\\( (x + ${x1})(x + ${x2}) = 0 \\)<br>
			\\( ${a}x = ${-x1} ||| ${a}x = ${-x2} \\)<br>
			\\( (${-x1 / a}, 0) (${-x2 / a}, 0) \\)`
    }
}

let perhitungan =
`
\\( f(x) = ax^2 + bx + c \\)<br>
\\( y = ${a}x^2 + ${b}x + ${c} \\)<br><br>
1) titik sumbu x,y=0<br>
\\( y = ${a}x^2 + ${b}x + ${c} \\)<br>
\\( ${a}x^2 + ${b}x + ${c} = 0 \\)<br>
${pemfaktoran_di_langkah1_box5()}<br><br>
2) titik sumbu y,x=0<br>
\\( y = ${a}x^2 + ${b}x + ${c} \\)<br>
\\( y = ${a}.(0)^2 + ${b}.0 + ${c} \\)<br>
\\( y = ${c} \\)<br>
\\( (0, ${c}) \\)<br><br>
3) sumbu simetri<br>
\\( x = \\frac{-b}{2a} \\)<br>
\\( x = \\frac{-(${b})}{2(${a})} \\)<br>
\\( x = \\frac{${-b}}{${2 * a}} \\)<br>
\\( x = ${(-b) / (2 * a)} \\)<br><br>
4) titik puncah<br>
\\( p(\\frac{-b}{2a}, \\frac{-d}{4a}) \\)<br>
\\( p(${sumbu_simetri}, \\frac{-(${diskriminan})}{4(${a})}) \\)<br>
\\( p(${sumbu_simetri}, \\frac{${-diskriminan}}{${4 * a}}) \\)<br>
\\( p(${sumbu_simetri}, ${(-diskriminan) / (4 * a)}) \\)<br>
\\( d = b^2 - 4ac \\)<br>
\\( d = (${b})^2 - 4.${a}.${c} \\)<br>
\\( d = ${b ** 2} + ${-4 * a * c} \\)<br>
\\( d = ${(b ** 2) + (-4 * a * c)} \\)
`;
	perhitungan_replace = perhitungan.replace(/[+] -/g, "- ").replace(/- [+]/g, "- ").replace(/- -/g, "+ ").replace(/ 1x/g, "x").replace(/ -1x/g, "-x").replace(/ 0x [+]/g, "").replace(/ 0x -/g, "").replace(/ 0x<sup>2<[/]sup> [+]/g, "").replace(/ 0x<sup>2<[/]sup> -/g, "").replace(/ 1a/g, "a").replace(/ -1a/g, "-a").replace(/ 0a [+]/g, "").replace(/ 0a -/g, "").replace(/ 1b/g, "b").replace(/ -1b/g, "-b").replace(/ 0b [+]/g, "").replace(/ 0b -/g, "").replace(/ 1c/g, "c").replace(/ -1c/g, "-c").replace(/ 0c [+]/g, "").replace(/ 0c -/g, "").replace(/[+] 0 /g, "").replace(/- 0 /g, "");
	hasil_box5.innerHTML = perhitungan_replace;
MathJax.typeset();
}


const canvas = document.getElementById("myCanvas_box5");
canvas.hidden = true;

patokan_if_zoom_canvas_box5 = 0;
myCanvas_box5.onclick = function(){
	zoom_canvas_box5()
	function zoom_canvas_box5(){
		const ctx = canvas.getContext("2d");
		patokan_if_zoom_canvas_box5++;
		if (patokan_if_zoom_canvas_box5 % 2 == 1) {
			canvas.width = "1000";
			canvas.height = "1000";
			ctx.scale(2,2);
			show_grafik_box5();
		}else{
			canvas.width = "500";
			canvas.height = "500";
			ctx.scale(1,1);
			show_grafik_box5();
		}
		}
}
function show_grafik_box5(){
let a = Number(inputa_box5.value)
let b = Number(inputb_box5.value)
let c = Number(inputc_box5.value)
if (isNaN(a) || isNaN(b) || isNaN(c)) {
		return canvas.hidden = true;
	}

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
ctx.font = "15px arial";
ctx.fillText("click = x2",0,15);

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
function clear_box5(){
	hasil_box5.innerHTML = "";
	canvas.hidden = true;
}
////////////////////////////////////////////////////////////////
const hasil_box4 = document.getElementById("hasil_box4");
// default
let x1_box4 = document.getElementById("inputx1_box4");
let x2_box4 = document.getElementById("inputx2_box4");
//pecahan1
let x1_box4_pecahan1 = document.getElementById("inputx1_box4_pecahan1");
let x2_box4_pecahan1_pembilang = document.getElementById("inputx2_box4_pecahan1_pembilang");
let x2_box4_pecahan1_penyebut = document.getElementById("inputx2_box4_pecahan1_penyebut");
//pecahan2
let x1_box4_pecahan2_pembilang = document.getElementById("inputx1_box4_pecahan2_pembilang");
let x1_box4_pecahan2_penyebut = document.getElementById("inputx1_box4_pecahan2_penyebut");
let x2_box4_pecahan2_pembilang = document.getElementById("inputx2_box4_pecahan2_pembilang");
let x2_box4_pecahan2_penyebut = document.getElementById("inputx2_box4_pecahan2_penyebut");


const default_box_box4 = document.getElementById("default_box_box4");
const pecahan1_box_box4 = document.getElementById("pecahan1_box_box4");
const pecahan2_box_box4 = document.getElementById("pecahan2_box_box4");
// default
default_box_box4.hidden = false;
pecahan1_box_box4.hidden = true;
pecahan2_box_box4.hidden = true;

function default_box4(){
	default_box_box4.hidden = false;
	pecahan1_box_box4.hidden = true;
	pecahan2_box_box4.hidden = true;
	hasil_box4.innerHTML = "";
}
function pecahan1_box4(){
	default_box_box4.hidden = true;
	pecahan1_box_box4.hidden = false;
	pecahan2_box_box4.hidden = true;
	hasil_box4.innerHTML = "";
}
function pecahan2_box4(){
	default_box_box4.hidden = true;
	pecahan1_box_box4.hidden = true;
	pecahan2_box_box4.hidden = false;
	hasil_box4.innerHTML = "";
}

function cara1_box4(){
	let x1 = Number(x1_box4.value)
	let x2 = Number(x2_box4.value)
	if (isNaN(x1) || isNaN(x2)) {
		return hasil_box4.innerHTML = "angka!";
	}

	let perhitungan =
	`
	\\( (x - x1)(x - x2) = 0 \\)<br>
	\\( (x - ${x1})(x - ${x2}) = 0 \\)<br>
	\\( x^2 + ${-x2}x + ${-x1}x + ${-x1 * -x2} = 0 \\)<br>
	\\( x^2 + ${-x2 + -x1}x + ${-x1 * -x2} = 0 \\)
	`;
	perhitungan_replace = perhitungan.replace(/[+] -/g, "- ").replace(/- [+]/g, "- ").replace(/- -/g, "+ ").replace(/ 1x/g, "x").replace(/ -1x/g, "-x").replace(/ 0x [+]/g, "").replace(/ 0x -/g, "").replace(/ 0x<sup>2<[/]sup> [+]/g, "").replace(/ 0x<sup>2<[/]sup> -/g, "").replace(/ 1a/g, "a").replace(/ -1a/g, "-a").replace(/ 0a [+]/g, "").replace(/ 0a -/g, "").replace(/ 1b/g, "b").replace(/ -1b/g, "-b").replace(/ 0b [+]/g, "").replace(/ 0b -/g, "").replace(/ 1c/g, "c").replace(/ -1c/g, "-c").replace(/ 0c [+]/g, "").replace(/ 0c -/g, "").replace(/[+] 0 /g, "").replace(/- 0 /g, "");
	hasil_box4.innerHTML = perhitungan_replace;
	MathJax.typeset();
}

function cara2_box4(){
	let x1 = Number(x1_box4.value)
	let x2 = Number(x2_box4.value)
	if (isNaN(x1) || isNaN(x2)) {
		return hasil_box4.innerHTML = "angka!";
	}

	let perhitungan =
	`
	\\( x^2 - (x1 + x2)x + x1.x2 = 0 \\)<br>
	\\( x^2 - (${x1} + ${x2})x + ${x1}.${x2} = 0 \\)<br>
	\\( x^2 + ${-(x1 + x2)}x + ${x1 * x2} = 0 \\)
	`
	perhitungan_replace = perhitungan.replace(/[+] -/g, "- ").replace(/- [+]/g, "- ").replace(/- -/g, "+ ").replace(/ 1x/g, "x").replace(/ -1x/g, "-x").replace(/ 0x [+]/g, "").replace(/ 0x -/g, "").replace(/ 0x<sup>2<[/]sup> [+]/g, "").replace(/ 0x<sup>2<[/]sup> -/g, "").replace(/ 1a/g, "a").replace(/ -1a/g, "-a").replace(/ 0a [+]/g, "").replace(/ 0a -/g, "").replace(/ 1b/g, "b").replace(/ -1b/g, "-b").replace(/ 0b [+]/g, "").replace(/ 0b -/g, "").replace(/ 1c/g, "c").replace(/ -1c/g, "-c").replace(/ 0c [+]/g, "").replace(/ 0c -/g, "").replace(/[+] 0 /g, "").replace(/- 0 /g, "");
	hasil_box4.innerHTML = perhitungan_replace;
	MathJax.typeset();
}

function cara1_box4_1pecahan(){
	let x1 = Number(x1_box4_pecahan1.value)
	let x2_pembilang = Number(x2_box4_pecahan1_pembilang.value) 
	let x2_penyebut = Number(x2_box4_pecahan1_penyebut.value)
	if (isNaN(x1) || isNaN(x2_pembilang) || isNaN(x2_penyebut)) {
		return hasil_box4.innerHTML = "angka!";
	}
	if (x1_penyebut == 0 ) {
		return hasil_box4.innerHTML = "penyebut tidak ada yg nol!"
	}
	let perhitungan =
	`
	\\( (x - x1)(x - x2) = 0 \\)<br>
	\\( (x + ${-x1})(x + \\frac{${-x2_pembilang}}{${x2_penyebut}}) = 0 \\)<br>
	\\( x^2 + \\frac{${-x2_pembilang}}{${x2_penyebut}}x + ${-x1}x+ \\frac{${-x2_pembilang * -x1}}{${x2_penyebut}} = 0 \\)<br>
	\\( x^2 + ( \\frac{${-x2_pembilang}}{${x2_penyebut}} + \\frac{${-x1}}{1})x + \\frac{${-x2_pembilang * -x1}}{${x2_penyebut}} = 0 \\)<br>
	\\( x^2 + ( \\frac{${-x2_pembilang}}{${x2_penyebut}} + \\frac{${-x1 * x2_penyebut}}{${x2_penyebut}})x + \\frac{${-x2_pembilang * -x1}}{${x2_penyebut}} = 0 \\)<br>
	\\( x^2 + \\frac{${-x2_pembilang + (-x1 * x2_penyebut)}}{${x2_penyebut}}x + \\frac{${-x2_pembilang * -x1}}{${x2_penyebut}} = 0 \\)<br>
	\\( ${x2_penyebut}x^2 + ${-x2_pembilang + (-x1 * x2_penyebut)}x+${-x2_pembilang * -x1} = 0 \\)
	`
	perhitungan_replace = perhitungan.replace(/[+] -/g, "- ").replace(/- [+]/g, "- ").replace(/- -/g, "+ ").replace(/ 1x/g, "x").replace(/ -1x/g, "-x").replace(/ 0x [+]/g, "").replace(/ 0x -/g, "").replace(/ 0x<sup>2<[/]sup> [+]/g, "").replace(/ 0x<sup>2<[/]sup> -/g, "").replace(/ 1a/g, "a").replace(/ -1a/g, "-a").replace(/ 0a [+]/g, "").replace(/ 0a -/g, "").replace(/ 1b/g, "b").replace(/ -1b/g, "-b").replace(/ 0b [+]/g, "").replace(/ 0b -/g, "").replace(/ 1c/g, "c").replace(/ -1c/g, "-c").replace(/ 0c [+]/g, "").replace(/ 0c -/g, "").replace(/[+] 0 /g, "").replace(/- 0 /g, "");
	hasil_box4.innerHTML = perhitungan_replace;
	MathJax.typeset();
}

function cara2_box4_1pecahan(){
	let x1 = Number(x1_box4_pecahan1.value)
	let x2_pembilang = Number(x2_box4_pecahan1_pembilang.value) 
	let x2_penyebut = Number(x2_box4_pecahan1_penyebut.value)
	if (isNaN(x1) || isNaN(x2_pembilang) || isNaN(x2_penyebut)) {
		return hasil_box4.innerHTML = "angka!";
	}
	if (x1_penyebut == 0 ) {
		return hasil_box4.innerHTML = "penyebut tidak ada yg nol!"
	}
	let perhitungan =
	`
	\\( x^2 - (x1 + x2)x + x1.x2 = 0 \\)<br>
	\\( x^2 - (${x1} + \\frac{${x2_pembilang}}{${x2_penyebut}})x + ${x1}.\\frac{${x2_pembilang}}{${x2_penyebut}} = 0 \\)<br>
	\\( x^2 - (\\frac{${x1}}{1} + \\frac{${x2_pembilang}}{${x2_penyebut}})x + \\frac{${x2_pembilang * x1}}{${x2_penyebut}} = 0 \\)<br>
	\\( x^2 - (\\frac{${x1 * x2_penyebut}}{${x2_penyebut}} + \\frac{${x2_pembilang}}{${x2_penyebut}})x + \\frac{${x2_pembilang * x1}}{${x2_penyebut}} = 0 \\)<br>
	\\( x^2 - \\frac{${(x1 * x2_penyebut) + x2_pembilang}}{${x2_penyebut}}x + \\frac{${x2_pembilang * x1}}{${x2_penyebut}} \\)<br>
	\\( x^2 + \\frac{${-((x1 * x2_penyebut) + x2_pembilang)}}{${x2_penyebut}}x + \\frac{${x2_pembilang * x1}}{${x2_penyebut}} \\)<br>
	\\( ${x2_penyebut}x^2 + ${-((x1 * x2_penyebut) + x2_pembilang)}x + ${x2_pembilang * x1} = 0 \\)
	`
	perhitungan_replace = perhitungan.replace(/[+] -/g, "- ").replace(/- [+]/g, "- ").replace(/- -/g, "+ ").replace(/ 1x/g, "x").replace(/ -1x/g, "-x").replace(/ 0x [+]/g, "").replace(/ 0x -/g, "").replace(/ 0x<sup>2<[/]sup> [+]/g, "").replace(/ 0x<sup>2<[/]sup> -/g, "").replace(/ 1a/g, "a").replace(/ -1a/g, "-a").replace(/ 0a [+]/g, "").replace(/ 0a -/g, "").replace(/ 1b/g, "b").replace(/ -1b/g, "-b").replace(/ 0b [+]/g, "").replace(/ 0b -/g, "").replace(/ 1c/g, "c").replace(/ -1c/g, "-c").replace(/ 0c [+]/g, "").replace(/ 0c -/g, "").replace(/[+] 0 /g, "").replace(/- 0 /g, "");
	hasil_box4.innerHTML = perhitungan_replace;
	MathJax.typeset();	
}
function cara1_box4_2pecahan(){
	let x1_pembilang = Number(x1_box4_pecahan2_pembilang.value)
	let x1_penyebut = Number(x1_box4_pecahan2_penyebut.value)
	let x2_pembilang = Number(x2_box4_pecahan2_pembilang.value)
	let x2_penyebut = Number(x2_box4_pecahan2_penyebut.value)
	if (isNaN(x1_pembilang) || isNaN(x1_penyebut) || isNaN(x2_pembilang) || isNaN(x2_penyebut)) {
		return hasil_box4.innerHTML = "angka!";
	}
	if (x1_penyebut == 0 || x2_penyebut == 0) {
		return hasil_box4.innerHTML = "penyebut tidak ada yg nol!"
	}
	let perhitungan =
	`
	\\( (x - x1)(x - x2)=0 \\)<br>
	\\( (x - (\\frac{${x1_pembilang}}{${x1_penyebut}}))(x - (\\frac{${x2_pembilang}}{${x2_penyebut}})) = 0 \\)<br>
	\\( (x + \\frac{${-x1_pembilang}}{${x1_penyebut}})(x + \\frac{${-x2_pembilang}}{${x2_penyebut}}) = 0 \\)<br>
	\\( x^2 + \\frac{${-x2_pembilang}}{${x2_penyebut}}x + \\frac{${-x1_pembilang}}{${x1_penyebut}}x + \\frac{${-x2_pembilang * -x1_pembilang}}{${x2_penyebut * x1_penyebut}} = 0 \\)<br>
	\\( x^2 + \\frac{${((x2_penyebut * x1_penyebut) / x2_penyebut) * -x2_pembilang}}{${x2_penyebut * x1_penyebut}}x + \\frac{${((x2_penyebut * x1_penyebut) / x1_penyebut) * -x1_pembilang}}{${x2_penyebut * x1_penyebut}}x + \\frac{${-x2_pembilang * -x1_pembilang}}{${x2_penyebut * x1_penyebut}} = 0 \\)<br>
	\\( x^2 + \\frac{${(((x2_penyebut * x1_penyebut) / x2_penyebut) * -x2_pembilang) + (((x2_penyebut * x1_penyebut) / x1_penyebut) * -x1_pembilang)}}{${x2_penyebut * x1_penyebut}}x + \\frac{${-x2_pembilang * -x1_pembilang}}{${x2_penyebut * x1_penyebut}} = 0 \\)<br>
	\\( ${x2_penyebut * x1_penyebut}x^2 + ${(((x2_penyebut * x1_penyebut) / x2_penyebut) * -x2_pembilang) + (((x2_penyebut * x1_penyebut) / x1_penyebut) * -x1_pembilang)}x + ${-x2_pembilang * -x1_pembilang} = 0 \\)	
	`
	perhitungan_replace = perhitungan.replace(/[+] -/g, "- ").replace(/- [+]/g, "- ").replace(/- -/g, "+ ").replace(/ 1x/g, "x").replace(/ -1x/g, "-x").replace(/ 0x [+]/g, "").replace(/ 0x -/g, "").replace(/ 0x<sup>2<[/]sup> [+]/g, "").replace(/ 0x<sup>2<[/]sup> -/g, "").replace(/ 1a/g, "a").replace(/ -1a/g, "-a").replace(/ 0a [+]/g, "").replace(/ 0a -/g, "").replace(/ 1b/g, "b").replace(/ -1b/g, "-b").replace(/ 0b [+]/g, "").replace(/ 0b -/g, "").replace(/ 1c/g, "c").replace(/ -1c/g, "-c").replace(/ 0c [+]/g, "").replace(/ 0c -/g, "").replace(/[+] 0 /g, "").replace(/- 0 /g, "");
	hasil_box4.innerHTML = perhitungan_replace;
	MathJax.typeset();
}
function cara2_box4_2pecahan(){
	let x1_pembilang = Number(x1_box4_pecahan2_pembilang.value)
	let x1_penyebut = Number(x1_box4_pecahan2_penyebut.value)
	let x2_pembilang = Number(x2_box4_pecahan2_pembilang.value)
	let x2_penyebut = Number(x2_box4_pecahan2_penyebut.value)
	if (isNaN(x1_pembilang) || isNaN(x1_penyebut) || isNaN(x2_pembilang) || isNaN(x2_penyebut)) {
		return hasil_box4.innerHTML = "angka!";
	}
	if (x1_penyebut == 0 || x2_penyebut == 0) {
		return hasil_box4.innerHTML = "penyebut tidak ada yg nol!"
	}

	perhitungan =
	`
	\\( x^2-(x1+x2)x+x1.x2=0 \\)<br>
	\\( x^2-((\\frac{${x1_pembilang}}{${x1_penyebut}})+(\\frac{${x2_pembilang}}{${x2_penyebut}}))x+(\\frac{${x1_pembilang}}{${x1_penyebut}}).(\\frac{${x2_pembilang}}{${x2_penyebut}})=0 \\)<br>
	\\( x^2-(\\frac{${((x1_penyebut * x2_penyebut) / x1_penyebut) * x1_pembilang}+${((x1_penyebut * x2_penyebut) / x2_penyebut) * x2_pembilang}}{${x1_penyebut * x2_penyebut}})x+(\\frac{${x1_pembilang * x2_pembilang}}{${x1_penyebut * x2_penyebut}})=0 \\)<br>
	\\( x^2+(\\frac{${-((((x1_penyebut * x2_penyebut) / x1_penyebut) * x1_pembilang) + (((x1_penyebut * x2_penyebut) / x2_penyebut) * x2_pembilang))}}{${x1_penyebut * x2_penyebut}})x+(\\frac{${x1_pembilang * x2_pembilang}}{${x1_penyebut * x2_penyebut}})=0 \\)<br>
	\\( ${x1_penyebut * x2_penyebut}x^2 + ${-((((x1_penyebut * x2_penyebut) / x1_penyebut) * x1_pembilang) + (((x1_penyebut * x2_penyebut) / x2_penyebut) * x2_pembilang))}x + ${x1_pembilang * x2_pembilang}=0 \\)
	`
	perhitungan_replace = perhitungan.replace(/[+] -/g, "- ").replace(/- [+]/g, "- ").replace(/- -/g, "+ ").replace(/ 1x/g, "x").replace(/ -1x/g, "-x").replace(/ 0x [+]/g, "").replace(/ 0x -/g, "").replace(/ 0x<sup>2<[/]sup> [+]/g, "").replace(/ 0x<sup>2<[/]sup> -/g, "").replace(/ 1a/g, "a").replace(/ -1a/g, "-a").replace(/ 0a [+]/g, "").replace(/ 0a -/g, "").replace(/ 1b/g, "b").replace(/ -1b/g, "-b").replace(/ 0b [+]/g, "").replace(/ 0b -/g, "").replace(/ 1c/g, "c").replace(/ -1c/g, "-c").replace(/ 0c [+]/g, "").replace(/ 0c -/g, "").replace(/[+] 0 /g, "").replace(/- 0 /g, "");
	hasil_box4.innerHTML = perhitungan_replace;
	MathJax.typeset();	
}
function clear_box4(){
	hasil_box4.innerHTML = "";
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
	if (isNaN(a) || isNaN(b) || isNaN(c)) {
		return hasil_box3.innerHTML = "angka!";
	}

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
	if (isNaN(a) || isNaN(b) || isNaN(c)) {
		return hasil_box3.innerHTML = "angka!";
	}

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
	if (isNaN(a) || isNaN(b) || isNaN(c)) {
		return hasil_box3.innerHTML = "angka!";
	}

	let perhitungan = 
	`
	ax<sup>2</sup> + bx + c = 0<br>
	a = ${a} , b = ${b} , c = ${c}<br><br>
	\\( x1^2+x2^2 \\) = \\( (x1 + x2)^2 - 2(x1.x2) \\)<br>
	\\( x1^2+x2^2 \\) = \\( ${-b/a}^2 - 2.${c/a} \\)<br>
	\\( x1^2+x2^2 \\) = \\( ${(-b/a) ** 2} + ${-2*c/a} \\)<br>
	\\( x1^2+x2^2 \\) = \\(${((-(b/a)) ** 2) + (-2*c/a)} \\)
	`;
	perhitungan_replace = perhitungan.replace(/[+] -/g, "- ").replace(/- [+]/g, "- ").replace(/- -/g, "+ ").replace(/ 1x/g, "x").replace(/ -1x/g, "-x").replace(/ 0x [+]/g, "").replace(/ 0x -/g, "").replace(/ 0x<sup>2<[/]sup> [+]/g, "").replace(/ 0x<sup>2<[/]sup> -/g, "").replace(/ 1a/g, "a").replace(/ -1a/g, "-a").replace(/ 0a [+]/g, "").replace(/ 0a -/g, "").replace(/ 1b/g, "b").replace(/ -1b/g, "-b").replace(/ 0b [+]/g, "").replace(/ 0b -/g, "").replace(/ 1c/g, "c").replace(/ -1c/g, "-c").replace(/ 0c [+]/g, "").replace(/ 0c -/g, "").replace(/[+] 0 /g, "").replace(/- 0 /g, "");
	hasil_box3.innerHTML = perhitungan_replace;
	MathJax.typeset();
}

function hasil_empat_box3(){
let a = Number(inputa_box3.value)
let b = Number(inputb_box3.value)
let c = Number(inputc_box3.value)
	if (isNaN(a) || isNaN(b) || isNaN(c)) {
		return hasil_box3.innerHTML = "angka!";
	}

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
	if (isNaN(a) || isNaN(b) || isNaN(c)) {
		return hasil_box3.innerHTML = "angka!";
	}

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
function clear_box3(){
	hasil_box3.innerHTML = "";
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
    if (isNaN(a_box2) || isNaN(b_box2) || isNaN(c_box2)) {
		return hasil_box2.innerHTML = "angka!";
	}

if (diskriminan > 0) {
	if (diskriminan % akar_diskriminan == 0){
	let perhitungan = 
	`
	x<sub>1,2</sub> = \\( \\frac{-b \\pm \\sqrt{b^2- 4ac}}{2a} \\) <br>
	x<sub>1,2</sub> = \\( \\frac{-(${b_box2}) \\pm \\sqrt{(${b_box2})^2 - 4.(${a_box2}).(${c_box2})}}{2.(${a_box2})} \\)<br>
	x<sub>1,2</sub> = \\( \\frac{${-b_box2} \\pm \\sqrt{${b_box2 ** 2} + ${-4 * a_box2 * c_box2}}}{${2 * a_box2}} \\) <br>
	x<sub>1,2</sub> = \\( \\frac{${-b_box2} \\pm \\sqrt{${(b_box2 ** 2) + (-4 * a_box2 * c_box2)}}}{${2 * a_box2}} \\)<br>
	x<sub>1,2</sub> = \\( \\frac{${-b_box2} \\pm ${akar_diskriminan}}{${2 * a_box2}} \\) <br>
	<br>
	x<sub>1</sub> = \\( \\frac{${-b_box2} + ${akar_diskriminan}}{${2 * a_box2}} \\) <br>
	x<sub>1</sub> = \\( \\frac{${-b_box2 + akar_diskriminan}}{${2 * a_box2}} \\)<br>
	x<sub>1</sub> = \\( ${(-b_box2 + akar_diskriminan) / (2 * a_box2)} \\)<br>
	<br>
	x<sub>2</sub> = \\( \\frac{${-b_box2} - ${akar_diskriminan}}{${2 * a_box2}} \\)<br>
	x<sub>2</sub> = \\( \\frac{${-b_box2 - akar_diskriminan}}{${2 * a_box2}} \\)<br>
	x<sub>2</sub> = \\( ${(-b_box2 - akar_diskriminan) / (2 * a_box2)} \\)<br>
	`;
	perhitungan_replace = perhitungan.replace(/[+] -/g, "- ").replace(/- [+]/g, "- ").replace(/- -/g, "+ ").replace(/ 1x/g, "x").replace(/ -1x/g, "-x").replace(/ 0x [+]/g, "").replace(/ 0x -/g, "").replace(/ 0x<sup>2<[/]sup> [+]/g, "").replace(/ 0x<sup>2<[/]sup> -/g, "").replace(/ 1a/g, "a").replace(/ -1a/g, "-a").replace(/ 0a [+]/g, "").replace(/ 0a -/g, "").replace(/ 1b/g, "b").replace(/ -1b/g, "-b").replace(/ 0b [+]/g, "").replace(/ 0b -/g, "").replace(/ 1c/g, "c").replace(/ -1c/g, "-c").replace(/ 0c [+]/g, "").replace(/ 0c -/g, "").replace(/[+] 0 /g, "").replace(/- 0 /g, "");
	hasil_box2.innerHTML = perhitungan_replace;
	MathJax.typeset();
	}
	else if (diskriminan % akar_diskriminan != 0) {
	let perhitungan =
	`
	x<sub>1,2</sub> = \\( \\frac{-b \\pm \\sqrt{(b^2 - 4ac))}}{2a} \\)<br>
	x<sub>1,2</sub> = \\( \\frac{-(${b_box2}) \\pm \\sqrt{(${b_box2})^2 - 4.(${a_box2}).(${c_box2})}}{2.(${a_box2})} \\)<br>
	x<sub>1,2</sub> = \\( \\frac{${-b_box2} \\pm \\sqrt{${b_box2 ** 2} + ${-4 * a_box2 * c_box2}}}{${2 * a_box2}} \\)<br>
	x<sub>1,2</sub> = \\( \\frac{${-b_box2} \\pm \\sqrt{(${(b_box2 ** 2) + (-4 * a_box2 * c_box2)})}}{${2 * a_box2}} \\)<br>
	<br>
	x<sub>1</sub> = \\( \\frac{${-b_box2} + \\sqrt{(${(b_box2 ** 2) + (-4 * a_box2 * c_box2)})}}{${2 * a_box2}} \\)<br>
	<br>
	x<sub>2</sub> = \\( \\frac{${-b_box2} - \\sqrt{(${(b_box2 ** 2) + (-4 * a_box2 * c_box2)})}}{${2 * a_box2}} \\)<br>
	`;
	perhitungan_replace = perhitungan.replace(/[+] -/g, "- ").replace(/- [+]/g, "- ").replace(/- -/g, "+ ").replace(/ 1x/g, "x").replace(/ -1x/g, "-x").replace(/ 0x [+]/g, "").replace(/ 0x -/g, "").replace(/ 0x<sup>2<[/]sup> [+]/g, "").replace(/ 0x<sup>2<[/]sup> -/g, "").replace(/ 1a/g, "a").replace(/ -1a/g, "-a").replace(/ 0a [+]/g, "").replace(/ 0a -/g, "").replace(/ 1b/g, "b").replace(/ -1b/g, "-b").replace(/ 0b [+]/g, "").replace(/ 0b -/g, "").replace(/ 1c/g, "c").replace(/ -1c/g, "-c").replace(/ 0c [+]/g, "").replace(/ 0c -/g, "").replace(/[+] 0 /g, "").replace(/- 0 /g, "");
	hasil_box2.innerHTML = perhitungan_replace;
	MathJax.typeset();
	}
}
else if (diskriminan == 0){
	let perhitungan =
	`
	x<sub>1,2</sub> = \\( \\frac{-b \\pm \\sqrt{(b^2 - 4ac))}}{2a} \\)<br>
	x<sub>1,2</sub> = \\( \\frac{-(${b_box2}) \\pm \\sqrt{(${b_box2})^2 - 4.(${a_box2}).(${c_box2})}}{2.(${a_box2})} \\)<br>
	x<sub>1,2</sub> = \\( \\frac{${-b_box2} \\pm \\sqrt{${b_box2 ** 2} + ${-4 * a_box2 * c_box2}}}{${2 * a_box2}} \\)<br>
	x<sub>1,2</sub> = \\( \\frac{${-b_box2} \\pm \\sqrt{(${(b_box2 ** 2) + (-4 * a_box2 * c_box2)})}}{${2 * a_box2}} \\)<br>
	x<sub>1,2</sub> = \\( \\frac{${-b_box2} \\pm ${akar_diskriminan}}{${2 * a_box2}} \\)   <<<  hanya memiliki 1 nilai<br>
	x = \\( \\frac{${-b_box2}}{${2 * a_box2}} \\)<br>
	x = ${-b_box2 / (2 * a_box2)}<br>
	`;
	perhitungan_replace = perhitungan.replace(/[+] -/g, "- ").replace(/- [+]/g, "- ").replace(/- -/g, "+ ").replace(/ 1x/g, "x").replace(/ -1x/g, "-x").replace(/ 0x [+]/g, "").replace(/ 0x -/g, "").replace(/ 0x<sup>2<[/]sup> [+]/g, "").replace(/ 0x<sup>2<[/]sup> -/g, "").replace(/ 1a/g, "a").replace(/ -1a/g, "-a").replace(/ 0a [+]/g, "").replace(/ 0a -/g, "").replace(/ 1b/g, "b").replace(/ -1b/g, "-b").replace(/ 0b [+]/g, "").replace(/ 0b -/g, "").replace(/ 1c/g, "c").replace(/ -1c/g, "-c").replace(/ 0c [+]/g, "").replace(/ 0c -/g, "").replace(/[+] 0 /g, "").replace(/- 0 /g, "");
	hasil_box2.innerHTML = perhitungan_replace;
	MathJax.typeset();
}
else if (diskriminan < 0){
	if (khususmin_diskriminan % khususmin_akar_diskriminan == 0) {
		let perhitungan =
	`
	x<sub>1,2</sub> = \\( \\frac{-b \\pm \\sqrt{(b^2 - 4ac))}}{2a} \\)<br>
	x<sub>1,2</sub> = \\( \\frac{-(${b_box2}) \\pm \\sqrt{(${b_box2})^2 - 4.(${a_box2}).(${c_box2})}}{2.(${a_box2})} \\)<br>
	x<sub>1,2</sub> = \\( \\frac{${-b_box2} \\pm \\sqrt{${b_box2 ** 2} + ${-4 * a_box2 * c_box2}}}{${2 * a_box2}} \\)<br>
	x<sub>1,2</sub> = \\( \\frac{${-b_box2} \\pm \\sqrt{${(b_box2 ** 2) + (-4 * a_box2 * c_box2)}}}{${2 * a_box2}} \\) <<< tidak ada penyelesaian,karena nilai akar selalu positif <br>
	x<sub>1,2</sub> = \\( \\frac{${-b_box2} \\pm ${khususmin_akar_diskriminan}i}{${2 * a_box2}} \\) <<< jika ingin dilanjutkan menggunakan bilangan imajiner<br>
	<br>
	x<sub>1</sub> = \\( \\frac{${-b_box2} + ${khususmin_akar_diskriminan}i}{${2 * a_box2}} \\) <br>
	x<sub>1</sub> = \\( ${-b_box2 / (2 * a_box2)} + ${khususmin_akar_diskriminan / (2 * a_box2)}i \\) 
	<br><br>
	x<sub>2</sub> = \\( \\frac{${-b_box2} - ${khususmin_akar_diskriminan}i}{${2 * a_box2}} \\)<br>
	x<sub>2</sub> = \\( ${(-b_box2 / (2 * a_box2))} + ${(-khususmin_akar_diskriminan / (2 * a_box2))}i \\)
	`
	perhitungan_replace = perhitungan.replace(/[+] -/g, "- ").replace(/- [+]/g, "- ").replace(/- -/g, "+ ").replace(/ 1x/g, "x").replace(/ -1x/g, "-x").replace(/ 0x [+]/g, "").replace(/ 0x -/g, "").replace(/ 0x<sup>2<[/]sup> [+]/g, "").replace(/ 0x<sup>2<[/]sup> -/g, "").replace(/ 1a/g, "a").replace(/ -1a/g, "-a").replace(/ 0a [+]/g, "").replace(/ 0a -/g, "").replace(/ 1b/g, "b").replace(/ -1b/g, "-b").replace(/ 0b [+]/g, "").replace(/ 0b -/g, "").replace(/ 1c/g, "c").replace(/ -1c/g, "-c").replace(/ 0c [+]/g, "").replace(/ 0c -/g, "").replace(/[+] 0 /g, "").replace(/- 0 /g, "");
	hasil_box2.innerHTML = perhitungan_replace;
	MathJax.typeset();
	}
	else if(khususmin_diskriminan % khususmin_akar_diskriminan != 0 ){
		let perhitungan =
	`
	x<sub>1,2</sub> = \\( \\frac{-b \\pm \\sqrt{(b^2 - 4ac))}}{2a} \\)<br>
	x<sub>1,2</sub> = \\( \\frac{-(${b_box2}) \\pm \\sqrt{(${b_box2})^2 - 4.(${a_box2}).(${c_box2})}}{2.(${a_box2})} \\)<br>
	x<sub>1,2</sub> = \\( \\frac{${-b_box2} \\pm \\sqrt{${b_box2 ** 2} + ${-4 * a_box2 * c_box2}}}{${2 * a_box2}} \\)<br>
	x<sub>1,2</sub> = \\( \\frac{${-b_box2} \\pm \\sqrt{${diskriminan}}}{${2 * a_box2}} \\) <<< tidak ada penyelesaian,karna nilai akar selalu positif<br>
	x<sub>1,2</sub> = \\( \\frac{${-b_box2} \\pm \\sqrt{${diskriminan}}}{${2 * a_box2}} \\) <<< jika tetap ingin dilanjutkan
	<br><br>
	x<sub>1</sub> = \\( \\frac{${-b_box2} + \\sqrt{${diskriminan}}}{${2 * a_box2}} \\)
	<br><br>
	x<sub>2</sub> = \\( \\frac{${-b_box2} - \\sqrt{${diskriminan}}}{${2 * a_box2}} \\)
	`
	perhitungan_replace = perhitungan.replace(/[+] -/g, "- ").replace(/- [+]/g, "- ").replace(/- -/g, "+ ").replace(/ 1x/g, "x").replace(/ -1x/g, "-x").replace(/ 0x [+]/g, "").replace(/ 0x -/g, "").replace(/ 0x<sup>2<[/]sup> [+]/g, "").replace(/ 0x<sup>2<[/]sup> -/g, "").replace(/ 1a/g, "a").replace(/ -1a/g, "-a").replace(/ 0a [+]/g, "").replace(/ 0a -/g, "").replace(/ 1b/g, "b").replace(/ -1b/g, "-b").replace(/ 0b [+]/g, "").replace(/ 0b -/g, "").replace(/ 1c/g, "c").replace(/ -1c/g, "-c").replace(/ 0c [+]/g, "").replace(/ 0c -/g, "").replace(/[+] 0 /g, "").replace(/- 0 /g, "");
	hasil_box2.innerHTML = perhitungan_replace;
	MathJax.typeset();
	}
}}
function clear_box2(){
	hasil_box2.innerHTML = "";
}
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
	if (isNaN(a) || isNaN(b) || isNaN(c)) {
		return hasil.innerHTML = "angka!";
	}

	if (hasilaxc < 0) {
    for (let x1 = hasilaxc; x1 <= -hasilaxc + 1; x1++) {
 		let x2 =  hasilaxc / x1;
    	if (hasilaxc / x1 == x2 && x2 + x1 == b) {
    		let perhitungan = 
    		`ax^2 + bx + c = 0<br>
    		${a}x^2 + ${b}x + ${c} = 0<br>
			a = ${a} , b = ${b} , c = ${c}<br>
			*rumus pemfaktoran =<br>
			 x1 + x2 = b<br>
			 x1 x x2 = ac<br>
			 (x + x1)(x + x2) = 0<br><br>
			 ${x2} + ${x1} = ${b}<br>
			 ${x2} x ${x1} = ${hasilaxc}<br>
			 (x + ${x2})(x + ${x1}) = 0<br>
			 ${a}x + ${x2} = 0 ||| ${a}x + ${x1} = 0<br>
			 x = ${-x2 / a} ||| x = ${-x1 / a}`;
			perhitungan_replace = perhitungan.replace(/[+] -/g, "- ").replace(/- [+]/g, "- ").replace(/- -/g, "+ ").replace(/ 1x/g, "x").replace(/ -1x/g, "-x").replace(/ 0x [+]/g, "").replace(/ 0x -/g, "").replace(/ 0x<sup>2<[/]sup> [+]/g, "").replace(/ 0x<sup>2<[/]sup> -/g, "").replace(/ 1a/g, "a").replace(/ -1a/g, "-a").replace(/ 0a [+]/g, "").replace(/ 0a -/g, "").replace(/ 1b/g, "b").replace(/ -1b/g, "-b").replace(/ 0b [+]/g, "").replace(/ 0b -/g, "").replace(/ 1c/g, "c").replace(/ -1c/g, "-c").replace(/ 0c [+]/g, "").replace(/ 0c -/g, "").replace(/[+] 0 /g, "").replace(/- 0 /g, "");
			return hasil.innerHTML = perhitungan_replace;
    	} else if (x1 == -hasilaxc + 1) {
		alert("perhitungan tidak ditemukan, gunakan rumus ABC!")	
		return hasil.innerHTML = "";
	}
	    
    }
    }
    if (hasilaxc > 0) {
    for (let x1 = -hasilaxc; x1 <= hasilaxc + 1; x1++) {
 		let x2 =  hasilaxc / x1;
    	if (hasilaxc / x1 == x2 && x2 + x1 == b) {
    		let perhitungan = 
    		`ax^2 + bx + c = 0<br>
    		${a}x^2 + ${b}x + ${c} = 0<br>
			a = ${a} , b = ${b} , c = ${c}<br>
			*rumus pemfaktoran =<br>
			 x1 + x2 = b<br>
			 x1 x x2 = ac<br>
			 (x + x1)(x + x2) = 0<br><br>
			 ${x2} + ${x1} = ${b}<br>
			 ${x2} x ${x1} = ${hasilaxc}<br>
			 (x + ${x2})(x + ${x1}) = 0<br>
			 ${a}x + ${x2} = 0 ||| ${a}x + ${x1} = 0<br>
			 x = ${-x2 / a} ||| x = ${-x1 / a}`;
			perhitungan_replace = perhitungan.replace(/[+] -/g, "- ").replace(/- [+]/g, "- ").replace(/- -/g, "+ ").replace(/ 1x/g, "x").replace(/ -1x/g, "-x").replace(/ 0x [+]/g, "").replace(/ 0x -/g, "").replace(/ 0x<sup>2<[/]sup> [+]/g, "").replace(/ 0x<sup>2<[/]sup> -/g, "").replace(/ 1a/g, "a").replace(/ -1a/g, "-a").replace(/ 0a [+]/g, "").replace(/ 0a -/g, "").replace(/ 1b/g, "b").replace(/ -1b/g, "-b").replace(/ 0b [+]/g, "").replace(/ 0b -/g, "").replace(/ 1c/g, "c").replace(/ -1c/g, "-c").replace(/ 0c [+]/g, "").replace(/ 0c -/g, "").replace(/[+] 0 /g, "").replace(/- 0 /g, "");
			return hasil.innerHTML = perhitungan_replace;
    	} else if (x1 == hasilaxc + 1) {
		alert("perhitungan tidak ditemukan, gunakan rumus ABC!")
		return hasil.innerHTML = "";
	}
    }
    }
    if (hasilaxc == 0) {
    	let x1 = b;
    	let x2 = 0;
    		let perhitungan = 
    		`ax^2 + bx + c = 0<br>
    		${a}x^2 + ${b}x + ${c} = 0<br>
			a = ${a} , b = ${b} , c = ${c}<br>
			*rumus pemfaktoran =<br>
			 x1 + x2 = b<br>
			 x1 x x2 = ac<br>
			 (x + x1)(x + x2) = 0<br><br>
			 ${x2} + ${x1} = ${b}<br>
			 ${x2} x ${x1} = ${hasilaxc}<br>
			 (x + ${x2})(x + ${x1}) = 0<br>
			 ${a}x + ${x2} = 0 ||| ${a}x + ${x1} = 0<br>
			 x = ${-x2 / a} ||| x = ${-x1 / a}`;
			perhitungan_replace = perhitungan.replace(/[+] -/g, "- ").replace(/- [+]/g, "- ").replace(/- -/g, "+ ").replace(/ 1x/g, "x").replace(/ -1x/g, "-x").replace(/ 0x [+]/g, "").replace(/ 0x -/g, "").replace(/ 0x<sup>2<[/]sup> [+]/g, "").replace(/ 0x<sup>2<[/]sup> -/g, "").replace(/ 1a/g, "a").replace(/ -1a/g, "-a").replace(/ 0a [+]/g, "").replace(/ 0a -/g, "").replace(/ 1b/g, "b").replace(/ -1b/g, "-b").replace(/ 0b [+]/g, "").replace(/ 0b -/g, "").replace(/ 1c/g, "c").replace(/ -1c/g, "-c").replace(/ 0c [+]/g, "").replace(/ 0c -/g, "").replace(/[+] 0 /g, "").replace(/- 0 /g, "");
			return hasil.innerHTML = perhitungan_replace;
    }
}
function clear_box1(){
	return hasil.innerHTML = "";
}
