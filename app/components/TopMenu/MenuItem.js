import { t } from "../../lib/html.js"

const template = t`
    <style>
        * {
            cursor: pointer;
            -moz-user-select: none;
            -khtml-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
    </style>
    
    <span>
        <slot></slot>
    </span>
`

class MenuItem extends HTMLElement {

    constructor(props) {
        super();

        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(template.cloneNode(true));
    }

    connectedCallback() {
        const href = this.getAttribute('to')
        if (href) {
            this.addEventListener('click', () => location.href = href )
        }
    }

}

customElements.define('menu-item', MenuItem)