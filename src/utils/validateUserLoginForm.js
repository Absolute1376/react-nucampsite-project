function validateUserLoginForm(values) {
    const errors = {};

    if (!values.userName) {
        errors.userName = 'Required';
    } else if (values.userName.length < 6) {
        errors.userName = 'Must be at least 6 characters.';
    } else if (values.userName.length > 15) {
        errors.userName = 'Must be 15 characters or less';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 6) {
        errors.password = 'Must be at least 6 characters.';
    } else if (values.password.length > 15) {
        errors.password = 'Must be 15 characters or less';
    }

    return errors;
};

export default validateUserLoginForm;