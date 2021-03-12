import React from 'react'
import * as HeaderStories from '../components/header/Header.stories'
import Header from '../components/header/Header'
import Panel from '../components/panel/Panel'

export default {
  title: 'pages/PanelWithHeader',
  component: Panel,
  subcomponents: { Header },
  args: {
    title: "Header Text in Panel",
  }
}

const Template = args => {
  return (
    <Panel>
      <Header {...args} />
      <div style={{ height: 250 }} />
    </Panel>
  )
}

export const TitleOnly = Template.bind({})

export const SingleButton = Template.bind({})
SingleButton.args = {
  ...HeaderStories.SingleButton.args,
}

export const DoubleButtons = Template.bind({})
DoubleButtons.args = {
  ...HeaderStories.DoubleButtons.args,
}