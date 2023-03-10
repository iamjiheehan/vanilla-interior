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
                        <span>โ</span>
                    </div>
                    <div id="myBar" style = "width : 100%"></div>
                </div>
                <h1>๐That's all. Thank you!๐</h1>
                <div class="submit__content">
                    <div class="submit__flex">
                        <div class="submit__content-left">
                            <h1 class = "submit__content-title"> ์๋ ฅํ ์ ๋ณด ํ์ธํ๊ธฐ </h1>
                            <h2> ์ ํธํ๋ ์คํ์ผ </h2>
                            <div id="preferred-style-image"></div>
                            <h3 class="submit__chosenItems submit__result"></h3>
                            <h2> ๊ณต๊ฐ ํฌ๊ธฐ </h2>
                            <h3 class="submit__scale submit__result"></h3>
                            <h2> ํ์ํ ๋ ์ง </h2>
                            <h3 class="submit__deadline submit__result"></h3>
                            <h2> ๊ฒฌ์  ๊ธ์ก </h2>
                            <h3 class="submit__price submit__result"></h3>
                        </div>
                        <div class="submit__content-right">
                            <h1 class = "submit__content-title">Get in Touch</h1>
                            <form id="contact-form">
                                <div class="submit__input-wrap">
                                    <div class="form__input-container">
                                        <input type="text" id="name" name="name" placeholder="์ด๋ฆ" required>
                                        <span id="name-error-message" class="error-message"></span>
                                    </div>
                                    <div class="form__input-container">
                                        <input type="tel" id="phone" name="phone" placeholder="์ฐ๋ฝ์ฒ" required>
                                        <span id="phone-error-message" class="error-message"></span>
                                    </div>
                                </div>
                                <div class="form__input-container">
                                    <input type="email" id="email" name="email" placeholder="์ด๋ฉ์ผ" required>
                                    <span id="email-error-message" class="error-message"></span>
                                </div>
                                <div class="form__input-container">
                                    <textarea id="message" name="message" placeholder="๋ฉ์ธ์ง๋ฅผ ์๋ ฅํด์ฃผ์ธ์" required></textarea>
                                    <span id="message-error-message" class="error-message"></span>
                                </div>
                                <input type="file" id="attachment" name="attachment" accept=".jpg,.jpeg,.png,.pdf">
                                <div class="submit__button-wrap">
                                    <button type="submit" class = "reset-btn mgs-btn">Send Message</button>
                                </div>
                                <div id="success-message" style="display: none;">๋ฉ์ผ์ด ์ฑ๊ณต์ ์ผ๋ก ๋ฐ์ก๋์์ต๋๋ค.</div>
                            </form>
                        </div>
                    </div>
                    <div class="board__btn-flex">
                        <div class="board__btn-wrap">
                            <a href="/board" data-link id = "next-btn"> ์ด์  ํ์ด์ง </a>
                        </div>
                        <div>
                            <p>
                                <a onclick="location.reload()" class="reset-btn"> ๋ค์ ์๋ ฅํ๊ธฐ </a>
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
                alert('๋น ์นธ์ ์๋ ฅํด์ฃผ์ธ์');
                return;
            }

            if (!isValidEmail(email)) {
                alert('์ด๋ฉ์ผ์ ์๋ ฅํด์ฃผ์ธ์.');
                return;
            }
            // Send the form data to the server using AJAX or fetch API
            const successMessage = document.getElementById('success-message');
            successMessage.style.display = 'block';
        });
            function isValidEmail(email) {
            // Use a regular expression to validate the email address
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
                nameErrorMessage.textContent = '์ด๋ฆ์ ์ซ์๋ฅผ ์๋ ฅํ  ์ ์์ต๋๋ค.';
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
                phoneErrorMessage.textContent = '์ฐ๋ฝ์ฒ ํ์์ด ์ฌ๋ฐ๋ฅด์ง ์์ต๋๋ค.';
            }
        });

        // designํ์ด์ง์์ ๋๋๊ทธ์ค ๋๋กญ ๋ ์ด๋ฏธ์ง์ alt text๊ฐ
        
        const altTexts = JSON.parse(localStorage.getItem('altTexts'));
        const chosenItemsEl = document.querySelector('.submit__chosenItems');
        chosenItemsEl.textContent = altTexts.join(', ');

        const images = [
            {src: "public/img/design-1.jpg", alt: "Bohemian"},
            {src: "public/img/design-2.jpg", alt: "Mid Century Modern"},
            {src: "public/img/design-3.jpg", alt: "Scandinavian"},
            {src: "public/img/design-4.jpg", alt: "Industrial"},
            {src: "public/img/design-5.jpg", alt: "Preppy"},
            {src: "public/img/design-6.jpg", alt: "Rustic"},
            {src: "public/img/design-7.jpg", alt: "Minimal"},
            {src: "public/img/design-8.jpg", alt: "Glam"}
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
        

        //board ํ์ด์ง input ๊ฐ๋ค ๊ฐ์ ธ์ค๊ธฐ

        //๊ฒฌ์  ๊ธ์ก
        const result = localStorage.getItem("result");
        const resultInput = document.querySelector('.submit__price');
        resultInput.textContent = result.slice(0, -5);

        //๊ณต๊ฐ ํฌ๊ธฐ 
        const scaleInput = document.querySelector('.submit__scale');
        
        function getScale() {
            const width = localStorage.getItem("width");
            const length = localStorage.getItem("length");
            const scale = localStorage.getItem("scale");
            if(!scale){
                scaleInput.textContent = width * length + 'ใก';
            } else {
                scaleInput.textContent = scale + 'ใก';
            }
        }  
        getScale();
    
        //๋ฉํ ๋ ์ง
        const deadline = localStorage.getItem("deadline");
        const deadlineInput = document.querySelector('.submit__deadline');
        deadlineInput.textContent = deadline;
        
    }
}