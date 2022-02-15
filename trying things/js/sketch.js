let circleFilling = false;
let circleSize = 0;
let circleColor;

const circles = [];

function preload() {

  for (let i = 0; i < 3; i++) {

    bottle=loadImage('./assets/watering-can.png')
  }
}


function setup() {
  createCanvas(400, 400);
  circleColor = color(random(255), random(255), random(255));
  strokeWeight(2);
  for (let i = 0; i < 10; i++) {

   }
}

function draw() {
  background(150);

  image(bottle,mouseX,mouseY,100,70)
  if (circleFilling) {
    circleSize += 2;

    const overlappingCircle = getOverlappingCircle();
    if(overlappingCircle){
      circleFilling = false;
      circles.splice(circles.indexOf(overlappingCircle), 1);
    }

    if (isOffScreen()) {
      circleFilling = false;
    }

    fill(circleColor);
    circle(mouseX, mouseY, circleSize);
  }


  for (const c of circles) {
    c.draw();
  }
}

function getOverlappingCircle() {
  for(const c of circles){
    if(dist(c.x, c.y, mouseX, mouseY) <
      circleSize / 2 + c.size / 2 + 2){
      return c;
    }
  }

  return undefined;
}

function isOffScreen(){
  return mouseX < circleSize / 2 ||
         mouseX > width - circleSize / 2 ||
         mouseY < circleSize / 2 ||
         mouseY > height - circleSize / 2;
}

function mousePressed() {
  circleSize = 0;
  circleColor = color(random(255), random(255), random(255));
  circleFilling = true;
}

function mouseReleased() {
  if (circleFilling) {
    circles.push(new Circle(mouseX, mouseY, circleSize, circleColor));
  }
  circleFilling = false;
}

class Circle {

  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
  }

  draw() {
    fill(this.color);
    circle(this.x, this.y, this.size);

  }
}
class Wateringcan {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;

}
  
}
