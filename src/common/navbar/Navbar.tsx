import { FC } from "react";
import Image from "next/image";
import styles from "../../styles/navbar.module.css";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <div className="fixed top-0 z-20">
      <div className="relative mx-auto flex h-16 w-screen flex-wrap items-center justify-between bg-[#E9DEA6]">
        <Image
          src="/3-removebg-preview.png"
          alt="coba"
          width={160}
          height={0}
          className="absolute left-9"
        />
        <Image
          src="/gambar1-removebg-preview.png"
          alt="coba"
          width={30}
          height={25}
          className="absolute left-[46px]"
        />
        <div className="absolute left-[79px] top-[21px] text-[#2F7A84]">
          <p className={styles.p}>PERAK 2023</p>
        </div>

        <div className="absolute right-9 ">
          <Link href={{
            pathname: "/"
          }}>
          <button className="flex rounded bg-[#EABB76] px-5 py-[8px]">
            <HomeIcon className="h-6 w-6" /> Home
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
