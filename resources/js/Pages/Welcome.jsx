import { Link, Head } from "@inertiajs/react";
import Band from "@/Components/Band";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import PreFeatures from "@/Components/PreFeatures";
import Testimonials from "@/Components/Testimonials";
import Features from "@/Components/Features";
import Footer from "@/Components/Footer";
import FAQSection from "@/Components/FAQSection";
import Pricing from "@/Components/Pricing";
export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="flex flex-col w-full justify-center items-center px-20 bg-slate-50 dark:bg-slate-700 gap-4">
                <Band />
                <Navbar />
                <Hero />
                <PreFeatures />
                <Testimonials />
                <Features />
                <FAQSection />
                <Pricing />
                <Footer />
            </div>
        </>
    );
}
