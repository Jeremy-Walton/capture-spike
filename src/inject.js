const juice = require('juice')

const util = require('web-resource-inliner/src/util')

util.getInlineFileContents = function( src, relativeTo ) {
  debugger
  return fs.readFileSync( util.getInlineFilePath( src, relativeTo ) );
};



let iframe = document.createElement('iframe');

iframe.src = window.location;
iframe.style.position = 'absolute';
iframe.style.left = '5vw';
iframe.style.top = '5vh';
iframe.style.width = '95vh';
iframe.style.height = '95vh';
iframe.style.zIndex = '9999';
iframe.style.border = '1px solid red';

iframe.onload = () => {
  console.log('Juicing up: ')
  // console.log('window location href', window.location.href)
  const relativeUrl = "https://ebus-test.fa.us2.oraclecloud.com/"
  const options = { webResources: { relativeTo: relativeUrl, images: true } }
  const juicedUpCode = juice(iframe.contentWindow.document.children[0].outerHTML, options)
  console.log('Juiced html: ', juicedUpCode)
  navigator.clipboard.writeText(juicedUpCode)
}

document.body.appendChild(iframe);
