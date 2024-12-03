import type { Meta, StoryObj } from "@storybook/react";

import Index from "./index";

const meta = {
  component: Index,
  title: "Common/Complex/SingleProductDisplay",
} satisfies Meta<typeof Index>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageURL: "/product.png",
    name: "Camera",
    price: "200",
    rating: {
      count: 30,
      value: 3.2,
    },
    url: "/products/1",
  },
};
