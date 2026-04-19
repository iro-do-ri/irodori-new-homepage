"use client";

import { useLayoutEffect, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

// ローダーアニメーション完了時間: delay(0.4) + fill(1.4) + bounce(0.44) + delay(0.15) + slide(0.8) ≒ 3.2s
const LOADER_DURATION = 3400;

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

    // smooth: 0 で作成 → ローダー中はアニメなし
    smootherRef.current = ScrollSmoother.create({
      wrapper: wrapperRef.current!,
      content: contentRef.current!,
      smooth: 0,
      effects: true,
    });

    return () => {
      smootherRef.current?.kill();
    };
  }, []);

  useEffect(() => {
    // ローダー完了後にスムーズスクロールを有効化
    const timer = setTimeout(() => {
      smootherRef.current?.smooth(1.2);
    }, LOADER_DURATION);

    return () => clearTimeout(timer);
  }, []);

  // ページ遷移時: smoothを一時的に0にして即座にトップへ移動
  useEffect(() => {
    if (isFirstNav.current) {
      isFirstNav.current = false;
      return;
    }
    smootherRef.current?.smooth(0);
    smootherRef.current?.scrollTop(0);

    const timer = setTimeout(() => {
      smootherRef.current?.smooth(1.2);
    }, 50);
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
