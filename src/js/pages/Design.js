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
                    <div class="drag-items-wrap">
                        <img class="drag-item" draggable="true" src="/src/img/design-1.jpg" alt="Bohemian">
                        <img class="drag-item" draggable="true" src="/src/img/design-2.jpg" alt="Mid Century Modern">
                        <img class="drag-item" draggable="true" src="/src/img/design-3.jpg" alt="Scandinavian">
                        <img class="drag-item" draggable="true" src="/src/img/design-4.jpg" alt="Industrial">
                        <img class="drag-item" draggable="true" src="/src/img/design-5.jpg" alt="Preppy">
                        <img class="drag-item" draggable="true" src="/src/img/design-6.jpg" alt="Rustic">
                        <img class="drag-item" draggable="true" src="/src/img/design-7.jpg" alt="Minimal">
                        <img class="drag-item" draggable="true" src="/src/img/design-8.jpg" alt="Glam">
                    </div>
                    <div class="drag-zone"></div>
                </div>
            </div>
        `;
    }
    executeScript() {
        console.log("hello");

        const items = document.querySelectorAll('.drag-item');
    const dragzone = document.querySelector('.drag-zone');

    items.forEach(item => {
        item.addEventListener('dragover', e => {
            e.preventDefault();
        });
        item.addEventListener('dragenter', e => {
            e.preventDefault();
            item.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        });
        item.addEventListener('dragleave', e => {
            item.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        });
        item.addEventListener('drop', e => {
            e.preventDefault();
            const draggable = document.querySelector('.drag-item.dragging');
            if (draggable) {
                const dragZoneRect = dragzone.getBoundingClientRect();
                const itemRect = item.getBoundingClientRect();
                if (itemRect.top >= dragZoneRect.top && itemRect.bottom <= dragZoneRect.bottom && itemRect.left >= dragZoneRect.left && itemRect.right <= dragZoneRect.right) {
                    dragzone.appendChild(draggable);
                    item.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
                }
            }
        });
    });
    dragzone.addEventListener('dragover', e => {
        e.preventDefault();
    });
    dragzone.addEventListener('dragenter', e => {
        e.preventDefault();
        dragzone.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    });
    dragzone.addEventListener('dragleave', e => {
        dragzone.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    });
    dragzone.addEventListener('drop', e => {
        e.preventDefault();
        const draggable = document.querySelector('.drag-item.dragging');
        if (draggable) {
            dragzone.appendChild(draggable);
            dragzone.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        }
    });
    }
}
