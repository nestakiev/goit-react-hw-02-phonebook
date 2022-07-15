import { Formik, Field, Form, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import * as yup from "yup";

export const ContactForm = ({addContact}) => {
    const initialValues = {
        name: '',
        number: '',
    }
    
    const handleSubmit = (data, {resetForm}) => {
        addContact(data);
        resetForm();
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
                <label htmlFor="name"> Name
                    <Field name="name"/>
                </label>

                <label htmlFor="number"> Number
                    <Field name="number"/>
                </label>
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
}
