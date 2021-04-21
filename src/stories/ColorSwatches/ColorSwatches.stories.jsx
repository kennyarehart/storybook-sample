import React from 'react'
import ColorSwatch from './ColorSwatch'
import './color-swatches.scss'

export default {
  title: 'global/Colors'
}

export const Colors = () => (
  <div className="color-swatches">
    {getRootVariables().map(rootVar => {
      const color = getRootValue(rootVar)
      return <ColorSwatch
        label={formatLabel(rootVar)}
        color={color}
        isDark={isDark(color)}
      />
    })}
  </div>
)

function getRootVariables() {
  return Array.from(document.styleSheets)
  .filter(sheet => sheet.href === null || sheet.href.startsWith(window.location.origin))
  .reduce((acc, sheet) =>
      (acc = [
        ...acc,
        ...Array.from(sheet.cssRules).reduce(
          (def, rule) =>
            (def =
              rule.selectorText === ":root"
                ? [
                    ...def,
                    ...Array.from(rule.style).filter(name =>
                      name.startsWith("--")
                    )
                  ]
                : def),
          []
        )
      ]),
    []
  )
}

const formatLabel = key => key.replace(/--/, '')

const getRootValue = key => getComputedStyle(document.documentElement).getPropertyValue(key)

const isDark = hex => {
  hex = hex.trim()
  if (hex[0] != '#') {
    // rgb / rgba
    var result = hex.match(/\d+/g)
    var r = parseInt(result[0])
    var g = parseInt(result[1])
    var b = parseInt(result[2])
  } else {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);
    console.log(hex, r, g, b)
  }
  const average = (r + b + g) / 3

  return average > 128
}