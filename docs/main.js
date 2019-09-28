import {html, render} from "./web_modules/lit-html.js";

render(html`
    <style>
        body {
          padding: 0;
          margin: 0;
        } 
        
        h3 {
            text-align: center;
            margin-top: 40vh;
            color: blue;
        }
    </style>
    <tm-a4-page>
        <div slot="body">
            <h3>This is an A4 page</h3>
        </div>
    </tm-a4-page>
`, document.querySelector('body'));