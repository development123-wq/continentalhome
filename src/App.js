"use client";

import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddModal from "./components/common/AddModal";
import Sidebar from "./components/common/Sidebar";
// import MainIndex from "./components/MainIndex";

import HomePage from "./front/Frontend/Home";
import About from "./front/Frontend/About/About";
import Admin from "./front/Frontend/Admin/Login";
import NotFOund from "./front/Frontend/NotFound";
import Shop from "./front/Frontend/Shop/Shop";
import Blogs from "./front/Frontend/Blogs/Blogs";
import BlogDetails from "./front/Frontend/Blogs/Details";
import Contact from "./front/Frontend/Contact/Contact";
import Faqs from "./front/Frontend/Faqs/Faqs";
import HomeDecor from "./front/Frontend/Categories/HomeDecor/SmallCeramics";
import SmallCeramics from "./front/Frontend/Categories/SmallCeramics/SmallCeramics";
import CeramicLamp from "./front/Frontend/Categories/CeramicLamp/CeramicLamp";
import Ceramic from "./front/Frontend/Categories/Ceramic/CeramicLamp";
import CeramicVases from "./front/Frontend/Categories/CeramicVases/CeramicVases";
import DriftwoodLamps from "./front/Frontend/Categories/DriftwoodLamps/DriftwoodLamps";
import FloorLamps from "./front/Frontend/Categories/FloorLamps/FloorLamps";
import HavanaLampCollection from "./front/Frontend/Categories/HavanaLampCollection/HavanaLampCollection";
import LampCollection from "./front/Frontend/Categories/LampCollection/HavanaLampCollection";
import NaturalVineLamps from "./front/Frontend/Categories/NaturalVineLamps/NaturalVineLamps";
import NewCeramics from "./front/Frontend/Categories/NewCeramics/NewCeramics";
import Decorative from "./front/Frontend/Categories/Decorative/NewCeramics";
import SculpturalPieces from "./front/Frontend/Categories/SculpturalPieces/NewCeramics";
import NewArrivals from "./front/Frontend/Categories/NewArrivals/NewArrivals";
import RopeLampCollections from "./front/Frontend/Categories/RopeLampCollections/RopeLampCollections";
import RopeLamp from "./front/Frontend/Categories/RopeLamp/RopeLampCollections";
import SalvagedUniqueLamps from "./front/Frontend/Categories/SalvagedUniqueLamps/SalvagedUniqueLamps";
import TeakLamps from "./front/Frontend/Categories/TeakLamps/TeakLamps";
import Teak from "./front/Frontend/Categories/Teak/TeakLamps";
import Lighting from "./front/Frontend/Categories/Lighting/TeakLamps";
import ProductDetails from "./front/Frontend/ProductDetails/ProductDetails";
import Addtocart from "./front/Frontend/Addtocart/Addtocart";
import Checkout from "./front/Frontend/Checkout/Checkout";
import PrivacyPolicy from "./front/Frontend/PrivacyPolicy/PrivacyPolicy";
import RefundReturn from "./front/Frontend/RefundReturn/RefundReturn";
import TnC from "./front/Frontend/TnC/TnC";
import WishList from "./front/Frontend/WishList/WishList";
import Octopus from "./front/Frontend/SubCategories/OctopusTheme/OctopusTheme";
import GreenCeramics from "./front/Frontend/SubCategories/GreenCeramics/GreenCeramics";
import EarthToneCeramics from "./front/Frontend/SubCategories/EarthToneCeramics/EarthToneCeramics";
import CreamCeramics from "./front/Frontend/SubCategories/CreamCeramics/CreamCeramics";
import CeramicVasess from "./front/Frontend/SubCategories/CeramicVases/CeramicVases";
import CeramicPlatters from "./front/Frontend/SubCategories/CeramicPlatters/CeramicPlatters";
import CeramicPlates from "./front/Frontend/SubCategories/CeramicPlates/CeramicPlates";
import CeramicBowls from "./front/Frontend/SubCategories/CeramicBowls/CeramicBowls";
import BlueCeramics from "./front/Frontend/SubCategories/BlueCeramics/BlueCeramics";
import WhiteCeramicLamps from "./front/Frontend/SubCategories/WhiteCeramicLamps/WhiteCeramicLamps";
import EarthToneCeramicLamps from "./front/Frontend/SubCategories/EarthToneCeramicLamps/EarthToneCeramicLamps";
import CreamCeramicLamps from "./front/Frontend/SubCategories/CreamCeramicLamps/CreamCeramicLamps";
import CeramicPineappleLamps from "./front/Frontend/SubCategories/CeramicPineappleLamps/CeramicPineappleLamps";
import CeramicCoralLamps from "./front/Frontend/SubCategories/CeramicCoralLamps/CeramicCoralLamps";
import BlueCeramicLamps from "./front/Frontend/SubCategories/BlueCeramicLamps/BlueCeramicLamps";
import NewWoodenLamps from "./front/Frontend/SubCategories/NewWoodenLamps/NewWoodenLamps";
import NewRopeLamps from "./front/Frontend/SubCategories/NewRopeLamps/NewRopeLamps";
import SubNewCeramics from "./front/Frontend/SubCategories/NewCeramics/NewCeramics";
import DriftwoodTableLamps from "./front/Frontend/SubCategories/DriftwoodTableLamps/DriftwoodTableLamps";
import TableLamps from "./front/Frontend/SubCategories/TableLamps/DriftwoodTableLamps";
import DriftwoodFloorLamps from "./front/Frontend/SubCategories/DriftwoodFloorLamps/DriftwoodFloorLamps";
import Driftwood from "./front/Frontend/SubCategories/Driftwood/DriftwoodFloorLamps";
import RopeLamps from "./front/Frontend/SubCategories/RopeLamps/RopeLamps";
import UniqueLamps from "./front/Frontend/SubCategories/UniqueLamps/UniqueLamps";
import SalvagedLamps from "./front/Frontend/SubCategories/SalvagedLamps/SalvagedLamps";
import CapizLamps from "./front/Frontend/Categories/Capiz/Capiz";
import Capiz from "./front/Frontend/Categories/Capizz/Capiz";

