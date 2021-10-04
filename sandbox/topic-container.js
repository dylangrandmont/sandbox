class TopicContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
        <style>
        h6 {
            display: flex;
            align-items: center;
            gap: 4px;
        }
        .topic {
            background-color: var(--palette-main-5);
            color: var(--palette-main-0);
            border-radius: 8px;
            padding: 2px 4px;
}
    </style>
        `;
    }
    
    connectedCallback() {
        const h6 = document.createElement('h6');
        const topics = this.getAttribute('topics')
        h6.innerText = 'Topics: ';
        topics.split(',').forEach(topic => {
            const element = document.createElement('div')
            element.classList.add('topic')
            element.innerText = topic;
            h6.appendChild(element)
        })
        this.shadowRoot.appendChild(h6);
    }
}
window.customElements.define('topic-container', TopicContainer)