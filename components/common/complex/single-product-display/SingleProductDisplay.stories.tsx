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
    name: "Camera",
    price: "200",
    rating: {
      count: 30,
      value: 3.2,
    },
    category: {
      id: 1,
      name: "medicine",
    },
    created_at: "now",
    description: "HI",
    featured: "",
    final_price: "",
    gallery: [""],
    id: 1,
    quantity: "200",
  },
};
