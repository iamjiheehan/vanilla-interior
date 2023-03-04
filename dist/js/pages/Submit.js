"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _layout2 = _interopRequireDefault(require("./layout.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var _default = /*#__PURE__*/function (_layout) {
  _inherits(_default, _layout);
  var _super = _createSuper(_default);
  function _default(params) {
    var _this;
    _classCallCheck(this, _default);
    _this = _super.call(this, params);
    _this.setTitle("Submit");
    return _this;
  }
  _createClass(_default, [{
    key: "getHTML",
    value: function () {
      var _getHTML = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", "\n        \n            <div class=\"submit\">\n                <div id=\"myProgress\">\n                    <div class=\"progress__inner\">\n                        <span>\u2714</span>\n                    </div>\n                    <div id=\"myBar\" style = \"width : 100%\"></div>\n                </div>\n                <h1>\uD83C\uDF89That's all. Thank you!\uD83C\uDF89</h1>\n                <div class=\"submit__content\">\n                    <div class=\"submit__flex\">\n                        <div class=\"submit__content-left\">\n                            <h1 class = \"submit__content-title\"> \uC785\uB825\uD55C \uC815\uBCF4 \uD655\uC778\uD558\uAE30 </h1>\n                            <h2> \uC120\uD638\uD558\uB294 \uC2A4\uD0C0\uC77C </h2>\n                            <div id=\"preferred-style-image\"></div>\n                            <h3 class=\"submit__chosenItems submit__result\"></h3>\n                            <h2> \uACF5\uAC04 \uD06C\uAE30 </h2>\n                            <h3 class=\"submit__scale submit__result\"></h3>\n                            <h2> \uD544\uC694\uD55C \uB0A0\uC9DC </h2>\n                            <h3 class=\"submit__deadline submit__result\"></h3>\n                            <h2> \uACAC\uC801 \uAE08\uC561 </h2>\n                            <h3 class=\"submit__price submit__result\"></h3>\n                        </div>\n                        <div class=\"submit__content-right\">\n                            <h1 class = \"submit__content-title\">Get in Touch</h1>\n                            <form id=\"contact-form\">\n                                <div class=\"submit__input-wrap\">\n                                    <div class=\"form__input-container\">\n                                        <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"\uC774\uB984\" required>\n                                        <span id=\"name-error-message\" class=\"error-message\"></span>\n                                    </div>\n                                    <div class=\"form__input-container\">\n                                        <input type=\"tel\" id=\"phone\" name=\"phone\" placeholder=\"\uC5F0\uB77D\uCC98\" required>\n                                        <span id=\"phone-error-message\" class=\"error-message\"></span>\n                                    </div>\n                                </div>\n                                <div class=\"form__input-container\">\n                                    <input type=\"email\" id=\"email\" name=\"email\" placeholder=\"\uC774\uBA54\uC77C\" required>\n                                    <span id=\"email-error-message\" class=\"error-message\"></span>\n                                </div>\n                                <div class=\"form__input-container\">\n                                    <textarea id=\"message\" name=\"message\" placeholder=\"\uBA54\uC138\uC9C0\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\" required></textarea>\n                                    <span id=\"message-error-message\" class=\"error-message\"></span>\n                                </div>\n                                <input type=\"file\" id=\"attachment\" name=\"attachment\" accept=\".jpg,.jpeg,.png,.pdf\">\n                                <div class=\"submit__button-wrap\">\n                                    <button type=\"submit\" class = \"reset-btn mgs-btn\">Send Message</button>\n                                </div>\n                                <div id=\"success-message\" style=\"display: none;\">\uBA54\uC77C\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uBC1C\uC1A1\uB418\uC5C8\uC2B5\uB2C8\uB2E4.</div>\n                            </form>\n                        </div>\n                    </div>\n                    <div class=\"board__btn-flex\">\n                        <div class=\"board__btn-wrap\">\n                            <a href=\"/board\" data-link id = \"next-btn\"> \uC774\uC804 \uD398\uC774\uC9C0 </a>\n                        </div>\n                        <div>\n                            <p>\n                                <a onclick=\"location.reload()\" class=\"reset-btn\"> \uB2E4\uC2DC \uC785\uB825\uD558\uAE30 </a>\n                            </p>\n                        </div>\n                    </div>\n                    <div id=\"selected-styles\"></div>\n                </div>\n            </div>\n        ");
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function getHTML() {
        return _getHTML.apply(this, arguments);
      }
      return getHTML;
    }()
  }, {
    key: "executeScript",
    value: function executeScript() {
      console.log("Hello This is Submit Page");
      var form = document.querySelector('#contact-form');
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.querySelector('#name').value;
        var email = document.querySelector('#email').value;
        var message = document.querySelector('#message').value;
        if (!name || !email || !message) {
          alert('빈 칸을 입력해주세요');
          return;
        }
        if (!isValidEmail(email)) {
          alert('이메일을 입력해주세요.');
          return;
        }
        // Send the form data to the server using AJAX or fetch API
        var successMessage = document.getElementById('success-message');
        successMessage.style.display = 'block';
      });
      function isValidEmail(email) {
        // Use a regular expression to validate the email address
        var regex = /\S+@\S+\.\S+/;
        return regex.test(email);
      }
      var nameInput = document.getElementById('name');
      var nameErrorMessage = document.getElementById('name-error-message');
      nameInput.addEventListener('input', function (event) {
        var inputValue = event.target.value;
        var containsNumber = /\d/.test(inputValue);
        var containsLetter = /[a-zA-Z]/.test(inputValue);
        if (containsNumber) {
          nameErrorMessage.textContent = '이름에 숫자를 입력할 수 없습니다.';
        } else if (containsLetter) {
          nameErrorMessage.textContent = '';
        }
      });
      var phoneInput = document.getElementById('phone');
      var phoneErrorMessage = document.getElementById('phone-error-message');
      phoneInput.addEventListener('input', function (event) {
        var inputValue = event.target.value;
        var containsNumber = /\d/.test(inputValue);
        var containLetter = /[a-zA-Z]/.test(inputValue);
        if (containsNumber) {
          phoneErrorMessage.textContent = '';
        } else if (containLetter) {
          phoneErrorMessage.textContent = '연락처 형식이 올바르지 않습니다.';
        }
      });

      // design페이지에서 드래그앤 드롭 된 이미지의 alt text값

      var altTexts = JSON.parse(localStorage.getItem('altTexts'));
      var chosenItemsEl = document.querySelector('.submit__chosenItems');
      chosenItemsEl.textContent = altTexts.join(', ');
      var images = [{
        src: "/src/img/design-1.jpg",
        alt: "Bohemian"
      }, {
        src: "/src/img/design-2.jpg",
        alt: "Mid Century Modern"
      }, {
        src: "/src/img/design-3.jpg",
        alt: "Scandinavian"
      }, {
        src: "/src/img/design-4.jpg",
        alt: "Industrial"
      }, {
        src: "/src/img/design-5.jpg",
        alt: "Preppy"
      }, {
        src: "/src/img/design-6.jpg",
        alt: "Rustic"
      }, {
        src: "/src/img/design-7.jpg",
        alt: "Minimal"
      }, {
        src: "/src/img/design-8.jpg",
        alt: "Glam"
      }];
      var matchingImages = images.filter(function (img) {
        return altTexts.includes(img.alt);
      });
      if (matchingImages.length > 0) {
        var imageContainer = document.getElementById('preferred-style-image');
        matchingImages.forEach(function (img) {
          var image = document.createElement('img');
          image.src = img.src;
          image.alt = img.alt;
          imageContainer.appendChild(image);
        });
      }

      //board 페이지 input 값들 가져오기

      //견적 금액
      var result = localStorage.getItem("result");
      var resultInput = document.querySelector('.submit__price');
      resultInput.textContent = result.slice(0, -5);

      //공간 크기 
      var scaleInput = document.querySelector('.submit__scale');
      function getScale() {
        var width = localStorage.getItem("width");
        var length = localStorage.getItem("length");
        var scale = localStorage.getItem("scale");
        if (!scale) {
          scaleInput.textContent = width * length + '㎡';
        } else {
          scaleInput.textContent = scale + '㎡';
        }
      }
      getScale();

      //납품 날짜
      var deadline = localStorage.getItem("deadline");
      var deadlineInput = document.querySelector('.submit__deadline');
      deadlineInput.textContent = deadline;
    }
  }]);
  return _default;
}(_layout2["default"]);
exports["default"] = _default;