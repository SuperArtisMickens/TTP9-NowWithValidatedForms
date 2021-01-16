// assume all fields must have at least 3 characters
// assume all fields cannot be more than 20 characters
// Fields cannot contain numbers

function validateName(value){
    const RENUM = /[0-9]/;

    if(value.length < 3){
	return 'Must be at least 3 characters long';
    }

    if(value.length > 20){
	return 'Cannot be more than 20 characters long'
    }

    if(RENUM.test(value)) {
        return `"${value}" is not a valid input. Names can not contain numbers.`;
    }
    
    // implied else
    return null;
}


export {validateName};