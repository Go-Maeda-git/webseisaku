import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            <ContactSection />
            <Footer />
        </main>
    );
}
