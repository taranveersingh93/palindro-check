const displayMessage = () => {
    const msg = document.getElementById("message").value;
    Swal.fire(
        {
            backdrop: false,
            title: 'App Name',
            text: msg
        }
    );
}

const getValues = () => {
    const input = document.getElementById('userInput').value;
    const reversedInput = reverseText(input);
    const palindromeResult = checkForPalindrome(input, reversedInput);
    displayResults(palindromeResult, reversedInput);
}

const reverseText = text => {
    let reversedText = '';
    for (let i = text.length - 1; i >= 0; i--) {
        reversedText += text[i];
    }
    return reversedText;
}

const checkForPalindrome = (text, reversedText) => {
    const regex = /\W/g;
    const filteredText = text.replace(regex, "");
    const filteredReversedText = reversedText.replace(regex, "");
    return filteredText.toLowerCase() === filteredReversedText.toLowerCase();
}

const displayResults = (result, reversedText) => {
    const alertBox = document.getElementById('alert');
    const displayMessage = document.getElementById('msg');
    const displayHeading = document.querySelector('.alert-heading');
    alertBox.classList.remove('invisible');
    
    if (result) {
        alertBox.classList.remove('alert-danger');
        alertBox.classList.add('alert-success');
        displayHeading.innerText = `Nice! You entered a palindrome`;
    } else {
        alertBox.classList.remove('alert-success');
        alertBox.classList.add('alert-danger');
        displayHeading.innerText = "Oh no! You did not enter a palindrome"
    }
    displayMessage.innerHTML = `Your phrase reversed is: <strong>${reversedText}</strong>.`
}