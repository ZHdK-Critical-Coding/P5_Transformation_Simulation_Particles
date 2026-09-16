
class Particle {
  constructor(mass = 1, x = width / 2, y = height) {
    this.position = createVector(x, y)
    this.mass = mass;
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.gravity = createVector(0,0.002)
    this.dead = false
    this.string = "ZHDK".charAt(random(4))
  }

  applyForce(force) {
    this.force = force
  }

  update() {
    if (this.force) {
      let f = p5.Vector.div(this.force, this.mass);
      this.acceleration.add(f);
      this.force.add(this.gravity)
    }
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  show() {
    noStroke()
    push()
        fill(255 - (height - this.position.y), 0, (height - this.position.y));
        textSize((this.mass * this.mass) * 5);    
        text(this.string, this.position.x, this.position.y)
    pop()
  }

  checkEdges() {
    if (
      (this.position.x > width) || (this.position.x < 0) || (this.position.y > height) || (this.position.y < 0)
    ) {
      this.dead = true
    }
  }

  draw() {
    this.update();
    this.show();
    this.checkEdges();
  }
}