import { FC } from "react";
import Image from "next/image";

import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <div className="fixed top-0 ">
      <div className="mx-auto flex h-16 w-screen scale-100 select-none items-center justify-between bg-[#E9DEA6] px-10 ">
        <Image
          src="/navbarLogo.svg"
          alt="coba"
          width={160}
          height={0}
          className=" fill fill sticky top-0 cursor-pointer"
        />
        <div className="fill sticky right-9 top-0 flex">
          <Link
            href={{
              pathname: "/",
            }}
          >
            <button className="flex rounded bg-[#EABB76] px-5 py-[8px] ">
              <HomeIcon className="sticky top-0 h-6 w-6 " /> Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
