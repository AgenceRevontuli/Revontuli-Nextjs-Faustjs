import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { ResizeObserver } from '@juggle/resize-observer';


export default function Layout({ children }) {
  const [scrollY, setScrollY] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    import("locomotive-scroll").then((locomotiveModule) => {
      const ScrollEl = document.querySelector("[data-scroll-container]");
      const scroll = new locomotiveModule.default({
        el: ScrollEl,
        smooth: true,
        multiplier: 1.2,
        class: "is-reveal",
        mobile: {
          smooth: true,
        },
        tablet: {
          smooth: true,
          breakpoint: 0,
        },
      });
      scroll.on("scroll", (instance) => {
        if (instance.scroll.y > 100) {
          setScrollY(true);
        } else {
          setScrollY(false);
        }
      });
      // Modification de la taille 
      new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"))
      // `useEffect`'s cleanup phase
      return () => scroll.destroy();
    });
  }, []);

  return (
    <>
      <div ref={containerRef} id="main-container" data-scroll-container>
        <Header backgroundNav={scrollY} />
        {children}
        <Footer />
      </div>
    </>
  );
}
