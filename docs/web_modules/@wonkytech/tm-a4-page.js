import { h as html } from '../common/lit-html-9957b87e.js';
import { LitElement } from '../lit-element.js';

class TmA4Page extends LitElement {
  // noinspection JSUnusedGlobalSymbols
  static get properties() {
    return {
      heading: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.heading = 'Hello World!';
  } // noinspection JSUnusedGlobalSymbols


  render() {
    return html`
      <style>
        :host {
          display: inline-block;
        }
        h2 {
            color: gray;
        }
      </style>
      <h2>${this.heading}</h2>
    `;
  }

}

window.customElements.define('tm-a4-page', TmA4Page);
