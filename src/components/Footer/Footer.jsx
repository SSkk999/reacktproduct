import React, { Fragment } from 'react'

const Footer = () => {
  return (
    <Fragment>
        <div className="text-center bg-dark text-white py-2 fixed-bottom">
        <span>
            Copyright & Developed by {"..."}
            <a href="https:google.com" target='blank'>My site</a>
        </span>
        </div>
    </Fragment>
  )
}

export default Footer
