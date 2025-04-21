import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;

    htmlElement.scrollTop = 0;
    bodyElement.scrollTop = 0;
  }, [pathname]);

  return null;
};

export default ScrollToTop;
