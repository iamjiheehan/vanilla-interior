import layout from "./layout.js";

export default class extends layout {
    constructor() {
        super();
        this.setTitle("Board");
    }
    async getHTML() {
        return `
            <h1>Boards!!!!!!!!!이거 실화냐?!!!!!</h1>
            <p>You are viewing Boards</p>
            <p>
                <a href = "/board" data-link> View recent Boards</a>
            </p>
        `;
    }




}