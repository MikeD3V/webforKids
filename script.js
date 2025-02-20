const number = document.querySelector('.Numbers');
const letter = document.querySelector('.Letters');
const shape = document.querySelector('.Shapes');

function navigateToActivity(activity) {
    window.location.href = `activity/${activity}.html`;
}

number.addEventListener('click', function() {
    navigateToActivity('numbers');
});

letter.addEventListener('click', function() {
    navigateToActivity('letters');
});

shape.addEventListener('click', function() {
    navigateToActivity('shapes');
});