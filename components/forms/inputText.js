const inputTextAttributes = {
    placeholder: "Introduce tu nombre",
    label: "Nombre",
};

const textTemplate  = document.createElement('element');
textTemplate.innerHTML = `
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
    :host label > span {
        display: block;
        font-size: .75rem;
        margin-bottom: .6rem;
        color: var(--input-color);
    }
    input:focus {
        outline: solid 2px #17a9ec !important;
        border: none
    }
    ::placeholder{
        color: var(--input-color);
    }
</style>
<label>
<span>${inputTextAttributes.label}</span>
<input type="text" name="firstName" id="name" placeholder="${inputTextAttributes.placeholder}" />
</label>
    `;

    class InputText extends HTMLElement {
    constructor(){
        super();
        this.root = this.attachShadow({ mode: 'closed' });
        
    }

    attributeChangedCallback(attr, oldAttr, newAttr){
        if(attr === 'label') inputTextAttributes.label = newAttr;
        if(attr === 'placeholdertext') inputTextAttributes.placeholder = newAttr;
        if(attr === 'hasLabel')
        console.log(attr)
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
        console.log(this.label)
    }
    
    update() {
        this.label.innerText = inputTextAttributes.label
        this.input.placeholder = inputTextAttributes.placeholder
    }

    render() {
        let clone = textTemplate.cloneNode(true)
        this.root.append(clone)
    }
    
}
customElements.define("input-text", InputText);
