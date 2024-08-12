import { Field, Form, Formik, FormikHelpers } from "formik";
import { useState } from "react";

interface ContactForm {
    name: string,
    email: string,
    message: string
};

export const Contact: React.FC = () => {
    const [formStatus, setFormStatus] = useState<string>();

    return (
        <>
            <h1><a id="contact" href="/#"></a>Contact</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    message: '',
                }}
                onSubmit={(
                    values: ContactForm,
                    { setSubmitting, resetForm }: FormikHelpers<ContactForm>
                ) => {
                    const requestOptions = {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(values)
                    };

                    fetch("https://formspree.io/f/xnqeonqj", requestOptions)
                        .then(response => {
                            setFormStatus("Message sent. We'll get back to you shortly!");
                            setSubmitting(false);
                            resetForm();
                        });
                }}
            >
                {props => (
                    <Form>
                        <fieldset>
                            <label>
                                <Field type="text" name="name" placeholder="Name" />
                            </label>

                            <label>
                                <Field type="email" name="email" placeholder="Email" />
                            </label>

                            <label>
                                <Field as="textarea" name="message" placeholder="Message" />
                            </label>
                        </fieldset>

                        {props.isSubmitting ?
                            <progress /> : 
                            props.submitCount == 0 && <button type="submit">Send</button>}
                        <p >{formStatus}</p>
                    </Form>
                )}
            </Formik>
        </>
    );
}