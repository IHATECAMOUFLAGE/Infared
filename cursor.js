let y, x;

document.querySelector('body').insertAdjacentHTML('afterbegin', `
    <cursor></cursor>
    <cursorfollow></cursorfollow>
`);

document.querySelector('head').insertAdjacentHTML('afterbegin', `
    <style>
    cursor {
    pointer-events: none;
        position: fixed;
        top: 0;
        border-radius: 100px;
        left: 0;
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 3px solid rgba(255, 255, 255, 0.3);
        width: 30px;
        height: 30px;
        z-index: 9999;
        transform: rotate(45deg);

        &::after {
            content: '';
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
            background: rgba(255, 255, 255, 0.3);
            width: 10px;
            height: 10px;
            position: absolute;
            top: 0;
            left: 0;
            transform: rotate(-90deg) translate(-12px, -12px);
            z-index: 9998;
        }
    }
    </style>
`); 

document.addEventListener('mousemove', (e) => {
   y = e.clientY;
   x = e.clientX;
   document.querySelector('cursor').style.top = `${y}px`;
   document.querySelector('cursor').style.left = `${x}px`;
});

document.querySelector('loadpage').addEventListener('mouseover', () => {
  document.querySelector('cursor').style.display = 'none';
  document.querySelector('cursorfollow').style.display = 'none';
});

document.querySelector('loadpage').addEventListener('mouseleave', () => {
  document.querySelector('cursor').style.display = 'flex';
  document.querySelector('cursorfollow').style.display = 'flex';
});