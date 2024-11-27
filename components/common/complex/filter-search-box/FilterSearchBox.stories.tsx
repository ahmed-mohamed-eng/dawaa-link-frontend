import type { Meta, StoryObj } from "@storybook/react";

import Index from "./index";

const meta = {
  component: Index,
  title: "Common/Complex/FilterSearchBox",
} satisfies Meta<typeof Index>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Categories",
    filterOptions: [
      {
        count: 20,
        name: "All Categories",
      },
      {
        count: 20,
        name: "All Categories",
      },
      {
        count: 20,
        name: "All Categories",
      },
      {
        count: 20,
        name: "All Categories",
      },
      {
        count: 20,
        name: "All Categories",
      },
    ],
  },
};
