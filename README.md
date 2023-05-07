##  📍Single Page Application based on Vanilla JavaScript - VINTERIOR | Vanilla + Interior

##### 인테리어 가상 시뮬레이션 이미지 견적 사이트

## 🖥 프로젝트 소개

##### 프리랜서 디자이너로서 일을 했을 때 필요로 했던 사항들을 모아서 실용적인 기능만을 갖춘 웹사이트로 구성했습니다.


##  📄 화면 구성

- ### 홈(메인화면)</br>
    - ##### 홈페이지 소개
    
- ### 디자인 고르기</br>
   -  ##### 선호하는 이미지 선택
    
- ### 견적내기</br>
   - ##### 공간의 사이즈, 예상 견적 금액, 마감 날짜 선택
    
- ### 문의하기</br>
   - ##### 선택 사항 확인 및 이메일 보내기

## 🌍 미리보기
### 배포 URL : https://jihee-vinterior.netlify.app/
 ###  목적 : 바닐라 자바스크립트만으로 구성된 SPA 웹사이트 구현

![choosing](https://user-images.githubusercontent.com/102779433/231810527-e6af320c-bdd1-4972-bb66-c8d7e81fb732.gif)

![sizing](https://user-images.githubusercontent.com/102779433/231810553-15af784a-2387-4145-92ea-2200a0756bae.gif)

![last](https://user-images.githubusercontent.com/102779433/231810572-1d4e44db-b073-429f-891c-21934e67c0fd.gif)

___

### ✔VINTERIOR 프로젝트로 진행한 계기
- ##### 주제 : 실제 인테리어 이미지를 전문으로 다루는 프리랜서들과 고객들을 위한 실용적인 웹사이트 제작.
- ##### 디자인 : 제가 그래픽 디자이너로 일하던 이미지로 메인을 설정하고 전체적인 것은 구글링을 통해서 조각조각 참고했습니다. 

___

### 구현 플랫폼
-  #### Front-end 기술 : HTML5, CSS3, JavaScript ES6
-  #### Back-end 라이브러리: node.js
-  #### Code Editor : Visual Studio Code 1.78
___

### 📗 기능 구현 
- #### Drag and Drop ,Drop한 이미지들은 Local Storage에 저장
```js
        containers.forEach(container => {
            container.addEventListener('dragover', e => {
                e.preventDefault();
        
                const afterElement = getDragAfterElement(container, e.clientY);
                const draggable = document.querySelector('.dragging');
                const count = container.querySelectorAll('.design__drag-item').length;
                const isAlreadyInContainer = container.contains(draggable);
            
                if (!isAlreadyInContainer && afterElement == null && count < 3 && chosenItem.length < 3) {
                    container.appendChild(draggable);
                    chosenItem.push(draggable);
                } else if (!isAlreadyInContainer && count < 3 && chosenItem.length < 3) {
                const item = container.insertBefore(draggable, afterElement);
                chosenItem.push(item);
                } else if (draggable.classList.contains('item') && isAlreadyInContainer) {
                chosenItem.push(draggable);
                }
                
                const altTexts = chosenItem.map(image => image.alt);
                // console.log(altTexts);
                localStorage.setItem('altTexts', JSON.stringify(altTexts));
            });
        });
```


- #### isValidEmail() 함수를 정의하여 이메일 형식이 올바른지 확인
```js
        function isValidEmail(email) {
        // Use a regular expression to validate the email address
            const regex = /\S+@\S+\.\S+/;
            return regex.test(email);
        }
```


- #### nameInput과 phoneInput의 이벤트 핸들러를 등록하여, 이름과 연락처의 유효성을 검사
```js
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

```

- #### altTexts 변수를 이용하여 드래그앤 드롭된 이미지의 alt text 값을 가져와 preferred-style-image div에 해당 이미지를 출력

```js
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

```

- #### getScale() 함수를 정의해서 localStorage에서 가져온 값들을 이용하여 공간 크기를 계산하고 출력

```js
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
```
___

### ❗ 
- #### 모바일 버전 업데이트 중 입니다.

___

### ✅ 오류 해결
-  https://hans-j.tistory.com/205
