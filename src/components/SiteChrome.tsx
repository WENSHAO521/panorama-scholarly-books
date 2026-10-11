import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        {children}
      </main>
      <Footer />
    </>
  );
}
