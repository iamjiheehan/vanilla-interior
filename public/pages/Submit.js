import layout from "./layout.js";

export default class extends layout {
    constructor(params) {
        super(params);
        this.setTitle("Submit");
    }

    async getHTML() {
        return `
            <div class="submit">
                <div id="myProgress">
                    <div class="progress__inner">
                        <span>✔</span>
                    </div>
                    <div id="myBar" style = "width : 100%"></div>
                </div>
                <div class="submit__content">
                    <h2 class = "submit__content-title"> 입력한 정보 확인하기 </h2>
                    <div class="submit__flex">
                        <div class="submit__content-left">
                            <h2> 선호하는 스타일 </h2>
                            <div id="preferred-style-image"></div>
                            <h3 class="submit__chosenItems submit__result"></h3>
                            <div class="submit__result_wrap">
                                <h3> 공간 크기 </h3>
                                <h3 class="submit__scale submit__result"></h3>
                            </div>
                            <div class="submit__result_wrap">
                                <h3> 필요한 날짜 </h3>
                                <h3 class="submit__deadline submit__result"></h3>
                            </div>
                            <div class="submit__result_wrap">
                                <h3> 견적 금액 </h3>
                                <h3 class="submit__price submit__result"></h3>
                            </div>
                        </div>
                        <hr />
                        <div class="submit__content-right">
                            <h2 class = "submit__content-title">Get in Touch</h2>
                            <form id="contact-form">
                                <div class="submit__input-wrap">
                                    <div class="form__input-container">
                                        <input type="text" id="name" name="name" placeholder="이름" required>
                                        <span id="name-error-message" class="error-message"></span>
                                    </div>
                                    <div class="form__input-container">
                                        <input type="tel" id="phone" name="phone" placeholder="연락처" required>
                                        <span id="phone-error-message" class="error-message"></span>
                                    </div>
                                </div>
                                <div class="form__input-container">
                                    <input type="email" id="email" name="email" placeholder="이메일" required>
                                    <span id="email-error-message" class="error-message"></span>
                                </div>
                                <div class="form__input-container">
                                    <textarea id="message" name="message" placeholder="메세지를 입력해주세요" required></textarea>
                                    <span id="message-error-message" class="error-message"></span>
                                </div>
                                <input type="file" id="attachment" name="attachment" accept=".jpg,.jpeg,.png,.pdf">
                                <div class="submit__button-wrap">
                                    <button type="submit" class = "reset-btn msg-btn">Send Message</button>
                                </div>
                                <div id="success-message" style="display: none;">메일이 성공적으로 발송되었습니다.</div>
                            </form>
                        </div>
                    </div>
                    <div class="board__btn-flex">
                        <div class="board__btn-wrap">
                            <a href="/board" data-link id = "next-btn"> 이전 페이지 </a>
                        </div>
                        <div>
                            <p>
                                <a onclick="location.reload()" class="reset-btn"> 다시 입력하기 </a>
                            </p>
                        </div>
                    </div>
                    <div id="selected-styles"></div>
                </div>
            </div>
        `;
    }

    executeScript() {
        console.log("Hello This is Submit Page");

        const form = document.querySelector('#contact-form');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;

            if (!name || !email || !message) {
                alert('빈 칸을 입력해주세요');
                return;
            }

            if (!isValidEmail(email)) {
                alert('이메일을 입력해주세요.');
                return;
            }
            const successMessage = document.getElementById('success-message');
            successMessage.style.display = 'block';
        });
            function isValidEmail(email) {
            const regex = /\S+@\S+\.\S+/;
            return regex.test(email);
        }

        const nameInput = document.getElementById('name');
        const nameErrorMessage = document.getElementById('name-error-message');
        nameInput.addEventListener('input', (event) => {
            const inputValue = event.target.value;
            const containsNumber = /\d/.test(inputValue);
            const containsLetter = /[a-zA-Z]/.test(inputValue);
            if (containsNumber) {
                nameErrorMessage.textContent = '이름에 숫자를 입력할 수 없습니다.';
            } else if (containsLetter) {
                nameErrorMessage.textContent = '';
            }
        });
        
        const phoneInput = document.getElementById('phone');
        const phoneErrorMessage = document.getElementById('phone-error-message');
        phoneInput.addEventListener('input', (event) => {
            const inputValue = event.target.value;
            const containsNumber = /\d/.test(inputValue);
            const containLetter = /[a-zA-Z]/.test(inputValue);
            if (containsNumber) {
                phoneErrorMessage.textContent = '';
            } else if (containLetter) {
                phoneErrorMessage.textContent = '연락처 형식이 올바르지 않습니다.';
            }
        });

        // design페이지에서 드래그앤 드롭 된 이미지의 alt text값
        
        const altTexts = JSON.parse(localStorage.getItem('altTexts'));
        const chosenItemsEl = document.querySelector('.submit__chosenItems');
        chosenItemsEl.textContent = altTexts.join(', ');

        const images = [
            {src: "public/img/design-1.jpg", alt: "Bohemian"},
            {src: "public/img/design-2.jpg", alt: "Tropical"},
            {src: "public/img/design-3.jpg", alt: "Elegant"},
            {src: "public/img/design-4.jpg", alt: "Plant friendly"},
            {src: "public/img/design-5.jpg", alt: "Wooden"},
            {src: "public/img/design-6.jpg", alt: "Dark"},
            {src: "public/img/design-7.jpg", alt: "Cozy"},
            {src: "public/img/design-8.jpg", alt: "Simple"}
        ];

        const matchingImages = images.filter(img => altTexts.includes(img.alt));

        if (matchingImages.length > 0) {
            const imageContainer = document.getElementById('preferred-style-image');
            matchingImages.forEach(img => {
                const image = document.createElement('img');
                image.src = img.src;
                image.alt = img.alt;
                imageContainer.appendChild(image);
            });
        }
        

        //board 페이지 input 값들 가져오기

        //견적 금액
        const result = localStorage.getItem("result");
        const resultInput = document.querySelector('.submit__price');
        resultInput.textContent = result.slice(0, -5);

        //공간 크기 
        const scaleInput = document.querySelector('.submit__scale');
        
        function getScale() {
            const width = localStorage.getItem("width");
            const length = localStorage.getItem("length");
            const scale = localStorage.getItem("scale");
            if(!scale){
                scaleInput.textContent = width * length + '㎡';
            } else {
                scaleInput.textContent = scale + '㎡';
            }
        }  
        getScale();
    
        //납품 날짜
        const deadline = localStorage.getItem("deadline");
        const deadlineInput = document.querySelector('.submit__deadline');
        deadlineInput.textContent = deadline;
        
    }
}