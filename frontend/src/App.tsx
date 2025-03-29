import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import Lenis from "lenis";

function App() {

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
          
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
}

export default App;
