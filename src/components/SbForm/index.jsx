import React from 'react'
import yup from 'commons/utils/yup'
import { Formik } from 'formik'
import PropTypes from 'prop-types'

class SbForm extends React.Component {
  render() {
    const { validation, initialValues, onSubmit, children } = this.props

    return (
      <Formik
        validationSchema={validation && validation(yup)}
        initialValues={initialValues}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (<form onSubmit={handleSubmit}>{children}</form>)}
      />
    )
  }
}

SbForm.propTypes = {
  children: PropTypes.node.isRequired,
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  validation: PropTypes.func
}

export default SbForm

// validation={{'email': ['required', 'email']}}
// yup.object().shape(
// {
//   email: yup.string()
//       .email()
//       .required(),

//   password: yup.string()
//       .required()
// }
// // )

// const getValidationSchema = (objectOrFunction) => {
//   if (objectOrFunction instanceof Function) {
//     return objectOrFunction
//   } else {
//     let yupValidation = {}
//     // yup.object.shape();
//     Object.keys(objectOrFunction).forEach((name, index) => {
//       const rules = objectOrFunction[index];
//       // yupValidation[name]
//     })
//   }
// }
