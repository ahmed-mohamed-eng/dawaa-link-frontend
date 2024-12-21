import Link from "next/link";
import Image from "next/image";

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
          {/* Single Product */}
          <div className="relative w-full flex flex-col items-start justify-start space-y-8">
            {/* Product Image Container */}
            <div className="relative w-full h-96 border rounded-xl overflow-hidden">
              <Image
                className="w-full h-full z-10"
                alt="Product A"
                src="/placeholder.png"
                fill
                style={{ objectFit: "cover" }}
              />

              {/* Sold Indicator */}
              {/* <div className="bg-[#00A6FB] w-14 h-14 flex items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">Sold</span>
                  </div> */}

              {/* New Indicator */}
              {/* <div className="bg-[#00A6FB] w-14 h-14 flex items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">New</span>
                  </div> */}

              {/* Discount Indicator */}
              {/* <div className="bg-[#00A6FB] w-16 h-16 flex flex-col items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">10%</span>
                    <span className="font-bold text-white">Off</span>
                  </div> */}

              {/* Main Actions Container */}
              <div className="transition-all duration-200 ease-in absolute opacity-0 hover:opacity-100 top-0 left-0 w-full h-full z-30 bg-gray-500 bg-opacity-10">
                {/* Add to Cart Button */}
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-3 rounded-full bg-[#00A6FB] font-bold text-white whitespace-nowrap">
                  Add To Cart
                </button>

                {/* Other Actions Button */}
                <div className="absolute top-3 right-3 flex flex-col items-start justify-start space-y-2">
                  {/* Wishlist */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/heart.svg"
                      width={15}
                      height={15}
                    />
                  </button>

                  {/* Search */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/search.svg"
                      width={15}
                      height={15}
                    />
                  </button>

                  {/* Cart */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/cart.svg"
                      width={15}
                      height={15}
                    />
                  </button>
                </div>
              </div>
            </div>
            {/* Product Info */}
            <div className="w-full flex flex-col items-start justify-start">
              {/* Rating */}
              <div className="flex items-center justify-start space-x-0.5">
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
              </div>

              {/* Product Name */}
              <p className="mt-4 font-bold text-lg">
                Ayurvedic Pain Relief Spray
              </p>

              {/* Price */}
              <div className="mt-4 w-full flex items-center justify-start space-x-2 font-bold">
                {/* Previous Price */}
                <span className="text-[#8F8F8F]">$25.59</span>
                {/* New Price */}
                <span>$19.59</span>
              </div>
            </div>
          </div>

          {/* Single Product */}
          <div className="relative w-full flex flex-col items-start justify-start space-y-8">
            {/* Product Image Container */}
            <div className="relative w-full h-96 border rounded-xl overflow-hidden">
              <Image
                className="w-full h-full z-10"
                alt="Product A"
                src="/placeholder.png"
                fill
                style={{ objectFit: "cover" }}
              />

              {/* Sold Indicator */}
              {/* <div className="bg-[#00A6FB] w-14 h-14 flex items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">Sold</span>
                  </div> */}

              {/* New Indicator */}
              {/* <div className="bg-[#00A6FB] w-14 h-14 flex items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">New</span>
                  </div> */}

              {/* Discount Indicator */}
              {/* <div className="bg-[#00A6FB] w-16 h-16 flex flex-col items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">10%</span>
                    <span className="font-bold text-white">Off</span>
                  </div> */}

              {/* Main Actions Container */}
              <div className="transition-all duration-200 ease-in absolute opacity-0 hover:opacity-100 top-0 left-0 w-full h-full z-30 bg-gray-500 bg-opacity-10">
                {/* Add to Cart Button */}
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-3 rounded-full bg-[#00A6FB] font-bold text-white whitespace-nowrap">
                  Add To Cart
                </button>

                {/* Other Actions Button */}
                <div className="absolute top-3 right-3 flex flex-col items-start justify-start space-y-2">
                  {/* Wishlist */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/heart.svg"
                      width={15}
                      height={15}
                    />
                  </button>

                  {/* Search */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/search.svg"
                      width={15}
                      height={15}
                    />
                  </button>

                  {/* Cart */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/cart.svg"
                      width={15}
                      height={15}
                    />
                  </button>
                </div>
              </div>
            </div>
            {/* Product Info */}
            <div className="w-full flex flex-col items-start justify-start">
              {/* Rating */}
              <div className="flex items-center justify-start space-x-0.5">
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
              </div>

              {/* Product Name */}
              <p className="mt-4 font-bold text-lg">
                Ayurvedic Pain Relief Spray
              </p>

              {/* Price */}
              <div className="mt-4 w-full flex items-center justify-start space-x-2 font-bold">
                {/* Previous Price */}
                <span className="text-[#8F8F8F]">$25.59</span>
                {/* New Price */}
                <span>$19.59</span>
              </div>
            </div>
          </div>

          {/* Single Product */}
          <div className="relative w-full flex flex-col items-start justify-start space-y-8">
            {/* Product Image Container */}
            <div className="relative w-full h-96 border rounded-xl overflow-hidden">
              <Image
                className="w-full h-full z-10"
                alt="Product A"
                src="/placeholder.png"
                fill
                style={{ objectFit: "cover" }}
              />

              {/* Sold Indicator */}
              <div className="bg-[#00A6FB] w-14 h-14 flex items-center justify-center rounded-full absolute top-5 right-5 z-20">
                <span className="font-bold text-white">Sold</span>
              </div>

              {/* New Indicator */}
              {/* <div className="bg-[#00A6FB] w-14 h-14 flex items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">New</span>
                  </div> */}

              {/* Discount Indicator */}
              {/* <div className="bg-[#00A6FB] w-16 h-16 flex flex-col items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">10%</span>
                    <span className="font-bold text-white">Off</span>
                  </div> */}

              {/* Main Actions Container */}
              <div className="transition-all duration-200 ease-in absolute opacity-0 hover:opacity-100 top-0 left-0 w-full h-full z-30 bg-gray-500 bg-opacity-10">
                {/* Add to Cart Button */}
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-3 rounded-full bg-[#00A6FB] font-bold text-white whitespace-nowrap">
                  Add To Cart
                </button>

                {/* Other Actions Button */}
                <div className="absolute top-3 right-3 flex flex-col items-start justify-start space-y-2">
                  {/* Wishlist */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/heart.svg"
                      width={15}
                      height={15}
                    />
                  </button>

                  {/* Search */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/search.svg"
                      width={15}
                      height={15}
                    />
                  </button>

                  {/* Cart */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/cart.svg"
                      width={15}
                      height={15}
                    />
                  </button>
                </div>
              </div>
            </div>
            {/* Product Info */}
            <div className="w-full flex flex-col items-start justify-start">
              {/* Rating */}
              <div className="flex items-center justify-start space-x-0.5">
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
              </div>

              {/* Product Name */}
              <p className="mt-4 font-bold text-lg">
                Ayurvedic Pain Relief Spray
              </p>

              {/* Price */}
              <div className="mt-4 w-full flex items-center justify-start space-x-2 font-bold">
                {/* Previous Price */}
                <span className="text-[#8F8F8F]">$25.59</span>
                {/* New Price */}
                <span>$19.59</span>
              </div>
            </div>
          </div>

          {/* Single Product */}
          <div className="relative w-full flex flex-col items-start justify-start space-y-8">
            {/* Product Image Container */}
            <div className="relative w-full h-96 border rounded-xl overflow-hidden">
              <Image
                className="w-full h-full z-10"
                alt="Product A"
                src="/placeholder.png"
                fill
                style={{ objectFit: "cover" }}
              />

              {/* Sold Indicator */}
              {/* <div className="bg-[#00A6FB] w-14 h-14 flex items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">Sold</span>
                  </div> */}

              {/* New Indicator */}
              {/* <div className="bg-[#00A6FB] w-14 h-14 flex items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">New</span>
                  </div> */}

              {/* Discount Indicator */}
              {/* <div className="bg-[#00A6FB] w-16 h-16 flex flex-col items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">10%</span>
                    <span className="font-bold text-white">Off</span>
                  </div> */}

              {/* Main Actions Container */}
              <div className="transition-all duration-200 ease-in absolute opacity-0 hover:opacity-100 top-0 left-0 w-full h-full z-30 bg-gray-500 bg-opacity-10">
                {/* Add to Cart Button */}
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-3 rounded-full bg-[#00A6FB] font-bold text-white whitespace-nowrap">
                  Add To Cart
                </button>

                {/* Other Actions Button */}
                <div className="absolute top-3 right-3 flex flex-col items-start justify-start space-y-2">
                  {/* Wishlist */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/heart.svg"
                      width={15}
                      height={15}
                    />
                  </button>

                  {/* Search */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/search.svg"
                      width={15}
                      height={15}
                    />
                  </button>

                  {/* Cart */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/cart.svg"
                      width={15}
                      height={15}
                    />
                  </button>
                </div>
              </div>
            </div>
            {/* Product Info */}
            <div className="w-full flex flex-col items-start justify-start">
              {/* Rating */}
              <div className="flex items-center justify-start space-x-0.5">
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
              </div>

              {/* Product Name */}
              <p className="mt-4 font-bold text-lg">
                Ayurvedic Pain Relief Spray
              </p>

              {/* Price */}
              <div className="mt-4 w-full flex items-center justify-start space-x-2 font-bold">
                {/* Previous Price */}
                <span className="text-[#8F8F8F]">$25.59</span>
                {/* New Price */}
                <span>$19.59</span>
              </div>
            </div>
          </div>

          {/* Single Product */}
          <div className="relative w-full flex flex-col items-start justify-start space-y-8">
            {/* Product Image Container */}
            <div className="relative w-full h-96 border rounded-xl overflow-hidden">
              <Image
                className="w-full h-full z-10"
                alt="Product A"
                src="/placeholder.png"
                fill
                style={{ objectFit: "cover" }}
              />

              {/* Sold Indicator */}
              {/* <div className="bg-[#00A6FB] w-14 h-14 flex items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">Sold</span>
                  </div> */}

              {/* New Indicator */}
              <div className="bg-[#00A6FB] w-14 h-14 flex items-center justify-center rounded-full absolute top-5 right-5 z-20">
                <span className="font-bold text-white">New</span>
              </div>

              {/* Discount Indicator */}
              {/* <div className="bg-[#00A6FB] w-16 h-16 flex flex-col items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">10%</span>
                    <span className="font-bold text-white">Off</span>
                  </div> */}

              {/* Main Actions Container */}
              <div className="transition-all duration-200 ease-in absolute opacity-0 hover:opacity-100 top-0 left-0 w-full h-full z-30 bg-gray-500 bg-opacity-10">
                {/* Add to Cart Button */}
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-3 rounded-full bg-[#00A6FB] font-bold text-white whitespace-nowrap">
                  Add To Cart
                </button>

                {/* Other Actions Button */}
                <div className="absolute top-3 right-3 flex flex-col items-start justify-start space-y-2">
                  {/* Wishlist */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/heart.svg"
                      width={15}
                      height={15}
                    />
                  </button>

                  {/* Search */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/search.svg"
                      width={15}
                      height={15}
                    />
                  </button>

                  {/* Cart */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/cart.svg"
                      width={15}
                      height={15}
                    />
                  </button>
                </div>
              </div>
            </div>
            {/* Product Info */}
            <div className="w-full flex flex-col items-start justify-start">
              {/* Rating */}
              <div className="flex items-center justify-start space-x-0.5">
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
              </div>

              {/* Product Name */}
              <p className="mt-4 font-bold text-lg">
                Ayurvedic Pain Relief Spray
              </p>

              {/* Price */}
              <div className="mt-4 w-full flex items-center justify-start space-x-2 font-bold">
                {/* Previous Price */}
                <span className="text-[#8F8F8F]">$25.59</span>
                {/* New Price */}
                <span>$19.59</span>
              </div>
            </div>
          </div>

          {/* Single Product */}
          <div className="relative w-full flex flex-col items-start justify-start space-y-8">
            {/* Product Image Container */}
            <div className="relative w-full h-96 border rounded-xl overflow-hidden">
              <Image
                className="w-full h-full z-10"
                alt="Product A"
                src="/placeholder.png"
                fill
                style={{ objectFit: "cover" }}
              />

              {/* Sold Indicator */}
              {/* <div className="bg-[#00A6FB] w-14 h-14 flex items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">Sold</span>
                  </div> */}

              {/* New Indicator */}
              {/* <div className="bg-[#00A6FB] w-14 h-14 flex items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">New</span>
                  </div> */}

              {/* Discount Indicator */}
              {/* <div className="bg-[#00A6FB] w-16 h-16 flex flex-col items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">10%</span>
                    <span className="font-bold text-white">Off</span>
                  </div> */}

              {/* Main Actions Container */}
              <div className="transition-all duration-200 ease-in absolute opacity-0 hover:opacity-100 top-0 left-0 w-full h-full z-30 bg-gray-500 bg-opacity-10">
                {/* Add to Cart Button */}
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-3 rounded-full bg-[#00A6FB] font-bold text-white whitespace-nowrap">
                  Add To Cart
                </button>

                {/* Other Actions Button */}
                <div className="absolute top-3 right-3 flex flex-col items-start justify-start space-y-2">
                  {/* Wishlist */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/heart.svg"
                      width={15}
                      height={15}
                    />
                  </button>

                  {/* Search */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/search.svg"
                      width={15}
                      height={15}
                    />
                  </button>

                  {/* Cart */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/cart.svg"
                      width={15}
                      height={15}
                    />
                  </button>
                </div>
              </div>
            </div>
            {/* Product Info */}
            <div className="w-full flex flex-col items-start justify-start">
              {/* Rating */}
              <div className="flex items-center justify-start space-x-0.5">
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
              </div>

              {/* Product Name */}
              <p className="mt-4 font-bold text-lg">
                Ayurvedic Pain Relief Spray
              </p>

              {/* Price */}
              <div className="mt-4 w-full flex items-center justify-start space-x-2 font-bold">
                {/* Previous Price */}
                <span className="text-[#8F8F8F]">$25.59</span>
                {/* New Price */}
                <span>$19.59</span>
              </div>
            </div>
          </div>

          {/* Single Product */}
          <div className="relative w-full flex flex-col items-start justify-start space-y-8">
            {/* Product Image Container */}
            <div className="relative w-full h-96 border rounded-xl overflow-hidden">
              <Image
                className="w-full h-full z-10"
                alt="Product A"
                src="/placeholder.png"
                fill
                style={{ objectFit: "cover" }}
              />

              {/* Sold Indicator */}
              {/* <div className="bg-[#00A6FB] w-14 h-14 flex items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">Sold</span>
                  </div> */}

              {/* New Indicator */}
              {/* <div className="bg-[#00A6FB] w-14 h-14 flex items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">New</span>
                  </div> */}

              {/* Discount Indicator */}
              {/* <div className="bg-[#00A6FB] w-16 h-16 flex flex-col items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">10%</span>
                    <span className="font-bold text-white">Off</span>
                  </div> */}

              {/* Main Actions Container */}
              <div className="transition-all duration-200 ease-in absolute opacity-0 hover:opacity-100 top-0 left-0 w-full h-full z-30 bg-gray-500 bg-opacity-10">
                {/* Add to Cart Button */}
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-3 rounded-full bg-[#00A6FB] font-bold text-white whitespace-nowrap">
                  Add To Cart
                </button>

                {/* Other Actions Button */}
                <div className="absolute top-3 right-3 flex flex-col items-start justify-start space-y-2">
                  {/* Wishlist */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/heart.svg"
                      width={15}
                      height={15}
                    />
                  </button>

                  {/* Search */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/search.svg"
                      width={15}
                      height={15}
                    />
                  </button>

                  {/* Cart */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/cart.svg"
                      width={15}
                      height={15}
                    />
                  </button>
                </div>
              </div>
            </div>
            {/* Product Info */}
            <div className="w-full flex flex-col items-start justify-start">
              {/* Rating */}
              <div className="flex items-center justify-start space-x-0.5">
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
              </div>

              {/* Product Name */}
              <p className="mt-4 font-bold text-lg">
                Ayurvedic Pain Relief Spray
              </p>

              {/* Price */}
              <div className="mt-4 w-full flex items-center justify-start space-x-2 font-bold">
                {/* Previous Price */}
                <span className="text-[#8F8F8F]">$25.59</span>
                {/* New Price */}
                <span>$19.59</span>
              </div>
            </div>
          </div>

          {/* Single Product */}
          <div className="relative w-full flex flex-col items-start justify-start space-y-8">
            {/* Product Image Container */}
            <div className="relative w-full h-96 border rounded-xl overflow-hidden">
              <Image
                className="w-full h-full z-10"
                alt="Product A"
                src="/placeholder.png"
                fill
                style={{ objectFit: "cover" }}
              />

              {/* Sold Indicator */}
              {/* <div className="bg-[#00A6FB] w-14 h-14 flex items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">Sold</span>
                  </div> */}

              {/* New Indicator */}
              {/* <div className="bg-[#00A6FB] w-14 h-14 flex items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">New</span>
                  </div> */}

              {/* Discount Indicator */}
              <div className="bg-[#00A6FB] w-16 h-16 flex flex-col items-center justify-center rounded-full absolute top-5 right-5 z-20">
                <span className="font-bold text-white">10%</span>
                <span className="font-bold text-white">Off</span>
              </div>

              {/* Main Actions Container */}
              <div className="transition-all duration-200 ease-in absolute opacity-0 hover:opacity-100 top-0 left-0 w-full h-full z-30 bg-gray-500 bg-opacity-10">
                {/* Add to Cart Button */}
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-3 rounded-full bg-[#00A6FB] font-bold text-white whitespace-nowrap">
                  Add To Cart
                </button>

                {/* Other Actions Button */}
                <div className="absolute top-3 right-3 flex flex-col items-start justify-start space-y-2">
                  {/* Wishlist */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/heart.svg"
                      width={15}
                      height={15}
                    />
                  </button>

                  {/* Search */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/search.svg"
                      width={15}
                      height={15}
                    />
                  </button>

                  {/* Cart */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/cart.svg"
                      width={15}
                      height={15}
                    />
                  </button>
                </div>
              </div>
            </div>
            {/* Product Info */}
            <div className="w-full flex flex-col items-start justify-start">
              {/* Rating */}
              <div className="flex items-center justify-start space-x-0.5">
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
              </div>

              {/* Product Name */}
              <p className="mt-4 font-bold text-lg">
                Ayurvedic Pain Relief Spray
              </p>

              {/* Price */}
              <div className="mt-4 w-full flex items-center justify-start space-x-2 font-bold">
                {/* Previous Price */}
                <span className="text-[#8F8F8F]">$25.59</span>
                {/* New Price */}
                <span>$19.59</span>
              </div>
            </div>
          </div>

          {/* Single Product */}
          <div className="relative w-full flex flex-col items-start justify-start space-y-8">
            {/* Product Image Container */}
            <div className="relative w-full h-96 border rounded-xl overflow-hidden">
              <Image
                className="w-full h-full z-10"
                alt="Product A"
                src="/placeholder.png"
                fill
                style={{ objectFit: "cover" }}
              />

              {/* Sold Indicator */}
              {/* <div className="bg-[#00A6FB] w-14 h-14 flex items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">Sold</span>
                  </div> */}

              {/* New Indicator */}
              {/* <div className="bg-[#00A6FB] w-14 h-14 flex items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">New</span>
                  </div> */}

              {/* Discount Indicator */}
              {/* <div className="bg-[#00A6FB] w-16 h-16 flex flex-col items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">10%</span>
                    <span className="font-bold text-white">Off</span>
                  </div> */}

              {/* Main Actions Container */}
              <div className="transition-all duration-200 ease-in absolute opacity-0 hover:opacity-100 top-0 left-0 w-full h-full z-30 bg-gray-500 bg-opacity-10">
                {/* Add to Cart Button */}
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-3 rounded-full bg-[#00A6FB] font-bold text-white whitespace-nowrap">
                  Add To Cart
                </button>

                {/* Other Actions Button */}
                <div className="absolute top-3 right-3 flex flex-col items-start justify-start space-y-2">
                  {/* Wishlist */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/heart.svg"
                      width={15}
                      height={15}
                    />
                  </button>

                  {/* Search */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/search.svg"
                      width={15}
                      height={15}
                    />
                  </button>

                  {/* Cart */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/cart.svg"
                      width={15}
                      height={15}
                    />
                  </button>
                </div>
              </div>
            </div>
            {/* Product Info */}
            <div className="w-full flex flex-col items-start justify-start">
              {/* Rating */}
              <div className="flex items-center justify-start space-x-0.5">
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
              </div>

              {/* Product Name */}
              <p className="mt-4 font-bold text-lg">
                Ayurvedic Pain Relief Spray
              </p>

              {/* Price */}
              <div className="mt-4 w-full flex items-center justify-start space-x-2 font-bold">
                {/* Previous Price */}
                <span className="text-[#8F8F8F]">$25.59</span>
                {/* New Price */}
                <span>$19.59</span>
              </div>
            </div>
          </div>

          {/* Single Product */}
          <div className="relative w-full flex flex-col items-start justify-start space-y-8">
            {/* Product Image Container */}
            <div className="relative w-full h-96 border rounded-xl overflow-hidden">
              <Image
                className="w-full h-full z-10"
                alt="Product A"
                src="/placeholder.png"
                fill
                style={{ objectFit: "cover" }}
              />

              {/* Sold Indicator */}
              {/* <div className="bg-[#00A6FB] w-14 h-14 flex items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">Sold</span>
                  </div> */}

              {/* New Indicator */}
              {/* <div className="bg-[#00A6FB] w-14 h-14 flex items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">New</span>
                  </div> */}

              {/* Discount Indicator */}
              {/* <div className="bg-[#00A6FB] w-16 h-16 flex flex-col items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">10%</span>
                    <span className="font-bold text-white">Off</span>
                  </div> */}

              {/* Main Actions Container */}
              <div className="transition-all duration-200 ease-in absolute opacity-0 hover:opacity-100 top-0 left-0 w-full h-full z-30 bg-gray-500 bg-opacity-10">
                {/* Add to Cart Button */}
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-3 rounded-full bg-[#00A6FB] font-bold text-white whitespace-nowrap">
                  Add To Cart
                </button>

                {/* Other Actions Button */}
                <div className="absolute top-3 right-3 flex flex-col items-start justify-start space-y-2">
                  {/* Wishlist */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/heart.svg"
                      width={15}
                      height={15}
                    />
                  </button>

                  {/* Search */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/search.svg"
                      width={15}
                      height={15}
                    />
                  </button>

                  {/* Cart */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/cart.svg"
                      width={15}
                      height={15}
                    />
                  </button>
                </div>
              </div>
            </div>
            {/* Product Info */}
            <div className="w-full flex flex-col items-start justify-start">
              {/* Rating */}
              <div className="flex items-center justify-start space-x-0.5">
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
              </div>

              {/* Product Name */}
              <p className="mt-4 font-bold text-lg">
                Ayurvedic Pain Relief Spray
              </p>

              {/* Price */}
              <div className="mt-4 w-full flex items-center justify-start space-x-2 font-bold">
                {/* Previous Price */}
                <span className="text-[#8F8F8F]">$25.59</span>
                {/* New Price */}
                <span>$19.59</span>
              </div>
            </div>
          </div>

          {/* Single Product */}
          <div className="relative w-full flex flex-col items-start justify-start space-y-8">
            {/* Product Image Container */}
            <div className="relative w-full h-96 border rounded-xl overflow-hidden">
              <Image
                className="w-full h-full z-10"
                alt="Product A"
                src="/placeholder.png"
                fill
                style={{ objectFit: "cover" }}
              />

              {/* Sold Indicator */}
              {/* <div className="bg-[#00A6FB] w-14 h-14 flex items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">Sold</span>
                  </div> */}

              {/* New Indicator */}
              {/* <div className="bg-[#00A6FB] w-14 h-14 flex items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">New</span>
                  </div> */}

              {/* Discount Indicator */}
              {/* <div className="bg-[#00A6FB] w-16 h-16 flex flex-col items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">10%</span>
                    <span className="font-bold text-white">Off</span>
                  </div> */}

              {/* Main Actions Container */}
              <div className="transition-all duration-200 ease-in absolute opacity-0 hover:opacity-100 top-0 left-0 w-full h-full z-30 bg-gray-500 bg-opacity-10">
                {/* Add to Cart Button */}
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-3 rounded-full bg-[#00A6FB] font-bold text-white whitespace-nowrap">
                  Add To Cart
                </button>

                {/* Other Actions Button */}
                <div className="absolute top-3 right-3 flex flex-col items-start justify-start space-y-2">
                  {/* Wishlist */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/heart.svg"
                      width={15}
                      height={15}
                    />
                  </button>

                  {/* Search */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/search.svg"
                      width={15}
                      height={15}
                    />
                  </button>

                  {/* Cart */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/cart.svg"
                      width={15}
                      height={15}
                    />
                  </button>
                </div>
              </div>
            </div>
            {/* Product Info */}
            <div className="w-full flex flex-col items-start justify-start">
              {/* Rating */}
              <div className="flex items-center justify-start space-x-0.5">
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
              </div>

              {/* Product Name */}
              <p className="mt-4 font-bold text-lg">
                Ayurvedic Pain Relief Spray
              </p>

              {/* Price */}
              <div className="mt-4 w-full flex items-center justify-start space-x-2 font-bold">
                {/* Previous Price */}
                <span className="text-[#8F8F8F]">$25.59</span>
                {/* New Price */}
                <span>$19.59</span>
              </div>
            </div>
          </div>

          {/* Single Product */}
          <div className="relative w-full flex flex-col items-start justify-start space-y-8">
            {/* Product Image Container */}
            <div className="relative w-full h-96 border rounded-xl overflow-hidden">
              <Image
                className="w-full h-full z-10"
                alt="Product A"
                src="/placeholder.png"
                fill
                style={{ objectFit: "cover" }}
              />

              {/* Sold Indicator */}
              {/* <div className="bg-[#00A6FB] w-14 h-14 flex items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">Sold</span>
                  </div> */}

              {/* New Indicator */}
              {/* <div className="bg-[#00A6FB] w-14 h-14 flex items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">New</span>
                  </div> */}

              {/* Discount Indicator */}
              {/* <div className="bg-[#00A6FB] w-16 h-16 flex flex-col items-center justify-center rounded-full absolute top-5 right-5 z-20">
                    <span className="font-bold text-white">10%</span>
                    <span className="font-bold text-white">Off</span>
                  </div> */}

              {/* Main Actions Container */}
              <div className="transition-all duration-200 ease-in absolute opacity-0 hover:opacity-100 top-0 left-0 w-full h-full z-30 bg-gray-500 bg-opacity-10">
                {/* Add to Cart Button */}
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-3 rounded-full bg-[#00A6FB] font-bold text-white whitespace-nowrap">
                  Add To Cart
                </button>

                {/* Other Actions Button */}
                <div className="absolute top-3 right-3 flex flex-col items-start justify-start space-y-2">
                  {/* Wishlist */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/heart.svg"
                      width={15}
                      height={15}
                    />
                  </button>

                  {/* Search */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/search.svg"
                      width={15}
                      height={15}
                    />
                  </button>

                  {/* Cart */}
                  <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                    <Image
                      alt="Add to Wishlist"
                      src="/cart.svg"
                      width={15}
                      height={15}
                    />
                  </button>
                </div>
              </div>
            </div>
            {/* Product Info */}
            <div className="w-full flex flex-col items-start justify-start">
              {/* Rating */}
              <div className="flex items-center justify-start space-x-0.5">
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
                <Image alt="Star" src="/star.svg" width={15} height={15} />
              </div>

              {/* Product Name */}
              <p className="mt-4 font-bold text-lg">
                Ayurvedic Pain Relief Spray
              </p>

              {/* Price */}
              <div className="mt-4 w-full flex items-center justify-start space-x-2 font-bold">
                {/* Previous Price */}
                <span className="text-[#8F8F8F]">$25.59</span>
                {/* New Price */}
                <span>$19.59</span>
              </div>
            </div>
          </div>
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
