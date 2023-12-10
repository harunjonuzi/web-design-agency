import { gsap } from "gsap";
import SplitType from "split-type";
import Observer from "../classes/Observer";

export default class TextReveal extends Observer {
   constructor({ element }) {
      super({ element: element });
      this.element = element;

      const splitted = new SplitType(this.element, {
         types: "words",
      });

      this.splitWords = new SplitType(splitted.words, {
         types: "words",
      });
   }

   onEnter() {
      gsap.to(this.splitWords.words, {
         y: "0%",
         duration: 1,
         stagger: 0.05,
         ease: "power3inOut",
      });
   }
}
