// import { addDecorator } from '@storybook/react'
// import { withConsole } from '@storybook/addon-console'
// import { withA11y } from '@storybook/addon-a11y'
import '!style-loader!css-loader!sass-loader!../src/styles/main.scss';

// Config file for the stories
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      method: '',
      order: ['global', 'components', 'pages', 'readmes'],
      locales: '',
    },
  },
}

// adds console output with prefix of the component the log came from
// addDecorator((storyFn, context) => withConsole()(storyFn)(context))

// addDecorator(withA11y)