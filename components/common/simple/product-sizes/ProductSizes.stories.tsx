import type { Meta, StoryObj } from "@storybook/react";

import ProductSizes from "./index";

const meta: Meta<typeof ProductSizes> = {
  component: ProductSizes,
  title: "Common/Simple/ProductSizes",
};

export default meta;

type Story = StoryObj<typeof ProductSizes>;

export const Default: Story = {
  args: {
    values: [57, 11, 33, 59],
    size: "lg",
  },
};
