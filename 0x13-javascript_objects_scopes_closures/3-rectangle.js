#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if (Number.isInteger(w) && w > 0 && Number.isInteger(h) && h > 0) {
      this.width = w;
      this.height = h;
    } else {
      this.width = undefined;
      this.height = undefined;
    }
  }

  print () {
    if (this.width && this.height) {
      for (let y = 0; y < this.height; y++) {
        console.log('X'.repeat(this.width));
      }
    }
  }
}
module.exports = Rectangle;
