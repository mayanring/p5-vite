import p5 from 'p5';

let containerId = "container";

let sketch = function(p) {
  p.setup = function() {
    let container = document.getElementById(containerId);
    p.createCanvas(container.clientWidth, container.clientHeight);
  }

  p.draw = function() {
    let color = p.color('#e74c3c');

    p.background('rgba(52, 73, 94, 0.2)');
    p.noStroke();
    p.fill(color);
    p.ellipse(p.mouseX, p.mouseY, 64, 64);
  }
}

new p5(sketch, containerId);

