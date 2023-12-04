import TextReveal from "../animations/TextReveal";
import Button from "../animations/Button";
import ParallaxImage from "../animations/ParallaxImage";
import List from "../animations/List";

export default class Page {
   constructor() {
      this._createTextReveals();
      this._createButtons();
      this._createParallaxImages();
      this._createLists();
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

   _createParallaxImages() {
      const images = [
         ...document.querySelectorAll('[data-animation="parallax-image"]'),
      ];

      images.forEach((image) => {
         new ParallaxImage({
            imageSection: image,
         });
      });
   }

   _createLists() {
      const lists = [...document.querySelectorAll(".list__item")];

      lists.forEach((list) => {
         new List({
            element: list,
         });
      });
   }
}
