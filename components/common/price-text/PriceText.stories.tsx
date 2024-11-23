import type { Meta, StoryObj } from "@storybook/react";

import PriceText from "./index";

const meta: Meta<typeof PriceText> = {
  component: PriceText,
  title: "Common/PriceText",
};

export default meta;

type Story = StoryObj<typeof PriceText>;

export const Default: Story = {
  args: {
    currency: "$",
    sizes: "lg",
    value: 20,
  },
};