function RoutePage({ children }) {
  return (
    <div id="main-container-home" className="theme-blue">
      {children}
    </div>
  );
}

function LayoutRoute({ activekey }) {
  return (
    <div id="ebazar-layout" className="theme-blue">
      <Sidebar activekey={activekey} />
      <AddModal />
      {/* <MainIndex activekey={activekey} /> */}
    </div>
  );
}

function AppContent(props) {
  const [path, setPath] = useState("/");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPath(window.location.pathname);
    }
  }, []);

  useEffect(() => {
    const onPageShow = (e) => {
      if (e.persisted) {
        window.location.reload();
        return;
      }

      const entries = performance.getEntriesByType?.("navigation") || [];
      const nav = entries[0];

      if (nav && nav.type === "back_forward") {
        window.location.reload();
      }
    };

    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  useEffect(() => {
    const onLocationChange = () => setPath(window.location.pathname);

    const wrapHistory = (type) => {
      const orig = window.history[type];
      return function (...args) {
        const ret = orig.apply(this, args);
        window.dispatchEvent(new Event("locationchange"));
        return ret;
      };
    };

    const origPush = window.history.pushState;
    const origReplace = window.history.replaceState;

    window.history.pushState = wrapHistory("pushState");
    window.history.replaceState = wrapHistory("replaceState");

    window.addEventListener("popstate", onLocationChange);
    window.addEventListener("locationchange", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
      window.removeEventListener("locationchange", onLocationChange);
      window.history.pushState = origPush;
      window.history.replaceState = origReplace;
    };
  }, []);

  const activekey = (pathname) => {
    let res = pathname;
    let baseUrl = process.env.PUBLIC_URL || "";

    baseUrl = baseUrl.split("/");
    res = res.split("/");

    res = res.length > 0 ? res[baseUrl.length] : "/";
    res = res ? "/" + res : "/";

    return res;
  };

  const currentPath = activekey(path);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <RoutePage>
            <HomePage />
          </RoutePage>
        }
      />
      <Route
        path="/about"
        element={
          <RoutePage>
            <About />
          </RoutePage>
        }
      />
      <Route
        path="/shop"
        element={
          <RoutePage>
            <Shop />
          </RoutePage>
        }
      />
      <Route
        path="/blogs"
        element={
          <RoutePage>
            <Blogs />
          </RoutePage>
        }
      />
      <Route
        path="/404"
        element={
          <RoutePage>
            <NotFOund />
          </RoutePage>
        }
      />
      <Route
        path="/contact"
        element={
          <RoutePage>
            <Contact />
          </RoutePage>
        }
      />
      <Route
        path="/faqs"
        element={
          <RoutePage>
            <Faqs />
          </RoutePage>
        }
      />
      <Route
        path="/small-ceramics"
        element={
          <RoutePage>
            <SmallCeramics />
          </RoutePage>
        }
      />
      <Route
        path="/home-decor"
        element={
          <RoutePage>
            <HomeDecor />
          </RoutePage>
        }
      />
      <Route
        path="/ceramic-lamps"
        element={
          <RoutePage>
            <CeramicLamp />
          </RoutePage>
        }
      />
      <Route
        path="/ceramic"
        element={
          <RoutePage>
            <Ceramic />
          </RoutePage>
        }
      />
      <Route
        path="/ceramic-vases"
        element={
          <RoutePage>
            <CeramicVases />
          </RoutePage>
        }
      />
      <Route
        path="/driftwood-lamps"
        element={
          <RoutePage>
            <DriftwoodLamps />
          </RoutePage>
        }
      />
      <Route
        path="/floor-lamps"
        element={
          <RoutePage>
            <FloorLamps />
          </RoutePage>
        }
      />
      <Route
        path="/havana-lamp-collection"
        element={
          <RoutePage>
            <HavanaLampCollection />
          </RoutePage>
        }
      />
      <Route
        path="/lamp-collections"
        element={
          <RoutePage>
            <LampCollection />
          </RoutePage>
        }
      />
      <Route
        path="/natural-vine"
        element={
          <RoutePage>
            <NaturalVineLamps />
          </RoutePage>
        }
      />
      <Route
        path="/new-ceramics"
        element={
          <RoutePage>
            <NewCeramics />
          </RoutePage>
        }
      />
      <Route
        path="/decorative-objects"
        element={
          <RoutePage>
            <Decorative />
          </RoutePage>
        }
      />
      <Route
        path="/sculptural-pieces"
        element={
          <RoutePage>
            <SculpturalPieces />
          </RoutePage>
        }
      />
      <Route
        path="/new-arrivals"
        element={
          <RoutePage>
            <NewArrivals />
          </RoutePage>
        }
      />
      <Route
        path="/rope-lamps"
        element={
          <RoutePage>
            <RopeLampCollections />
          </RoutePage>
        }
      />
      <Route
        path="/rope"
        element={
          <RoutePage>
            <RopeLamp />
          </RoutePage>
        }
      />
      <Route
        path="/capiz-lamps"
        element={
          <RoutePage>
            <CapizLamps />
          </RoutePage>
        }
      />
      <Route
        path="/capiz"
        element={
          <RoutePage>
            <Capiz />
          </RoutePage>
        }
      />
      <Route
        path="/salvaged-unique-lamps"
        element={
          <RoutePage>
            <SalvagedUniqueLamps />
          </RoutePage>
        }
      />
      <Route
        path="/teak-lamps"
        element={
          <RoutePage>
            <TeakLamps />
          </RoutePage>
        }
      />
      <Route
        path="/teak"
        element={
          <RoutePage>
            <Teak />
          </RoutePage>
        }
      />
      <Route
        path="/lighting"
        element={
          <RoutePage>
            <Lighting />
          </RoutePage>
        }
      />
      <Route
        path="/productdetails"
        element={
          <RoutePage>
            <ProductDetails />
          </RoutePage>
        }
      />
      <Route
        path="/refund-policy"
        element={
          <RoutePage>
            <RefundReturn />
          </RoutePage>
        }
      />
      <Route
        path="/admin"
        element={
          <RoutePage>
            <Admin />
          </RoutePage>
        }
      />
      <Route
        path="/add-to-cart"
        element={
          <RoutePage>
            <Addtocart />
          </RoutePage>
        }
      />
      <Route
        path="/privacy-policy"
        element={
          <RoutePage>
            <PrivacyPolicy />
          </RoutePage>
        }
      />
      <Route
        path="/terms-and-conditions"
        element={
          <RoutePage>
            <TnC />
          </RoutePage>
        }
      />
      <Route
        path="/checkout"
        element={
          <RoutePage>
            <Checkout />
          </RoutePage>
        }
      />
      <Route
        path="/details"
        element={
          <RoutePage>
            <BlogDetails />
          </RoutePage>
        }
      />
      <Route
        path="/wishlist"
        element={
          <RoutePage>
            <WishList />
          </RoutePage>
        }
      />
      <Route
        path="/octopus-theme"
        element={
          <RoutePage>
            <Octopus />
          </RoutePage>
        }
      />
      <Route
        path="/green-ceramics"
        element={
          <RoutePage>
            <GreenCeramics />
          </RoutePage>
        }
      />
      <Route
        path="/earth-tone-ceramics"
        element={
          <RoutePage>
            <EarthToneCeramics />
          </RoutePage>
        }
      />
      <Route
        path="/cream-ceramics"
        element={
          <RoutePage>
            <CreamCeramics />
          </RoutePage>
        }
      />
      <Route
        path="/ceramic-vasess"
        element={
          <RoutePage>
            <CeramicVasess />
          </RoutePage>
        }
      />
      <Route
        path="/ceramic-platters"
        element={
          <RoutePage>
            <CeramicPlatters />
          </RoutePage>
        }
      />
      <Route
        path="/ceramic-plates"
        element={
          <RoutePage>
            <CeramicPlates />
          </RoutePage>
        }
      />
      <Route
        path="/ceramic-bowls"
        element={
          <RoutePage>
            <CeramicBowls />
          </RoutePage>
        }
      />
      <Route
        path="/blue-ceramics"
        element={
          <RoutePage>
            <BlueCeramics />
          </RoutePage>
        }
      />
      <Route
        path="/white-ceramic-lamps"
        element={
          <RoutePage>
            <WhiteCeramicLamps />
          </RoutePage>
        }
      />
      <Route
        path="/earth-tone-ceramic-lamps"
        element={
          <RoutePage>
            <EarthToneCeramicLamps />
          </RoutePage>
        }
      />
      <Route
        path="/cream-ceramic-lamps"
        element={
          <RoutePage>
            <CreamCeramicLamps />
          </RoutePage>
        }
      />
      <Route
        path="/ceramic-pineapple-lamps"
        element={
          <RoutePage>
            <CeramicPineappleLamps />
          </RoutePage>
        }
      />
      <Route
        path="/ceramic-coral-lamps"
        element={
          <RoutePage>
            <CeramicCoralLamps />
          </RoutePage>
        }
      />
      <Route
        path="/blue-ceramic-lamps"
        element={
          <RoutePage>
            <BlueCeramicLamps />
          </RoutePage>
        }
      />
      <Route
        path="/new-wooden-lamps"
        element={
          <RoutePage>
            <NewWoodenLamps />
          </RoutePage>
        }
      />
      <Route
        path="/new-rope-lamps"
        element={
          <RoutePage>
            <NewRopeLamps />
          </RoutePage>
        }
      />
      <Route
        path="/sub-new-ceramics"
        element={
          <RoutePage>
            <SubNewCeramics />
          </RoutePage>
        }
      />
      <Route
        path="/driftwood-table-lamps"
        element={
          <RoutePage>
            <DriftwoodTableLamps />
          </RoutePage>
        }
      />
      <Route
        path="/table-lamps"
        element={
          <RoutePage>
            <TableLamps />
          </RoutePage>
        }
      />
      <Route
        path="/driftwood-floor-lamps"
        element={
          <RoutePage>
            <DriftwoodFloorLamps />
          </RoutePage>
        }
      />
      <Route
        path="/driftwood"
        element={
          <RoutePage>
            <Driftwood />
          </RoutePage>
        }
      />
      <Route
        path="/unique-lamps"
        element={
          <RoutePage>
            <UniqueLamps />
          </RoutePage>
        }
      />
      <Route
        path="/salvaged-lamps"
        element={
          <RoutePage>
            <SalvagedLamps />
          </RoutePage>
        }
      />

      <Route
        path="/sign-in"
        element={
          <RoutePage>
            <HomePage />
          </RoutePage>
        }
      />
      <Route
        path="/sign-up"
        element={
          <RoutePage>
            <HomePage />
          </RoutePage>
        }
      />
      <Route
        path="/reset-password"
        element={
          <RoutePage>
            <HomePage />
          </RoutePage>
        }
      />
      <Route
        path="/verification"
        element={
          <RoutePage>
            <HomePage />
          </RoutePage>
        }
      />
      <Route
        path="/page-404"
        element={
          <RoutePage>
            <HomePage />
          </RoutePage>
        }
      />

      <Route path="/dashboard" element={<LayoutRoute activekey={currentPath} />} />

      <Route
        path="*"
        element={
          <RoutePage>
            <NotFOund />
          </RoutePage>
        }
      />
    </Routes>
  );
}

export default function App(props) {
  return (
    <BrowserRouter>
      <AppContent props={props} />
    </BrowserRouter>
  );
}