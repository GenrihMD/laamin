import { t } from "../lib/html.js"

const template = t`
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

    constructor(props) {
        super();

        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(template.cloneNode(true));

        this.drawLaamin()
    }

    drawLaamin() {
        const LAAMIN = 'laamin'
        const canv = this.shadowRoot.getElementById('laamin-canvas')
        const ctx = canv.getContext('2d')

        ctx.width = 2000
        ctx.height = 2000

        const textMetrics =  ctx.measureText(LAAMIN);

        console.log(textMetrics.width, textMetrics)

        ctx.textAlign = "center";
        ctx.font = '200px sans-serif';
        ctx.fillText(LAAMIN, canv.width/2, canv.height/2);
    }

}

customElements.define('the-laamin', TheLaamin)