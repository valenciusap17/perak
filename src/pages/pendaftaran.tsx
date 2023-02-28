import { type NextPage } from "next";
import Other from "../components/otherPage";
import { useRouter } from "next/router";
import { api } from "../utils/api";
import styles from "../styles/pendaftaran.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { Radio } from "@nextui-org/react";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import { Console } from "console";
import React from "react";
import Link from "next/link";
import { useHref } from "react-router-dom";
import Secondary from "../components/secondaryPage";
import { HomeIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";

const Konfirmasi: NextPage = () => {
  const router = useRouter();
  const gameid = router.query["game"];
  const userType = api.auth.getUserTypes.useQuery();
  const getGame = api.game.getGame.useQuery({ id: String(gameid) });
  const [tipeuser, setTipeUser] = React.useState("");
  const [value, setValue] = React.useState("1");
  const mutation = api.auth.register.useMutation();
  const [status, setStatus] = React.useState(false);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("HELLO");

    console.log(data);
    console.log(data.namalengkap);
    mutation.mutate({
      name: String(data.namalengkap),
      nickname: String(data.namapanggilan),
      npm: String(data.npm),
      contactInfo: String(data.kontak),
      typeId: String(data.tipe),
      registeredGameId: String(gameid),
    });
    closeModal();
    router.push({
      pathname: "/konfirmasi",
      query: {
        gameid: String(gameid),
        tipeid: String(data.tipe),
        namalengkap: String(data.namalengkap),
        namapanggilan: String(data.namapanggilan),
        npm: String(data.npm),
        kontak: String(data.kontak),
      },
    });
    // setTimeout(() => {
    //
    // }, 3000);
  };
  type Inputs = {
    namalengkap: string;
    namapanggilan: string;
    tipe: number;
    npm: number;
    kontak: string;
  };

  const numberL = getGame.data?.registerationFee.toFixed().length;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  console.log(tipeuser);

  const user = api.auth.getUserTypes.useQuery();

  return (
    <div className="relative max-h-screen overflow-hidden">
      <Secondary />
      <div className="mx-16 my-24">
        <div className={styles.title}>Pendaftaran Games Individual</div>
        <div className="my-[-10px]"></div>
        <div className={styles.subtitle}>{getGame.data?.name}</div>
        <div className="my-[-10px]"></div>
        <br></br>
        <div className={styles.paragraf}>
          Biaya pendaftaran: Rp {"x".repeat(Number(numberL))}
        </div>
        <div className={styles.sub2paragraf}>
          Instruksi pembayaran diberikan setelah mengisi form pendaftaran
        </div>
        <br></br>
        <div className="flex space-x-4">
          <div>
            <div className="flex space-x-16">
              <div className="flex space-x-16">
                {user.data
                  ? user.data.map((value) => (
                      <div className="flex space-x-2">
                        <input
                          {...register("tipe", { required: true })}
                          type="radio"
                          value={value.id}
                          className="from-check-input"
                        />
                        <span className={styles.subparagraf}>
                          {" "}
                          {value.name}
                        </span>
                      </div>
                    ))
                  : "hai "}
              </div>
            </div>
            <h1>
              {errors.tipe && (
                <div className={styles.alert}>
                  You need to choose one of these fields
                </div>
              )}
            </h1>

            <div className="p-1"></div>

            <div className={styles.subparagraf}>Nama Lengkap</div>
            <div className="flex space-x-3">
              <input
                {...register("namalengkap", { required: true })}
                className="w-96  rounded p-[6px]"
                placeholder="Perry Perak"
              />
              {errors.namalengkap && (
                <div className={styles.alert}>
                  <h1 className="my-2">This field is required </h1>
                </div>
              )}
            </div>

            <div className=" p-2"></div>
            <div className={styles.subparagraf}>Nama Panggilan</div>
            <div className="flex space-x-3">
              <input
                placeholder="Perry"
                width={300}
                className="w-96 rounded p-[6px]"
                {...register("namapanggilan", { required: true })}
              />
              {errors.namapanggilan && (
                <div className={styles.alert}>
                  <h1 className="my-2">This field is required </h1>
                </div>
              )}
            </div>

            <div className=" p-2"></div>
            <div className={styles.subparagraf}>NPM</div>
            <div className="flex space-x-3">
              <input
                className="w-96 rounded p-[6px]"
                placeholder="2106740129"
                {...register("npm", {
                  required: true,
                  valueAsNumber: true,
                  validate: (value) => value > 0,
                })}
              />
              {errors.npm && (
                <div className={styles.alert}>
                  <h1 className="my-2">This field is required in number </h1>
                </div>
              )}
            </div>

            <div className=" p-2"></div>
            <div className={styles.subparagraf}>ID Line / WhatsApp</div>
            <div className="flex space-x-3">
              <input
                className="w-96 rounded p-[6px]"
                placeholder="kalo"
                {...register("kontak", { required: true })}
              />
              {errors.kontak && (
                <div className={styles.alert}>
                  <h1 className="my-2">This field is required </h1>
                </div>
              )}
            </div>

            <div className=" p-2 "></div>
            {/* <input
              type="submit"
              placeholder="Hai"
              className="w-96 rounded bg-[#188C58] py-2 px-4 font-bold text-white hover:bg-[#45db97]"
            /> */}
            <button
              onClick={openModal}
              className="flex w-96 justify-center  rounded bg-[#188C58] px-5 py-[8px] hover:bg-[#17c174]"
            >
              <PaperAirplaneIcon className="h-6 w-4 " />
              Daftarkan Sekarang
            </button>
          </div>
        </div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-xs transform overflow-hidden rounded-2xl bg-[#272B52] p-9 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      <div
                        className={`${styles.alertTitle} my-1 text-center leading-7`}
                      >
                        Apakah Anda Yakin Ingin Mendaftar di Permainan Ini?
                      </div>
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-center text-sm text-white">
                        Pastikan semua data yang telah anda masukkan tidak ada
                        yang salah. Anda tidak bisa mengubah data setelah
                        pendaftaran tersimpan.
                      </p>
                    </div>
                    <div className="my-5"></div>
                    <div className="flex space-x-5">
                      <button
                        type="button"
                        className=" w-full inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={handleSubmit(onSubmit)}
                      >
                        Simpan
                      </button>
                      <button
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Batal
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
};

export default Konfirmasi;
