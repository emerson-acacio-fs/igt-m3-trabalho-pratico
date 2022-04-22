import { ComponentStory, ComponentMeta } from "@storybook/react"
import { SelectDate } from "components/SelectDate"

import { Header } from "./Header"

export default {
  title: "Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>

export const Default: ComponentStory<typeof Header> = (args) => (
  <Header {...args}>
    <SelectDate
      year={2021}
      month={6}
      handleSelectedMonth={() => false}
      handleSelectedYear={() => false}
    />
  </Header>
)

Default.args = { totalExpense: 10.015125546 }
