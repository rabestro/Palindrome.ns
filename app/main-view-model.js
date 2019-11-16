const Observable = require("tns-core-modules/data/observable").Observable;

function isPalindrome(phrase) {
    const original = phrase.replace(/\s+/g, '').toUpperCase();
    const reverse = original.split('').reverse().join('');
    return original === reverse;
}

function createViewModel() {
    const viewModel = new Observable();
    viewModel.message = '';

    viewModel.onTap = () => { 
        viewModel.set("message", isPalindrome(viewModel.textFieldValue) ? 
            "The phrase is a palindrome" : "The phrase isn't a palindrome");
    };

    return viewModel;
}

exports.createViewModel = createViewModel;
