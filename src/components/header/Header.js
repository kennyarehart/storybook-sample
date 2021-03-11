import React from 'react'
import PropTypes from 'prop-types'

import Button from '../button/Button'
import './header.scss'

const Header = ({ title, variant, labels, onClicks }) => {
  return (
    <header>
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        {labels.map((label, i) => (
          <Button size="small" onClick={onClicks[i] || function(){}} label={label} key={label} />
        ))}
      </div>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.oneOf(['buttons', 'links']),
  labels: PropTypes.arrayOf(PropTypes.string),
  onClicks: PropTypes.arrayOf(PropTypes.func),
}

Header.defaultProps = {
  variant: 'buttons',
  labels: [],
  onClicks: [],
}

export default Header
