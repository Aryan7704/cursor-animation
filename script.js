const cursor = document.querySelector('.cursor');
var timeout;


// cursor movement
document.addEventListener('mousemove', (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
    cursor.style.display = 'block';

    // stop animation

    function mousestop() {
        cursor.style.display = 'none';
    }
    // hide cursor

    clearTimeout(timeout);
    timeout = setTimeout(mousestop, 1000);


});


// document.addEventListener("mouseout", () => {
//     cursor.style.display = 'none';
// })