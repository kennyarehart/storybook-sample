import React from 'react'
import Header from './Header'

export default {
  title: 'components/Header',
  component: Header,
  args: {
    title: "Header Text",
  }
}

const Template = (args) => <Header {...args} />

export const TitleOnly = Template.bind({})

export const SingleButton = Template.bind({})
SingleButton.args = {
  labels: ['first button']
}

export const DoubleButtons = Template.bind({})
DoubleButtons.args = {
  labels: ['first button', 'second button']
}
