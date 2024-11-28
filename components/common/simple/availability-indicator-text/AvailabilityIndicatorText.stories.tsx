import type { Meta, StoryObj } from "@storybook/react";

import Index from "./index";

const meta = {
  component: Index,
  title: "Common/Simple/AvailabilityIndicatorText"
} satisfies Meta<typeof Index>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InStock: Story = {
  args: {
    itemCount: 10,
  },
};

export const OutStock: Story = {
  args: {
    itemCount: 0,
  },
};