window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d"); //to get the canvas object 2d
  canvas.width = 500;
  canvas.height = 500;
  console.log(ctx);

  class Mandrake {
    constructor() {
      this.image = document.getElementById("mandrake");
      this.spriteWidth = 256;
      this.spriteHeight = 256;
      this.width = this.spriteHeight;
      this.height = this.spriteWidth;
      this.x = 0;
      this.y = 0;
      this.minFrame = 0;
      this.maxFrame = 355;
    }
    draw(context) {
      context.drawImage(
        this.image,
        0 * this.spriteWidth,
        0 * this.spriteHeight,
        this.spriteWidth,
        this.spriteHeight,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
    update() {}
  }

  const mandrake = new Mandrake();
  //   console.log(mandrake);

  function animate() {
    mandrake.draw(ctx);
  }
  animate();
});
