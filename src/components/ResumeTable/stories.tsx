import { ComponentStory, ComponentMeta } from "@storybook/react"

import { ResumeTable } from "./ResumeTable"

export default {
  title: "ResumeTable",
  component: ResumeTable,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ResumeTable>

export const Default: ComponentStory<typeof ResumeTable> = (args) => (
  <ResumeTable {...args} />
)

Default.args = {
  resumeList: [
    ["Alimentação", 1936.1000000000001],
    ["Lazer", 957.53],
    ["Saúde", 620.62],
    ["Transporte", 262.12],
  ],
}
