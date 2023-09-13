class HolaMundo extends HTMLElement {

  constructor() {
    super()
  }

  connectedCallback() {
    const gif = this.getAttribute("gif")
    this.inneHTML = "<h1>HOLA MUNDO</h1>"
  }


}
 customElement.define("hola-mundo", HolaMundo)

