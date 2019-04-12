import React from 'react'
import PropTypes from 'prop-types'
import withField from './withField'
// import MuiInput from '@material-ui/core/TextField'
// const InputField = withField(MuiInput)

const InputText = ({ renderer: Renderer, label, name, ...rest }) => (<Renderer label={label} name={name} {...rest} />)

InputText.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  renderer: PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.string])
}

export default withField(InputText)
