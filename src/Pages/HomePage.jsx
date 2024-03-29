import React from "react";
import AllInOne from "../components/homePage/AllInOne";
import GetStarted from "../components/homePage/GetStarted";
import GrowWithLazerPay from "../components/homePage/GrowWithLazerPay";
import HeroSection from "../components/homePage/HeroSection";
import PowerOfCrypto from "../components/homePage/PowerOfCrypto";
import PowerYourApp from "../components/homePage/PowerYourApp";
import WhoCanUseLazerPay from "../components/homePage/WhoCanUseLazerPay";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { acceptPaymentDetails, growWithLazerPayDetails } from "../data/data";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <GrowWithLazerPay arr={growWithLazerPayDetails} />
      <PowerOfCrypto />
      <GrowWithLazerPay arr={acceptPaymentDetails} />
      <AllInOne />
      <PowerYourApp />
      <WhoCanUseLazerPay />
      <GetStarted />
      <Footer />
    </>
  );
};

export default HomePage;
