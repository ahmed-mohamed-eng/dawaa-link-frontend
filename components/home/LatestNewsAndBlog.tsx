import Link from "next/link";
import Image from "next/image";

const LatestNewsAndBlog = () => {
  return (
    <div className="pb-10 lg:pb-40 w-full">
      <div className="w-full lg:px-20 flex flex-col items-start justify-start space-y-10 lg:space-y-20">
        {/* Header */}
        <div className="w-full flex items-center justify-between">
          <h3 className="flex-[2] lg:flex-[4] text-xl lg:text-4xl font-bold">
            latest news & Blogs
          </h3>
          <Link
            href="/blogs"
            className="text-center flex-1 font-bold text-xs lg:text-lg text-white bg-[#023E8A] px-2 py-2 lg:px-5 lg:py-3 rounded-full"
          >
            View All Blogs
          </Link>
        </div>

        {/* Products Container */}
        <div className="w-full flex items-start justify-start lg:space-x-8">
          {/* Main Image */}
          <div className="hidden lg:flex relative h-[47rem] flex-[2]">
            <Image
              className="w-full h-full rounded-xl absolute top-0 left-0 -z-50"
              alt="Main Product"
              src="/placeholder.png"
              fill
              style={{ objectFit: "cover" }}
            />

            <div className="absolute bottom-12 left-9 flex flex-col items-start justify-start">
              <span className="text-sm text-white">03 March - 2024</span>
              <p className="font-bold text-2xl text-white w-96 mt-3">
                Building a Healthier You, One Click at a Time Your Journey to
                Optimal.
              </p>
              <Link
                href="/news"
                className="font-black text-white px-6 py-2 rounded-full bg-[#00A6FB] mt-6"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Components */}
          <div className="flex-[3] grid grid-cols-1 gap-y-3">
            <BlogBriefItem
              date="03 March - 2024"
              title="Building a Healthier You, One Click at a Time Your Journey to Optimal."
              imgSrc="/placeholder.png"
              newsURL="/news"
            />

            <BlogBriefItem
              date="03 March - 2024"
              title="Building a Healthier You, One Click at a Time Your Journey to Optimal."
              imgSrc="/placeholder.png"
              newsURL="/news"
            />

            <BlogBriefItem
              date="03 March - 2024"
              title="Building a Healthier You, One Click at a Time Your Journey to Optimal."
              imgSrc="/placeholder.png"
              newsURL="/news"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsAndBlog;

type BlogBriefItemProps = {
  imgSrc: string;
  date: string;
  title: string;
  newsURL: string;
};

function BlogBriefItem(props: BlogBriefItemProps) {
  return (
    <div className="w-full flex items-center justify-start lg:space-x-12 border rounded-xl hover:border-[#081F48] p-4">
      {/* Image */}
      <div className="hidden lg:block relative w-72 h-52">
        <Image
          className="w-full h-full rounded-lg"
          alt="News Blog"
          src={props.imgSrc}
          fill
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-start justify-start">
        <span className="text-sm">{props.date}</span>
        <p className="font-bold text-2xl lg:w-96 mt-3">{props.title}</p>
        <Link
          href={props.newsURL}
          className="font-black text-white px-6 py-2 rounded-full bg-[#00A6FB] mt-6"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
