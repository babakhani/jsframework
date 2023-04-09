import { LitElement, html, css } from 'lit'
import { property } from 'lit/decorators.js'

export class FirstLit extends LitElement {
  @property({ type: String }) title = 'My app'
  @property({ type: String }) src = 'https://via.placeholder.com/350x150'

  _showAlert () {
    alert('Hello')
  }

  static styles = css`
    .logo {
      color:green;
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    .logo img {
      max-width: 200px;
      max-height: 100px;
    }
  `

  render() {
    return html`
      <div class="logo">
        <h1>This is first lit</h1>
        ${this.title}
        ${this.src}
        <img @click="${this._showAlert}" src="${this.src}">
      </div>
    `
  }
}

customElements.define('first-lit', FirstLit);
