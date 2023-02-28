import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import CobaNgab from "../components/mainPage";
import Image from "next/image";
import Navbar from "../common/navbar/Navbar";
import styles from "../styles/mainpage.module.css";
import Other from "../components/otherPage";
import ComponentCards from "../common/componentCards/ComponentCards";
import { Game } from "@prisma/client";

import { api } from "../utils/api";
import Main from "../components/mainPage";
import First from "../components/firstPage";

const Home: NextPage = () => {
  const hello = api.game.getGames.useQuery();
  hello.data
    ? hello.data.map((value) => {
        const x: Game = value;

        console.log("lmao", x);
      })
    : console.log("hai");

  return (
    <>
      <Head>
        <title>Perak 2023</title>
        <meta name="description" content="Perak website made by Valencius" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="relative min-h-screen overflow-hidden">
          <div className="px-5 pt-[104px] md:px-16 md:pt-20 ">
            <div className="">
              <div className="font-poppins text-[#feb048] max-w-[250px] text-2xl md:max-w-[500px] md:font-poppins md:text-5xl md:text-[#feb048] drop-shadow-md">
                <div
                >
                  Pilih games yang kamu inginkan
                </div>
              </div>

              <div className="pt-7 font-magicretro text-[#f4efd3] text-sm md:text-2xl">Games Individual</div>
              <div className="grid  grid-cols-2 gap-4  md:flex md:flex-row md:space-y-0 md:space-x-3">
                {hello.data
                  ? hello.data.map((game) => <ComponentCards {...game} />)
                  : "WAH ERROR YA KAWAN KASIANNN"}
              </div>
            </div>
          </div>
          <First />
        </div>
      </main>
    </>
  );
};

export default Home;
