import DownFooter from "../components/DownFooter";
import Hero from "../components/Hero";
import Illustration from "../components/Illustration";
import Navbar from "../components/Navbar";
import TopFooter from "../components/TopFooter";
import WhyChoose from "../components/WhyChoose";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChoose />
      <Illustration />
      <TopFooter />
      <DownFooter />
    </>
  );
};

export default Homepage;
