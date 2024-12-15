import Image from "next/image";

const ImagesDivider = () => {
  return (
    <div className="py-32 w-full flex items-center justify-between space-x-4">
          {/* Image */}
          <div className="flex-1 h-96 relative">
            <Image
              className="w-full h-full rounded-xl"
              alt="Clinic"
              src="/placeholder.png"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Image */}
          <div className="flex-1 h-96 relative">
            <Image
              className="w-full h-full rounded-xl"
              alt="Clinic"
              src="/placeholder.png"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Image */}
          <div className="flex-1 h-96 relative">
            <Image
              className="w-full h-full rounded-xl"
              alt="Clinic"
              src="/placeholder.png"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
  )
}

export default ImagesDivider