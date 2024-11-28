import type { Meta, StoryObj } from "@storybook/react";

import Index from "./index";

const meta = {
  component: Index,
  title: "Common/Simple/ColorSelectComp",
} satisfies Meta<typeof Index>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "#ff0fa0",
  },
};
