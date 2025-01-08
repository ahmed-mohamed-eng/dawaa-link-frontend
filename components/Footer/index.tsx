import Content from "./Content";
import NoteSection from "./NoteSection";

const Footer = () => {
  return (
    <div className="w-full rounded-b-2xl bg-[#00A6FB] text-white flex flex-col items-center justify-between space-y-20 p-8 lg:pt-20 lg:pb-8 lg:px-20">
      <Content />
      <NoteSection />
    </div>
  );
};

export default Footer;
