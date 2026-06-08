import type { Metadata } from "next";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import Features from "./_components/Features";
import Recruitment from "./_components/Recruitment";
import NewsSection from "./_components/NewsSection";
import ContactCta from "./_components/ContactCta";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "日本デェイブレイク株式会社",
  description: "お客様と共に、情報技術で未来を創る。",
};

export default function NdbRenewalPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Features />
        <Recruitment />
        <NewsSection />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
