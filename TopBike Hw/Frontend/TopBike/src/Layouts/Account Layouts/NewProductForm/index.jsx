import React from 'react'
import style from "./index.module.scss";
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import * as yup from "yup";
import Button from '../../../Components/Common Components/Button';

const initialValues = {
  title: "",
  image: "",
  price: "",
  categories: "",
  discount: 0,
}

const NewProductSchema = yup.object().shape({
  title: yup.string().required("This is required!"),
  image: yup.string().required("This is required!"),
  price: yup.number().required("This is required!"),
  categories: yup.array().required("This is required!"),
  discount: 0,
})

function NewProductForm() {



  return (
    <Formik
      initialValues={initialValues}
      validationSchema={NewProductSchema}
      onSubmit={(values) => console.log(values)}
      render={({ values }) => (
        <Form className={style.form}>

          <Field name="title" placeholder="Title..." />
          <ErrorMessage name='title' />

          <Field name="image" placeholder="Image..." />
          <ErrorMessage name='image' />

          <Field name="price" placeholder="Price..." />
          <ErrorMessage name='price' />

          <Field name="Discount" placeholder="Any discount... ?" />
          <ErrorMessage name='Discount' />

          <FieldArray
            name="categories"
            render={arrayHelpers => (
              <div>
                {values.categories && values.categories.length > 0 ? (
                  values.categories.map((friend, index) => (
                    <div key={index}>
                      <Field name={`categories.${index}`} />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                      >
                        +
                      </button>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push('')}>
                    Add Category
                  </button>
                )}
              </div>
            )}
          />
          <ErrorMessage name='categories' />

          <Button type="submit">Submit</Button>
        </Form>
      )}
    >
    </Formik>
  )
}

export default NewProductForm