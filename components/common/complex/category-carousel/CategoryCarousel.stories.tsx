import type { Meta, StoryObj } from "@storybook/react";
import { DateTime } from "luxon";
import { faker } from "@faker-js/faker";

import CategoryCarousel from "./index";
import ISingleProduct from "@/types/products/single-product.interface";

const meta = {
  component: CategoryCarousel,
  title: "Common/Complex/CategoryCarousel",
} satisfies Meta<typeof CategoryCarousel>;

export default meta;

type Story = StoryObj<typeof meta>;

function genProduct(): ISingleProduct {
  return {
    category: {
      id: 1,
      name: "medicine",
    },
    created_at: DateTime.now().toISO(),
    description: faker.string.sample(100),
    featured: faker.string.alphanumeric(5),
    final_price: faker.number.int({ min: 10, max: 100 }).toString() + " SAR",
    gallery: [],
    id: 1,
    photo: faker.image.urlPicsumPhotos(),
    name: faker.string.alphanumeric(10),
    price: faker.number.int({ min: 100, max: 500 }).toString() + " SAR",
    quantity: faker.number.int(10).toString(),
    serial_number: faker.book.series(),
    discount: faker.number.int({ min: 100, max: 500 }),
  };
}

export const Default: Story = {
  args: {
    categoryName: "Medicine",
    categoryUrl: "medicine",
    products: [genProduct(), genProduct(), genProduct(), genProduct()],
  },
};
