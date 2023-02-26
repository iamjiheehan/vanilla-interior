import layout from "./layout.js";

export default class extends layout {
    constructor() {
        super();
        this.setTitle("Design");
    }

    async getHTML() {
        return `
            <div class="design">
                <div id="myProgress">
                    <div id="myBar" style = "width : 33.33%"></div>
                </div>
                <h1>선호하는 스타일을 알려주세요</h1>
                <div class="design__img-wrap"> 
                    <div class="design__drag-zone">
                        <img class="design__drag-item" draggable="true" src="/src/img/design-1.jpg" alt="Bohemian">
                        <img class="design__drag-item" draggable="true" src="/src/img/design-2.jpg" alt="Mid Century Modern">
                        <img class="design__drag-item" draggable="true" src="/src/img/design-3.jpg" alt="Scandinavian">
                        <img class="design__drag-item" draggable="true" src="/src/img/design-4.jpg" alt="Industrial">
                        <img class="design__drag-item" draggable="true" src="/src/img/design-5.jpg" alt="Preppy">
                        <img class="design__drag-item" draggable="true" src="/src/img/design-6.jpg" alt="Rustic">
                        <img class="design__drag-item" draggable="true" src="/src/img/design-7.jpg" alt="Minimal">
                        <img class="design__drag-item" draggable="true" src="/src/img/design-8.jpg" alt="Glam">
                    </div>
                    <div class="design__drag-zone design__drag-border">
                        <div class = "design__drag-zone-text">
                            <h2><span>✔</span> 마음에 드는 스타일 3가지를 여기에 넣어주세요</h2>
                            <button class="design__btn-reset" onclick="location.reload()">Reset</button>
                        </div>
                    </div>
                </div>
                <div class="design__btn-wrap">
                    <button class="design__btn">다음 페이지</button>
                </div>
            </div>
        `;
    }
    executeScript() {

        console.log("hello This is design Page");

        const draggables = document.querySelectorAll('.design__drag-item')
        const containers = document.querySelectorAll('.design__drag-zone')
    
        draggables.forEach(draggable => {
            draggable.addEventListener('dragstart', () => {
                draggable.classList.add('dragging');
            })

            draggable.addEventListener('dragend', () => {
                draggable.classList.remove('dragging');
            })
        })
        
        containers.forEach(container => {
            container.addEventListener('dragover', e => {
                e.preventDefault()
                const afterElement = getDragAfterElement(container, e.clientY)
                const draggable = document.querySelector('.dragging')
                const count = container.querySelectorAll('.design__drag-item').length;
                const isAlreadyInContainer = container.contains(draggable);
                if (!isAlreadyInContainer && afterElement == null && count < 3) {
                container.appendChild(draggable);
                } else if (!isAlreadyInContainer && count < 3) {
                item = container.insertBefore(draggable, afterElement);
                }
            })
            })
            
            function getDragAfterElement(container, y) {
                const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]
            
            return draggableElements.reduce((closest, child) => {
                    const box = child.getBoundingClientRect()
                    const offset = y - box.top - box.height / 2
                    if (offset < 0 && offset > closest.offset) {
                    return { offset: offset, element: child }
                    } else {
                    return closest
                    }
                }, { offset: Number.NEGATIVE_INFINITY }).element
            }
        }
        
}

        

    