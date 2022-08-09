let iframe = document.createElement('script');
iframe.src = window.location;
iframe.style.position = 'absolute';
iframe.style.left = '10px';
iframe.style.top = '10px';
iframe.style.width = '95vh';
iframe.style.height = '95vh';
iframe.style.zIndex = '9999';
iframe.style.border = '1px solid red';

document.body.appendChild(iframe);
