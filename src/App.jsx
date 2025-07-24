import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/Navbar.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import Experience from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
    return (
        <>
            <NavBar/>
            <Hero />
            <ShowcaseSection />
            <FeatureCards />
            <TechStack/>
            <Contact />
            <Footer />
        </>
    )
}
export default App;
