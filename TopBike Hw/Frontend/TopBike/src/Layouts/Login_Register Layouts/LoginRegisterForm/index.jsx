import React, { useState } from 'react';
import style from "./index.module.scss";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { jwtDecode } from "jwt-decode";
import * as yup from "yup";
import axios from 'axios';
import { useUser } from '../../../Context/userContext';

const LoginRegisterSchema = yup.object().shape({
   username: yup.string().min(2, "Username must contain at least 2 characters!").required("This is required!"),
   password: yup.string().min(4, "Password must contain at least 4 characters!").required("This is required!"),
})

function LoginRegisterForm() {

   const [isLogin, setIsLogin] = useState(true)
   const { user, setUser } = useUser()

   async function Sign(values) {
      try {
         const response = await axios({
            method: "post",
            url: `http://localhost:5000/${isLogin ? "login" : "register"}`,
            data: values
         }).then(res => res.data)

         const decodedUser = jwtDecode(response)

         setUser({
            username:decodedUser.username,
            role:decodedUser.role,
            basket:decodedUser.basket,
            wishlist:decodedUser.wishlist,
            token: response
         })

      } catch (error) {
         console.log(error.response.data.message);
      }
   }

   return (
      <div id={style.Login}>
         {isLogin ? <><div className={style.logoBox}><img src={"https://topbike-store-demo.myshopify.com/cdn/shop/files/LOGO.png?v=1613575279"} alt="" /></div>
            <hr className={style.line} /></> : null}
         <h2 className={style.title} style={!isLogin ? { letterSpacing: "3px" } : {}}>{isLogin ? "Great to have you back!" : "REGISTER"}</h2>
         <Formik
            initialValues={{
               username: '',
               password: '',
            }}
            validationSchema={LoginRegisterSchema}
            onSubmit={(values) => Sign(values)}
         >
            <Form className={style.form}>
               <Field id={style.username} name="username" placeholder="Username" />
               <ErrorMessage name='username' />

               <Field id={style.password} name="password" placeholder="Password" />
               <ErrorMessage name='password' />

               <button className={style.loginBtn} type="submit">{isLogin ? "LOG IN" : "REGISTER"}</button>
            </Form>
         </Formik>
         <div className={style.register}>{isLogin ? "Don’t have an account?" : null}<span onClick={() => setIsLogin(!isLogin)} className={style.goRegister}>{isLogin ? "Register now" : "Back to login"}</span></div>
      </div>
   )
}

export default LoginRegisterForm