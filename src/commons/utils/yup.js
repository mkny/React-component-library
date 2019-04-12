import * as Yup from 'yup'

export const locale = {
  mixed: {
    default: 'form.fieldInvalid',
    required: 'form.fieldRequired'
  },
  string: {
    email: 'form.emailInvalid'
  }
}

Yup.setLocale(locale)

export default Yup
