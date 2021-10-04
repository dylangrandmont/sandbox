class CodeBlock extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                background-color: #fafafa;
                border: 1px solid #0B1354;
            }
            button {
                padding: 8px;
                background-color: #0B1354;
                color: #fafafa;
                cursor: pointer;
            }
        </style>
        `;

        this.textContent = this.innerHTML;
    }
    
    connectedCallback() {
        const template = `<pre>${this.innerHTML}</pre>`
        const placeholder = document.createElement('div');
        placeholder.insertAdjacentHTML('afterbegin', template);
        
        const node = placeholder.firstElementChild;
        
        this.shadowRoot.appendChild(node);

        const button = document.createElement('button');
        button.innerText = 'Copy';
        this.shadowRoot.appendChild(button);
        button.addEventListener('click', () => {
            navigator.clipboard.writeText(this.textContent)
        });
    }
}
window.customElements.define('code-block', CodeBlock)