import React from 'react'
import Panel from './Panel'

export default {
  title: 'components/Panel',
  component: Panel,
  args: {
    style: { height: 250 }
  },
}

const Template = (args) => <Panel {...args} />

export const SoloPanel = Template.bind({})

export const TabbedPanel = Template.bind({})
TabbedPanel.args = {
  isTabbed: true,
}
