import AboutSection from "../../components/AboutSection";
import Extrasection from "../../components/ExtraSection";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Roadmapsection from "../../components/RoadmapSection";
import Updatesection from "../../components/UpdateSection";
export const metadata = {
  title: "Poofyland",
  description: "This is only frontend",
};

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <video src="/videos/banner-2.mp4" autoPlay loop playsInline muted></video>
      <Header></Header>
      <AboutSection></AboutSection>
      <Roadmapsection></Roadmapsection>
      <Extrasection></Extrasection>
      <Updatesection></Updatesection>
      <Footer></Footer>
    </>
  );
}
