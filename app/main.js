import "../src/scss/style.scss";
import Lenis from "@studio-freight/lenis";
import Home from "./pages/Home";

class App {
    constructor() {
        // It's common to set the initial opacity explicitly in JavaScript to avoid a flicker effect during page load.
        document.body.style.opacity = "1";
        // "_" convention means it's a private method, and it should not be called outside this method

        // Lenis
        this._createLenis();
        this._createHome();
        this._render();
    }

    _createHome() {
        this.home = new Home();
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
