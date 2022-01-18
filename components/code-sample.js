class CodeSample extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<pre><div id="snippet"></div>
    </pre><slot name="code"></slot>`;

    this.shadowRoot.addEventListener("slotchange", (event) => {
      const code = event.target.assignedElements()[0].innerHTML;
      console.log(event.target.assignedElements()[0].innerHTML);
      const snippet = code.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
      this.shadowRoot.getElementById("snippet").innerHTML = snippet;
    });
  }
}
window.customElements.define("code-sample", CodeSample);
