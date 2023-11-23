import React, { useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";
import "./form.css"

function MyForm() {

    const [users, setUsers] = useState(localStorage.getItem('Users') ? JSON.parse(localStorage.getItem('Users')) : [] )

    function AddToLocal(user) {
        localStorage.setItem('Users',JSON.stringify([...users, user]))
        setUsers([...users, user])
    }

    const registerSchema = object().shape({
        firstname:string().min(3, "Name can't be less than 3 characters !").max(15, "Name can't be more than 15 characters !").required("Enter your name !"),
        lastname:string().min(3, "Lastname can't be less than 3 characters !").max(15, "Lastname can't be more than 15 characters !").required("Enter your name !"),
        email:string().email("Enter a valid mail address !").required("Enter your mail !"),
        password:string().min(8, "Valid password has to be at least 8 characters !").matches(/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+{}|:;"'<>,.?/\[\]\-=\\`~])[0-9a-zA-Z!@#$%^&*()_+{}|:;"'<>,.?/\[\]\-=\\`~]{8,}$/, "Password should obtain at least a character, a number and a symbol").required('Add password !')
    })

    return (
        <>
            <h1 style={{textAlign:"center"}}>Sign Up</h1>
            <Formik
            // validateOnChange={true}
            initialValues={{firstname:"", lastname:"", email:"", password:""}}
            validationSchema={registerSchema}
            onSubmit={((values)=>AddToLocal(values))}
            >
                <Form className='flex'>
                    <Field type="text" name="firstname" />
                    <ErrorMessage name='firstname' />
                    <Field type="text" name="lastname" />
                    <ErrorMessage name='lastname' />
                    <Field type="email" name="email" />
                    <ErrorMessage name='email' />
                    <Field type="text" name="password" />
                    <ErrorMessage name='password' />
                    <button type='Submit' >Sign Up</button>
                </Form>

            </Formik>
        </>
    )
}

export default MyForm