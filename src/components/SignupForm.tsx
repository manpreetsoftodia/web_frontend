"use client"

import { Form, FormikHelpers, useFormik, FormikProvider } from 'formik'
import * as Yup from 'yup'
import LiveFeedbackDisplayer from './LiveFeedbackDisplayer'
import "../styles/styles.css"
import AuthService from '../services/auth-service'

interface ValueSchema {
    username: string;
    password: string;
    email: string;
}

export default function SignupForm() {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            email: ''
        },
        onSubmit: (
            values: ValueSchema,
            { setSubmitting }: FormikHelpers<ValueSchema>
        ) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
                AuthService.register(values.username, values.email, values.password)
            }, 500)
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .min(8, 'Must be at least 8 characters')
                .max(20, 'Must be less than 20 characters')
                .required('Username is required')
                .matches(
                    /^[a-zA-Z0-9]+$/,
                    'Cannot contain special characters or spaces'
                ),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .min(8, 'Must be at least 8 characters')
                .max(20, 'Must be less than 20 characters')
                .required('Password is required')
        })
    })

    return (
        <div id="signup_form">
            <div id="left_space_for_bg_pic">
            </div>
            <div id="right_space_for_credentials">
                <div id="sign_up_message">
                    <h1>Sign Up</h1>
                    <h3>to continue using the service</h3>
                </div>
                <div id="credentials">
                    <FormikProvider value={formik}>
                        <Form>
                            <LiveFeedbackDisplayer
                                label="username"
                                id="username"
                                name="username"
                                helpText="Must be 8-20 characters and cannot contain special characters."
                                type="text"
                            />
                            <LiveFeedbackDisplayer
                                label="email"
                                id="email"
                                name="email"
                                helpText="Must be valid email address."
                                type="email"
                            />
                            <LiveFeedbackDisplayer
                                label="password"
                                id="password"
                                name="password"
                                helpText="Remember password."
                                type="password"
                            />
                            <button type="submit">Sign Up</button>
                            <button type="reset">Reset added credentials</button>
                        </Form>
                    </FormikProvider>
                </div></div></div>)
}