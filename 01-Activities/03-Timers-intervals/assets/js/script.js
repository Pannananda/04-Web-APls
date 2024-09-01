var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var message =
'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
var words = message.split(' ');

function countdown() {
    var timeleft = 5;

    // TODO: Add a comment describing the functionlity of the setInterval() method:
    var timeInterval = setInterval(function () {
       // TODO: Add comments describing the functionality of the `if` statement:
       if (timeleft > 1) {
        timerEl.textContent = timeleft + ' seconds remaining';
        timeleft--;
       }// TODO: Add comments describing the functionality of the `else if` statement:
       else if (timeleft === 1) {
        timerEl.textContent = timeleft + ' second remaining';
        timeleft--;
       }// TODO: Add comments describing the functionality of the `else` statement:
       else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
       }
    }, 1000);
}

// Displays the message one word at atime 
function displayMessage() {
    var wordCount = 0;

    // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var msgInterval = setInterval(function () {
        // if there are more words left in the message
        if (words[wordCount] === undefined) {
            // Use `clearInterval()` to stop the timer
            clearInterval(msgInterval);
        } else {
            // Display one word of the message
            mainEl.textContent = words[wordCount];
            wordCount++;
        }
    }, 1000);
}

countdown();