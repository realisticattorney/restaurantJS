(()=>{"use strict";var e={211:(e,t,n)=>{e.exports=n.p+"c9239f4b5baecceafa93.jpeg"},109:(e,t,n)=>{e.exports=n.p+"a90698380709154a2d8c.jpeg"}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{const e=["Home","Menu","Contact"];var t=n(211);var o=n(109);const a=["Option 1: ","Option 2: ","Option3: "],r=[["Empanadas","Pasta Marinara","Teriyaki Chicken"],["Roasted vegetables","Caesar Salad","Hand Tossed Salad"],["Strawberry Cake","Cheese cake","Ice Cream"]],d=n=>{document.getElementById("content").innerHTML="",(()=>{const t=document.querySelector("#content"),n=document.createElement("nav"),o=document.createElement("div"),a=document.createElement("ul");e.map((e=>{const t=document.createElement("li"),n=document.createElement("a");return n.innerHTML=e,n.id=e.toLocaleLowerCase(),n.href="#",t.appendChild(n),a.appendChild(t),!0})),o.appendChild(a),n.appendChild(o),t.appendChild(n)})(),document.getElementById("home").addEventListener("click",(()=>{d(1)})),document.getElementById("contact").addEventListener("click",(()=>{d(2)})),document.getElementById("menu").addEventListener("click",(()=>{d(3)})),1===n&&(()=>{const e=document.querySelector("#content"),n=new Image;n.src=t;const o=document.createElement("h1"),a=document.createElement("p");o.textContent="Restorant",a.textContent="Craving some delicious Greek food? Maybe you’re in the mood for a juicy steak? No matter what kind of meal you have in mind, The Spot Restaurant is ready to prepare it for you.Since 1973, The Spot Restaurant has been the go-to diner for residents of  Binghamton, NY. Our diner serves breakfast all day, in addition to wholesome and flavorful dining options for lunch and dinner. From burgers to salads, seafood to pastas, you’ll find all kinds of hearty meals prepared fresh at The Spot Restaurant. Our diner also has a full bakery with delicious baked goods and other treats, including our famous cheesecake. Sounds delicious, right? We’re here to serve you the best food around, whenever you’re looking for a great American restaurant in Binghamton, NY",e.appendChild(o),e.appendChild(n),e.appendChild(a)})(),2===n&&(()=>{const e=document.querySelector("#content"),t=new Image;t.src=o;const n=document.createElement("h1"),a=document.createElement("p");n.textContent="Get in touch with us",a.textContent="Want to get in touch? We would love to hear from you.",e.appendChild(n),e.appendChild(t),e.appendChild(a)})(),3===n&&(()=>{const e=document.querySelector("#content"),n=new Image;n.src=t;const o=document.createElement("h1"),d=document.createElement("h2");o.textContent="Our menu",d.textContent="Dinner Options. Main Dish, Salad & Dessert",e.appendChild(o),e.appendChild(n),e.appendChild(d);const c=document.createElement("div"),i=document.createElement("ol");let l=0;a.map((e=>{const t=document.createElement("h3"),n=document.createElement("ul");return n.className="ul-ul",t.innerHTML=e,n.appendChild(t),i.appendChild(n),r.map((e=>{const t=document.createElement("p");return t.innerHTML=`- ${e[l]}\n\n`,n.appendChild(t),!0})),l+=1,!0})),c.appendChild(i),e.appendChild(c)})()};d()})()})();