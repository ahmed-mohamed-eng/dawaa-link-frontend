import type { Meta, StoryObj } from "@storybook/react";

import Index from "./index";

const meta = {
  component: Index,
  title: "Common/Simple/FilterSelectBox",
} satisfies Meta<typeof Index>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 100,
    name: "All Categories",
  },
};

export const Disabled: Story = {
  args: {
    count: 10,
    name: "Cameras",
    disabled: true,
  },
};
