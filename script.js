document.querySelectorAll("[data-tilt]").forEach((card) => {
  const strength = 20;

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x - rect.width / 2) / rect.width) * strength;
    const rotateX = -((y - rect.height / 2) / rect.height) * strength;

    card.style.transform =
      `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(700px) rotateX(0) rotateY(0)";
  });
});

let fsm = false;

function loadPage(page) {
  document.querySelector('iframe').src = page;
  document.querySelector('loadpage').style.display = 'flex';
  document.querySelector('iframe').style.height = '80%';
  document.querySelector('iframe').style.width = '80%';
  document.querySelector('loadpage').style.height = '80%';
  document.querySelector('loadpage').style.width = '70%';
}

function unloadPage(page) {
  document.querySelector('iframe').src = '';
  document.querySelector('loadpage').style.display = 'none';
}



function fullscreenPage() {
  if (fsm === false) {
    fsm = true;
    document.querySelector('iframe').style.height = '100%';
    document.querySelector('iframe').style.width = '100%';
    document.querySelector('loadpage').style.height = '100%';
    document.querySelector('loadpage').style.width = '100%';
    document.querySelector('loadpage').querySelector('#fullscreen').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-120v-120H120v-80h200v200h-80Zm400 0v-200h200v80H720v120h-80ZM120-640v-80h120v-120h80v200H120Zm520 0v-200h80v120h120v80H640Z"/></svg>';
    document.querySelector('#closefullscreen').style.display = 'none';
  } else {
    fsm = false;
    document.querySelector('iframe').style.height = '80%';
    document.querySelector('iframe').style.width = '80%';
    document.querySelector('loadpage').style.height = '80%';
    document.querySelector('loadpage').style.width = '70%';
    document.querySelector('loadpage').querySelector('#fullscreen').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M120-120v-200h80v120h120v80H120Zm520 0v-80h120v-120h80v200H640ZM120-640v-200h200v80H200v120h-80Zm640 0v-120H640v-80h200v200h-80Z"/></svg>';
    document.querySelector('#closefullscreen').style.display = 'flex';
  }
}

function openPage(page, favicon, title) {
  WINDOW = window.open();
  WINDOW.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="icon" type="image/png" href="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${favicon}&size=256">
      <title>Jarumi :3 | ${title}</title>
      <style>
        * {
          overflow: hidden;
        }
        html, body, iframe {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
        }
        iframe {
          background-image: url('loading.gif');
          background-position: center;
          background-size: 150px;
          background-color: black;
          background-repeat: no-repeat;
        }
      </style>
    </head>
    <body>
      <iframe src="${page}" frameborder="0"></iframe>
    </body>
    </html>`)
}