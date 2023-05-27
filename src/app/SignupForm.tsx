"use client"

import {Formik, Field, Form, FormikHelpers} from 'formik'

interface ValueSchema{
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: number;
    password: string;
    confirmPassword: string;
    agreeToTerms: boolean;
}

export default function SignupForm(){
    return(        
    <div id="signup_form">
        <div id="left_space_for_bg_pic">
        </div>
        <div id="right_space_for_credentials">
            <div id="sign_up_message">
                <h1>Sign Up</h1>
                <h3>to continue using the service</h3>
            </div>
            <div id="credentials">
               <Formik 
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        phoneNumber: 0,
                        password: '',
                        confirmPassword: '',
                        agreeToTerms: false
                    }}
                    onSubmit={
                        (
                            values: ValueSchema,
                            {setSubmitting} : FormikHelpers<ValueSchema>
                        ) => 
                        {
                            setTimeout(()=>{
                                alert(JSON.stringify(values, null, 2))
                                setSubmitting(false)
                            }, 500)
                        }
                    }
                >
                {({isSubmitting, values}) => (
                <Form>
                        <label htmlFor='firstName'>First Name</label>
                        <Field id='firstName' name='firstName'/>

                        <label htmlFor='lastName'>Last Name</label>
                        <Field id='lastName' name='lastName'/>

                        <label htmlFor='email'>Email</label>
                        <Field id='email' name='email' type='email'/>

                        <label htmlFor='phoneNumber'>Phone Number</label>
                        <Field id='phoneNumber' name='phoneNumber' type='number'/>

                        <label htmlFor='password'>Password</label>
                        <Field id='password' name='password' type='password'/>

                        <label htmlFor='confirmPassword'>Confirm Password</label>
                        <Field id='confirmPassword' name='confirmPassword' type='password'/>

                        <label htmlFor='agreeToTerms'>
                            <Field id='agreeToTerms' name='agreeToTerms' type='checkbox'/>
                             {/* {`${values.agreeToTerms}`} */}
                            I agree to the Terms and Conditions
                        </label>

                        <button type='submit'>Sign Up</button>
                </Form>
                )}
                </Formik>
        </div>
        <h3 id="message">
            or continue using
        </h3>
        <div id="options">
            <button>google</button>
            <button>twitter</button>
            <button>facebook</button>
        </div>
        </div></div>)
}