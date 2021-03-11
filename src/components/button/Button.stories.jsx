import React from 'react'
import Button from './Button'
// import Center from '../center/Center'

// Mandatory & unique. Will show on side panel in Storybook
export default {
  title: 'components/Button',
  component: Button,
  // wraps each export
  // decorators: [Story => <Center><Story /></Center>],
  // set value for each export. instance srg will overwrite
  args: {
    label: "I am a button"
  },
  argTypes: {
    onClick: { action: 'clicked' }
  }
}

// Named exports. Each creates a menu item under the title in Storybook
const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  disabled: false,
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  disabled: false,
}
// Secondary.storyName = 'Bordered Button'

export const Tertiary = Template.bind({})
Tertiary.args = {
  variant: 'tertiary',
  disabled: false,
}

// export const Log = () => <Button onClick={() => console.log('BOOM!', process.env.STORYBOOK_THEME)}>Log it, Bro</Button>