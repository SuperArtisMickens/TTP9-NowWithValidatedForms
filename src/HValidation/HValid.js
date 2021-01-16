// assume all fields must have at least 3 characters
// assume all fields cannot be more than 20 characters

// validate functions will return an empty string '' if there is no error
// otherwise a string with a description of the error

function usernames(value) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (value.length < 3) {
        return 'Must be at least 3 characters long';
    }
    if (value.length > 20) {
        return 'Cannot be more than 20 characters long'
    }
    if (value.match(mailformat)) {
        return '';
    }
    else{
        return 'Not a valid email'
    }
}

function passwords(value) {
    let symbolCounter = 0;
    for (let i = 0; i < value.length; i++) {
        if (value[i] == '$') {
            symbolCounter += 1;
        }
    }

    if (value.length < 3) {
        return 'Must be at least 3 characters long';
    }
    if (symbolCounter == 0) {
        return 'You require at least 1: "$" in your password';
    }
    if (value.length > 20) {
        return 'Cannot be more than 20 characters long';
    }

    // implied else
    return '';
}


export {
    usernames,
    passwords
};