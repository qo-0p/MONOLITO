let panorama;
let angleX = 0;
let angleY = 0;

function preload() {
  // Load the image from the 'image' folder
  panorama = loadImage('image/MONOLITO_SCastela-min-miny.jpg');
}

function setup() {
  // Create a responsive canvas
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {
  background(0);

  // Adjust the canvas size dynamically if the window size changes
  resizeCanvas(windowWidth, windowHeight);

  // Adjust rotation based on mouse position (simple control)
  let moveX = (mouseX - width / 2) * 0.005;
  let moveY = (mouseY - height / 2) * 0.005;

  // Rotate the sphere based on mouse movement
  rotateX(-moveY);  // Inverted Y to make it more intuitive
  rotateY(moveX);

  // Draw the sphere with the panoramic texture
  push();
  texture(panorama);
  sphere(1000, 100, 100); // The sphere's size is 1000, you can adjust this
  pop();
}

// Optional: Allow navigation via mouse or trackpad
function mousePressed() {
  // You can reset the rotation angle if you want
  angleX = 0;
  angleY = 0;
}
