function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");const u={form:document.querySelector("form"),delay:document.querySelector('input[name ="delay"]'),step:document.querySelector('input[name = "step"]'),amount:document.querySelector('input[name = "amount"]')};function a(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?n({position:e,delay:t}):o([{position:e,delay:t}])}),t)}))}u.form.addEventListener("submit",(t=>{t.preventDefault();parseInt(u.delay.value),parseInt(u.step.value),parseInt(u.amount.value);let n=1;!function t(o){o.then((({position:o,delay:r})=>{e(i).Notify.success(`✅ Fulfilled promise ${o} in ${r}ms`),n++,n<=amount&&t(a(n,r+(n-1)*step))})).catch((({position:o,delay:r})=>{e(i).Notify.failure(`❌ Rejected promise ${o} in ${r}ms`),n++,n<=u.amount&&t(a(n,r+(n-1)*step))}))}(a(n,u.delay))}));
//# sourceMappingURL=03-promises.82ccadae.js.map