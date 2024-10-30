const reverseString = function(string) {
    const chatArray = string.split('');
    const reverseArray = chatArray.reverse();
    const reverseString = reverseArray.join('');

    return reverseString;
    //return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
