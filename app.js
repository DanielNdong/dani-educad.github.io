class HolaMundo extend HTMLElement {

  constructor() {
    super()
  }

  connectedCallback() {
    const gif = this.getAttribute("gif")
    this.inneHTML = "<h1>HOLA MUNDO</h1>"
  }


}
 customElement.define("hola-mundo", HolaMundo)

class ElementoEspecifico extend HTMLElement {

  constructor() {
  super()

    this.innerHTML = "<p>Este es un componento con un elemento especifico<p>"
}

}

customElement.defin("elemento-especifico", ElementoEspecifico, options: {extends: 'button'})
