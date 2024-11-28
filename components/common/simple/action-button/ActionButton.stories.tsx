import type { Meta, StoryObj } from "@storybook/react";

import Index from "./index";

const meta = {
  component: Index,
  title: "Common/Simple/ActionButton",
} satisfies Meta<typeof Index>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "Add to cart",
    size: "lg",
    variant: "take-action",
  },
};

export const Update: Story = {
  args: {
    value: "Add to cart",
    size: "2xs",
    variant: "update",
  },
};

export const Cancel: Story = {
  args: {
    value: "Add to cart",
    size: "lg",
    variant: "delete",
  },
};
