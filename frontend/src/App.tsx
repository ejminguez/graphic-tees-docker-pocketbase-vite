import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

function App() {
  const location = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis only once
    if (!lenisRef.current) {
      const lenis = new Lenis({
        duration: 1,          // Smooth scroll duration
        easing: (t: number) => 1 - Math.pow(1 - t, 3),  // Easing function
      });

      lenisRef.current = lenis; 

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  }, []);

  // Scroll to top smoothly on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: false });
    }
  }, [location]);

  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
}

export default App;
