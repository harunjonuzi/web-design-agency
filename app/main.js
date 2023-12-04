import "../src/scss/style.scss";
import Lenis from "@studio-freight/lenis";
import TextReveal from "./animations/TextReveal";
import Button from "./animations/Button";

class App {
   constructor() {
      // "_" convention means it's a private method, and it should not be called outside this method
      this._createLenis();
      this._createTextReveals();
      this._createButtons();
      this._render();
   }

   _createTextReveals() {
      const textItems = [
         ...document.querySelectorAll('[data-animation="text-reveal"]'),
      ];

      textItems.forEach((text) => {
         new TextReveal({
            element: text,
         });
      });
   }

   _createButtons() {
      const buttons = [
         ...document.querySelectorAll('[data-animation="button"]'),
      ];

      buttons.forEach((button) => {
         new Button({
            element: button,
         });
      });
   }

   _createLenis() {
      this.lenis = new Lenis({
         lerp: 0.1,
      });
   }

   _render(time) {
      // request animation frame
      this.lenis.raf(time);

      requestAnimationFrame(this._render.bind(this));
   }
}

new App();
