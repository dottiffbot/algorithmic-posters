
let hadogenes;
let blackHan;

let artistName;
let showName;
let showTime;
let showDate;


let seoulLong = -37.5665; // y north
let seoulLat = 126.9780; // x east

let oaxaxaLong = -17.0732; // north
let oaxaxaLat = -96.7266; // west

let amsterdamLong = -52.3676;
let amsterdamLat = 4.9041 // east

let cayenneLong = 4.9224;
let cayenneLat = -52.3135; // west


let angle = 0;
let angleA = 0.001;
let angleV = 0.001;
let r = 400;

let angle1 = 0;
let angle2 = 0;

let angleV1 = 0.007 /seoulLong;
let angleV2 = 0.003 /seoulLong;

let angleV3 = 0.007 /cayenneLat;
let angleV4 = 0.003 /cayenneLat;


let angleV5 = 0.007 /amsterdamLong;
let angleV6 = 0.003 /amsterdamLat;


function preload(){
	hadogenes = loadFont('assets/MaxiMono-Regular.otf');
	blackHan = loadFont('assets/BlackHanSans-Regular.ttf')

}

function setup(){
	createCanvas(windowWidth, windowHeight);
	textFont(hadogenes);
	textFont(blackHan);


	artistName = blackHan.textToPoints("송예환", seoulLat,seoulLong, 100,{
    sampleFactor: 0.1
    // 송예환 YEHWAN SONG
	});

	showName = hadogenes.textToPoints("ANGLES", cayenneLat*5,cayenneLong*5, 100, {
		sampleFactor: 0.3

		//각도 ANGLES
	});


		showDate = hadogenes.textToPoints("OCTOBER 8", oaxaxaLat*5,oaxaxaLong*5, 100, {
		sampleFactor: 0.3
		//10월 8일 OCTOBER 8
	});

		showTime = hadogenes.textToPoints("12PM KST", amsterdamLat*5,amsterdamLong*5, 100, {
		sampleFactor: 0.3

	});
}

function draw(){
	background(0, 10);
	translate(width/2, height/2);


	// ellipse(0, 0, 800, 800);

	// blendMode(DIFFERENCE);
	noFill();

   // stroke(200, 186, 91);
   stroke(255, 215, 0, 20)


//lines

	for (let i = 0; i < artistName.length; i++){
		let ampx = (0.8 * width) /2;
		let ampy =(0.9 * height) /2;
		let x = map(cos(angle1), -1, 1, -ampx, ampx);
		let y = map(sin(angle2), -1, 1, -ampy, ampy);
		line(artistName[i].x, artistName[i].y, x, y);

		angle1 += angleV1 /2;
		angle2 +=angleV2 /2;
}




	strokeWeight(1);
	stroke(193, 157, 68);
	blendMode(BLEND);
	//fill(0, 0, 255, 5);
	beginShape();

	for(let i = 0; i < artistName.length; i++){


		vertex(artistName[i].x, artistName[i].y);

	}
	endShape();


//ANGLES TITLE

	// stroke(255, 0, 0);
	stroke(75, 195, 175, 5);



		for (let i = 0; i < showName.length; i++){
		let ampx = (0.9 * width) /cayenneLat *2;
		let ampy =(0.9 * height) /cayenneLong *2;
		let x = map(cos(angle1), -1, 1, -ampx, ampx);
		let y = map(sin(angle2), -1, 1, -ampy, ampy);
		line(showName[i].x, showName[i].y, x, y);

		angle1 += angleV3 /2;
		angle2 +=angleV4 /2;
}



push();
stroke(38, 115, 106);
	beginShape();


	for(let i = 0; i < showName.length; i++){
		vertex(showName[i].x, showName[i].y)
	}
	endShape();
	pop();
	
// DATE !

	blendMode(OVERLAY);
	stroke(0, 255, 0, 10);



		for (let i = 0; i < showDate.length; i++){
		let ampx = (0.5 * width) /oaxaxaLat*2;
		let ampy =(0.5 * height) /oaxaxaLong*2;
		let x = map(cos(angle1), -1, 1, -ampx, ampx);
		let y = map(sin(angle2), -1, 1, -ampy, ampy);
		line(showDate[i].x, showDate[i].y, x, y);

		angle1 += angleV3 /2;
		angle2 +=angleV4 /2;
}
blendMode(OVERLAY);
stroke(22, 65, 31);
strokeWeight(1);
		beginShape();


	for(let i = 0; i < showDate.length; i++){
		vertex(showDate[i].x, showDate[i].y)
	}
	endShape();


// TIME 
	blendMode(OVERLAY);
	stroke(138,112,255, 10);



		for (let i = 0; i < showTime.length; i++){
		let ampx = (0.8 * width) /amsterdamLat*4;
		let ampy =(0.8 * height) /amsterdamLong*4;
		let x = map(cos(angle1), -1, 1, -ampx, ampx);
		let y = map(sin(angle2), -1, 1, -ampy, ampy);
		line(showTime[i].x, showTime[i].y, x, y);

		angle1 += angleV1/2;
		angle2 +=angleV2/2;


}

push();
stroke(124, 102, 204);
blendMode(HARD_LIGHT);



		beginShape();


	for(let i = 0; i < showTime.length; i++){
		vertex(showTime[i].x, showTime[i].y)
	}
	endShape();

	pop();

	blendMode(MULTIPLY);

// cross perspectives

	noFill();
	strokeWeight(1);

    let x= r * cos(angle);
    let y= r * sin(angle);

  blendMode(OVERLAY);
    //fill(28, 29, 84);
    fill(255);
    textSize(20);
	text('cross perspectives in design', x, y);
	//디자인의 교차 관점  cross perspectives in design


angle += angleV;
angleV += angleA;



}



function windowResized(){
	resizeCanvas(windowWidth, windowHeight);

}