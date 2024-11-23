import type { Meta, StoryObj } from "@storybook/react";

import ViewBtn from "./index";

const meta = {
  component: ViewBtn,
  title: "Common/Simple/ViewBtn",
} satisfies Meta<typeof ViewBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "lg",
  },
};
