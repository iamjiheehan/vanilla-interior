import layout from "./layout.js";

export default class extends layout {
    constructor() {
        super();
        this.setTitle("Design");
    }
    async getHtml() {
        return `
            <h1>Design!!!!!!!!!!!!!!</h1>
            <p>You are viewing Design</p>
            <p>
                <a href = "/design" data-link> View recent design</a>
            </p>
        `;
    }
}