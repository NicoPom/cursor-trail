// Set the initial size of the circles
let circleSize = 7;

// Set the number of circles in the trail
const numCircles = 100;

// Create an array to store the circle elements
const circles = [];

// Create the circle elements and add them to the trail element
for (let i = 0; i < numCircles; i++) {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.width = circleSize + "px";
  circle.style.height = circleSize + "px";
  document.getElementById("trail").appendChild(circle);
  circles.push(circle);
  circleSize -= 0.06;
}

// Initialize the positions of the circles
let x = 0;
let y = 0;
for (let i = 0; i < numCircles; i++) {
  circles[i].style.left = x + "px";
  circles[i].style.top = y + "px";
}

// Update the position of the circles on mousemove

document.addEventListener("mousemove", function (event) {
  x = event.clientX;
  y = event.clientY;
});

// Animate the position of the circles
function animateCircles() {
  // Move the first circle to the mouse position
  circles[0].style.left = x + "px";
  circles[0].style.top = y + "px";

  // Move the remaining circles to the previous circle's position with a slight delay
  for (let i = 1; i < numCircles; i++) {
    setTimeout(function () {
      circles[i].style.left = circles[i - 1].style.left;
      circles[i].style.top = circles[i - 1].style.top;
    }, i * 3);
  }

  // Request the next animation frame
  requestAnimationFrame(animateCircles);
}

// Start the animation loop
animateCircles();
