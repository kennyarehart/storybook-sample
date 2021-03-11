import React from 'react'
import ColorSwatch from './ColorSwatch'
import './color-swatches.scss'

export default {
  title: 'global/Colors'
}

export const Colors = () => (
  <div className="color-swatches">
    {getRootVariables().map(rootVar => {
      const label = formatLabel(rootVar)
      const color = getRootValue(rootVar)
      return  <ColorSwatch {...{ color, label }} />
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

function formatLabel(key) {
  return key.replace(/--/, '')
}

function getRootValue(key) {
  return getComputedStyle(document.documentElement).getPropertyValue(key)
}
