
export const validateContactForm = (values) => {
    const errors = {};

    // First name validation
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length < 2) {
        errors.firstName = 'Must be at least 2 characters.';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    // Last name validation
    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length < 2) {
        errors.lastName = 'Must be at least 2 characters.';
    } else if (values.lastName.length > 15) {
        errors.lastName = 'Must be 15 characters or less';
    }

    // Phone number validation
    const phoneReg = /^\d+$/;
    if (values.phoneNum && !phoneReg.test(values.phoneNum)) {
        errors.phoneNum = 'The phone number should contain only numbers';
    }

    // Email validation
    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (values.email && !emailReg.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};