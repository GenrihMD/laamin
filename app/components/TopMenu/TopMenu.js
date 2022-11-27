import { t } from "../../lib/html.js"

const template = t`
    <nav>
        <slot></slot>
    </nav>
`

class TopMenu extends HTMLElement {

    constructor(props) {
        super();

        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(template.cloneNode(true));
    }

}

customElements.define('top-menu', TopMenu)