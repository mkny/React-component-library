/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import { Field } from 'formik'
import i18n from 'commons/i18n'

const withFormField = (Input) => {
  const FormField = (props) => {
    const { field, form, ...rest } = props
    const { touched, errors } = form
    const error = touched[field.name] && errors[field.name]
    const value = form.values[field.name]
    const helperText = i18n.t(error)

    return (
      <Input
        {...field}
        {...rest}
        value={value}
        error={!!error}
        helperText={helperText}
      />
    )
  }
  return FormField
}

const withField = (Input) => {
  const InputField = withFormField(Input)
  return props => <Field {...props} component={InputField} />
}

export default withField

// const withFormField = (Input) => {
//   const FormField = (props) => {
//     const { field, form, ...otherProps } = props
//     const { touched, errors } = form
//     const error = touched[field.name] && errors[field.name]
//     const helperText = 'noop'

//     return (
//       <Input {...field} {...otherProps} error={!!error} helperText={helperText} />
//     )
//   }

//   FormField.defaultProps = {
//     margin: 'normal'
//   }

//   return FormField
// // }
// import i18n from 'i18next'
// import { initReactI18next } from 'react-i18next'
// import LanguageDetector from 'i18next-browser-languagedetector'
