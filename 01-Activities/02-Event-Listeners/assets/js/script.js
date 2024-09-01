var count = 0;

// TODO: Add a comment describing the function of the following document.querySelector() methods:
var incrementEl = document.querySelector('#increment');
var decrementEl = document.querySelector('#decrement');
var countEl = document.querySelector('#count')

// TODO: Add a comment describing the function the following code:
function setCounterText() {
    countEl.textContent = count;
}
// TODO: Add a comment describing the functionality of the follwing event listener:
incrementEl.addEventListener('click', function() {
    count++;
    setCounterText();
});

// TODO: Add a comment describing the functionality of following the following event listener:
decrementEl.addEventListener('click', function() {
    // Action will fire if cont is greater then 0
    if (count > 0) {
        count--;
    setCounterText();
    }
});
