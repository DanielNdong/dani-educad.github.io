const inputNumberAttributes = {
    placeholder: "Pon tu numero",
    label: "Email",
    hasLabel: true,
};

const numberTemplate  = document.createElement('element');
numberTemplate.innerHTML = `
<style> 
:host {
    width: 98%;
}
@media screen and (min-width: 726px){
    :host {
        min-width: 120px;
        max-width: 320px;
    } 
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
    <span>${inputNumberAttributes.label}</span>
    <input type="number" name="number" id="number" placeholder="${inputNumberAttributes.placeholder}" required/>
</label>
    `;

class InputNumber extends HTMLElement {
    constructor(){
        super();
        this.root = this.attachShadow({ mode: 'closed' });
    }

    attributeChangedCallback(attr, oldAttr, newAttr){
        if(attr === 'label') inputNumberAttributes.label = newAttr;
        if(attr === 'placeholdertext') inputNumberAttributes.placeholder = newAttr;
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
        this.label.innerText = inputNumberAttributes.label
        this.input.placeholder = inputNumberAttributes.placeholder
    }

    render() {
        let clone = numberTemplate.cloneNode(true)
        this.root.append(clone)
    }
    
}
customElements.define("input-number", InputNumber);
