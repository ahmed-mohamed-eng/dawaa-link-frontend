import type { Meta, StoryObj } from "@storybook/react";

import NavCircles from "./index";

const meta: Meta<typeof NavCircles> = {
  component: NavCircles,
  title: "Common/Simple/NavCircles",
};

export default meta;

type Stroy = StoryObj<typeof NavCircles>;

export const Default: Stroy = {
  args: {
    pageCount: 10,
  },
};
