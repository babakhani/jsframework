import { LitElement, html, css } from 'lit'
import { property } from 'lit/decorators.js'

export class SecondLit extends LitElement {
  @property({ type: String }) title = 'My app'
  @property({ type: String }) src = 'https://via.placeholder.com/350x150'

  _showAlert () {
    alert('Hello')
  }

  static styles = css`
    .logo {
      color:blue;
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }
  `

  render() {
    return html`
      <div class="logo"> This is second element</div>
      <div class="logo"> This is second element</div>
    `
  }
}

customElements.define('second-lit', SecondLit)
