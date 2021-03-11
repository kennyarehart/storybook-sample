import React from 'react'
import Input from './Input'

// Mandatory & unique. Will show on side panel in Storybook
export default {
  title: 'components/Input',
  component: Input,
}

const Template = (args) => <Input {...args} />

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  placeholder: 'Small Text',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
  placeholder: 'Medium Text',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  placeholder: 'Large Text',
}
