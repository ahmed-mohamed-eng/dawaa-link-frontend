import type { Meta, StoryObj } from "@storybook/react";

import Index from "./index";

const meta = {
  component: Index,
  title: "Common/Simple/FilterColorSelectBox",
} satisfies Meta<typeof Index>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    colors: [
      { name: "Orange", value: "#EDA415" },
      { name: "Red", value: "#E42424" },
      { name: "Blue Petroleum", value: "#1B5A7D" },
      { name: "Gray", value: "#ACACAC" },
      { name: "Green Petroleum", value: "#1D5F23" },
      { name: "Blue", value: "#2E56A3" },
      { name: "Purple", value: "#8131A7" },
      { name: "Red Petroleum", value: "#BC2944" },
      { name: "Olive", value: "#9BC14C" },
    ],
  },
};
