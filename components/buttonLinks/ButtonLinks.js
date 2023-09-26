const template = document.createElement('template')
let linkBackgroundColor = "#0b2031";
let url = "";
template.innerHTML = `
<style>
    :host {
        display: inline-block;
        width: auto;
    }
    :host .link {
    display: flex;
    align-items: center;
    width: max-content;
    padding: 1rem 3rem;
    border: solid .4px ${linkBackgroundColor};
    font-weight: 500;
    font-size: 18px;
    background-color: ${linkBackgroundColor};
    color: #eeeeee;
    gap: 10px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    text-decoration: none;
    border-radius: 50px;
    border: solid .4px #0f0d3e;
    color: #0f0d3e;
    }
    :host .link:hover {
    color: ${linkBackgroundColor};
    background-color: #f6f6f6;
    }
    :host .link:active {
    background-color: #c3c3c3;
    }
    :host .link svg {
    transition: all 0.2s ease-in-out;
    fill: #fff;
    }
    :host .link:hover svg {
    fill: var(--color-white);
    transform: translateX(15px);
    transition: all 0.2s ease-in-out;
    }
    :host .link svg {
    fill: #fff
    }
    :host a.link-color-white {
        background-color: #fff;
        color: #0b2031;
        border-color: #0b2031; 
    }
    :host a.link-color-inherit {
        border-color: #fff;
        color: #fff;
    }
    :host .link.link-color-inherit:hover {
        background-color: #fff;
        color: ${linkBackgroundColor};
    }
    :host .link.link-color-inherit:active {
        background-color: #c8c8c8;
    }
    :host .hiddenBorder {
        border-color: inherit;
    }
    :host a.hiddenArrow svg{
        display: none;
    }
</style>
    <a class="link" href="${url}">
        <slot name="text">Texto editable</slot>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-arrow-right" width="32" height="32" viewBox="0 0 24 24" stroke-width="1" stroke="#0f0d3e" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
        <path d="M16 12l-4 -4" />
        <path d="M16 12h-8" />
        <path d="M12 16l4 -4" />
      </svg>
    </a>
`;


class ButtonLinks extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'closed' })
        let clone = template.content.cloneNode(true);
        this.root.append(clone);
        /* Elements */
        this.linkButton = this.root.querySelector('a');
    }

    static get observedAttributes() {
        return ['color', 'borders', 'href', 'hiddenarrow']
    }


    /* Añadimos y eliminamos las clases segun los atributos que tenga la plantilla */
    addLinkColorByAttribute() {
        return this.linkButton.classList.add('link-color-white')
    }
    removeLinkColorByAttribute() {
        return this.linkButton.classList.remove('link-color-white')
    }
    /* Por implementar.... */
    addInheritColor() {
        return this.linkButton.classList.add('link-color-inherit')
    }
    removeInheritColor() {
        return this.linkButton.classList.remove('link-color-inherit')
    }

    addLinkBorderByAttribute() {
        return this.linkButton.classList.add('hiddenBorder')
    }
    removeLinkBorderByAttribute() {
        return this.linkButton.classList.remove('hiddenBorder')
    }

    addArrowByAttribute() {
        return this.linkButton.classList.add('hiddenArrow')
    }
    removeArrowByAttribute() {
        return this.linkButton.classList.remove('hiddenArrow')
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {
        /* Establecemos el valor del atributo href */
        if (nameAttr.toLowerCase() === 'href') {
            this.linkButton.setAttribute('href', newValue);
        }
        /* Evaluamos el valor de la atributo 'color' */
        if (nameAttr.toLowerCase() === 'color') {
            newValue === 'white' ?
                this.addLinkColorByAttribute() :
                this.removeLinkColorByAttribute();
        }
        if (nameAttr.toLowerCase() === 'color') {
            newValue === 'inherit' ?
            this.addInheritColor() :
            this.removeInheritColor();
        }
        /* Evaluamos el valor de la atributo 'hiddenBorder' */
        if (nameAttr.toLowerCase() === 'borders') {
            newValue === 'true' ?
                this.addLinkBorderByAttribute() :
                this.removeLinkBorderByAttribute();
        }
        if (nameAttr.toLowerCase() === 'hiddenarrow') {
            newValue === 'true' ?
                this.addArrowByAttribute() :
                this.removeArrowByAttribute();
                console.log(this.color())
        }
    }

}

customElements.define("button-link", ButtonLinks);