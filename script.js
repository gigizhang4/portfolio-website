const customCursor = document.querySelector('.custom-cursor');
const cursorWidth = customCursor.offsetWidth;
const cursorHeight = customCursor.offsetHeight;
// Track mouse movements
document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    // Move the custom cursor to the pointer's position
    customCursor.style.left = `${x- cursorWidth/2}px`;
    customCursor.style.top = `${y-cursorHeight /2}px`;
});

// Interactive Elements Hover Effects
const interactiveElements = document.querySelectorAll('a, button');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        customCursor.style.transform = 'translate(-50%, -50%) scale(1.5)'; 
    });

    el.addEventListener('mouseleave', () => {
        customCursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

