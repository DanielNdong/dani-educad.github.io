const template = document.createElement('button');
template.innerHTML = `
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
    :host select {
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
    select:focus {
        outline: solid 2px #17a9ec !important;
        border: none
    }
    ::placeholder{
        color: var(--input-color);
    }
    
</style>
<label>
<span>Direccion/Barrio</span>
<select>
        <option>Santa María</option>
    </select>
    </label>
`;
class SelectInput extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'closed' });

    }
    connectedCallback() {
        this.elements()
        this.render()
    }

    elements() {
        const element = document.querySelector('select-input')
        console.log(this.root, element.children.length)
    }

    render() {
        let clone = template.cloneNode(true)
        this.root.appendChild(clone)
    }


}

customElements.define("select-input", SelectInput)