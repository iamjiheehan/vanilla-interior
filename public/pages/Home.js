import layout from "./layout.js";


export default class extends layout {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }
    async getHTML() {
        return `
            <div class="home-background">
                <div class="home-box">
                    <h1>Craft Your <br> Dreams</h1>
                    <h3>인테리어 스타일링과 예상 견적 서비스를 제공합니다.</h3>
                    <div class="button-wrapper">
                        <a href="/design" data-link id = "next-btn"> 시작하기 </a>
                    </div>
                </div>
                <div class="home-img">
            </div>
        `;
    }
    executeScript() {
        console.log("Hello This is Main Page");
    }
}
