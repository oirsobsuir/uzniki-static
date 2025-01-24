const videoInput = document.getElementById('participant__video');
const videoIframes = document.getElementById('video__iframes');

videoInput.addEventListener('click', function () {
    const iframesIframe = document.createElement('div');
    iframesIframe.className = 'iframes__iframe';

    const iframeTextarea = document.createElement('textarea');
    iframeTextarea.className = 'textInput textInput--light';
    iframeTextarea.setAttribute('name', 'iframes__iframe');
    iframeTextarea.setAttribute('rows', '3');

    const iframeDelete = document.createElement('div');
    iframeDelete.className = 'iframe__delete';
    iframeDelete.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    });

    iframesIframe.appendChild(iframeTextarea);
    iframesIframe.appendChild(iframeDelete);

    videoIframes.appendChild(iframesIframe);

    iframeTextarea.focus();
});