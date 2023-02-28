import { FC } from "react";
import Image from "next/image";

const First: FC = () => {
  return (
    <div className="">
      <Image
        src="/mainBackground.svg"
        alt="Loading"
        width={0}
        height={0}
        className=" z-[-1] absolute xl:flex xl:bottom-[-160px] lg:bottom-[-100px] hidden sm:hidden md:flex bottom-0 md:bottom-0  right-0 h-fit w-fit "
      />
      <Image
        src="/mobileMain.svg"
        alt="coba"
        width={0}
        height={0}
        className=" z-[-1] w-screen sm:botton-[100px] absolute md:hidden  right-[0px] bottom-[0px]"
      />
      <Image
        src="/purpleStar.svg"
        alt="coba"
        width={300}
        height={0}
        className=" z-[-1] absolute hidden md:flex right-[167px] top-[60px]"
      />
      <Image
        src="/purpleStar.svg"
        alt="coba"
        width={150}
        height={0}
        className=" z-[-1] absolute md:hidden right-[0px] top-[100px]"
      />
      <Image
        src="/purpleMain.svg"
        alt="coba"
        width={300}
        height={0}
        className=" z-[-1] absolute hidden md:flex left-[607px] bottom-[88px]"
      />
      <Image
        src="/purpleMain.svg"
        alt="coba"
        width={200}
        height={0}
        className=" z-[-1] absolute felx md:hidden left-[-40px] bottom-[30px]"
      />
      {/* <Image
        src="/vECTOR 84-1.png"
        alt="coba"
        width={220}
        height={0}
        className=" z-[-1] absolute left-[608px] bottom-[167px]"
      />
      <Image
        src="/vECTOR 144-1.png"
        alt="coba"
        width={225}
        height={0}
        className="  z-[-1] absolute left-[608px] bottom-[164px]"
      />
      <Image
        src="/Star 15-1.png"
        alt="coba"
        width={120}
        height={0}
        className=" z-[-1] absolute left-[748px] bottom-[160px]"
      /> */}
    </div>
  );
};
export default First;
