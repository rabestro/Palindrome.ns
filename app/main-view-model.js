const Observable = require("tns-core-modules/data/observable").Observable;

function checkPalindrome(phrase) {
    const original = phrase.replace(/\s+/g, '').toUpperCase();
    const reverse = original.split("").reverse().join("");

    return original === reverse ? 
        "The phrase is palindrome!" : 
        "The phrase is not palindrome.";
}

function createViewModel() {
    const viewModel = new Observable();
    viewModel.message = "";

    viewModel.onTap = () => {
        viewModel.set("message", checkPalindrome(viewModel.textFieldValue));
    };

    viewModel.clearMessage = () => {
        viewModel.set("message", "");
    };

    return viewModel;
}

exports.createViewModel = createViewModel;
