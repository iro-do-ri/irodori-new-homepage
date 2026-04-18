"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

export default function SmoothScroller({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    if (isMobile) return;

    // smooth: 0 で初期化してアニメなしでトップに確定させる
    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current!,
      content: contentRef.current!,
      smooth: 0,
      effects: true,
    });

    // 2フレーム後にスムーズスクロールを有効化
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        smoother.smooth(1.2);
      });
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <div ref={wrapperRef} id="smooth-wrapper">
      <div ref={contentRef} id="smooth-content">
        {children}
      </div>
    </div>
  );
}
