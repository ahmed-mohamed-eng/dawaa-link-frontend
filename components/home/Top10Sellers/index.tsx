import Link from "next/link";
import Image from "next/image";

const Top10Sellers = () => {
  return (
    <div className="pb-40 w-full">
      <div className="w-full px-20 flex flex-col items-start justify-start space-y-20">
        {/* Header */}
        <div className="w-full flex items-center justify-between">
          <h3 className="text-4xl font-bold">Top 10 Best Seller Products</h3>
          <Link
            href="/products"
            className="font-bold text-lg text-white bg-[#023E8A] px-5 py-3 rounded-full"
          >
            View All Products
          </Link>
        </div>

        {/* Products Container */}
        <div className="w-full flex items-start justify-start space-x-8">
          {/* Main Image */}
          <div className="relative h-[50rem] flex-[2]">
            <Image
              className="w-full h-full rounded-xl"
              alt="Main Product"
              src="/placeholder.png"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Components */}
          <div className="flex-[3] grid grid-cols-4 gap-x-4 gap-y-16">
            {/* Single Product */}
            <div className="relative w-full flex flex-col items-start justify-start space-y-8">
              {/* Product Image Container */}
              <div className="relative w-full h-52 border rounded-xl overflow-hidden">
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
              <div className="relative w-full h-52 border rounded-xl overflow-hidden">
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
              <div className="relative w-full h-52 border rounded-xl overflow-hidden">
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
              <div className="relative w-full h-52 border rounded-xl overflow-hidden">
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
              <div className="relative w-full h-52 border rounded-xl overflow-hidden">
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
              <div className="relative w-full h-52 border rounded-xl overflow-hidden">
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
              <div className="relative w-full h-52 border rounded-xl overflow-hidden">
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
              <div className="relative w-full h-52 border rounded-xl overflow-hidden">
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
        </div>
      </div>
    </div>
  );
};

export default Top10Sellers;
