import React from 'react'
import PropTypes from 'prop-types'
import './button.scss'

/**
 * This is the button component.
 */
function Button({ variant, label, size, ...rest }) {
  return (
    <button className={`button--${variant} button--${size}`} {...rest}>
      {label}
    </button>
  )
}

Button.propTypes = {
  /**
   * Optional click handler
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {Object} data - All props.
   */
  onClick: PropTypes.func,
  /**
   * The text label:
   */
  label: PropTypes.string,
  /**
   * How large should the button should be:
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Which type of button this is:
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
}

Button.defaultProps = {
  onClick: undefined,
  size: 'medium',
  variant: 'primary',
}

export default Button