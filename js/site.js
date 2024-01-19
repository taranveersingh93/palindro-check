const getValues = (event) => {
    event.preventDefault();
    const input = document.getElementById('userInput').value;
    const palindromeResult = checkForPalindrome(input);
    displayResults(palindromeResult);
}

const reverseText = text => {
    let reversedText = '';
    for (let i = text.length - 1; i >= 0; i--) {
        reversedText += text[i];
    }
    return reversedText;
}

const cleanText = input => {
    const regex = /\W/g;
    const cleanInput = input.replace(regex, "");
    return cleanInput;
}

const checkForPalindrome = (text) => {
    const filteredText = cleanText(text);
    const reversedText = reverseText(filteredText);

    const results = {
        isPalindrome: filteredText.toLowerCase() === reversedText.toLowerCase(),
        reversedText: reverseText(text),
        errorMessage: ''
    };

    if (text && !filteredText) {
        results.errorMessage = "Please enter an alphanumeric character in the input.";
    } 

    if (!text && !filteredText) {
        results.errorMessage = "Please enter some text.";
    }

    return results;
}

const displayResults = (resultObj) => {
    const alertBox = document.getElementById('alert');
    const displayMessage = document.getElementById('msg');
    const displayHeading = document.querySelector('.alert-heading');
    
    alertBox.classList.remove('invisible', 'alert-danger', 'alert-success');
    displayMessage.innerHTML = `Your phrase reversed is: <strong>${resultObj.reversedText}</strong>.`
    
    if (resultObj.isPalindrome && !resultObj.errorMessage) {
        alertBox.classList.add('alert-success');
        displayHeading.innerText = `Nice! You entered a palindrome`;
    } else if (resultObj.isPalindrome && resultObj.errorMessage) {
        alertBox.classList.add('alert-danger');
        displayHeading.innerText = resultObj.errorMessage;
        displayMessage.innerHTML = '';
    } else {
        alertBox.classList.add('alert-danger');
        displayHeading.innerText = 'Oh no! Your input is not a palindrome.'
    }
}
