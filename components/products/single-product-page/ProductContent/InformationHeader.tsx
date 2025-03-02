const InformationHeader = () => {
  return (
    <div className="w-full flex items-center justify-start border-b border-black space-x-4 xl:space-x-20">
      <button className="px-4 pb-4 font-bold text-sm xl:text-xl data-[selected]:border-b data-[selected]:border-[#023E8A] data-[selected]:text-[#023E8A]">
        <span>Description</span>
      </button>
    </div>
  );
};

export default InformationHeader;
