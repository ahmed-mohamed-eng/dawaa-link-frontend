import Link from "next/link";

import SingleProductDisplay from "../common/complex/single-product-display";

const CategorizedProducts = () => {
  return (
    <div className="pb-40 w-full px-20 flex flex-col items-center justify-start space-y-20">
      {/* Category Action Box */}
      <div className="w-full flex flex-col items-center justify-start space-y-14">
        {/* Header */}
        <h3 className="font-bold text-3xl">Our popular categories</h3>
        {/* Select Actions */}
        <div className="w-full flex items-center justify-center space-x-8">
          <button
            data-selected={true}
            className="font-bold px-7 py-3 rounded-full border border-[#BDBDBD] data-[selected]:bg-[#3DB3E5] data-[selected]:border-0 data-[selected]:text-white"
          >
            All Products
          </button>
          <button className="font-bold px-7 py-2 rounded-full border border-[#BDBDBD]">
            Analgesics
          </button>
          <button className="font-bold px-7 py-2 rounded-full border border-[#BDBDBD]">
            Controlled drugs
          </button>
          <button className="font-bold px-7 py-2 rounded-full border border-[#BDBDBD]">
            Antibacterials
          </button>
          <button className="font-bold px-7 py-2 rounded-full border border-[#BDBDBD]">
            Inhalants
          </button>
          <button className="font-bold px-7 py-2 rounded-full border border-[#BDBDBD]">
            Stimulant
          </button>
        </div>
      </div>
      {/* Products Container */}
      <div className="w-full flex flex-col items-center justify-start space-y-12">
        {/* Products */}
        <div className="w-full grid grid-cols-4 gap-x-4 gap-y-8">
          <SingleProductDisplay
            description=""
            final_price="90 EGP"
            name="Abdonel 200ml"
            price="100 EGP"
            quantity="200"
            id={1}
          />

          <SingleProductDisplay
            description=""
            final_price="90 EGP"
            name="Abdonel 200ml"
            price="100 EGP"
            quantity="200"
            id={1}
          />

          <SingleProductDisplay
            description=""
            final_price="90 EGP"
            name="Abdonel 200ml"
            price="100 EGP"
            quantity="200"
            id={1}
          />

          <SingleProductDisplay
            description=""
            final_price="90 EGP"
            name="Abdonel 200ml"
            price="100 EGP"
            quantity="200"
            id={1}
          />

          <SingleProductDisplay
            description=""
            final_price="90 EGP"
            name="Abdonel 200ml"
            price="100 EGP"
            quantity="200"
            id={1}
          />

          <SingleProductDisplay
            description=""
            final_price="90 EGP"
            name="Abdonel 200ml"
            price="100 EGP"
            quantity="200"
            id={1}
          />

          <SingleProductDisplay
            description=""
            final_price="90 EGP"
            name="Abdonel 200ml"
            price="100 EGP"
            quantity="200"
            id={1}
          />

          <SingleProductDisplay
            description=""
            final_price="90 EGP"
            name="Abdonel 200ml"
            price="100 EGP"
            quantity="200"
            id={1}
          />

          <SingleProductDisplay
            description=""
            final_price="90 EGP"
            name="Abdonel 200ml"
            price="100 EGP"
            quantity="200"
            id={1}
          />

          <SingleProductDisplay
            description=""
            final_price="90 EGP"
            name="Abdonel 200ml"
            price="100 EGP"
            quantity="200"
            id={1}
          />

          <SingleProductDisplay
            description=""
            final_price="90 EGP"
            name="Abdonel 200ml"
            price="100 EGP"
            quantity="200"
            id={1}
          />

          <SingleProductDisplay
            description=""
            final_price="90 EGP"
            name="Abdonel 200ml"
            price="100 EGP"
            quantity="200"
            id={1}
          />
        </div>
        {/* More Button */}
        <Link
          href="/products"
          className="px-9 py-4 rounded-full bg-[#00A6FB] font-bold text-white"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default CategorizedProducts;
