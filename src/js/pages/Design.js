import layout from "./layout.js";

export default class extends layout {
    constructor() {
        super();
        this.setTitle("Design");
    }
    async getHTML() {
        return `
            <div class="design">
                <h1>선호하는 스타일을 골라주세요</h1>
                <p>You are viewing Design</p>
                <div class = "design-img-wrap" > 
                    <div class="drag-items-wrap">
                        <img class= "drag-item" draggable="true" src="/src/img/design-1.jpg" alt="Bohemian">
                        <img class= "drag-item" draggable="true" src="/src/img/design-2.jpg" alt="Mid Century Modern">
                        <img class= "drag-item" draggable="true" src="/src/img/design-3.jpg" alt="Scandinavian">
                        <img class= "drag-item" draggable="true" src="/src/img/design-4.jpg" alt="Industrial">
                        <img class= "drag-item" draggable="true" src="/src/img/design-5.jpg" alt="Preppy">
                        <img class= "drag-item" draggable="true" src="/src/img/design-6.jpg" alt="Rustic">
                        <img class= "drag-item" draggable="true" src="/src/img/design-7.jpg" alt="Minimal">
                        <img class= "drag-item" draggable="true" src="/src/img/design-8.jpg" alt="Glam">
                    </div>
                    <div class="drag-box"></div>
                </div>
            </div>
        `;
    }
}
