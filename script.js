const number = document.querySelector('.Numbers');
const letter = document.querySelector('.Colors');
const shape = document.querySelector('.Shapes');

function navigateToActivity(activity) {
    window.location.href = `activity/${activity}.html`;
}

number.addEventListener('click', function() {
    navigateToActivity('numbers');
});

letter.addEventListener('click', function() {
    navigateToActivity('colors');
});

shape.addEventListener('click', function() {
    navigateToActivity('shapes');
});