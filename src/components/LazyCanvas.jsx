import React, { useState, useEffect, useRef } from "react";

/**
 * Renders children only when the wrapper enters the viewport.
 * Reduces initial load and GPU work for below-the-fold 3D canvases.
 */
const LazyCanvas = ({ children, fallback = null, rootMargin = "100px" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { rootMargin, threshold: 0.01 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} style={{ minHeight: fallback ? "200px" : undefined }}>
      {isVisible ? children : fallback}
    </div>
  );
};

export default LazyCanvas;
