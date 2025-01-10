import { TabName } from "./InformationHeader";

export interface DescriptionContentProps {
  tabName: TabName;
}

const DescriptionContent = (props: DescriptionContentProps) => {
  if (props.tabName !== "description") {
    return null;
  }

  return (
    <div className="w-full flex flex-col items-start justify-start space-y-10">
      <p className="w-full text-xs xl:text-base">
        Nullam diam magna, auctor ut risus eget, scelerisque aliquam magna. Nam
        eu consectetur urna, dapibus tristique ante. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Ut faucibus libero urna, id condimentum
        magna lacinia vitae. Vestibulum erat mi, placerat vel sem nec, elementum
        pharetra purus. Integer eget lacus non magna interdum scelerisque.
        Aliquam lacus tellus, aliquam quis sem vitae, hendrerit blandit velit.
        Cras egestas nec mauris sit amet accumsan. Cras aliquam ex ligula, eget
        maximus tortor suscipit non. Vestibulum mauris est, iaculis et interdum
        ac, sagittis pretium nibh. Ut nec urna mollis, rhoncus arcu volutpat,
        tempor ex. Nulla ultrices gravida urna ac varius. Phasellus fermentum,
        arcu et consectetur mattis, dui elit interdum velit, ut blandit lacus
        orci ac justo.
      </p>

      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div className="w-full flex flex-col items-start justify-start space-y-4">
          <h6 className="text-[#023E8A] text-2xl font-bold">
            Precision Auto Service
          </h6>

          <ul className="w-full flex flex-col items-start justify-start space-y-2 list-disc ps-4">
            <li className="text-sm xl:text-lg">Integer nec dui ut mauris ultricies elementum.</li>
            <li className="text-sm xl:text-lg">Integer nec dui ut mauris ultricies elementum.</li>
            <li className="text-sm xl:text-lg">Integer nec dui ut mauris ultricies elementum.</li>
            <li className="text-sm xl:text-lg">Integer nec dui ut mauris ultricies elementum.</li>
            <li className="text-sm xl:text-lg">Integer nec dui ut mauris ultricies elementum.</li>
          </ul>
        </div>

        <div className="w-full flex flex-col items-start justify-start border">
          <div className="w-full flex items-start justify-start border">
            <p className="w-1/3 px-5 py-3 font-bold text-sm xl:text-lg text-[#023E8A] bg-[#F0F2F5]">
              Range
            </p>
            <p className="w-2/3 px-5 ps-14 py-3 text-sm xl:text-lg text-[#6F6F6F] whitespace-nowrap text-ellipsis overflow-hidden">
              -199.99 to 199.99 C
            </p>
          </div>

        </div>
      </div>

      <div className="w-full flex flex-col items-start justify-start space-y-4">
        <h6 className="text-[#023E8A] text-2xl font-bold">
          Precision Auto Service
        </h6>

        <p className="w-full">
          Nullam diam magna, auctor ut risus eget, scelerisque aliquam magna.
          Nam eu consectetur urna, dapibus tristique ante. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Ut faucibus libero urna, id
          condiment ummagna lacinia vitae. Vestibulum erat mi, placerat vel sem
          nec, elementum pharetra purus. Integer eget lacus non magna interdum
          scelerisque.
        </p>
      </div>
    </div>
  );
};

export default DescriptionContent;
