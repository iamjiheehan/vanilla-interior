import layout from "./layout.js";

export default class extends layout {
    constructor() {
        super();
        this.setTitle("Home");
    }
    async getHtml() {
        return `
            <h1>HOME!!!!!!!!!!!!!!</h1>
            <p>You are viewing Home</p>
            <p>
                <a href = "/home" data-link> View recent Home</a>
            </p>
        `;
    }
}