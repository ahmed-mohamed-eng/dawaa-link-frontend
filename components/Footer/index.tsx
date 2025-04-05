import Content from "./Content";
import NoteSection from "./NoteSection";

const Footer = () => {
  return (
    <div className="w-full rounded-b-2xl bg-[#008abf] text-white flex flex-col items-center justify-between space-y-20 p-8 xl:pt-20 xl:pb-8 xl:px-20">
      <Content />
      <NoteSection />
    </div>
  );
};

export default Footer;
