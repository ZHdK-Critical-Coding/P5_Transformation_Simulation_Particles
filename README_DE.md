# P5.js: Particles

[English](readme.md)

Ein einfaches Partikelsystem: In jedem Frame wird unten in der Mitte ein
neues Partikel – ein zufälliger Buchstabe aus "ZHDK" – mit zufälliger Kraft
und Masse ausgestossen. Es steigt auf, wird von der Schwerkraft
zurückgezogen und entfernt, sobald es die Zeichenfläche verlässt. Ein
Ausgangspunkt für Partikelsimulationen.

Siehe auch: [Nature of Code – Particles](https://natureofcode.com/particles/)

## Installation

Voraussetzungen: ein aktueller Browser.

1. Den Ordner in Visual Studio Code öffnen und Live Server starten (in der
   Statusleiste auf **Go Live** klicken).

Bibliotheken (in `libraries/`): p5.js 1.10.0, p5.sound 1.0.1 (eingebunden,
nicht verwendet).

## Coding-Hilfe

- **`sketch.js` → `update()`**: erzeugt pro Frame ein `Particle` mit
  zufälliger Masse (0.75–2) und gibt ihm eine zufällige Startkraft (leicht
  seitlich, nach oben). Diese Bereiche ändern, um die Fontäne zu verändern.
- **`sketch.js` → `draw()`**: ruft `update()` auf, zeichnet alle Partikel,
  entfernt die toten und zeigt die aktuelle Anzahl an.
- **`particle.js` → `Particle`**: Der Konstruktor setzt Position
  (standardmässig unten in der Mitte), Masse, einen kleinen
  `gravity`-Vektor und den Buchstaben. `applyForce()` speichert die Kraft;
  `update()` teilt sie durch die Masse, addiert sie zur Beschleunigung und
  zählt in jedem Frame `gravity` zur Kraft dazu – so wird das Partikel
  langsamer und fällt zurück.
- **`show()`**: färbt den Buchstaben je nach Höhe von Rot nach Blau und
  setzt die Textgrösse aus der Masse (`mass² * 5`).
- **`checkEdges()`**: markiert das Partikel als `dead`, sobald es die
  Zeichenfläche verlässt.
