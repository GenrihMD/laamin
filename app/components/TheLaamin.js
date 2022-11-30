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

        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = template
    }

    connectedCallback() {
        const LAAMIN = 'laamin'
        this.canvas = this.shadowRoot.getElementById('laamin-canvas')
        this.draw(LAAMIN)

        this.addEventListener('draw', () => {
            const draw = this.draw.bind(this);

            (function drawLaamin() {
                draw(LAAMIN)
                setTimeout(
                    () => requestAnimationFrame(() => {
                        drawLaamin()
                    }),
                    100
                )
            })()
        })

        this.addEventListener('clear', () => {
            this.clear()
        })
    }

    draw(text) {
        const ctx = this.canvas.getContext('2d')

        const getRandX = () => this.canvas.width * Math.random();
        const getRandY = () => this.canvas.height * Math.random();
        const getRandSize = () => 30 + Math.floor(150 * Math.random())

        ctx.width = 2000
        ctx.height = 2000

        const textMetrics =  ctx.measureText(text);

        ctx.textAlign = "center";
        ctx.font = getRandSize() + 'px sans-serif';
        ctx.fillText(text, getRandX(), getRandY());
    }

    clear() {
        const context = this.canvas.getContext('2d');
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

}

customElements.define('the-laamin', TheLaamin)