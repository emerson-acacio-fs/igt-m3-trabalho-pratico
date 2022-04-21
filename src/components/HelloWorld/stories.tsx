import { ComponentStory, ComponentMeta } from "@storybook/react"

import { HelloWorld } from "./HelloWorld"

export default {
  title: "Example/HelloWorld",
  component: HelloWorld,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof HelloWorld>

export const Default: ComponentStory<typeof HelloWorld> = (args) => (
  <HelloWorld {...args} />
)

Default.args = { title: "Hello Storybook" }
