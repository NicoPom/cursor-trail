import { gsap } from "gsap";

// Set the initial size of the circles
let circleSize = 10;

// Set the number of circles in the trail
const numCircles = 20;

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
  circleSize -= 0.3;
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
  gsap.to(circles[0], {
    duration: 0.3,
    x: x,
    y: y,
  });

  for (let i = 1; i < numCircles; i++) {
    const parent = circles[i].parentNode.getBoundingClientRect();
    const prev = circles[i - 1].getBoundingClientRect();
    const left = prev.left - parent.left;
    const top = prev.top - parent.top;
    gsap.to(circles[i], {
      duration: 0.0006,
      x: left,
      y: top,
    });
  }
  requestAnimationFrame(animateCircles);
}

// Start the animation loop
animateCircles();
