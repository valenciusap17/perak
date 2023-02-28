import { FC } from "react";
import Image from "next/image";
import Navbar from "../common/navbar/Navbar";

const Secondary: FC = () => {
  return (
    <div>
        <Image
        src="/confirmation.svg"
        alt="Loading"
        width={360}
        height={0}
        className=" absolute top-16 right-0"
      />
      <Image
        src="/orangeStar.svg"
        alt="Loading"
        width={250}
        height={0}
        className=" absolute bottom-[25px] right-[240px] "
      />
      <Image
        src="/purpleStar.svg"
        alt="Loading"
        width={250}
        height={0}
        className=" absolute bottom-32 right-10 "
      />
    </div>
  );
};
export default Secondary;
