import layout from "./layout.js";

export default class extends layout {
    constructor(params) {
        super(params);
        this.setTitle("Board");
    }
    async getHTML() {
        return `
            <div class="board">   
                <div id="myProgress">
                    <div id="myBar" style = "width : 66.66%"></div>
                </div>
                <div class="board__content">   
                    <div class="board__calculator-unit">
                        <h1> 평 을 제곱미터로 바꾸기 </h1>
                        <label for="length-pyeong">평 수 입력하기 : </label>
                        <input type="number" id="autoInput" placeholder = "예 ) 25평이면 25 입력"><br>
                        
                        <div class = "board__calculator-unit-result"></div>
                        
                        <span>소숫점 3 자리에서 반올림한 결과입니다.</span>
                    </div>
                    <div class="board__calculator-price">
                        
                        <h1> 공간의 규모를 알려주세요 </h1>
                        
                        <div class = "board__calculator-flex">
                            <div class = "board__calculator-left">
                                <label for="length">공간의 가로 길이 입력하기 : </label>
                                <input type="number" id="width" name="length" placeholder = "제곱미터로 입력하기"><br>
                            
                                <label for="width">공간의 세로 길이 입력하기 : </label>
                                <input type="number" id="length" name="width" placeholder = "예 ) 25㎡이면 25 입력"><br>
                            </div>
                            <div class = "board__calculator-line"></div>

                            <div class = "board__calculator-right">
                                <label for="scale">공간의 전체 면적 입력하기 : </label>
                                <input type="number" id="scale" name="scale" placeholder = "숫자만 입력해주세요"><br>
                            </div>
                        </div>
                        <div class="board__amountOfimgs">
                            <label for="amount">필요한 이미지 수량 입력하기 :</label>
                            <input type="number" id="amount" name="amount" placeholder = "숫자만 입력해주세요"><br>
        
                            <div class = "board__btn-wrap">
                                <button class = "board__caculate-btn">계산하기</button><br>
                            </div>
                        </div>
                        <label for="result">예상 견적 금액은 : </label>
                        <input type="text" id="result" name="result" disabled>
                    </div>
                    <div class="board__deadline">
                        <h1> 언제까지 필요한지 알려주세요 </h1>
                        <label for="deadline">날짜 입력하기 : </label>
                        <input type="date" id="deadline" name="deadline"><br>
                    </div>
                    <div class="board__btn-flex">
                        <div class="board__btn-wrap">
                            <a href="/design" data-link id = "next-btn"> 이전 페이지 </a>
                        </div>
                        <div>
                            <p>
                                <a href="/board" data-link class="reset-btn"> 다시 입력하기 </a>
                            </p>
                        </div>
                        <div class="board__btn-wrap">
                            <a href="/submit" data-link id = "next-btn"> 다음 페이지 </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    executeScript() {
        console.log("Hello This is Board Page");
        // 평 수 계산기
        const pyeongChange = document.getElementById("autoInput");
        const resultElement = document.querySelector(".board__calculator-unit-result");
        
        pyeongChange.addEventListener("input", function() {
            const pyeongValue = parseFloat(pyeongChange.value);
                if (isNaN(pyeongValue)) {
            resultElement.textContent = "숫자를 입력하세요.";
            } else {
                const pyeongResult = (pyeongValue * 3.3058).toFixed(2) + "제곱미터 입니다.";
                resultElement.textContent = pyeongResult;
            }
        });
        // 예상견적
        const calculateBtn = document.querySelector(".board__caculate-btn");
        calculateBtn.addEventListener("click", calculate);
        function calculate() {
            const scale = document.getElementById("scale").value;
            const amount = document.getElementById("amount").value;
            const length = document.getElementById("length").value;
            const width = document.getElementById("width").value;

            console.log(amount);

            let area = 0; // declare area outside of the if block

            if (scale === ""){
              area = length * width * amount / 33.0579;
                localStorage.setItem("length", length);
                localStorage.setItem("width", width);
                localStorage.setItem("amount", amount);
                
            } else if ( width === "" || length === ""){
                
                area = scale * amount / 33.0579;
                localStorage.setItem("scale", scale);
                localStorage.setItem("amount", amount);
            }

            const cost = Math.round(area * 50000 / 1000) * 1000;
            const formattedCost = cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            const resultElement = document.getElementById("result");
            resultElement.value = formattedCost + " 원 입니다.";
            console.log(resultElement.value);
            localStorage.setItem("result", resultElement.value);
        }
        

        //납품날짜 오늘 이전 날짜 선택 제한
        // Get the date input element
        const deadlineInput = document.getElementById("deadline");

        // Get the current date and set it as the minimum date for the input element
        const today = new Date().toISOString().split("T")[0];
        deadlineInput.setAttribute("min", today);


        //납품날짜  값 전달
        const deadline = document.getElementById("deadline");
        deadline.addEventListener("input", function() {
            const deadlineValue = deadline.value;
            localStorage.setItem("deadline", deadlineValue);
        });
    }
}