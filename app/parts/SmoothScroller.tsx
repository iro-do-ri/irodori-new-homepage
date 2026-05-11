"use client";

import { useLayoutEffect, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

export default function SmoothScroller({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const smootherRef = useRef<ReturnType<typeof ScrollSmoother.create> | null>(null);
  const pathname = usePathname();
  const isFirstNav = useRef(true);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    if (isMobile) return;

    window.scrollTo(0, 0);

    smootherRef.current = ScrollSmoother.create({
      wrapper: wrapperRef.current!,
      content: contentRef.current!,
      smooth: 1.2,
      effects: true,
    });

    return () => {
      smootherRef.current?.kill();
    };
  }, []);

  // ページ遷移時: smooth を 0 にして GSAP で transform を即時ゼロにリセット
  useLayoutEffect(() => {
    if (isFirstNav.current) {
      isFirstNav.current = false;
      return;
    }

    const isMobile = window.matchMedia("(max-width: 639px)").matches;

    if (isMobile) {
      window.scrollTo(0, 0);
      return;
    }

    if (smootherRef.current) {
      smootherRef.current.smooth(0);
      smootherRef.current.scrollTop(0);
    }
    // GSAP で content の transform を同期的にゼロに強制
    gsap.set(contentRef.current, { y: 0 });
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      smootherRef.current?.smooth(1.2);
    }, 200);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div ref={wrapperRef} id="smooth-wrapper">
      <div ref={contentRef} id="smooth-content">
        {children}
      </div>
    </div>
  );
}
