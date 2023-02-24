import layout from "./layout.js";

export default class extends layout {
    constructor() {
        super();
        this.setTitle("Home");
    }
    async getHTML() {
        return `
            <div class="home-background">
                <div class="home-box">
                    <h1>Make room for better living</h1>
                    <h1>We Make Your Home Better</h1>
                    <p>Stunning interior design services, now within reach</p>
                    <button>Find your style</button>
                    <p>
                        <a href = "#" Find your style></a>
                    </p>
                </div>
                </div>
            </div>
        `;
    }
}
