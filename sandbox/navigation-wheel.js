class NavigationWheel extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
        <a href="/" style="
        display: flex;
        flex-direction: column;
        align-items: center;
        width: min-content;
    ">
            <img src="/sandbox/ferris-svgrepo-com.svg" width="50">
            ←
        </a>        `;
    }
}
window.customElements.define('navigation-wheel', NavigationWheel)