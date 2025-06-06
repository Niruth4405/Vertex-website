import Image from "next/image";
import Navbar from "./components/Navbar";
import Founders from "./components/Founders";
import Chapters from "./components/Chapters";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
  <div>
    <Navbar/>
    <About/>
    <Founders/>
    <Chapters/>
    {/* <Footer/> */}
  </div>
  );
}
