import React from 'react'
import classnames from "classnames"
import './panel.scss'

const Panel = ({ isTabbed, children, ...rest }) => {
  return (
    <section
      { ...rest }
      className={classnames("panel", { "tabbed": isTabbed })}
    >
      {children}
    </section>
  )
}

export default Panel
