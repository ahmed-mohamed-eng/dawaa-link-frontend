import type { Meta, StoryObj } from "@storybook/react";

import RatingComp from "./index";

const meta: Meta<typeof RatingComp> = {
  component: RatingComp,
  title: "Common/Simple/RatingComp",
};

export default meta;

type Story = StoryObj<typeof RatingComp>;

export const Default: Story = {
  args: {
    count: 20,
    value: 3.2,
  },
};
