const inputEmailAttributes = {
    placeholder: "myexample@gmail.com",
    label: "Email",
    hasLabel: true,
};

const emailTemplate  = document.createElement('element');
emailTemplate.innerHTML = `
<style> 
    :host {
        width: 100%;  
        min-width: 120px;
        max-width: 320px;
    } 
    :host input {
        display: block;
        width: 100%;
        padding: .8rem 1rem;
        font-size: .8rem;
        border-radius: 6px;  
        outline: solid .1rem #dbdbd8;
        border: none;
        color: var(--input-text-color);
    }
    input:focus {
        outline: solid 2px #17a9ec !important;
        border: none
    }
    :host label > span {
        display: block;
        font-size: .75rem;
        margin-bottom: .6rem;
        color: var(--input-color);
    }
    :host label > span.hiddenLabel {
        display: none;
    }
    ::placeholder{
        color: var(--input-color);
    }
</style>
<label>
    <span>${inputEmailAttributes.label}</span>
    <input type="email" name="email" id="email" placeholder="${inputEmailAttributes.placeholder}" />
</label>
    `;

class InputEmail extends HTMLElement {
    constructor(){
        super();
        this.root = this.attachShadow({ mode: 'closed' });
    }

    attributeChangedCallback(attr, oldAttr, newAttr){
        if(attr === 'label') inputEmailAttributes.label = newAttr;
        if(attr === 'placeholdertext') inputEmailAttributes.placeholder = newAttr;
        if(attr === 'hasLabel') {
            this.label.classList(newAttr === true ? 'hiddenLabel' : '');
            console.log(newAttr)
        }
}

    static get observedAttributes(){
        return ['placeholdertext', 'label', 'hasLabel']
    }
    
    connectedCallback() {
        this.render()
        this.elements()
        this.update()
    }
    
    elements() {
        this.label = this.root.querySelector('span')
        this.input = this.root.querySelector('input')
    }
    
    update() {
        this.label.innerText = inputEmailAttributes.label
        this.input.placeholder = inputEmailAttributes.placeholder
    }

    render() {
        let clone = emailTemplate.cloneNode(true)
        this.root.append(clone)
    }
    
}
customElements.define("input-email", InputEmail);
