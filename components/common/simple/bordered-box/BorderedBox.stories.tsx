import type { Meta, StoryObj } from "@storybook/react";

import BorderedBox from "./index";

const meta: Meta<typeof BorderedBox> = {
  component: BorderedBox,
  title: "Common/Simple/BorderedBox",
};

export default meta;

type Story = StoryObj<typeof BorderedBox>;

export const Default: Story = {
  args: {
    children: <div>Hello, Bordered Box</div>,
  },
};
