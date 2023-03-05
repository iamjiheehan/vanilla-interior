"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _layout = _interopRequireDefault(require("./layout.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class _default extends _layout.default {
  constructor(params) {
    super();
    this.setTitle("Home");
  }
  async getHTML() {
    return `
            <div class="home-background">
                <div class="home-box">
                    <h3>VINTERIOR 스튜디오는 인테리어 가상 시뮬레이션 <br>이미지를 제공합니다.</h3>
                    <h1>인테리어 아이디어를 현실로 <br>구현해보세요</h1>
                    
                    <h1>Make room for better living</h1>
                
                    <div class="button-wrapper">
                        <a href="/design" data-link id = "next-btn"> 시작하기 </a>
                    </div>
                </div>
            </div>
        `;
  }
  executeScript() {
    console.log("Hello This is Main Page");
  }
}
exports.default = _default;