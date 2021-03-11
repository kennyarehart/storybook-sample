import React from 'react'

export default {
  title: 'global/Fonts'
}

const elements = ['h1', 'h2', 'h3', 'h4', 'p', 'a']
export const Fonts = () => (
  <div className="font-container">
    {elements.map(type => (
      React.createElement(type, { key: type }, `${type} Font Size`)
    ))}
  </div>
)
