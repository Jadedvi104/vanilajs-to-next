import Head from "next/head";
import Logos from "../components/Logos";
import BannerAndSearch from "../components/BannerAndSearch";
import Categories from "../components/Categories";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>My-migration</title>
      </Head>
      <div className="flex flex-col">
        <Logos />
        <Navbar />
        <BannerAndSearch />
        <Categories />
      </div>
    </>
  );
}
