import type { Meta, StoryObj } from "@storybook/react";

import Index from "./index";

const meta = {
  component: Index,
  title: "Common/Simple/SelectQuantity",
} satisfies Meta<typeof Index>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 0,
  },
};
