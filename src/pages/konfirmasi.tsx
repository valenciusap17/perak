import { type NextPage } from "next";
import Other from "../components/otherPage";
import { useRouter } from "next/router";
import { api } from "../utils/api";
import styles from "../styles/konfirmasi.module.css";
import { useIntl } from "next-intl";
import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Secondary from "../components/secondaryPage";
import Third from "../components/thirdPage";

const Konfirmasi: NextPage = () => {
  const router = useRouter();
  const game = router.query["gameid"];
  const userTypeId = router.query["tipeid"]; 
  console.log(router.query);
  console.log(game);
  const getGames = api.game.getGame.useQuery({ id: String(game) });
  const getUserType = api.auth.getUserTypeById.useQuery({id: String(userTypeId)});
  console.log(getGames.data);
  const [show, setShow] = React.useState(true);


  let iconshow;
  if (show) {
    iconshow = <ChevronUpIcon className="h-4 w-4" />;
  } else {
    iconshow = <ChevronDownIcon className="h-4 w-4" />;
  }

  const rupiah = (number: number | bigint) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <div className="">

      <div className="px-16 pt-20 overflow-x-hidden">
      <Third/>
        <div className={styles.title}>Pendaftaran Games Individual</div>
        <div className={`${styles.subtitle} my-[-14px]`}>
          {getGames.data?.name}
        </div>
        <br></br>
        <div className={styles.paragraf}>
          Terima kasih telah melakukan pendaftaran di PERAK 2023
        </div>
        {/* <div className="my-2"></div> */}
        <br></br>
        <div className={styles.subparagraf}>
          Silahkan melakukan pembayaran biaya pendaftaran sebesar
        </div>
        <div className={styles.paragraf}>
          {rupiah(Number(getGames.data?.registerationFee))}
        </div>
        <br></br>
        <div className={styles.paragraf}>Melalui nomor rekening:</div>
        {getGames.data
          ? getGames.data?.paymentInfos.map((value) => (
              <div className={styles.subparagraf}>
                {value.name} {value.number}
              </div>
            ))
          : "hai"}
        <br></br>
        <div className="box-border h-28 max-w-sm border-2 border-black bg-[#4F569E] p-1">
          <div className="my-4 px-4 text-left">
            <div className={`truncate ${styles.name}`}>
              {router.query["namalengkap"]}
            </div>
            <div className={`truncate ${styles.nickname}`}>
              {router.query["namapanggilan"]} - {getUserType.data?.name}
            </div>
            {/* <div className=""></div> */}
          </div>
        </div>
        <br></br>

        <div
          className={`max-w-auto flex w-fit space-x-1 ${styles.detailInformasi} cursor-pointer select-none`}
          onClick={() => setShow(!show)}
        >
          <div>Sembunyikan Detil Informasi</div>
          {iconshow}
        </div>
        <div className="my-1"></div>

        {show && (
          <>
            <div className={`${styles.detailInformasi}`}>NPM</div>
            <div className={`${styles.isiDetailInformasi}`}>
              {router.query["npm"]}
            </div>
            <div className={`${styles.detailInformasi}`}>ID Line / Whatsapp</div>
            <div className={`${styles.isiDetailInformasi}`}>
              {router.query["kontak"]}
            </div>
          </>
        )}
        <button onClick={() => router.push({ pathname: '/'})} className="rounded bg-blue-500  py-2 px-4 font-bold text-white hover:bg-blue-700">
          Daftar games lain
        </button>
      </div>
    </div>
  );
};

export default Konfirmasi;
