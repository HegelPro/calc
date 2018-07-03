!function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t){e.exports=new function(){this.btnDarkTheme=document.querySelector("#theme-dark"),this.btnLightTheme=document.querySelector("#theme-light"),this.btnScientificTheme=document.querySelector("#theme-scientific-mode"),this.btnNormalTheme=document.querySelector("#theme-normal-mode"),this.calc=document.querySelector(".calc"),this.keypad=document.querySelectorAll(".btn-primary"),this.display=document.querySelector("#display"),this.list=document.querySelector(".calc__history"),this.btnReset=document.querySelector("#btn-reset"),this.switchOnDark=function(){this.display.className+=" dark",this.list.className+=" dark",this.calc.className+=" dark",this.keypad.forEach(e=>{e.className+=" dark"})},this.switchOnLight=function(){this.display.className=this.display.className.replace(" dark",""),this.list.className=this.list.className.replace(" dark",""),this.calc.className=this.calc.className.replace(" dark",""),this.keypad.forEach(e=>{e.className=e.className.replace(" dark","")})},this.switchOnScientific=function(){this.keypad.forEach(e=>{e.style.display="block",e.style.width="20%"})},this.switchOnNormal=function(){this.keypad.forEach(e=>{e.style=""})}}},function(e,t){e.exports=new function(){this.list=document.querySelector("#history"),this.addElem=function(e){var t=document.createElement("li");t.innerText=e,this.list.append(t)},this.addHr=function(){var e=document.createElement("li"),t=document.createElement("hr");e.append(t),this.list.append(e)}}},function(e,t){e.exports=new function(){this.display=document.querySelector("#display"),this.value="0",this.deleteValue=function(e){this.value="0",this.switchDisplay(e)},this.getValue=function(){return parseFloat(this.value)},this.switchDisplay=function(e){var t=e.persentOn?"%":"";this.display.value=e.operationMap[e.nextOperation.func]+" "+this.value+t},this.addNumberDisplay=function(e,t){t.nextOperation.used?(this.value=e,t.nextOperation.used=!1):"0"===this.value?"."===e?this.value="0.":"%"===e?t.persentMode=!0:this.value=e:"%"===e?t.persentOn=!0:"."===e||(this.value+=e),this.switchDisplay(t)}}},function(e,t){e.exports=new function(){this.btnMinus=document.querySelector("#btn-minus"),this.btnPlus=document.querySelector("#btn-plus"),this.btnMult=document.querySelector("#btn-mult"),this.btnDivide=document.querySelector("#btn-divide"),this.btn0=document.querySelector("#btn-0"),this.btn1=document.querySelector("#btn-1"),this.btn2=document.querySelector("#btn-2"),this.btn3=document.querySelector("#btn-3"),this.btn4=document.querySelector("#btn-4"),this.btn5=document.querySelector("#btn-5"),this.btn6=document.querySelector("#btn-6"),this.btn7=document.querySelector("#btn-7"),this.btn8=document.querySelector("#btn-8"),this.btn9=document.querySelector("#btn-9"),this.btnDot=document.querySelector("#btn-dot"),this.btnPercent=document.querySelector("#btn-percent"),this.btnEqually=document.querySelector("#btn-equally"),this.btnDelete=document.querySelector("#btn-delete"),this.btnReset=document.querySelector("#btn-reset")}},function(e,t,n){const i=n(3),s=n(2),r=n(1),a=n(0);e.exports={keypad:i,display:s,history:r,theme:a}},function(e,t){e.exports=new function(){this.result=0,this.dotOn=!1,this.persentOn=!1,this.nextOperation={func:"start",used:!1},this.operationMap={divide:"/",mult:"*",plus:"+",minus:"-",start:""},this.switchNextOperation=function(e){this.nextOperation="start"===e?{func:e,used:!1}:{func:e,used:!0}},this.countNumbersAfterDot=function(e){for(var t=0;Math.floor(e).toFixed(10)!==e.toFixed(10);)e*=10,t++;return t},this.mult10=function(e,t){for(let n=0;n<t;n++)e*=10;return e},this.plus=function(e){this.persentOn&&(e=(this.result*parseFloat(e)/100).toString()),this.result=this.result+parseFloat(e)},this.minus=function(e){this.persentOn&&(e=(this.result*parseFloat(e)/100).toString()),this.result=this.result-parseFloat(e)},this.divide=function(e){this.persentOn?this.result=(this.result/parseFloat(e)*100).toString():this.result=this.result/parseFloat(e)},this.mult=function(e){this.persentOn?this.result=(this.result*parseFloat(e)/100).toString():this.result=this.result*parseFloat(e)}}},function(e,t,n){const i=n(5);e.exports={calc:i}},function(e,t,n){const i=n(6),s=n(4);e.exports={model:i,view:s,start(){this.addEventListenersToNumbers(),this.addEventListenerToDelete(),this.addEventListenerToReset(),this.addEventListenersToOperators(),this.addEventListenerToEqually(),this.addEventListenerToThemeBtns()},doOperation(){var e=i.calc.result,t=s.display.value,n=i.calc.persentOn?"%":"";i.calc[i.calc.nextOperation.func](s.display.value),s.display.value=i.calc.result,s.display.switchDisplay(i.calc),i.calc.persentOn=!1,s.history.addElem(e+i.calc.operationMap[i.calc.nextOperation.func]+t+n+"="+i.calc.result)},changeValue(e){s.display.addNumberDisplay(e,i.calc)},deleteDisplay(){s.display.deleteValue(i.calc),i.calc.persentOn=!1},resetValue(){s.history.addHr(),i.calc.switchNextOperation("start"),s.display.deleteValue(i.calc),i.calc.result=0},addEventListenerToEqually(){s.keypad.btnEqually.addEventListener("click",this.doOperation)},addEventListenerToDelete(){s.keypad.btnDelete.addEventListener("click",this.deleteDisplay)},addEventListenerToReset(){s.keypad.btnReset.addEventListener("click",this.resetValue)},addEventListenerToNumber(e){this.changeValue(e.target.innerText)},addEventListenersToNumbers(){for(let e=0;e<10;e++)s.keypad["btn"+e.toString()].addEventListener("click",this.addEventListenerToNumber.bind(this));s.keypad.btnDot.addEventListener("click",this.addEventListenerToNumber.bind(this)),s.keypad.btnPercent.addEventListener("click",this.addEventListenerToNumber.bind(this))},addEventListenersToOperators(){s.keypad.btnPlus.addEventListener("click",()=>{"start"===i.calc.nextOperation.func&&(i.calc.result=Number(s.display.value),s.history.addElem(i.calc.result)),i.calc.switchNextOperation("plus"),s.display.switchDisplay(i.calc)}),s.keypad.btnMinus.addEventListener("click",()=>{"start"===i.calc.nextOperation.func&&(i.calc.result=Number(s.display.value),s.history.addElem(i.calc.result)),i.calc.switchNextOperation("minus"),s.display.switchDisplay(i.calc)}),s.keypad.btnMult.addEventListener("click",()=>{"start"===i.calc.nextOperation.func&&(i.calc.result=Number(s.display.value),s.history.addElem(i.calc.result)),i.calc.switchNextOperation("mult"),s.display.switchDisplay(i.calc)}),s.keypad.btnDivide.addEventListener("click",()=>{"start"===i.calc.nextOperation.func&&(i.calc.result=Number(s.display.value),s.history.addElem(i.calc.result)),i.calc.switchNextOperation("divide"),s.display.switchDisplay(i.calc)})},addEventListenerToThemeBtns(){s.theme.btnDarkTheme.addEventListener("click",e=>{s.theme.btnLightTheme.style.display="block",s.theme.btnDarkTheme.style.display="none",s.theme.switchOnDark()}),s.theme.btnLightTheme.addEventListener("click",e=>{s.theme.btnLightTheme.style.display="none",s.theme.btnDarkTheme.style.display="block",s.theme.switchOnLight()}),s.theme.btnScientificTheme.addEventListener("click",e=>{s.theme.btnNormalTheme.style.display="block",s.theme.btnScientificTheme.style.display="none",s.theme.switchOnScientific()}),s.theme.btnNormalTheme.addEventListener("click",e=>{s.theme.btnNormalTheme.style.display="none",s.theme.btnScientificTheme.style.display="block",s.theme.switchOnNormal()})}}},function(e,t,n){n(16),n(7).start()},function(e,t,n){n(8),e.exports=n(11)},,function(e,t){},,,,,function(e,t){}]);