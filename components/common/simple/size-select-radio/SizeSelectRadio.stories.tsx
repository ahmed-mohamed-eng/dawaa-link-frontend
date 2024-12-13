import type { Meta, StoryObj } from "@storybook/react";

import Index from "./index";

const meta = {
  component: Index,
  title: "Common/Simple/SizeSelectRadio",
} satisfies Meta<typeof Index>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "30",
    value: "30",
  },
};

export const Selected: Story = {
  args: {
    name: "30",
    value: "30",
    selected: true,
  },
};
