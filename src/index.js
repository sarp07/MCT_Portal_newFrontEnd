import React from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ThirdwebProvider,
  metamaskWallet,
  localWallet,
  embeddedWallet,
  trustWallet,
  smartWallet
} from "@thirdweb-dev/react";

const smartWalletOptions = {
  factoryAddress: "0xeFC4F98872fAC3B46E2BA473e3e1309d78a8505e",
  gasless: true,
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain="binance-testnet"
      clientId={process.env.REACT_APP_TEMPLATE_CLIENT_ID}
    // supportedWallets={[
    //   smartWallet(
    //     metamaskWallet(),
    //     smartWalletOptions,
    //   ),
    //   smartWallet(
    //     localWallet(),
    //     smartWalletOptions,
    //   ),
    //   smartWallet(
    //     embeddedWallet({
    //       auth: {
    //         options: [
    //           "google",
    //           "apple",
    //           "email",
    //         ],
    //       },
    //     }),
    //     smartWalletOptions,
    //   ),
    //   smartWallet(
    //     trustWallet(),
    //     smartWalletOptions,
    //   ),
    // ]}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
