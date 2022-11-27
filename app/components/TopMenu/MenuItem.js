const template = `
    <style>
        * {
            cursor: pointer;
            -moz-user-select: none;
            -khtml-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        #sub-menu {
            display: none;
            position: absolute;
            background: black;
            color: white;
            padding: 5px 2px;
            top: 100%;
            left: 0;
        }
    </style>
    
    <slot></slot>
    
    <div id="sub-menu">
        <slot name="submenu"></slot>
    </div>
`

class MenuItem extends HTMLElement {

    constructor(props) {
        super();

        const shadowRoot = this.attachShadow({ mode: "open" })
        shadowRoot.innerHTML = template
        this.style.position = 'relative'
    }

    connectedCallback() {
        const type = this.getAttribute('type')

        switch (type) {
            case 'link':
                const href = this.getAttribute('href')
                if (href) {
                    this.addEventListener('click', () => location.href = href )
                }
                break

            case 'menu':
                this.addEventListener('mouseover', () => {
                    this.shadowRoot.getElementById('sub-menu').style.display = 'block'
                })

                this.addEventListener('mouseout', () => {
                    this.shadowRoot.getElementById('sub-menu').style.display = 'none'
                })
                break

            case 'action':
                const action = this.getAttribute('action')
                if (action) {
                    this.addEventListener('click', () => {
                        const event = new Event(action, {"bubbles":true, "cancelable":false})
                        document.dispatchEvent(event)
                    })
                }
                break
        }
    }

}

customElements.define('menu-item', MenuItem)