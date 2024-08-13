(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(354),a=t.n(r),o=t(314),i=t.n(o)()(a());i.push([e.id,':root {\n    --text-color: #3a4750;\n    --primary-color: #be3144;;\n    --background-color: #d3d6db;\n    --darker-background-color: #303841;\n}\n\n* {\n    margin: 0px;\n    padding: 0px;\n}\nbody {\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n    background-color: var(--background-color);\n}\n\n#header-container {\n    position: fixed;\n    padding: 25px 0px;\n    display: grid;\n    grid-template: 1fr / 1fr 1fr 2fr;\n    justify-items: center;\n    align-items: center;\n    background-color: var(--darker-background-color);\n    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);\n}\n\n#title {\n    grid-column: 1 / 2;\n    font-size: 32px;\n    color: white;\n}\n\n#city-input-container {\n    grid-column: 2 / 3;\n    display: grid;\n    justify-content: start;\n}\n\n#city-input {\n    max-height: 50px;\n    min-width: 475px;\n    padding-left: 10px;\n    font-size: 15px;\n    border-bottom-left-radius: 5px;\n    border-top-left-radius: 5px;\n    border: none;\n    background-color: var(--background-color);\n    grid-row: 2 / 3;\n    justify-self: end;\n}\n\n#city-input:focus {\n    outline: none;\n}\n\n#get-forecast-button {\n    font-size: 15px;\n    min-height: 50px;\n    min-width: 100px;\n    grid-row: 2 / 3;\n    background-color: var(--primary-color);\n    border-bottom-right-radius: 5px;\n    border-top-right-radius: 5px;\n    border: none;\n    color: white;\n}\n\n#temperature-type-change-button {\n    padding: 8px;\n    font-size: 15px;\n    grid-column: 3 / 4;\n    min-width: 125px;\n    min-height: 45px;\n    justify-self: end;\n    background-color: var(--background-color);\n    border: none;\n    border-radius: 6px;\n    margin-right: 150px;\n}\n\n#container {\n    display: grid;\n    grid-template: 1fr 200px 1fr/ 2fr 1fr;\n    padding-top: 100px;\n}\n\n\n#weather-data-container {\n    display: grid;\n    grid-column: 1 / 4;\n    grid-row: 1 / 2;\n    grid-template: 1fr 1fr 3fr 1fr 1fr/ 1fr 2fr;\n    align-items: center;\n    justify-items: center;\n    padding: 25px 75px;\n}\n\n#weather-condition-icon-img {\n    height: 200px;\n    width: 200px;\n    grid-column: 1 / 2;\n    grid-row: 3 / 4;\n}\n\n #country-city-name-container {\n    font-size: 34px;\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n}\n\n #weather-condition-container {\n    font-size: 28px;\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n}\n\n#current-temperature-container {\n    font-size: 50px;\n    grid-column: 1 / 2;\n    grid-row: 4 / 5;\n}\n\n#feels-like-container {\n    align-self: start;\n    grid-row: 5 / 6;\n    font-size: 16px;\n    color: var(--text-color);\n}\n\n#forecast-container {\n    display: grid;\n    justify-self: center;\n    grid-auto-flow: column;\n    align-items: center;\n    grid-column: repeat(autofill, minmax(100px, 1fr));\n    grid-row: 1 / 5;\n    grid-column: 2 / 4;\n    height: fit-content;\n    width: 90%;\n    overflow-x: auto;\n    border-top: 1px solid gray;\n    border-bottom: 1px solid gray;\n}\n\n#daily-summary {\n    justify-self: start;\n    grid-row: 5 / 6;\n    grid-column: 2 / 3;\n    font-size: 18px;\n}\n\n#secondary-weather-data-container {\n    display: grid;\n    grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;\n    grid-column: 1 / 4;\n    grid-row: 2 / 3;\n    row-gap: 16px;\n    padding: 50px 0px;\n    justify-items: center;\n    align-content: center;\n    background-color: var(--darker-background-color);\n    min-height: 125px;\n}\n\n#secondary-weather-data-container > * {\n    font-weight: bold;\n    display: grid;\n    grid-template: 1fr 1fr / 1fr;\n    justify-items: center;\n    row-gap: 10px;\n    color: black;\n}\n\n#weekly-forecast-container {\n    display: grid;\n    justify-items: center;\n    grid-template: 1fr 1fr 1fr 1fr / 1fr;\n    grid-column: 1 / 3;\n    grid-row: 3 / 4;\n    margin-bottom: 50px;\n}\n\n#weekly-forecast-container > * {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 1fr / 1fr 1fr 1fr 1fr 1fr;\n    align-items: center;\n    justify-items: start;\n    min-width: 50vw;\n    border-bottom: 1px solid gray;\n}\n\n#weekly-forecast-container > * > * {\n    min-width: 100px;\n}\n\n\n#weeklist {\n    display: grid;\n    align-self: end;\n    justify-items: start;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr/ 1fr;\n}\n\n.hour-container {\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    width: 125px;\n    height: 200px;\n    /* border: 1px solid black; */\n    border-radius: 10px;\n    margin: 10px;\n}\n\n.icon-container {\n    height: 75px;\n    width: 75px;\n}',"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,qBAAqB;IACrB,wBAAwB;IACxB,2BAA2B;IAC3B,kCAAkC;AACtC;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,iKAAiK;IACjK,yCAAyC;AAC7C;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,gCAAgC;IAChC,qBAAqB;IACrB,mBAAmB;IACnB,gDAAgD;IAChD,0CAA0C;AAC9C;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,8BAA8B;IAC9B,2BAA2B;IAC3B,YAAY;IACZ,yCAAyC;IACzC,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;IACf,sCAAsC;IACtC,+BAA+B;IAC/B,4BAA4B;IAC5B,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,yCAAyC;IACzC,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,kBAAkB;AACtB;;;AAGA;IACI,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,2CAA2C;IAC3C,mBAAmB;IACnB,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;CAEC;IACG,eAAe;IACf,kBAAkB;IAClB,eAAe;AACnB;;CAEC;IACG,eAAe;IACf,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,eAAe;IACf,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,oBAAoB;IACpB,sBAAsB;IACtB,mBAAmB;IACnB,iDAAiD;IACjD,eAAe;IACf,kBAAkB;IAClB,mBAAmB;IACnB,UAAU;IACV,gBAAgB;IAChB,0BAA0B;IAC1B,6BAA6B;AACjC;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,wCAAwC;IACxC,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,iBAAiB;IACjB,qBAAqB;IACrB,qBAAqB;IACrB,gDAAgD;IAChD,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,4BAA4B;IAC5B,qBAAqB;IACrB,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,oCAAoC;IACpC,kBAAkB;IAClB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,gDAAgD;IAChD,mBAAmB;IACnB,oBAAoB;IACpB,eAAe;IACf,6BAA6B;AACjC;;AAEA;IACI,gBAAgB;AACpB;;;AAGA;IACI,aAAa;IACb,eAAe;IACf,oBAAoB;IACpB,+CAA+C;AACnD;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf",sourcesContent:[':root {\n    --text-color: #3a4750;\n    --primary-color: #be3144;;\n    --background-color: #d3d6db;\n    --darker-background-color: #303841;\n}\n\n* {\n    margin: 0px;\n    padding: 0px;\n}\nbody {\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n    background-color: var(--background-color);\n}\n\n#header-container {\n    position: fixed;\n    padding: 25px 0px;\n    display: grid;\n    grid-template: 1fr / 1fr 1fr 2fr;\n    justify-items: center;\n    align-items: center;\n    background-color: var(--darker-background-color);\n    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);\n}\n\n#title {\n    grid-column: 1 / 2;\n    font-size: 32px;\n    color: white;\n}\n\n#city-input-container {\n    grid-column: 2 / 3;\n    display: grid;\n    justify-content: start;\n}\n\n#city-input {\n    max-height: 50px;\n    min-width: 475px;\n    padding-left: 10px;\n    font-size: 15px;\n    border-bottom-left-radius: 5px;\n    border-top-left-radius: 5px;\n    border: none;\n    background-color: var(--background-color);\n    grid-row: 2 / 3;\n    justify-self: end;\n}\n\n#city-input:focus {\n    outline: none;\n}\n\n#get-forecast-button {\n    font-size: 15px;\n    min-height: 50px;\n    min-width: 100px;\n    grid-row: 2 / 3;\n    background-color: var(--primary-color);\n    border-bottom-right-radius: 5px;\n    border-top-right-radius: 5px;\n    border: none;\n    color: white;\n}\n\n#temperature-type-change-button {\n    padding: 8px;\n    font-size: 15px;\n    grid-column: 3 / 4;\n    min-width: 125px;\n    min-height: 45px;\n    justify-self: end;\n    background-color: var(--background-color);\n    border: none;\n    border-radius: 6px;\n    margin-right: 150px;\n}\n\n#container {\n    display: grid;\n    grid-template: 1fr 200px 1fr/ 2fr 1fr;\n    padding-top: 100px;\n}\n\n\n#weather-data-container {\n    display: grid;\n    grid-column: 1 / 4;\n    grid-row: 1 / 2;\n    grid-template: 1fr 1fr 3fr 1fr 1fr/ 1fr 2fr;\n    align-items: center;\n    justify-items: center;\n    padding: 25px 75px;\n}\n\n#weather-condition-icon-img {\n    height: 200px;\n    width: 200px;\n    grid-column: 1 / 2;\n    grid-row: 3 / 4;\n}\n\n #country-city-name-container {\n    font-size: 34px;\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n}\n\n #weather-condition-container {\n    font-size: 28px;\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n}\n\n#current-temperature-container {\n    font-size: 50px;\n    grid-column: 1 / 2;\n    grid-row: 4 / 5;\n}\n\n#feels-like-container {\n    align-self: start;\n    grid-row: 5 / 6;\n    font-size: 16px;\n    color: var(--text-color);\n}\n\n#forecast-container {\n    display: grid;\n    justify-self: center;\n    grid-auto-flow: column;\n    align-items: center;\n    grid-column: repeat(autofill, minmax(100px, 1fr));\n    grid-row: 1 / 5;\n    grid-column: 2 / 4;\n    height: fit-content;\n    width: 90%;\n    overflow-x: auto;\n    border-top: 1px solid gray;\n    border-bottom: 1px solid gray;\n}\n\n#daily-summary {\n    justify-self: start;\n    grid-row: 5 / 6;\n    grid-column: 2 / 3;\n    font-size: 18px;\n}\n\n#secondary-weather-data-container {\n    display: grid;\n    grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;\n    grid-column: 1 / 4;\n    grid-row: 2 / 3;\n    row-gap: 16px;\n    padding: 50px 0px;\n    justify-items: center;\n    align-content: center;\n    background-color: var(--darker-background-color);\n    min-height: 125px;\n}\n\n#secondary-weather-data-container > * {\n    font-weight: bold;\n    display: grid;\n    grid-template: 1fr 1fr / 1fr;\n    justify-items: center;\n    row-gap: 10px;\n    color: black;\n}\n\n#weekly-forecast-container {\n    display: grid;\n    justify-items: center;\n    grid-template: 1fr 1fr 1fr 1fr / 1fr;\n    grid-column: 1 / 3;\n    grid-row: 3 / 4;\n    margin-bottom: 50px;\n}\n\n#weekly-forecast-container > * {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 1fr / 1fr 1fr 1fr 1fr 1fr;\n    align-items: center;\n    justify-items: start;\n    min-width: 50vw;\n    border-bottom: 1px solid gray;\n}\n\n#weekly-forecast-container > * > * {\n    min-width: 100px;\n}\n\n\n#weeklist {\n    display: grid;\n    align-self: end;\n    justify-items: start;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr/ 1fr;\n}\n\n.hour-container {\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    width: 125px;\n    height: 200px;\n    /* border: 1px solid black; */\n    border-radius: 10px;\n    margin: 10px;\n}\n\n.icon-container {\n    height: 75px;\n    width: 75px;\n}'],sourceRoot:""}]);const c=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var A=[].concat(e[d]);r&&i[A[0]]||(void 0!==o&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=o),t&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=t):A[2]=t),a&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=a):A[4]="".concat(a)),n.push(A))}},n}},354:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(a," */");return[n].concat([o]).join("\n")}return[n].join("\n")}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],A=o[d]||0,l="".concat(d," ").concat(A);o[d]=A+1;var u=t(l),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var m=a(p,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var s=r(e,a),d=0;d<o.length;d++){var A=t(o[d]);0===n[A].references&&(n[A].updater(),n.splice(A,1))}o=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0;var r=t(72),a=t.n(r),o=t(825),i=t.n(o),c=t(659),s=t.n(c),d=t(56),A=t.n(d),l=t(540),u=t.n(l),p=t(113),m=t.n(p),f=t(208),h={};h.styleTagTransform=m(),h.setAttributes=A(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=u(),a()(f.A,h),f.A&&f.A.locals&&f.A.locals;class g{constructor(){this.cityName=null,this.celsius=!1,this.apiKey="a390cc13883e4bfa92b23027242606",this.cityWeatherData=null,this.getForecastButton=document.getElementById("get-forecast-button"),this.getForecastButton.addEventListener("click",(()=>this.handleGetForecastButtonClick())),this.cityInput=document.getElementById("city-input"),this.cityInput.addEventListener("keyup",(e=>this.handleCityInputEnter(e))),this.getTemperatureTypeChangeButton=document.getElementById("temperature-type-change-button"),this.getTemperatureTypeChangeButton.addEventListener("click",(()=>{this.celsius=!this.celsius,this.updateTemperatureDisplay()})),this.getCityWeatherData("Louisville")}async getCityWeatherData(e){try{const n=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${e}&days=7`),t=await n.json();this.cityWeatherData=t,this.setCityWeatherData(t)}catch(e){console.error("Error fetching weather data:",e)}}handleGetForecastButtonClick(){const e=document.getElementById("city-input");this.cityName=e.value.trim(),this.cityName&&this.getCityWeatherData(this.cityName)}handleCityInputEnter(e){"Enter"===e.key&&(this.cityInput.value,this.handleGetForecastButtonClick())}setCityWeatherData(e){this.setCurrentWeather(e),this.setForecastWeather(e),this.setAdditionalWeatherData(e)}setCurrentWeather(e){const n=document.getElementById("country-city-name-container"),t=document.getElementById("current-temperature-container"),r=document.getElementById("weather-condition-container"),a=document.getElementById("weather-condition-icon-img"),o=document.getElementById("feels-like-container"),i=document.getElementById("daily-summary");n.textContent=`${e.location.name}`,r.textContent=e.current.condition.text,a.src=this.getIconForCondition(e.current.condition.text),this.celsius?(t.textContent=`${Math.round(e.current.temp_c)}°`,o.textContent=`Feels like ${Math.round(e.current.feelslike_c)}°`,i.textContent=`${e.current.condition.text}; with a low of \n            ${Math.round(e.forecast.forecastday[0].day.mintemp_c)}° and a high of ${Math.round(e.forecast.forecastday[0].day.maxtemp_c)}°.There is a ${e.forecast.forecastday[0].day.daily_chance_of_rain}% chance of rain today.`):(t.textContent=`${Math.round(e.current.temp_f)}°`,o.textContent=`Feels like ${Math.round(e.current.feelslike_f)}°`,i.textContent=`${e.current.condition.text}; with a low of \n            ${Math.round(e.forecast.forecastday[0].day.mintemp_f)}° and a high of ${Math.round(e.forecast.forecastday[0].day.maxtemp_f)}°. There is a ${e.forecast.forecastday[0].day.daily_chance_of_rain}% chance of rain today.`)}updateTemperatureDisplay(){this.cityWeatherData&&(this.clearCurrentWeather(),this.setCurrentWeather(this.cityWeatherData),this.clearForecastWeather(),this.setForecastWeather(this.cityWeatherData),this.clearWeeklyForecastWeather(),this.setThreeDayForecast(this.cityWeatherData))}clearCurrentWeather(){const e=document.getElementById("current-temperature-container"),n=document.getElementById("feels-like-container"),t=document.getElementById("daily-summary");e.textContent="",n.textContent="",t.textContent=""}clearForecastWeather(){document.getElementById("forecast-container").innerHTML=""}clearWeeklyForecastWeather(){const e=document.getElementById("weekly-forecast-container");for(;e.children.length>1;)e.removeChild(e.children[1])}setForecastWeather(e){this.clearForecastWeather();const n=document.getElementById("forecast-container"),t=parseInt(e.location.localtime.slice(11,13),10);e.forecast.forecastday.flatMap((e=>e.hour)).slice(0,12).forEach(((e,r)=>{const a=document.createElement("div");a.classList.add("hour-container"),n.appendChild(a);const o=document.createElement("div");o.classList.add("time-container");let i=(t+r)%24;const c=i>=12;i>12?i-=12:0===i&&(i=12),o.textContent=`${i} ${c?"PM":"AM"}`,a.appendChild(o);const s=document.createElement("div");0!==e.chance_of_rain?(s.textContent=`${e.chance_of_rain}%`,s.style.color="blue"):s.textContent="",a.appendChild(s);const d=document.createElement("img");d.classList.add("icon-container"),d.src=this.getIconForCondition(e.condition.text),a.appendChild(d);const A=document.createElement("div");A.classList.add("hourly-temp"),this.celsius?A.textContent=`${Math.round(e.temp_c)}°`:A.textContent=`${Math.round(e.temp_f)}°`,a.appendChild(A)})),this.setThreeDayForecast(e)}setThreeDayForecast(e){this.clearWeeklyForecastWeather();const n={weekday:"long"};function t(e){const t=new Date(e);return new Intl.DateTimeFormat("en-US",n).format(t)}const r=document.getElementById("weekly-forecast-container");for(let n=0;n<3;n++){const a=document.createElement("div");a.innerHTML="",r.appendChild(a);const o=document.createElement("div");o.textContent=0===n?"Today":t(e.forecast.forecastday[n].date),a.appendChild(o);const i=document.createElement("img");i.src=this.getIconForCondition(e.forecast.forecastday[n].day.condition.text),i.classList.add("icon-container"),a.appendChild(i);const c=document.createElement("div");c.textContent=`${e.forecast.forecastday[n].day.daily_chance_of_rain}%`,c.style.color="blue",a.appendChild(c);const s=document.createElement("div");s.classList.add("weekday-low-temp"),a.appendChild(s);const d=document.createElement("div");d.classList.add("weekday-high-temp"),a.appendChild(d),this.celsius?(d.textContent=`${Math.round(e.forecast.forecastday[n].day.maxtemp_c)}°`,s.textContent=`${Math.round(e.forecast.forecastday[n].day.mintemp_c)}°`):(d.textContent=`${Math.round(e.forecast.forecastday[n].day.maxtemp_f)}°`,s.textContent=`${Math.round(e.forecast.forecastday[n].day.mintemp_f)}°`)}}setAdditionalWeatherData(e){const n=document.getElementById("sunrise"),t=document.getElementById("sundown"),r=document.getElementById("chance-of-rain"),a=document.getElementById("humidity"),o=document.getElementById("uv-index"),i=document.getElementById("wind"),c=document.getElementById("visibility"),s=document.getElementById("precipitation"),d=document.getElementById("moon-phase");n.textContent="Sunrise",t.textContent="Sunset",r.textContent="Chance of rain",a.textContent="Humidity",o.textContent="UV Index",i.textContent="Wind",c.textContent="Visibility",s.textContent="Precipitation",d.textContent="Moon Phase",this.addTextToElement(n,e.forecast.forecastday[0].astro.sunrise),this.addTextToElement(t,e.forecast.forecastday[0].astro.sunset),this.addTextToElement(r,`${e.forecast.forecastday[0].day.daily_chance_of_rain}%`),this.addTextToElement(a,`${e.current.humidity}%`),this.addTextToElement(o,e.current.uv),this.addTextToElement(i,`${e.current.wind_mph} mph ${e.current.wind_dir}`),this.addTextToElement(c,`${e.current.vis_miles} mi`),this.addTextToElement(s,`${e.forecast.forecastday[0].day.totalprecip_in}%`),this.addTextToElement(d,e.forecast.forecastday[0].astro.moon_phase)}addTextToElement(e,n){const t=document.createElement("div");t.textContent=n,t.style.color="white",t.style.fontWeight="lighter",e.appendChild(t)}addIconToElement(e,n){const t=document.createElement("img");t.src=n,importScripts.classList.add("icon-container"),e.appendChild(t)}getIconForCondition(e){switch(e){case"Sunny":case"Clear":case"Clear ":return"./images/wi-day-sunny.svg";case"Partly cloudy":case"Partly Cloudy ":case"Partly Cloudy":case"Cloudy":case"Cloudy ":case"Overcast":case"Overcast ":return"./images/wi-cloudy.svg";case"Mist":case"Fog":case"Freezing fog":return"./images/wi-fog.svg";case"Patchy rain possible":case"Patchy light drizzle":case"Light drizzle":case"Patchy light rain":case"Light rain":case"Moderate rain at times":case"Moderate rain":case"Heavy rain at times":case"Heavy rain":case"Moderate or heavy rain shower":case"Torrential rain shower":case"Light showers of ice pellets":case"Patchy rain nearby":return"./images/wi-rain.svg";case"Patchy snow possible":case"Patchy sleet possible":case"Patchy freezing drizzle possible":case"Freezing drizzle":case"Heavy freezing drizzle":case"Light freezing rain":case"Moderate or heavy freezing rain":case"Light sleet":case"Moderate or heavy sleet":case"Light rain shower":case"Light sleet showers":case"Moderate or heavy sleet showers":return"./images/wi-rain-mix.svg";case"Thundery outbreaks possible":case"Patchy light rain with thunder":case"Patchy light rain in area with thunder":case"Moderate or heavy rain with thunder":case"Patchy light snow with thunder":case"Moderate or heavy snow with thunder":return"./images/wi-storm-showers.svg";case"Blowing snow":case"Patchy light snow":case"Light snow":case"Patchy moderate snow":case"Moderate snow":case"Patchy heavy snow":case"Heavy snow":case"Ice pellets":case"Light snow showers":case"Moderate or heavy snow showers":return"./images/wi-snow.svg";case"Blizzard":return"./images/wi-tornado.svg"}return e}}document.addEventListener("DOMContentLoaded",(()=>{new g}))})();
//# sourceMappingURL=main.js.map