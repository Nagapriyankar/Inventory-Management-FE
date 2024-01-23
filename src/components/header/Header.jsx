import React from 'react'
import "../../index.css"

function Header() {
  return (
    <div className="--pad header">
      <div className="--flex-between">
        <h3>
          <span className="--fw-thin">Welcome, </span>
          <span className="--color-danger">Nagapriyankaa</span>
        </h3>
        <button className="--btn --btn-danger">
          Logout
        </button>
      </div>
      <hr />
    </div>  )
}

export default Header