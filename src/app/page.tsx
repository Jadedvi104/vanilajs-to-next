import Head from "next/head";
import Logos from "../components/Logos";
import BannerAndSearch from "../components/BannerAndSearch";
import Categories from "../components/Categories";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomSection from "../components/BottomSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>My-migration</title>
      </Head>
      <div className="flex flex-col w-[90%] mx-auto">
        <Logos />
        <Navbar />
        <BannerAndSearch />
        <Categories />
        <BottomSection />
        <Footer/>
      </div>
    </>
  );
}
