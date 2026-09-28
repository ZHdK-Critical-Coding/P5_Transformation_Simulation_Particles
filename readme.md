# P5.js: Particles

[Deutsch](README_DE.md)

A simple particle system: every frame a new particle – a random letter of
"ZHDK" – is emitted at the bottom centre with a random force and mass,
rises, is pulled back by gravity and is removed when it leaves the canvas.
A starting point for particle simulations.

See also: [Nature of Code – Particles](https://natureofcode.com/particles/)

## Installation

Requirements: a current browser.

1. Open the folder in Visual Studio Code and start Live Server (click
   **Go Live** in the status bar).

Libraries (in `libraries/`): p5.js 1.10.0, p5.sound 1.0.1 (included, not
used).

## Coding Help

- **`sketch.js` → `update()`**: creates one `Particle` per frame with a
  random mass (0.75–2) and applies a random start force (slightly sideways,
  upwards). Change these ranges to change the fountain.
- **`sketch.js` → `draw()`**: calls `update()`, draws all particles, removes
  the dead ones and prints the current particle count.
- **`particle.js` → `Particle`**: the constructor sets position (bottom
  centre by default), mass, a small `gravity` vector and the letter.
  `applyForce()` stores the force; `update()` divides it by the mass, adds
  it to the acceleration and adds `gravity` to the force each frame, so the
  particle slows down and falls back.
- **`show()`**: colours the letter from red to blue depending on its height
  and sets the text size from the mass (`mass² * 5`).
- **`checkEdges()`**: marks the particle `dead` as soon as it leaves the
  canvas.
