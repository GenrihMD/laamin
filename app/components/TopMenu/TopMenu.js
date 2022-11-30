const template = `
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

    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = template
    }

}

customElements.define('top-menu', TopMenu)