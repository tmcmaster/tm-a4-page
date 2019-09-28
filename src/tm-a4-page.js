import {html, css, LitElement} from 'lit-element';

class TmA4Page extends LitElement {

    // noinspection JSUnusedGlobalSymbols
    static get properties() {
        return {
            heading: {type: String}
        }
    }

    constructor() {
        super();
        this.heading = 'Hello World!';
    }


    static get styles() {
        // language=CSS
        return [css`
            :host {
                display: flex;
                justify-content: center;
                box-sizing: border-box;
                background: lightgray;
                width:100vw;
                height:100vh;
                font-size: 2vh;
            }

            /*noinspection CssUnusedSymbol*/
            div.body {
                display: inline-block;
                box-sizing: border-box;
                //border: solid grey 2px;
                background: white;
            }
            
            @media only screen and (orientation: portrait) and (max-aspect-ratio: 10/14) {
                :host {
                    flex-direction: column;
                    //border: solid red 2px;
                }
            }

            @media only screen and (orientation: portrait) and (min-aspect-ratio: 10/14), only screen and (orientation: landscape) {
                :host {
                    flex-direction: row;
                    //border: solid blue 2px;
                }
            }

            @media only screen and (orientation: portrait) {
                /*noinspection CssUnusedSymbol*/
                div.body {
                    //border: solid blue 2px;
                    width: 100vw;
                    height: calc(100vw * 1.4);
                }
            }

            @media only screen and (orientation: portrait) and (min-aspect-ratio: 10/14) {
                /*noinspection CssUnusedSymbol*/
                div.body {
                    //border: solid red 2px;
                    height: 100vh;
                    width: calc(100vh / 1.4);
                }
            }

            @media only screen and (orientation: landscape) {
                /*noinspection CssUnusedSymbol*/
                div.body {
                    //border: solid green 2px;
                    height: 100vh;
                    width: calc(100vh / 1.4);
                }
            }

            ::slotted(*[slot="body"]){
                width: 100%;
                height: 100%;
            }
        `];
    }

    // noinspection JSUnusedGlobalSymbols
    render() {
        return html`
            <div class="body">
                <slot name="body">
                    <h3 style="text-align: center;margin-top: 40vh;color: grey">This is an A4 page</h3>
                </slot>
            </div>
        `;
    }
}

window.customElements.define('tm-a4-page', TmA4Page);
