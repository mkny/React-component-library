import React, { Fragment } from 'react'
import Button from '@material-ui/core/Button'
// import Dropzone from './Dropzone'

class FileUpload extends React.Component {
  render() {
    return (
      <Fragment>
        <input
          accept="image/*"
          // className={classes.input}
          style={{ display: 'none' }}
          id="raised-button-file"
          multiple
          type="file"
        />
        <label htmlFor="raised-button-file">
          <Button
            variant="outlined"
            component="span"
            // className={classes.button}
          >
        Upload
          </Button>
        </label>
      </Fragment>
    )
  }
}

export default FileUpload
