import Footer from "./parts/Footer";
import FloatingButtons from "./parts/FloatingButtons";
import Loader from "./parts/Loader";
import Header from "./parts/Header";
import SmoothScroller from "./parts/SmoothScroller";
import Three from "./components/Three";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Loader />
      <script dangerouslySetInnerHTML={{ __html: `(function(){if(location.pathname!=='/'){var e=document.getElementById('loader-overlay');if(e)e.style.display='none';}})();` }} />
      <Three />
      <Header />
      <FloatingButtons />
      <SmoothScroller>
        {children}
        <Footer />
      </SmoothScroller>
    </>
  );
}
