const juice = require('juice')

let iframe = document.createElement('iframe');

iframe.src = window.location;
iframe.style.position = 'absolute';
iframe.style.left = '5vw';
iframe.style.top = '5vh';
iframe.style.width = '95vh';
iframe.style.height = '95vh';
iframe.style.zIndex = '9999';
iframe.style.border = '1px solid red';

document.body.appendChild(iframe);

console.log('Juicing up: ')

const juicedUpCode = juice(iframe.contentWindow.document.body.innerHTML)
console.log('Juiced html: ', juicedUpCode)
navigator.clipboard.writeText(juicedUpCode)
