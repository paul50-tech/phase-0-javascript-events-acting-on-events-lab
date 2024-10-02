// Your code here
const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
    const leftPosition = parseInt(dodger.style.left) || 0;
    if (leftPosition > 0) {
        dodger.style.left = `${leftPosition - 1}px`;
    }
}

function moveDodgerRight() {
    const leftPosition = parseInt(dodger.style.left) || 0;
    dodger.style.left = `${leftPosition + 1}px`;
}
