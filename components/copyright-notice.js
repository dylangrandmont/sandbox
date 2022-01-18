class CopyrightNotice extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<p>© 2021-2022 Dylan Grandmont</p>`;
  }
}
window.customElements.define("copyright-notice", CopyrightNotice);
