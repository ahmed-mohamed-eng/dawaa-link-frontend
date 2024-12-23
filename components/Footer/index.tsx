import Content from "./Content";
import NoteSection from "./NoteSection";

const Footer = () => {
  return (
    <div className="w-full rounded-b-2xl bg-[#00A6FB] text-white flex flex-col items-center justify-between space-y-20 pt-20 pb-8 px-20">
      <Content />
      <NoteSection />
    </div>
  );
};

export default Footer;
