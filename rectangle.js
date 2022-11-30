
class Box {
    constructor(x, y, h, w, c) {
      this.X = x,
        this.Y = y,
        this.height = h,
    this.wight = w,
    this.color = c;
    this.random_speed=0;
    }

    draw() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.X, this.Y, this.height, this.wight);
    }

    move() {
      this.draw();
      this.X = this.X + this.random_speed;
    }
  }

