const validate = (inputs) => {
    //Email errors
    const errors = {};
    if (!inputs.character) {
        errors.character = 'Check character';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputs.email)
    ) {
        errors.character = 'Invalid email address';
    }
    //Password Errors
    if (!inputs.note ) {
        errors.note = 'Enter a plan'
    }
    return errors;
}
export default validate;
