import { type AppType } from "next/app";

import { api } from "../utils/api";

import "../styles/globals.css";
import Navbar from "../common/navbar/Navbar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="max-h-screen">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
};

export default api.withTRPC(MyApp);
