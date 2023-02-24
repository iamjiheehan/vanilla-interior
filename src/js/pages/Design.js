import layout from "./layout.js";

export default class extends layout {
    constructor() {
        super();
        this.setTitle("Design");
    }

    async getHTML() {
        return `
            <div class="design">
            <h1>선호하는 스타일을 알려주세요</h1>
            <p>✔ 2개 이상 골라주세요</p>
            <p>✔ 마음에 드는 스타일을 박스안에 넣어주세요</p>
            <div class="design-img-wrap"> 
            <div class="drag-zone">
                <img class="drag-item" id="1" draggable="true" src="/src/img/design-1.jpg" alt="Bohemian">
                <img class="drag-item" id="2" draggable="true" src="/src/img/design-2.jpg" alt="Mid Century Modern">
                <img class="drag-item" id="3" draggable="true" src="/src/img/design-3.jpg" alt="Scandinavian">
                <img class="drag-item" id="4" draggable="true" src="/src/img/design-4.jpg" alt="Industrial">
                <img class="drag-item" id="5" draggable="true" src="/src/img/design-5.jpg" alt="Preppy">
                <img class="drag-item" id="6" draggable="true" src="/src/img/design-6.jpg" alt="Rustic">
                <img class="drag-item" id="7" draggable="true" src="/src/img/design-7.jpg" alt="Minimal">
                <img class="drag-item" id="8" draggable="true" src="/src/img/design-8.jpg" alt="Glam">
            </div>
            <div class="drag-zone">
                <div class="template"></div>
            </div>
            </div>
        </div>
        `;
    }
    executeScript() {
            console.log("hello");
        
            document.querySelectorAll(".drag-item").forEach(item => {
                item.addEventListener("dragstart", e => {
                    e.dataTransfer.setData("text/plain", e.target.src);
                    console.log("Drag Start");
                })
            });
        
            document.querySelectorAll(".drag-zone").forEach(item => {
                item.addEventListener("dragover", e => {
                    e.preventDefault();
                    e.dataTransfer.dropEffect = "copy";
                    console.log("Drag Over");
                })
        
                item.addEventListener("dragenter", e => {
                    item.classList.add("dragging")
                    console.log("Drag Enter");
                })
        
                item.addEventListener("dragleave", e => {
                    item.classList.remove("dragging")
                    console.log("Drag Leave");
                })
        
                item.addEventListener("drop", e => {
                    if(item > 4){
                        e.preventDefault();
                    } else {
                        let data = e.dataTransfer.getData('text/plain');
                        console.log("Drop: ", data);
                        let img = document.createElement("img");
                        img.src = data;
                        img.alt = "dropped image";
                        item.querySelector(".template").appendChild(img);
                    }
                });
            })
        }
        
}

        

    
