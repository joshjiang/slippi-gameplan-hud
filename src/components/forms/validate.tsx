export const validate = (inputs) => {
    //Character errors
    const errors = {};
    if (!inputs.character) {
        errors["CharacterError"] = 'Enter a character';
    } 
    //Password Errors
    if (!inputs.note || inputs.note === "") {
        errors["NoteError"] = 'Enter a plan'
    }
    return errors;
}
export default validate;
