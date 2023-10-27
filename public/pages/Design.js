import layout from "./layout.js";

export default class extends layout {
    constructor(params) {
        super(params);
        this.setTitle("Design");
    }

    async getHTML() {
        return `
            <div class="design">
                <div id="myProgress">
                    <div id="myBar" style = "width : 33.33%"></div>
                </div>
                <h2 class="design-title">선호하는 스타일을 골라보세요</h2>
                <div class="design__img-wrap"> 
                    <div class="design__drag-zone">
                        <img class="design__drag-item" draggable="true" src="public/img/design-1.jpg" alt="Bohemian">
                        <img class="design__drag-item" draggable="true" src="public/img/design-2.jpg" alt="Mid Century Modern">
                        <img class="design__drag-item" draggable="true" src="public/img/design-3.jpg" alt="Scandinavian">
                        <img class="design__drag-item" draggable="true" src="public/img/design-4.jpg" alt="Industrial">
                        <img class="design__drag-item" draggable="true" src="public/img/design-5.jpg" alt="Preppy">
                        <img class="design__drag-item" draggable="true" src="public/img/design-6.jpg" alt="Rustic">
                        <img class="design__drag-item" draggable="true" src="public/img/design-7.jpg" alt="Minimal">
                        <img class="design__drag-item" draggable="true" src="public/img/design-8.jpg" alt="Glam">
                    </div>
                    <div class="design__drag-zone design__drag-border">
                        <div class = "design__drag-zone-text">
                            <h2><span>✔</span> 마음에 드는 스타일 3가지를 여기에 넣어주세요</h2>
                            <button class="reset-btn">Reset</button>
                        </div>
                    </div>
                </div>
                <div class="design__btn-wrap">
                    <a href="/board" data-link id = "next-btn"> 다음 페이지 </a>
                </div>
            </div>
        `;
    }

    executeScript() {
        console.log("hello This is design Page");
        document.querySelector(".reset-btn").addEventListener("click", () => {
            location.reload();
        });

        const draggables = document.querySelectorAll(".design__drag-item");
        const containers = document.querySelectorAll(".design__drag-zone");
        const chosenItem = [];

        draggables.forEach((draggable) => {
            draggable.addEventListener("dragstart", () => {
                draggable.classList.add("dragging");
            });

            draggable.addEventListener("dragend", () => {
                draggable.classList.remove("dragging");
            });
        });

        containers.forEach((container) => {
            container.addEventListener("dragover", (e) => {
                e.preventDefault();

                const afterElement = getDragAfterElement(container, e.clientY);
                const draggable = document.querySelector(".dragging");
                const count =
                    container.querySelectorAll(".design__drag-item").length;
                const isAlreadyInContainer = container.contains(draggable);

                if (
                    !isAlreadyInContainer &&
                    afterElement == null &&
                    count < 3 &&
                    chosenItem.length < 3
                ) {
                    container.appendChild(draggable);
                    chosenItem.push(draggable);
                } else if (
                    !isAlreadyInContainer &&
                    count < 3 &&
                    chosenItem.length < 3
                ) {
                    const item = container.insertBefore(
                        draggable,
                        afterElement
                    );
                    chosenItem.push(item);
                } else if (
                    draggable.classList.contains("item") &&
                    isAlreadyInContainer
                ) {
                    chosenItem.push(draggable);
                }

                const altTexts = chosenItem.map((image) => image.alt);
                // console.log(altTexts);
                localStorage.setItem("altTexts", JSON.stringify(altTexts));
            });
        });
        function getDragAfterElement(container, y) {
            const draggableElements = [
                ...container.querySelectorAll(".draggable:not(.dragging)"),
            ];
            return draggableElements.reduce(
                (closest, child) => {
                    const box = child.getBoundingClientRect();
                    const offset = y - box.top - box.height / 2;
                    if (offset < 0 && offset > closest.offset) {
                        return { offset: offset, element: child };
                    } else {
                        return closest;
                    }
                },
                { offset: Number.NEGATIVE_INFINITY }
            ).element;
        }
    }
}
