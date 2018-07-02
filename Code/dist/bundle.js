!function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=9)}([function(t,e){t.exports=new function(){this.btnDarkTheme=document.querySelector("#theme-dark"),this.btnLightTheme=document.querySelector("#theme-light"),this.calc=document.querySelector(".calc"),this.keypad=document.querySelectorAll(".btn-primary"),this.display=document.querySelector("#display"),this.list=document.querySelector(".calc__history"),this.btnReset=document.querySelector("#btn-reset"),this.switchOnDark=function(){this.display.style.color="#fff",this.display.style.backgroundColor="#000",this.display.style.borderColor="#000",this.list.style.color="#fff",this.list.style.backgroundColor="#000",this.list.style.borderColor="#000",this.keypad.forEach(t=>{t.className+=" dark"}),this.btnReset.className+=" dark",this.calc.style.backgroundColor="#bb3018"},this.switchOnLight=function(){this.display.style="",this.list.style="",this.calc.style="",this.keypad.forEach(t=>{t.className=t.className.replace(" dark","")}),this.btnReset.className=this.btnReset.className.replace(" dark","")}}},function(t,e){t.exports=new function(){this.list=document.querySelector("#history"),this.addElem=function(t){var e=document.createElement("li");e.innerText=t,this.list.append(e)},this.addHr=function(){var t=document.createElement("li"),e=document.createElement("hr");t.append(e),this.list.append(t)}}},function(t,e){t.exports=new function(){this.display=document.querySelector("#display"),this.value="0",this.deleteValue=function(t){this.value="0",this.switchDisplay(t)},this.getValue=function(){return Number(this.value)},this.switchDisplay=function(t){this.display.value=t.operationMap[t.nextOperation.func]+" "+this.value},this.addNumberDisplay=function(t,e){e.nextOperation.used?(this.value=t,e.nextOperation.used=!1):"0"===this.value?this.value="."===t?"0.":t:this.value+=t,this.switchDisplay(e)}}},function(t,e){t.exports=new function(){this.btnMinus=document.querySelector("#btn-minus"),this.btnPlus=document.querySelector("#btn-plus"),this.btnMult=document.querySelector("#btn-mult"),this.btnDivide=document.querySelector("#btn-divide"),this.btn0=document.querySelector("#btn-0"),this.btn1=document.querySelector("#btn-1"),this.btn2=document.querySelector("#btn-2"),this.btn3=document.querySelector("#btn-3"),this.btn4=document.querySelector("#btn-4"),this.btn5=document.querySelector("#btn-5"),this.btn6=document.querySelector("#btn-6"),this.btn7=document.querySelector("#btn-7"),this.btn8=document.querySelector("#btn-8"),this.btn9=document.querySelector("#btn-9"),this.btnDot=document.querySelector("#btn-dot"),this.btnEqually=document.querySelector("#btn-equally"),this.btnDelete=document.querySelector("#btn-delete"),this.btnReset=document.querySelector("#btn-reset")}},function(t,e,s){const i=s(3),n=s(2),r=s(1),l=s(0);t.exports={keypad:i,display:n,history:r,theme:l}},function(t,e){t.exports=new function(){this.result=0,this.dotOn=!1,this.nextOperation={func:"start",used:!1},this.operationMap={divide:"/",mult:"*",plus:"+",minus:"-",start:""},this.switchNextOperation=function(t){this.nextOperation="start"===t?{func:t,used:!1}:{func:t,used:!0}},this.countNumbersAfterDot=function(t){for(var e=0;Math.floor(t).toFixed(10)!==t.toFixed(10);)t*=10,e++;return e},this.mult10=function(t,e){for(let s=0;s<e;s++)t*=10;return t},this.plus=function(t){var e=this.countNumbersAfterDot(this.result)>this.countNumbersAfterDot(Number(t))?this.countNumbersAfterDot(this.result):this.countNumbersAfterDot(Number(t));this.result=(this.mult10(this.result,e)+this.mult10(Number(t),e))/this.mult10(1,e)},this.minus=function(t){var e=this.countNumbersAfterDot(this.result)>this.countNumbersAfterDot(Number(t))?this.countNumbersAfterDot(this.result):this.countNumbersAfterDot(Number(t));this.result=(this.mult10(this.result,e)-this.mult10(Number(t),e))/this.mult10(1,e)},this.divide=function(t){var e=this.countNumbersAfterDot(this.result)>this.countNumbersAfterDot(Number(t))?this.countNumbersAfterDot(this.result):this.countNumbersAfterDot(Number(t));this.result=this.mult10(this.result,e)/this.mult10(Number(t),e)/this.mult10(1,e)},this.mult=function(t){var e=this.countNumbersAfterDot(this.result)>this.countNumbersAfterDot(Number(t))?this.countNumbersAfterDot(this.result):this.countNumbersAfterDot(Number(t));this.result=this.mult10(this.result,e)*this.mult10(Number(t),e)/this.mult10(1,e)}}},function(t,e,s){const i=s(5);t.exports={calc:i}},function(t,e,s){const i=s(6),n=s(4);t.exports={model:i,view:n,start(){this.addEventListenersToNumbers(),this.addEventListenerToDelete(),this.addEventListenerToReset(),this.addEventListenersToOperators(),this.addEventListenerToEqually(),this.addEventListenerToThemeBtns()},doOperation(){var t=i.calc.result,e=n.display.value;i.calc[i.calc.nextOperation.func](n.display.value),n.display.deleteValue(i.calc),n.history.addElem(t+i.calc.operationMap[i.calc.nextOperation.func]+e+"="+i.calc.result)},changeValue(t){n.display.addNumberDisplay(t,i.calc)},deleteDisplay(){n.display.deleteValue(i.calc)},resetValue(){n.history.addHr(),i.calc.switchNextOperation("start"),n.display.deleteValue(i.calc),i.calc.result=0},addEventListenerToEqually(){n.keypad.btnEqually.addEventListener("click",this.doOperation)},addEventListenerToDelete(){n.keypad.btnDelete.addEventListener("click",this.deleteDisplay)},addEventListenerToReset(){n.keypad.btnReset.addEventListener("click",this.resetValue)},addEventListenerToNumber(t){this.changeValue(t.target.innerText)},addEventListenersToNumbers(){for(let t=0;t<10;t++)n.keypad["btn"+t.toString()].addEventListener("click",this.addEventListenerToNumber.bind(this));n.keypad.btnDot.addEventListener("click",this.addEventListenerToNumber.bind(this))},addEventListenersToOperators(){n.keypad.btnPlus.addEventListener("click",()=>{"start"===i.calc.nextOperation.func&&(i.calc.result=Number(n.display.value),n.history.addElem(i.calc.result)),i.calc.switchNextOperation("plus"),n.display.switchDisplay(i.calc)}),n.keypad.btnMinus.addEventListener("click",()=>{"start"===i.calc.nextOperation.func&&(i.calc.result=Number(n.display.value),n.history.addElem(i.calc.result)),i.calc.switchNextOperation("minus"),n.display.switchDisplay(i.calc)}),n.keypad.btnMult.addEventListener("click",()=>{"start"===i.calc.nextOperation.func&&(i.calc.result=Number(n.display.value),n.history.addElem(i.calc.result)),i.calc.switchNextOperation("mult"),n.display.switchDisplay(i.calc)}),n.keypad.btnDivide.addEventListener("click",()=>{"start"===i.calc.nextOperation.func&&(i.calc.result=Number(n.display.value),n.history.addElem(i.calc.result)),i.calc.switchNextOperation("divide"),n.display.switchDisplay(i.calc)})},addEventListenerToThemeBtns(){n.theme.btnDarkTheme.addEventListener("click",t=>{n.theme.btnLightTheme.style.display="block",n.theme.btnDarkTheme.style.display="none",n.theme.switchOnDark()}),n.theme.btnLightTheme.addEventListener("click",t=>{n.theme.btnLightTheme.style.display="none",n.theme.btnDarkTheme.style.display="block",n.theme.switchOnLight()})}}},function(t,e,s){s(16),s(7).start()},function(t,e,s){s(8),t.exports=s(11)},,function(t,e){},,,,,function(t,e){}]);