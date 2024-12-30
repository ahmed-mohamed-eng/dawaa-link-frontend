import Image from "next/image";

const DisplayOrder = () => {
  return (
    <div className="flex items-center justify-start space-x-7 pe-8 py-5 flex-1">
      <button>
        <Image alt="Image" src="/icons/menu.svg" width={21} height={17} />
      </button>

      <button>
        <Image
          alt="Image"
          src="/icons/nine-display.svg"
          width={15}
          height={17}
        />
      </button>

      <button>
        <Image
          alt="Image"
          src="/icons/four-display.svg"
          width={17}
          height={17}
        />
      </button>

      <button>
        <Image
          alt="Image"
          src="/icons/twelve-display.svg"
          width={21}
          height={17}
        />
      </button>
    </div>
  );
};

export default DisplayOrder;
