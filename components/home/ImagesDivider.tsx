import Image from "next/image";

const ImagesDivider = () => {
  return (
    <div className="py-10 xl:py-32 w-full flex flex-col xl:flex-row items-center justify-between space-y-4 xl:space-y-0 xl:space-x-4">
      <ImageItem imgSrc="/placeholder.png" />
      <ImageItem imgSrc="/placeholder.png" />
      <ImageItem imgSrc="/placeholder.png" />
    </div>
  );
};

export default ImagesDivider;

function ImageItem(props: { imgSrc: string }) {
  return (
    <div className="w-full xl:flex-1 h-96 relative">
      <Image
        className="w-full h-full rounded-xl"
        alt="Clinic"
        src={props.imgSrc}
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
