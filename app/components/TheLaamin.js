const template = `
    <main
        style="
            display: flex;
            justify-content: center"
    >
        <canvas 
            id="laamin-canvas" 
            width="800px" 
            height="800px" 
        ></canvas>
    </main>
`

class TheLaamin extends HTMLElement {

    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.innerHTML = template
    }

    connectedCallback() {
        const LAAMIN = 'laamin'
        this.draw(LAAMIN)
        this.addEventListener('draw', () => {
            this.draw(LAAMIN)
        })
    }

    draw(text) {
        const canv = this.shadowRoot.getElementById('laamin-canvas')
        const ctx = canv.getContext('2d')

        const getRandX = () => canv.width * Math.random();
        const getRandY = () => canv.height * Math.random();
        const getRandSize = () => 30 + Math.floor(150 * Math.random())

        ctx.width = 2000
        ctx.height = 2000

        const textMetrics =  ctx.measureText(text);

        ctx.textAlign = "center";
        ctx.font = getRandSize() + 'px sans-serif';
        ctx.fillText(text, getRandX(), getRandY());
    }

}

customElements.define('the-laamin', TheLaamin)