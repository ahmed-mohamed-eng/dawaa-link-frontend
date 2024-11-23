import type { Meta, StoryObj } from "@storybook/react";

import TitleText from "./index";

const meta: Meta<typeof TitleText> = {
  component: TitleText,
  title: "Common/Simple/TitleText",
};

export default meta;

type Story = StoryObj<typeof TitleText>;

export const Default: Story = {
  args: {
    sizes: "lg",
    text: "JBL bar 2.1 deep bass",
  },
};
