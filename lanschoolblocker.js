document.querySelector('body').insertAdjacentHTML('afterbegin', `
    <lanschoolCover></lanschoolCover>
`);

IMAGEURL = './img/launchpadLSCOVER.png';

document.querySelector('head').insertAdjacentHTML('afterbegin', `
    <style>
        lanschoolCover {
            background-image: url("${IMAGEURL}");
            width: 100vw;
            height: 100vh;
            background-size: 100%;
            background-position: center;
            position: fixed;
            z-index: 100000000000;
            display: none;
        }
    </style>
`);

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.querySelector('lanschoolCover').style.display = 'block';
        document.querySelector('title').innerHTML = 'Launchpad';
        document.getElementById('favicon').href = 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.classlink.com&size=256';
    } else {
        document.querySelector('lanschoolCover').style.display = 'none';
        document.querySelector('title').innerHTML = 'Infared';
        document.getElementById('favicon').href = 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://universal.neptunenavigate.com/&size=256';
    }
});