function reverseString() {
    const inputElement = document.getElementById("inputString");
    const outputElement = document.getElementById("output");
    const reversedString = inputElement.value.split('').reverse().join('');
    outputElement.textContent = "Reversed String: " + reversedString;
}
