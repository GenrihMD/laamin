import { t } from "../../lib/html.js"

const template = t`
    <style>
        .top-menu {
            margin: 10px 10px;
        }
        nav {
            justify-content: space-evenly;
            display: flex;
        }
    </style>
    
    <div class="top-menu">
        <nav>
            <slot></slot>
        </nav>
    </div>
`

class TopMenu extends HTMLElement {

    constructor(props) {
        super();

        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(template.cloneNode(true));
    }

}

customElements.define('top-menu', TopMenu)