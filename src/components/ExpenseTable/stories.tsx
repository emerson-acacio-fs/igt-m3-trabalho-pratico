import { ComponentStory, ComponentMeta } from "@storybook/react"

import { ExpenseTable } from "./ExpenseTable"

export default {
  title: "ExpenseTable",
  component: ExpenseTable,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ExpenseTable>

export const Default: ComponentStory<typeof ExpenseTable> = (args) => (
  <ExpenseTable {...args} />
)

Default.args = {
  expenseList: [
    {
      id: 1,
      description: "sssss",
      category: "sssss",
      value: 2222.34662,
      month: "2020-06",
      day: 23,
    },
    {
      id: 2,
      description: "qq",
      category: "www",
      value: 2323.34662,
      month: "2020-06",
      day: 23,
    },
  ],
}
