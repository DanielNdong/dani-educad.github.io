const inputTextAttributes = {
    placeholder: "Introduce un valor al label",
    label: "labelName",
    nameInput: "inputname",
};

const textTemplate  = document.createElement('element');
textTemplate.innerHTML = `
<style> 
:host {
    width: 98%;
}
@media screen and (min-width: 726px){
    :host {
        max-width: 320px;
        min-width: 120px;
    } 
}
:host input {
        display: block;
        width: 98%;  
        padding: .8rem 1rem;
        font-size: .8rem;
        border-radius: 6px;  
        outline: solid .1rem #dbdbd8;
        border: none;
        color: var(--input-text-color);
    }
    :host label > span {
        display: inline-block;
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
    :host .required {
        display: inline-flex;
        color: red;
        font-size: .6rem
    }
    </style>
<label>
    <p class="required">*</p>
    <span>${inputTextAttributes.label}</span>
    <input type="text" name="${inputTextAttributes.nameInput}" id="${inputTextAttributes.nameInput}" placeholder="${inputTextAttributes.placeholder}" required/>
</label>
    `;

    class InputText extends HTMLElement {
    constructor(){
        super();
        this.root = this.attachShadow({ mode: 'open' });
        
    }

    attributeChangedCallback(attr, oldAttr, newAttr){
        if(attr === 'label') inputTextAttributes.label = newAttr;
        if(attr === 'placeholdertext') inputTextAttributes.placeholder = newAttr;
        if(attr === 'inputName') inputTextAttributes.nameInput = newAttr;
      /*   if(attr === 'hasLabel') */
}

    static get observedAttributes(){
        return ['placeholdertext', 'label', 'haslabel', 'inputname']
    }
    
    connectedCallback() {
        this.render()
        this.elements()
        this.update()
    }
    
    elements() {
        this.label = this.root.querySelector('span');
        this.input = this.root.querySelector('input');
    }
    
    update() {
        this.label.innerText = inputTextAttributes.label;
        this.input.placeholder = inputTextAttributes.placeholder;
        this.input.id = inputTextAttributes.nameInput;
        this.input.name = inputTextAttributes.nameInput;
    }

    render() {
        let clone = textTemplate.cloneNode(true)
        this.root.append(clone)
    }
    
}
customElements.define("input-text", InputText);
