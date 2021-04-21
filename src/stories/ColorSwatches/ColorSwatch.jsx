import React from 'react'
import classnames from 'classnames'

/**
 * This component is created solely for Storybook used in the colors.stories
 */
function ColorSwatch({ color, label, isDark }) {
  return (
    <div
      className={classnames("color-swatch", isDark ? 'dark' : 'light' )}
      style={{ background: color }}
    >
      <label>{label}</label>
      <label>{color}</label>
    </div>
  )
}

export default ColorSwatch
