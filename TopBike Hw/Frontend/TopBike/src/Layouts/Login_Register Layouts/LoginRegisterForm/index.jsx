import React, { useState } from 'react'
import style from "./index.module.scss";
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

function LoginRegisterForm() {

   const [isLogin, setIsLogin] = useState(true)

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
            onSubmit={(values) => console.log(values)}
         >
            <Form className={style.form}>
               <Field id={style.username} name="username" placeholder="Username" />

               <Field id={style.password} name="password" placeholder="Password" />

               <button className={style.loginBtn} type="submit">{isLogin ? "LOG IN" : "REGISTER"}</button>
            </Form>
         </Formik>
         <div className={style.register}>{isLogin ? "Don’t have an account?" : null}<span onClick={() => setIsLogin(!isLogin)} className={style.goRegister}>{isLogin ? "Register now" : "Back to login"}</span></div>
      </div>
   )
}

export default LoginRegisterForm