class CodeSample extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<pre><div id="snippet"></div>
    </pre><slot name="code"></slot>`;

    this.shadowRoot.addEventListener("slotchange", (event) => {
      const code = event.target.assignedElements()[0].innerHTML;
      const indentation = code.match(/\s*/)[0].replace("\n", "").length;
      const snippet = code
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replace(new RegExp(`^\\s{${indentation}}`, "gm"), ""); // remove leading indentation
      this.shadowRoot.getElementById("snippet").innerHTML = snippet;
    });
  }
}
window.customElements.define("code-sample", CodeSample);
