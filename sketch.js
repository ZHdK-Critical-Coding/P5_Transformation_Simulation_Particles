let particles = []

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function update() {
  const particle = new Particle(random(.75, 2));
  // Start force: slightly sideways and upwards (gravity is in particle.js)
  let startForce = createVector(random(-0.02, 0.02), random(-0.1, -0.15));  
  particle.applyForce(startForce);  
  particles.push(particle)
}

function draw() {
  background(220);
  update()
  
  particles.forEach(p => p.draw());
  // keep only particles that are not dead
  particles = particles.filter(p => !p.dead);

  noStroke()
  text(particles.length, 10, 20)
}