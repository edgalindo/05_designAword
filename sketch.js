function setup() {
createCanvas(700, 700);
background(0);
strokeWeight(4);
noFill();

var a = 50;
var b = 120;
var c = 180;

stroke(0,255,255,90);
ellipse(a, a, a, a);
ellipse(a+100, a+100, a+100, a+100);
ellipse(b+100, b+100, b+100, b+100);
ellipse(c+100, c+100, c+100, c+100);

a = a + c;
b = height-b;


ellipse(a+320, b-50, a, a);
ellipse(a+100, a+100, a+100, a+100);
ellipse(b+100, b+100, b+100, b+100);
ellipse(c+300, c+300, c+300, c+300);
}

function draw() {

}

function mousePressed(){
  save('image.jpg');
}