import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTopOnNavigation() {
  const location = useLocation();

  useEffect(() => {
    // Scroll ke atas halaman setiap kali navigasi terjadi
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export default ScrollToTopOnNavigation;
