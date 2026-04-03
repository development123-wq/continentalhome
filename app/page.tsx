"use client";

import dynamic from "next/dynamic";
import { Provider } from "react-redux";
import store from "../src/store";

const App = dynamic(() => import("../src/App"), { ssr: false });

export default function Home() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}