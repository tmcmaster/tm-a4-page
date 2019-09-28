import {html, render} from "./web_modules/lit-html.js";

render(html`
    <style>
        body {
          padding: 0;
          margin: 0;
        } 
    </style>
    <tm-a4-page>
    
    </tm-a4-page>
`, document.querySelector('body'));