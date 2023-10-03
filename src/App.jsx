import Cit from "./components/Cit/Cit";
// import ContactSection from "./components/ContactSection/ContactSection";
import HeroSection from "./components/HeroSection/HeroSection";
import ManageTeam from "./components/ManageTeam/ManageTeam";
import OurBrand from "./components/OurBrand/OurBrand";
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const App = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <>
      <>
        <main>
          <HeroSection />
          <OurBrand />
          <Cit />
          <ManageTeam />
          {/* <ContactSection /> */}
          {/* <LandingPage/> */}
        </main>
      </>
    </>
  );
};

export default App;
