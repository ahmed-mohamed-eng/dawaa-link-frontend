import type { Meta, StoryObj } from "@storybook/react";

import QuickCartBtn from "./index";

const meta = {
  component: QuickCartBtn,
  title: "Common/Simple/QuickCartBtn",
} satisfies Meta<typeof QuickCartBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "xl",
  },
};
