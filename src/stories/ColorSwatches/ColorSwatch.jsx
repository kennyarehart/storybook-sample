import React from 'react'

/**
 * This component is created solely for Storybook used in the colors.stories
 */
function ColorSwatch({ color, label }) {
  return (
    <div className="color-swatch">
      <div style={{ background: color }}></div>
      <label>{label}</label>
    </div>
  )
}

export default ColorSwatch
