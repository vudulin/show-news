import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

const Preloader = () => {
  return (
    <React.Fragment >
      <Spinner variant="light" animation="grow" />
      <Spinner variant="secondary" animation="grow" />
      <Spinner variant="dark" animation="grow" />
    </React.Fragment>
  )
}

export default Preloader