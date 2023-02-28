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
        <div className="relative h-screen overflow-hidden">
          <Main />
          <div className="absolute top-[88px] left-14">
            <div className={styles.title}>
              <div className="leading-[60px]">
                Pilih games yang kamu inginkan
              </div>
            </div>

            <div className={styles.p}>Games Individual</div>
            <div className="flex space-x-10">
              {hello.data
                ? hello.data.map((game) => <ComponentCards {...game} />)
                : "WAH ERROR YA KAWAN KASIANNN"}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
