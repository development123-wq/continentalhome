import React from "react";
import dynamic from "next/dynamic";
import { Provider } from "react-redux";
import store from "./store";
import "./assets/scss/main.scss";

// Dynamically import your React App (disable SSR)
const DynamicApp = dynamic(() => import("./App"), { ssr: false });

export default function Home() {
  return (
    <Provider store={store}>
      <DynamicApp />
    </Provider>
  );
}