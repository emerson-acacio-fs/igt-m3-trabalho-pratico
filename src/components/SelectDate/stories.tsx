import { ComponentStory, ComponentMeta } from "@storybook/react"
import { expect } from "@storybook/jest"
import { waitFor } from "@storybook/testing-library"

import { SelectDate } from "./SelectDate"

export default {
  title: "SelectDate",
  component: SelectDate,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    handleSelectedYear: { action: true },
    handleSelectedMonth: { action: true },
  },
} as ComponentMeta<typeof SelectDate>

export const Default: ComponentStory<typeof SelectDate> = (args) => (
  <SelectDate {...args} />
)

Default.bind({})
Default.args = {
  beginYear: 2016,
  year: 2021,
  month: 3,
}

Default.play = async ({ args }) => {
  await waitFor(() => expect(args.handleSelectedYear).toHaveBeenCalled())
  await waitFor(() => expect(args.handleSelectedMonth).toHaveBeenCalled())
}
