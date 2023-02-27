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
                <h1>Send Estimate</h1>
                <div class="submit__content">
                    <div class="submit__flex">
                        <div class="submit__content-left">
                            <p>plesase confirm the info</p>
                            <p> preffered style </p>
                        </div>
                        <div class="submit__content-right">
                            <h2>Get in Touch</h2>
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
                            <button type="submit">Send Message</button>
                        </div>
                        </form>
                        </div>
                    </div>
                    <div class="board__btn-flex">
                        <div class="board__btn-wrap">
                            <a href="/design" data-link id = "next-btn"> 이전 페이지 </a>
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
            // Send the form data to the server using AJAX or fetch API
            });
            function isValidEmail(email) {
            // Use a regular expression to validate the email address
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

        document.addEventListener("DOMContentLoaded", () => {
            const selectedImageAlts = JSON.parse(localStorage.getItem("selectedImageAlts"));
          
            let stylesHTML = "";
            if (selectedImageAlts) {
              stylesHTML = `
                <p>You have selected the following styles:</p>
                <ul>
                  ${selectedImageAlts.map((imageAlt) => `<li>${imageAlt}</li>`).join("")}
                </ul>
              `;
            } else {
              stylesHTML = `<p>No styles selected.</p>`;
            }
          
            const selectedImagesContainer = document.getElementById("selected-images");
            selectedImagesContainer.innerHTML = stylesHTML;
          });
          
          const data = JSON.parse(localStorage.getItem('myData'));
          console.log(data);
          
    
    }

}