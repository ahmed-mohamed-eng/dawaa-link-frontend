import type { Meta, StoryObj } from "@storybook/react";

import ImgDisplayComp from "./index";

const meta: Meta<typeof ImgDisplayComp> = {
  component: ImgDisplayComp,
  title: "Common/Simple/ImgDisplayComp",
};

export default meta;

type Story = StoryObj<typeof ImgDisplayComp>;

export const Default: Story = {
  args: {
    sizes: "lg",
    srcURL: "/product.png",
  },
};
